import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './News.css';

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost/msspublicschool/mss_school_admin9895/index.php/api/news')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setNews(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching news:', error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

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
          {loading && <p>Loading news...</p>}
          {error && <p>Error loading news: {error}</p>}
          
          {/* Static Item */}
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

          {/* Dynamic API Items */}
          {news.map((item, index) => (
            <div className="news-item" key={item.news_id || index}>
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
              </span>
              {item.link ? (
                <a href={item.link} className="news-link" target="_blank" rel="noopener noreferrer">
                  {item.title}
                </a>
              ) : (
                <span className="news-link">{item.title}</span>
              )}
            </div>
          ))}
          
        </div>
      </div>
    </div>
  );
};

export default News;
