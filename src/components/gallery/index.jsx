import React, { useState } from "react"
import "./style.css"


const SingleImageGallery = ({ images = defaultImages }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="gallery-section">
      <div className="gallery-header">
        <h2>Our Recent Work</h2>
        <p>
          Explore a selection of our projects,
          showcasing quality, precision, and craftsmanship.
        </p>
      </div>

      <div className="single-gallery">
        <button className="gallery-arrow left" onClick={prevImage} aria-label="Previous image">
          ◀
        </button>

        <img
          src={images[currentIndex]}
          alt={`Gallery image ${currentIndex + 1}`}
          className="gallery-image"
        />

        <button className="gallery-arrow right" onClick={nextImage} aria-label="Next image">
          ▶
        </button>

        <div className="gallery-indicator">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </section>
  )
}

export default SingleImageGallery
