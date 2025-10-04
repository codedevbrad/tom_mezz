import React from "react";
import "./index.css";
import { features } from "../../data";

function Icon({ type }) {
  switch (type) {
    case "bracket":
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true" className="icon">
          <g fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 8h-6a6 6 0 0 0-6 6v36a6 6 0 0 0 6 6h6" />
            <circle cx="24" cy="12" r="2" />
            <path d="M24 8v16l8-8 8 8V8" />
          </g>
        </svg>
      );
    case "hands-gear":
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true" className="icon">
          <g fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 38c5-2 10-4 14-2 4 2 7 2 10-1 3-3 6-3 10-1 2 1 4 3 6 4" />
            <path d="M12 46c6-3 12-6 16-4 3 2 8 2 12-2 3-3 8-2 12 1" />
            <circle cx="32" cy="18" r="8" />
            <path d="M32 8v4M32 24v4M24 18h-4M44 18h4M26 12l-3-3M42 24l3 3M42 12l3-3M26 24l-3 3" />
          </g>
        </svg>
      );
    case "stitch":
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true" className="icon">
          <g fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 50V10h28l12 12v28H12z" />
            <path d="M24 18h8M20 26h10M30 34h10M26 42h12" strokeDasharray="4 4" />
            <path d="M40 10v12h12" />
          </g>
        </svg>
      );
    case "double-arrow":
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true" className="icon">
          <g fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 16l16 16-16 16" />
            <path d="M32 16l16 16-16 16" />
          </g>
        </svg>
      );
    default:
      return null;
  }
}

export default function FeaturesStrip() {
  return (
    <section className="features">
      {features.map((f, i) => (
        <article className="card" key={f.title}>
          <div className="card__iconWrap">
            <Icon type={f.icon} />
          </div>

          <h3 className="card__title">{f.title}</h3>
          <p className="card__body">{f.body}</p>
        </article>
      ))}
    </section>
  );
}
