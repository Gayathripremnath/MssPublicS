import React from 'react';
import './ImageModal.css';

const ImageModal = ({ isOpen, imageUrl, title, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="image-modal-overlay" onClick={onClose}>
      <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="image-modal-close" onClick={onClose}>×</button>
        <img src={imageUrl} alt={title} className="image-modal-img" />
        {title && <p className="image-modal-title">{title}</p>}
      </div>
    </div>
  );
};

export default ImageModal;
