import React from "react";
import { useParams } from "react-router-dom";
import "./GalleryDetails.css";

const GalleryDetails = () => {
    const { id } = useParams();

    return (
        <div className="gallery-details">
            <h1>Gallery Details</h1>

            <div className="details-grid">
                <div className="details-card">
                    <div className="gallery-img-wrapper">
                        <img
                            src="https://via.placeholder.com/500x300"
                            alt="Gallery"
                        />
                    </div>
                    <p className="gallery-title">Gallery Title Placeholder</p>
                </div>
            </div>
        </div>
    );
};

export default GalleryDetails;