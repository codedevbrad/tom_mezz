// src/data/chatConfig.js

import { data } from './data';

export const introMessage = {
  from: 'bot',
  text: 'Hi, welcome to Monton MetalWork. How can I assist you?',
};

export const flowConfig = [
  {
    question: 'What services do you offer?',
    answer: 'We offer architectural metalwork, steel fabrication, and on-site welding & installation.',
  },
  {
    question: 'Can I get a custom quote?',
    answer: `Of course! You can reach us at ${data.number} or email ${data.companyEmail}.`,
  },
  {
    question: 'Where are you located?',
    answer: `We’re based at ${data.companyAddress}.`,
  },
  {
    question: 'What are your weekend hours?',
    answer: data.openingDays.map(d => `${d.day}: ${d.open}–${d.close}`).join(', '),
  },
  {
    question: 'Can I message on WhatsApp?',
    answer: `Yes! Reach us directly on WhatsApp: ${data.whatsapp}`,
  },
];