import { useState, useRef, useEffect } from 'react';
import './dropdown.css';

export default function Dropdown({ label = "SERVICES" , links }) {
  const ref = useRef(null);

  return (
    <div className="dropdown" ref={ref}>
      <div className="dropdown-toggle">
        <li>
          {label}<span className="arrow">▾</span>
        </li>
        
        
      </div>
      <ul className="dropdown-menu">
        {links.map((link, idx) => (
          <li key={idx}>
            <a href={link.href} className="dropdown-item">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
