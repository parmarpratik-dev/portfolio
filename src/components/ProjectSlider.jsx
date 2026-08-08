import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './ProjectSlider.css';

export default function ProjectSlider({ media }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? media.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === media.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentMedia = media[currentIndex];

  return (
    <div className="project-slider">
      <div className="slider-media-container">
        {currentMedia.type === 'video' ? (
          <video
            className="slider-media"
            controls
            preload="metadata"
            key={currentMedia.src}
          >
            <source src={currentMedia.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            className="slider-media"
            src={currentMedia.src}
            alt="Project media"
          />
        )}

        {/* Navigation Arrows - Only show if more than 1 media item */}
        {media.length > 1 && (
          <>
            <button
              className="slider-btn slider-btn-prev"
              onClick={goToPrevious}
              aria-label="Previous media"
              title="Previous"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              className="slider-btn slider-btn-next"
              onClick={goToNext}
              aria-label="Next media"
              title="Next"
            >
              <ChevronRight size={18} />
            </button>
          </>
        )}
      </div>
    </div>
  );
}
