import React, { useState, useEffect } from 'react';
import './Gallery.css';
import { useNavigate } from 'react-router-dom';
import ImageModal from './ImageModal';

const API_BASE = import.meta.env.VITE_API_BASE || 'https://demo.msspublicschool.org/mss_school_admin9895/api';
const UPLOADS_BASE = 'https://demo.msspublicschool.org/mss_school_admin9895/uploads/tc';

const Transfer = () => {
  const navigate = useNavigate();

  const [tcData, setTcData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
  let isMounted = true;

  const fetchData = async () => {
    setLoading(true);

    try {
      const controller = new AbortController();

      const timeout = setTimeout(() => {
        controller.abort();
      }, 10000);

      const res = await fetch(`${API_BASE}/tc`, {
        signal: controller.signal,
      });

      clearTimeout(timeout);

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const data = await res.json();

      if (isMounted) {
        setTcData(data);
        setError(null);
      }
    } catch (err) {
      if (isMounted) {
        setError(err.name === "AbortError"
          ? "Request timeout (slow server)"
          : err.message
        );
      }
    } finally {
      if (isMounted) setLoading(false);
    }
  };

  fetchData();

  return () => {
    isMounted = false;
  };
}, []);

  const openImageModal = (imageUrl, title, e) => {
    e.stopPropagation();
    setSelectedImage({ url: imageUrl, title });
    setModalOpen(true);
  };

  const handleTitleClick = (id, e) => {
    e.stopPropagation();
    if (modalOpen) return;
    navigate(`/transfer/${id}`);
  };

  if (loading) {
    return <div className="gallery-page"><h2 style={{ textAlign: 'center', paddingTop: '100px' }}>Loading...</h2></div>;
  }

  if (error) {
    return (
      <div className="gallery-page">
        <div className="gallery-hero">
          <div className="gallery-hero-content">
            <h1>Transfer Certificates</h1>
            <div className="gallery-divider"></div>
          </div>
        </div>
        <div className="gallery-container">
          <div style={{
            textAlign: 'center',
            padding: '60px 20px',
            background: '#fff5f5',
            borderRadius: '12px',
            border: '1px solid #fecaca'
          }}>
            <h2 style={{ color: '#b91c1c', marginBottom: '10px' }}>Unable to Load</h2>
            <p style={{ color: '#dc2626', marginBottom: '20px' }}>{error}</p>
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
            <div key={item.id} className="gallery-card" style={{ cursor: 'pointer' }} onClick={(e) => e.stopPropagation()}>
              <div
                className="gallery-img-wrapper"
                onClick={(e) => openImageModal(`${UPLOADS_BASE}/${item.tc_image}`, item.tc_no, e)}
              >
                <img
                  src={`${UPLOADS_BASE}/${item.tc_image}`}
                  alt={item.tc_no}
                  className="gallery-img"
                  onLoad={() => console.log("Loaded:", item.tc_image)}
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/300x200?text=No+TC+Image';
                  }}
                />
              </div>
              <p
                className="gallery-title"
                onClick={(e) => handleTitleClick(item.id, e)}
              >
                {item.student_name} — {item.tc_no}
              </p>
            </div>
          ))}
        </div>

        {tcData.length === 0 && (
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <h2>No Transfer Certificates found.</h2>
          </div>
        )}
      </div>

      <ImageModal
        isOpen={modalOpen}
        imageUrl={selectedImage?.url}
        title={selectedImage?.title}
        onClose={() => setModalOpen(false)}
        onBackgroundClick={() => setModalOpen(false)}
      />
    </div>
  );
};

export default Transfer;

