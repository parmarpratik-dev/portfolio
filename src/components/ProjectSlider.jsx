import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
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
  const basePath = import.meta.env.BASE_URL;
  const mediaPath = basePath + currentMedia.src.replace(/^\//, '');
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    // Ensure the video remains muted and volume stays at 0.
    const handleVolumeChange = () => {
      if (v) {
        v.muted = true;
        try { v.volume = 0; } catch (e) { /* some browsers restrict volume set */ }
      }
    };

    // Force initial state
    handleVolumeChange();

    v.addEventListener('volumechange', handleVolumeChange);
    return () => v.removeEventListener('volumechange', handleVolumeChange);
  }, [currentIndex]);

  // Pause video and reset play state when media changes
  useEffect(() => {
    const v = videoRef.current;
    if (v) {
      try { v.pause(); } catch (e) {}
      setIsPlaying(false);
    }
  }, [currentIndex]);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play().catch(() => {});
      setIsPlaying(true);
    } else {
      v.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="project-slider">
      <div className="slider-media-container">
        {currentMedia.type === 'video' ? (
          <>
            <video
              ref={videoRef}
              className="slider-media"
              muted
              preload="metadata"
              key={currentMedia.src}
            >
              <source src={mediaPath} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <button
              className="video-overlay-btn"
              onClick={togglePlay}
              aria-label={isPlaying ? 'Pause video' : 'Play video'}
              title={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>
          </>
        ) : (
          <img
            className="slider-media"
            src={mediaPath}
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
