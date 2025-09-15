import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import './style.css';
import { flowConfig, introMessage } from '../../chatData.js'
export default function ChatBot() {
  const [open, setOpen] = useState(true);
  const [chat, setChat] = useState([]);
  const [typing, setTyping] = useState(false);
  const [introDone, setIntroDone] = useState(false);
  const chatEndRef = useRef(null);

  const [show, setShow] = useState(false)

  useEffect(() => {
    const shouldShow = window.innerWidth > 800
    setShow(shouldShow)
  }, [])

  if (!show) return null

  useEffect(() => {
    if (open && !introDone) {
      setTyping(true);
      const introTimeout = setTimeout(() => {
        setChat([introMessage]);
        setTyping(false);
        setIntroDone(true);
      }, 1500);

      return () => clearTimeout(introTimeout);
    }
  }, [open, introDone]);

  useLayoutEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chat, typing]);

  const handleQuestionClick = (q) => {
    setChat(prev => [...prev, { from: 'user', text: q.question }]);
    setTyping(true);

    setTimeout(() => {
      setChat(prev => [...prev, { from: 'user', text: q.question }, { from: 'bot', text: q.answer }]);
      setTyping(false);
    }, 500);
  };

  return (
    <>
      {open && (
        <div className="chat-window modern-shadow">
          <div className="chat-header">
            <span>🤖 Monton MetalWork </span>
            <button onClick={() => setOpen(false)} className="chat-close">×</button>
          </div>

          <div className="chat-body">
            {chat.map((msg, i) => (
              <div key={i} className={`chat-message ${msg.from}`}>
                {msg.text}
              </div>
            ))}

            {typing && (
              <div className="typing-indicator">
                <span></span><span></span><span></span>
              </div>
            )}

            <div ref={chatEndRef} />

            {!typing && introDone && (
              <div className="chat-question-box">
                {flowConfig.map((q, i) => (
                  <button key={i} className="chat-question" onClick={() => handleQuestionClick(q)}>
                    {q.question}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {!open && (
        <button onClick={() => setOpen(true)} className="chat-bubble modern-shadow">
          💬
        </button>
      )}
    </>
  );
}
