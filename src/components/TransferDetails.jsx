import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./GalleryDetails.css"; // Reuse GalleryDetails styles

const API_BASE = import.meta.env.VITE_API_BASE || 'https://msspublicschool.org/mss_school_admin9895/api';

const TransferDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    
    const [currentItem, setCurrentItem] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetch(`${API_BASE}/tc/${id}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            mode: 'cors',
          });
          
          if (!res.ok) {
            throw new Error(`HTTP ${res.status}: Transfer Certificate not found`);
          }
          
          const data = await res.json();
          setCurrentItem(data);
        } catch (err) {
          console.error('Fetch error:', err);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }, [id]);

    const getImageUrl = (imageName) => {
        if (!imageName) return '';
        const UPLOADS_BASE = 'https://msspublicschool.org/mss_school_admin9895/uploads/tc';
        return `${UPLOADS_BASE}/${imageName}`;
    };

    if (loading) {
        return <div className="gallery-details"><h2 style={{ textAlign: 'center', paddingTop: '100px' }}>Loading...</h2></div>;
    }

    if (!currentItem) {
        return (
            <div className="gallery-details">
                <h2 style={{ textAlign: 'center', paddingTop: '100px' }}>Transfer Certificate not found.</h2>
                <button onClick={() => navigate('/transfer')} className="view-btn back-btn" style={{ margin: '20px auto', display: 'block' }}>Go Back</button>
            </div>
        );
    }

    const tcImages = currentItem.tc_images || [];

    return (
        <div className="gallery-details">
            <button onClick={() => navigate('/transfer')} className="view-btn back-btn" style={{ margin: '0 auto 20px', display: 'block' }}>&larr; Back to Certificates</button>
            <h1>{currentItem.student_name} — {currentItem.tc_no}</h1>
            <p>1 Image</p>

            <div className="details-grid">
                {/* Main cover image */}
                <div className="details-card">
                    <div className="gallery-img-wrapper">
                        <img 
                          src={getImageUrl(currentItem.tc_image)} 
                          alt={currentItem.tc_no} 
                          onError={(e) => { e.target.src = 'https://via.placeholder.com/300x200?text=No+TC+Image'; }}
                        />
                    </div>
                    <p className="gallery-title">Certificate Image</p>
                </div>
            </div>
        </div>
    );
};

export default TransferDetails;
