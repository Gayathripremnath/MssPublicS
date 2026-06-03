import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./GalleryDetails.css";

const GalleryDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    
    const [currentItem, setCurrentItem] = useState(null);
    const [albumImages, setAlbumImages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch the specific gallery item
        fetch(`http://127.0.0.1:8000/api/gallery/${id}/`)
            .then((res) => {
                if (!res.ok) throw new Error("Gallery item not found");
                return res.json();
            })
            .then((data) => {
                setCurrentItem(data);
                // Fetch album images for this gallery
                return fetch(`http://127.0.0.1:8000/api/albums/?gallery=${id}`);
            })
            .then((res) => res.json())
            .then((data) => {
                setAlbumImages(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <div className="gallery-details"><h2>Loading...</h2></div>;
    }

    if (!currentItem) {
        return (
            <div className="gallery-details">
                <h2>Gallery item not found.</h2>
                <button onClick={() => navigate(-1)} className="view-btn">Go Back</button>
            </div>
        );
    }

    return (
        <div className="gallery-details">
            <button onClick={() => navigate(-1)} className="view-btn back-btn" style={{ margin: '0 auto 20px', display: 'block' }}>&larr; Back to Gallery</button>
            <h1>{currentItem.title}</h1>
            <p>{albumImages.length + 1} {(albumImages.length + 1) === 1 ? 'Image' : 'Images'}</p>

            <div className="details-grid">
                {/* Main gallery image */}
                <div className="details-card">
                    <div className="gallery-img-wrapper">
                        <img src={currentItem.image} alt={currentItem.title} />
                    </div>
                    <p className="gallery-title">{currentItem.title}</p>
                </div>

                {/* Album images */}
                {albumImages.map((imageItem) => (
                    <div className="details-card" key={imageItem.id}>
                        <div className="gallery-img-wrapper">
                            <img src={imageItem.image} alt="Album Image" />
                        </div>
                        <p className="gallery-title">Album Photo</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GalleryDetails;