// FiveBlocks.jsx (or .js)
import React, { useRef } from 'react'
import './index.css' 
import { expertise as BLOCKS } from '../../../data';

export default function FiveBlocks() {
  const trackRef = useRef(null);

  const nudge = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector('.fb-card');
    const styles = getComputedStyle(el);
    const gap = parseInt(styles.gap || styles.columnGap || '16', 10);
    const amount = card ? card.offsetWidth + gap : 300;
    el.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  return (
    <section className="fb-section">
      <div className="fb-container">
        <h2 className="fb-title"> Our Expertise </h2>

        <div className="fb-carousel">
          <button
            type="button"
            aria-label="Previous"
            className="fb-nav fb-nav--left"
            onClick={() => nudge('left')}
          >
            <span aria-hidden>‹</span>
          </button>

          <div
            ref={trackRef}
            className="fb-track"
            role="region"
            aria-label="Service cards"
          >
            {BLOCKS.map((b, i) => (
              <article className="fb-card" key={i} tabIndex={0}>
                <div className="fb-thumb">
                  <img src={b.img} alt="" />
                </div>
                <h3 className="fb-card-title">{b.title}</h3>
                <p className="fb-card-desc">{b.description}</p>
              </article>
            ))}
          </div>

          <button
            type="button"
            aria-label="Next"
            className="fb-nav fb-nav--right"
            onClick={() => nudge('right')}
          >
            <span aria-hidden>›</span>
          </button>
        </div>
      </div>
    </section>
  );
}
