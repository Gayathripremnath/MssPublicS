import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./GalleryDetails.css";

const API_BASE = import.meta.env.VITE_API_BASE || 'https://mssd-production.up.railway.app';

const GalleryDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [currentItem, setCurrentItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`${API_BASE}/api/gallery/${id}/`, {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' },
                    mode: 'cors',
                });

                if (!res.ok) {
                    throw new Error(`HTTP ${res.status}: Gallery item not found`);
                }

                const data = await res.json();
                setCurrentItem(data);
                setError(null);
            } catch (err) {
                console.error('Fetch error:', err);
                setError(err.message || 'Failed to load gallery item');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    if (loading) {
        return (
            <div className="gallery-details">
                <h2 style={{ textAlign: 'center', paddingTop: '100px' }}>Loading...</h2>
            </div>
        );
    }

    if (error) {
        return (
            <div className="gallery-details">
                <div style={{
                    textAlign: 'center',
                    padding: '60px 20px',
                    background: '#fff5f5',
                    borderRadius: '12px',
                    border: '1px solid #fecaca',
                    margin: '40px'
                }}>
                    <h2 style={{ color: '#b91c1c', marginBottom: '10px' }}>Error Loading Gallery</h2>
                    <p style={{ color: '#dc2626', marginBottom: '20px' }}>{error}</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="view-btn"
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
        );
    }

    if (!currentItem) {
        return (
            <div className="gallery-details">
                <h2>Gallery item not found.</h2>
                <button onClick={() => navigate(-1)} className="view-btn">Go Back</button>
            </div>
        );
    }

    const albumImages = currentItem.album_images || [];
    const totalImages = albumImages.length + 1;

    return (
        <div className="gallery-details">
            <button onClick={() => navigate(-1)} className="view-btn back-btn" style={{ margin: '0 auto 20px', display: 'block' }}>
                &larr; Back to Gallery
            </button>
            <h1>{currentItem.title}</h1>
            <p>{totalImages} {totalImages === 1 ? 'Image' : 'Images'}</p>

            <div className="details-grid">
                {/* Main gallery image */}
                <div className="details-card">
                    <div className="gallery-img-wrapper">
                        <img src={currentItem.image_url} alt={currentItem.title} loading="lazy" />
                    </div>
                    <p className="gallery-title">{currentItem.title}</p>
                </div>

                {/* Album images - already included in API response */}
                {albumImages.map((imageItem) => (
                    <div className="details-card" key={imageItem.id}>
                        <div className="gallery-img-wrapper">
                            <img src={imageItem.image_url} alt="Album Image" loading="lazy" />
                        </div>
                        <p className="gallery-title">Album Photo</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GalleryDetails;
