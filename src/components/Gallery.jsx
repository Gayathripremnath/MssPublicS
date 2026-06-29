import React, { useEffect, useState } from "react";
import "./Gallery.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE || 'https://msspublicschool.org/mss_school_admin9895/api';

const UPLOADS_BASE = 'https://msspublicschool.org/mss_school_admin9895/uploads/gallery';

const Gallery = () => {
  const navigate = useNavigate();

  const [galleryData, setGalleryData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = async () => {
    try {
      // Fetch from CodeIgniter Api::gallery()
      const response = await axios.get(`${API_BASE}/gallery`);
      // CodeIgniter API returns a direct array, not { results: [] }
      setGalleryData(response.data || []);
    } catch (error) {
      console.error("Gallery fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="gallery-page">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <div className="gallery-page">
      <div className="gallery-hero">
        <h1>Our School Gallery</h1>
      </div>

      <div className="gallery-container">
        <div className="gallery-grid">
          {galleryData.map((item) => (
            <div
              key={item.gid}
              className="gallery-card"
              onClick={() => navigate(`/gallery/${item.gid}`)}
            >
              <img
                src={`${UPLOADS_BASE}/${item.g_photo}`}
                alt={item.g_title}
                loading="lazy"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/300x200?text=No+Image';
                }}
              />
              <p>{item.g_title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;