import React, { useState, useEffect } from 'react';
import './Gallery.css';
import { useNavigate } from 'react-router-dom';

const Gallery = () => {
  const navigate = useNavigate();
  const [galleryData, setGalleryData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/gallery/")
      .then((res) => res.json())
      .then((data) => setGalleryData(data))
      .catch((err) => console.error(err));
  }, []);

  const uniqueAlbums = [];
  const titles = new Set();
  galleryData.forEach((item) => {
    if (!titles.has(item.title)) {
      uniqueAlbums.push(item);
      titles.add(item.title);
    }
  });

  return (
    <div className="gallery-page">
      <div className="gallery-hero">
        <div className="gallery-hero-content">
          <h1>Our School Gallery</h1>
          <div className="gallery-divider"></div>
          <p>
            Visual glimpses of M.S.S. Public School infrastructure,
            labs, achievements, and student activities.
          </p>
        </div>
      </div>

      <div className="gallery-container">
        <div className="gallery-grid">
          {uniqueAlbums.map((item) => (
            <div
              key={item.id}
              className="gallery-card"
              onClick={() => navigate(`/gallery/${item.id}`)}
              style={{ cursor: 'pointer' }}
            >
              <div className="gallery-img-wrapper">
                <img
                  src={item.image_url}
                  alt={item.title}
                  className="gallery-img"
                />
              </div>
              <p className="gallery-title">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
