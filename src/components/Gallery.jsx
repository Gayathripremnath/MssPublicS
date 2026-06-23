import React, { useEffect, useState } from "react";
import "./Gallery.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE || 'https://mssd-production.up.railway.app';

// Django pagination returns absolute next/prev URLs using the request host.
// When the backend is behind a proxy, that host may be wrong (http:// or
// 127.0.0.1). This helper swaps it out for our known API base so
// Load More always works correctly.
const sanitizeUrl = (url) => {
  if (!url) return url;
  try {
    const parsed = new URL(url);
    const base = new URL(API_BASE);
    parsed.protocol = base.protocol;
    parsed.host = base.host;
    return parsed.toString();
  } catch {
    return url;
  }
};

const Gallery = () => {
  const navigate = useNavigate();

  const [galleryData, setGalleryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nextPage, setNextPage] = useState(null);

  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = async (url = null) => {
    try {
      const response = await axios.get(
        url || `${API_BASE}/api/gallery/`
      );

      if (url) {
        setGalleryData((prev) => [
          ...prev,
          ...response.data.results,
        ]);
      } else {
        setGalleryData(response.data.results);
      }

      setNextPage(sanitizeUrl(response.data.next));
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
        <p>M.S.S Public School Activities</p>
      </div>

      <div className="gallery-container">
        <div className="gallery-grid">
          {galleryData.map((item) => (
            <div
              key={item.id}
              className="gallery-card"
              onClick={() => navigate(`/gallery/${item.id}`)}
            >
              <img
  src={item.image_url}
  alt={item.title}
  loading="lazy"
  onError={() => {
    console.log("FAILED IMAGE:", item.image_url);
  }}
/>

              <p>{item.title}</p>
            </div>
          ))}
        </div>

        {nextPage && (
          <div className="load-more-wrapper">
            <button
              className="load-more-btn"
              onClick={() => fetchGallery(nextPage)}
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;