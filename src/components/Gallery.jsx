import React, { useState, useEffect } from 'react';
import './Gallery.css';
import { useNavigate } from 'react-router-dom';

const API_BASE = 'https://mssd.onrender.com';

const Gallery = () => {
  const navigate = useNavigate();

  const [galleryData, setGalleryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [page, setPage] = useState(1);
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          `${API_BASE}/api/gallery/?page=${page}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
            mode: 'cors',
          }
        );

        if (!res.ok) {
          throw new Error(`HTTP ${res.status}: Failed to fetch gallery`);
        }

        const data = await res.json();

        setGalleryData(data.results || []);
        setNextPage(data.next);
        setPrevPage(data.previous);
        setError(null);
      } catch (err) {
        console.error('Fetch error:', err);
        setError(err.message || 'Failed to load gallery images');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page]);

  const uniqueAlbums = [];
  const titles = new Set();

  galleryData.forEach((item) => {
    if (!titles.has(item.title)) {
      uniqueAlbums.push(item);
      titles.add(item.title);
    }
  });

  if (loading) {
    return (
      <div className="gallery-page">
        <div className="gallery-hero">
          <div className="gallery-hero-content">
            <h1>Our School Gallery</h1>
            <div className="gallery-divider"></div>
          </div>
        </div>

        <div className="gallery-container">
          <h2 style={{ textAlign: 'center', color: '#666' }}>
            Loading gallery...
          </h2>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="gallery-page">
        <div className="gallery-hero">
          <div className="gallery-hero-content">
            <h1>Our School Gallery</h1>
            <div className="gallery-divider"></div>
          </div>
        </div>

        <div className="gallery-container">
          <div
            style={{
              textAlign: 'center',
              padding: '60px 20px',
              background: '#fff5f5',
              borderRadius: '12px',
              border: '1px solid #fecaca',
            }}
          >
            <h2
              style={{
                color: '#b91c1c',
                marginBottom: '10px',
              }}
            >
              Unable to Load Gallery
            </h2>

            <p
              style={{
                color: '#dc2626',
                marginBottom: '20px',
              }}
            >
              {error}
            </p>

            <button
              onClick={() => window.location.reload()}
              style={{
                padding: '10px 28px',
                background: '#8a1538',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                fontWeight: '600',
                cursor: 'pointer',
              }}
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (galleryData.length === 0) {
    return (
      <div className="gallery-page">
        <div className="gallery-hero">
          <div className="gallery-hero-content">
            <h1>Our School Gallery</h1>
            <div className="gallery-divider"></div>
          </div>
        </div>

        <div className="gallery-container">
          <h2 style={{ textAlign: 'center', color: '#666' }}>
            No gallery images available
          </h2>
        </div>
      </div>
    );
  }

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
                  loading="lazy"
                />
              </div>

              <p className="gallery-title">
                {item.title}
              </p>
            </div>
          ))}
        </div>

        <div className="gallery-pagination">
          <button
            onClick={() => setPage(page - 1)}
            disabled={!prevPage}
          >
            Previous
          </button>

          <span>Page {page}</span>

          <button
            onClick={() => setPage(page + 1)}
            disabled={!nextPage}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;