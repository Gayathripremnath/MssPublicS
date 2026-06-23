import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./GalleryDetails.css"; // Reuse GalleryDetails styles

const API_BASE = import.meta.env.VITE_API_BASE || 'https://mssd-production.up.railway.app';

const TransferDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    
    const [currentItem, setCurrentItem] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetch(`${API_BASE}/api/tc/${id}/`, {
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

    const getImageUrl = (imagePath) => {
        if (!imagePath) return '';
        if (imagePath.startsWith('http')) return imagePath;
        return `${API_BASE}${imagePath}`;
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
            <h1>{currentItem.title}</h1>
            {currentItem.description && <p>{currentItem.description}</p>}
            <p>{tcImages.length + 1} {(tcImages.length + 1) === 1 ? 'Image' : 'Images'}</p>

            <div className="details-grid">
                {/* Main cover image */}
                <div className="details-card">
                    <div className="gallery-img-wrapper">
                        <img src={getImageUrl(currentItem.image)} alt={currentItem.title} />
                    </div>
                    <p className="gallery-title">Cover Image</p>
                </div>

                {/* Additional TC images */}
                {tcImages.map((imageItem) => (
                    <div className="details-card" key={imageItem.id}>
                        <div className="gallery-img-wrapper">
                            <img src={getImageUrl(imageItem.image)} alt="Certificate Page" />
                        </div>
                        <p className="gallery-title">Page {tcImages.indexOf(imageItem) + 1}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TransferDetails;
