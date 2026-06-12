import React from 'react';
import { Link } from 'react-router-dom';
import './News.css';

const News = () => {
  return (
    <div className="news-page-container">
      {/* HERO LANDING BANNER */}
      <div className="landing-banner">
        <div className="banner-overlay-gradient">
          <h1 className="banner-main-title">Latest News & Events</h1>
          <div className="banner-gold-line"></div>
          <p className="banner-subtext">
            Stay updated with the latest happenings, announcements, and events at our institution.
          </p>
        </div>
      </div>

      {/* PAGE CONTENT */}
      <div className="news-content-wrapper container">
        <h2 className="news-page-heading">Latest News & Events</h2>
        
        <div className="news-events-list">
          <div className="news-item">
            <span className="new-badge-wrapper">
              <img 
                src="https://www.gifimages.pics/images/quotes/english/general/animated-new-gif-image-for-52119-21696.gif" 
                alt="New" 
                className="new-gif-icon" 
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'inline-block';
                }}
              />
              <span className="fallback-new-text" style={{display: 'none', color: 'red', fontStyle: 'italic', fontWeight: 'bold', marginRight: '10px'}}>
                New 
              </span>
            </span>
            <Link to="/admission" className="news-link">
              Admission open | Click here to Apply
            </Link>
          </div>
          
          <div className="news-item">
            <span className="new-badge-wrapper">
              <span className="fallback-new-text" style={{color: 'red', fontStyle: 'italic', fontWeight: 'bold', marginRight: '10px'}}>
                New 
              </span>
            </span>
            <Link to="/result" className="news-link">
              Result for Term 1 announced | Click here to View
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
