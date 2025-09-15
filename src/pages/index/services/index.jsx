import React, { useRef } from 'react';
import './style.css';
import { services , slugify } from '../../../data';

export default function ServicesSection() {
  const scrollerRef = useRef(null);

  return (
    <div className="services-section" id="services">
      <h2>Our Services</h2>

      <div className="services-grid" ref={scrollerRef}>
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <h3>{service.title}</h3>
            <img src={service.image} alt={service.alt} />
            <p>{service.description}</p>
            <a href={`/services/${slugify(service.title)}`} className="service-button">Learn More</a>
          </div>
        ))}
      </div>
    </div>
  );
}