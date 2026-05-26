import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { facilitiesData } from './Facilities';
import { FaArrowLeft } from 'react-icons/fa';
import './FacilityDetails.css';

const FacilityDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const facility = facilitiesData.find(f => f.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!facility) {
    return (
      <div className="facility-not-found">
        <h2>Facility not found</h2>
        <button onClick={() => navigate('/facilities')}>Back to Facilities</button>
      </div>
    );
  }

  return (
    <div className="facility-details-page">
      <div className="facility-details-hero" style={{ backgroundImage: `url(${facility.image})` }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>{facility.title}</h1>
        </div>
      </div>
      
      <div className="facility-details-container">
        <Link to="/facilities" className="back-link">
          <FaArrowLeft /> Back to all facilities
        </Link>
        
        <div className="facility-details-content">
          <div className="main-content">
            <h2>About {facility.title}</h2>
            <div className="description">
              {facility.fullDesc.split('\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>
          
          <div className="sidebar">
            <h3>Other Facilities</h3>
            <ul className="other-facilities-list">
              {facilitiesData.filter(f => f.id !== id).map(f => (
                <li key={f.id}>
                  <Link to={`/facilities/${f.id}`}>{f.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilityDetails;
