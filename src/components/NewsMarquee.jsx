import React from 'react';
import './NewsMarquee.css';

const NewsMarquee = () => {
  return (
    <div className="marquee-container">
      <div className="marquee-label">
        <span className="marquee-icon">📰</span> Latest News
      </div>
      <div className="marquee-content-wrapper">
        <div className="marquee-content">
          <p>
            Registration for Admission Classes From KG to IX &gt;&gt; <a href="#">Click here to Apply</a>
            <span className="marquee-separator">|</span>
            Result for Term 1 announced &gt;&gt; <a href="#">Click here to View</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsMarquee;
