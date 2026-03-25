import React from 'react';
import './TopBar.css';
import { FaGraduationCap, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-fluid">
        <div className="top-bar-left">
          <span className="info-item welcome-msg">
            <FaGraduationCap className="icon white-icon" /> Welcome To M.S.S. Public School
          </span>
        </div>
        <div className="top-bar-right">
          <span className="info-item">
            <FaMapMarkerAlt className="icon white-icon" /> Mavilikadavu, Kozhikode
          </span>
          <span className="info-item-separator">|</span>
          <span className="info-item">
            <FaPhoneAlt className="icon white-icon" /> +91 495 - 2374584, 2374585
          </span>
          <span className="info-item-separator">|</span>
          <span className="info-item">
            <FaEnvelope className="icon white-icon" /> msspublicschool@gmail.com
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
