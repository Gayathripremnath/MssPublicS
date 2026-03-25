import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import './ScrollToTop.css';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Top: 0%, Bottom: 100%
  const calculateScrollProgress = () => {
    const scrollPx = document.documentElement.scrollTop;
    const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = `${(scrollPx / winHeightPx) * 100}%`;
    setScrollProgress(scrolled);

    if (scrollPx > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', calculateScrollProgress);
    return () => window.removeEventListener('scroll', calculateScrollProgress);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className={`scroll-progress-btn ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
      <div className="progress-circle-wrap" style={{ background: `conic-gradient(var(--primary-color) ${scrollProgress}, transparent 0)` }}>
        <div className="inner-circle">
          <FaArrowUp className="up-icon" />
        </div>
      </div>
    </div>
  );
};

export default ScrollToTop;
