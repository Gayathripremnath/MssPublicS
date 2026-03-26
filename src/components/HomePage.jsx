import React from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown, FaAddressCard, FaBookOpen, FaUserGraduate } from 'react-icons/fa';
import './HomePage.css';

const HomePage = () => {
  return (
    <section className="welcome-section">
      <div className="container">
     
        {/* Admission Banners */}
        <div id="admission" className="admission-banners">
          <motion.div 
            className="admission-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="admission-card-content">
              <div className="admission-icon-wrapper">
                <FaAddressCard className="admission-icon" />
              </div>
              <div className="admission-text-wrapper">
                <h3>Junior School</h3>
                <p>Our programs are designed to develop skilled legal....</p>
              </div>
            </div>
            <div className="admission-card-bottom">
              <a href="#" className="admission-circle-btn">
                <FaChevronDown />
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="admission-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="admission-card-content">
              <div className="admission-icon-wrapper">
                <FaBookOpen className="admission-icon" />
              </div>
              <div className="admission-text-wrapper">
                <h3>Boarding School</h3>
                <p>Our programs are designed to develop skilled legal...</p>
              </div>
            </div>
            <div className="admission-card-bottom">
              <a href="#" className="admission-circle-btn">
                <FaChevronDown />
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="admission-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="admission-card-content">
              <div className="admission-icon-wrapper">
                <FaUserGraduate className="admission-icon" />
              </div>
              <div className="admission-text-wrapper">
                <h3>Senior School</h3>
                <p>Our programs are designed to develop skilled legal...</p>
              </div>
            </div>
            <div className="admission-card-bottom">
              <a href="#" className="admission-circle-btn">
                <FaChevronDown />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
