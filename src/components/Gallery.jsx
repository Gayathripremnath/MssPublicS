// 

import React from 'react';
import './Gallery.css';
import { useNavigate } from 'react-router-dom';
import img1 from '../assets/1769590456434056448.jpeg';
import img2 from '../assets/17555006451074509921.jpeg' ;
import img3 from '../assets/17684589041595917490.jpeg';
import img4 from '../assets/17706091411581800385.jpeg';
import img5 from '../assets/17778757861646504189.jpeg';

const Gallery = () => {
  const navigate = useNavigate();

  const galleryData = [
    {
      id: 1,
      title: "Independence Day",
      image: img1
    },
    {
      id: 2,
      title: "Republic Day",
      image: img2
    },
    {
      id: 3,
      title: "MSS Celebration",
      image: img3
    },
    {
      id: 4,
      title: "School Building",
      image: img4
    },
    {
      id: 5,
      title: "Lab Activities",
      image: img5
    },
    {
      id: 6,
      title: "PTA",
      image: img4
    }
  ];

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
                src={item.image}
                alt={item.title}
                loading="lazy"
              />

              <p>{item.title}</p>
            </div>
          ))}

        </div>
      </div>

    </div>
  );
};

export default Gallery;