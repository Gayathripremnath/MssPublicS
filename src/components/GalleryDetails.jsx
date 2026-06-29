import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./GalleryDetails.css";

const API_BASE = import.meta.env.VITE_API_BASE || 'https://msspublicschool.org/mss_school_admin9895/api';
const UPLOADS_BASE = 'https://msspublicschool.org/mss_school_admin9895/uploads/gallery';

const GalleryDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [currentItem, setCurrentItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`${API_BASE}/gallery_photos/${id}`);
                if (!res.ok) throw new Error("Failed to load gallery");

                const data = await res.json();
                setCurrentItem({ album_images: data });
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    if (loading) return <div className="loader">Loading...</div>;

    if (error) return <div className="error">{error}</div>;

    const albumImages = currentItem?.album_images || [];

    return (
        <div className="gallery-details">
            <button className="back-btn" onClick={() => navigate(-1)}>
                ← Back
            </button>

            <h1>{currentItem?.title}</h1>
            <p>{albumImages.length} Images</p>

            <div className="masonry">
                {albumImages.map((img) => (
                    <div className="card" key={img.id}>
                        <img
                            src={`${UPLOADS_BASE}/${img.photo}`}
                            alt="gallery"
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GalleryDetails;