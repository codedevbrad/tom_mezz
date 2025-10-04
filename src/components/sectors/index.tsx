import React, { useRef, useEffect } from "react";
import { mezzanineSectors } from "../../data";
import "./index.css";

export default function MezzanineSectorsCarousel() {
  const trackRef = useRef(null);

  const scrollCards = (dir = 1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector(".mzCard");
    const delta = card ? (card.clientWidth + 24) * dir : 360 * dir;
    el.scrollBy({ left: delta, behavior: "smooth" });
  };

  // basic keyboard nav for accessibility
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onKey = (e) => {
      if (e.key === "ArrowRight") scrollCards(1);
      if (e.key === "ArrowLeft") scrollCards(-1);
    };
    el.addEventListener("keydown", onKey);
    return () => el.removeEventListener("keydown", onKey);
  }, []);

  // Pointer drag (mouse/touch)
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let isDown = false, startX = 0, scrollStart = 0;

    const down = (e) => {
      isDown = true;
      startX = (e.touches ? e.touches[0].pageX : e.pageX);
      scrollStart = el.scrollLeft;
      el.classList.add("is-dragging");
    };
    const move = (e) => {
      if (!isDown) return;
      const x = (e.touches ? e.touches[0].pageX : e.pageX);
      const walk = startX - x;
      el.scrollLeft = scrollStart + walk;
    };
    const up = () => { isDown = false; el.classList.remove("is-dragging"); };

    el.addEventListener("mousedown", down);
    el.addEventListener("mousemove", move);
    el.addEventListener("mouseleave", up);
    el.addEventListener("mouseup", up);
    el.addEventListener("touchstart", down, { passive: true });
    el.addEventListener("touchmove", move, { passive: true });
    el.addEventListener("touchend", up);

    return () => {
      el.removeEventListener("mousedown", down);
      el.removeEventListener("mousemove", move);
      el.removeEventListener("mouseleave", up);
      el.removeEventListener("mouseup", up);
      el.removeEventListener("touchstart", down);
      el.removeEventListener("touchmove", move);
      el.removeEventListener("touchend", up);
    };
  }, []);

  return (
    <>
     <header className="mzHeader">
        <h2 className="mzHeader__title">Mezzanine Sectors</h2>
        <p className="mzHeader__desc">Explore our mezzanine solutions across various sectors, tailored to meet diverse industry needs.</p>
      </header>
        <section className="mzSectors">
      <button
        className="mzNav mzNav--left"
        aria-label="Scroll left"
        onClick={() => scrollCards(-1)}
      >
        ‹
      </button>

      <div
        className="mzTrack"
        ref={trackRef}
        tabIndex={0}
        aria-label="Mezzanine sectors carousel"
      >
        {mezzanineSectors.map((it) => (
          <article className="mzCard" key={it.title}>
            <img
              src={it.image}
              alt={it.alt || `${it.title} mezzanines`}
              className="mzCard__img"
              loading="lazy"
              draggable="false"
            />
            <div className="mzCard__shade" />
            <h3 className="mzCard__title">{it.title}</h3>
            {it.bubble && <div className="mzCard__bubble">{it.bubble}</div>}
          </article>
        ))}
      </div>

      <button
        className="mzNav mzNav--right"
        aria-label="Scroll right"
        onClick={() => scrollCards(1)}
      >
        ›
      </button>
    </section>
    </>

  );
}
