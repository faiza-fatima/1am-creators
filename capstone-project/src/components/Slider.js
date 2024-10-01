import React, { useState, useEffect, useMemo } from 'react';
import { gsap } from 'gsap';

function Slider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = useMemo(() => [
    {
      title: 'LET\'S MAKE<br>CODE EASY TO<br>CODE',
      image: 'brain-icon.png',
      animation: (timeline) => {
        timeline.to('.slide-1 h1', { duration: 2, y: -20, ease: 'power2.inOut' });
      },
    },
    {
      title: 'ANIMATION 2',
      image: 'animation-2-icon.png',
      animation: (timeline) => {
        timeline.to('.slide-2 img', { rotation: 360, duration: 5, ease: 'linear' });
      },
    },
    {
      title: 'ANIMATION 3',
      image: 'animation-3-icon.png',
      animation: (timeline) => {
        timeline.to('.slide-3 img', { scale: 2, duration: 2, ease: 'power2.inOut' });
      },
    },
    {
      title: 'ANIMATION 4',
      image: 'animation-4-icon.png',
      animation: (timeline) => {
        timeline.to('.slide-4 img', { x: 100, duration: 2, ease: 'power2.inOut' });
      },
    },
    {
      title: 'ANIMATION 5',
      image: 'animation-5-icon.png',
      animation: (timeline) => {
        timeline.to('.slide-5 img', { y: -100, duration: 2, ease: 'power2.inOut' });
      },
    },
  ], []);

  useEffect(() => {
    const timeline = gsap.timeline({ repeat: -1, yoyo: true });
    slides.forEach((slide, index) => {
      slide.animation(timeline);
    });
  }, [slides]);

  const handleNextSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="slider-container">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide slide-${index + 1} ${
            activeSlide === index ? 'active' : ''
          }`}
        >
          <h1>{slide.title}</h1>
          <img src={slide.image} alt={slide.title} />
        </div>
      ))}
      <button className="prev-btn" onClick={handlePrevSlide}>
        Prev
      </button>
      <button className="next-btn" onClick={handleNextSlide}>
        Next
      </button>
    </div>
  );
}

export default Slider;