import React, { useState, useEffect } from 'react';
import './Gallery.css'; // Re-use gallery styles for consistency
import { useNavigate } from 'react-router-dom';

const API_BASE = 'http://127.0.0.1:8000';

const Transfer = () => {
  const navigate = useNavigate();

  const [tcData, setTcData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE}/api/tc/`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch Transfer Certificates");
        return res.json();
      })
      .then((data) => {
        setTcData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const getImageUrl = (imagePath) => {
    if (!imagePath) return '';
    if (imagePath.startsWith('http')) return imagePath;
    return `${API_BASE}${imagePath}`;
  };

  if (loading) {
    return <div className="gallery-page"><h2 style={{ textAlign: 'center', paddingTop: '100px' }}>Loading...</h2></div>;
  }

  if (error) {
    return <div className="gallery-page"><h2 style={{ textAlign: 'center', paddingTop: '100px' }}>Error: {error}</h2></div>;
  }

  return (
    <div className="gallery-page">
      <div className="gallery-hero">
        <div className="gallery-hero-content">
          <h1>Transfer Certificates</h1>
          <div className="gallery-divider"></div>
          <p>
            Official Transfer Certificate (TC) documents issued by M.S.S. Public School.
          </p>
        </div>
      </div>

      <div className="gallery-container">
        <div className="gallery-grid">
          {tcData.map((item) => (
            <div
              key={item.id}
              className="gallery-card"
              onClick={() => navigate(`/transfer/${item.id}`)}
              style={{ cursor: 'pointer' }}
            >
              <div className="gallery-img-wrapper">
                <img
                  src={getImageUrl(item.image)}
                  alt={item.title}
                  className="gallery-img"
                />
              </div>
              <p className="gallery-title">{item.title}</p>
            </div>
          ))}
        </div>
        
        {tcData.length === 0 && (
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <h2>No Transfer Certificates found.</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Transfer;
