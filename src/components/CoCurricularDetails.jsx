import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { gridActivities } from './Co-curricular';
import { FaArrowLeft } from 'react-icons/fa';
import './CoCurricularDetails.css';

const CoCurricularDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const activity = gridActivities.find(a => a.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!activity) {
    return (
      <div className="activity-not-found">
        <h2>Activity not found</h2>
        <button onClick={() => navigate('/cocurricular')}>Back to Co-Curricular</button>
      </div>
    );
  }

  return (
    <div className="activity-details-page">
      <div className="activity-details-hero" style={{ backgroundImage: `url(${activity.image})` }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>{activity.title}</h1>
        </div>
      </div>
      
      <div className="activity-details-container">
        <Link to="/cocurricular" className="back-link">
          <FaArrowLeft /> Back to all activities
        </Link>
        
        <div className="activity-details-content">
          <div className="main-content">
            <h2>About {activity.title}</h2>
            <div className="description">
              {activity.fullDesc.split('\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>
          
          <div className="sidebar">
            <h3>Other Activities</h3>
            <ul className="other-activities-list">
              {gridActivities.filter(a => a.id !== id).map(a => (
                <li key={a.id}>
                  <Link to={`/cocurricular/${a.id}`}>{a.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoCurricularDetails;
