import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckCircle, FaUserGraduate } from 'react-icons/fa';
import './AboutSection.css';

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState('mission');

  const tabContent = {
    mission: "Our mission is to provide a safe, inclusive, and engaging learning environment that empowers students to achieve academic excellence, develop critical thinking, and become responsible, compassionate members of society.",
    vision: "To be a globally recognized center of educational excellence, nurturing future leaders through innovation, character building, and holistic development.",
    values: "We value integrity, respect, perseverance, and collaborative spirit. Our core principles guide every student toward becoming a contributor to the global community."
  };

  return (
    <section id="about" className="about-school-section">
      <div className="container">
        <div className="about-content-wrapper">
          
          {/* Left Side: Creative Image Box */}
          <div className="about-image-column">
            <motion.div 
              className="about-image-container"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img src="https://msspublicschool.org/images/mss.jpg" alt="Students" className="main-about-img" />
              
              {/* Overlapping Badge */}
              <div className="about-stats-badge">
                <div className="badge-icon">
                  <FaUserGraduate />
                </div>
                <div className="badge-text">
                  <h4>4550+</h4>
                  <p>Admission</p>
                </div>
              </div>
              
              {/* Decorative Shape */}
              <div className="about-shape"></div>
            </motion.div>
          </div>

          {/* Right Side: Text Content */}
          <div className="about-text-column">
            <motion.div 
              className="about-text-content"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="section-tag">
                <span className="tag-line"></span>
                <span className="tag-text">ABOUT OUR SCHOOL</span>
              </div>
              <h2 className="about-main-title">
                An International Standard <br/> of <span>Excellence School</span>
              </h2>

              {/* Tabs Section */}
              <div className="about-tabs">
                <button 
                  className={`tab-btn ${activeTab === 'mission' ? 'active' : ''}`}
                  onClick={() => setActiveTab('mission')}
                >
                  Mission
                </button>
                <button 
                  className={`tab-btn ${activeTab === 'vision' ? 'active' : ''}`}
                  onClick={() => setActiveTab('vision')}
                >
                  Vision
                </button>
                <button 
                  className={`tab-btn ${activeTab === 'values' ? 'active' : ''}`}
                  onClick={() => setActiveTab('values')}
                >
                  Values
                </button>
              </div>

              <div className="tab-panel">
                <AnimatePresence mode="wait">
                  <motion.p 
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="tab-desc"
                  >
                    {tabContent[activeTab]}
                  </motion.p>
                </AnimatePresence>
              </div>

              {/* Checkmarks */}
              <div className="about-features">
                <div className="feature-item">
                  <FaCheckCircle className="check-icon" />
                  <span>World-Class Education System</span>
                </div>
                <div className="feature-item">
                  <FaCheckCircle className="check-icon" />
                  <span>Modern Campus Facilities</span>
                </div>
                <div className="feature-item">
                  <FaCheckCircle className="check-icon" />
                  <span>Expert Academic Faculty</span>
                </div>
                <div className="feature-item">
                  <FaCheckCircle className="check-icon" />
                  <span>Safe & Secure Environment</span>
                </div>
              </div>

              {/* Footer Row */}
              <div className="about-footer-row">
                <a href="#" className="btn-modern">More About Us <span className="btn-icon"></span></a>
                
                <div className="years-experience">
                  <div className="exp-icon">
                    <svg viewBox="0 0 100 100" className="wreath-svg">
                       {/* Simplified Wreath Icon */}
                       <path d="M50,10 C25,10 10,25 10,50 C10,75 25,90 50,90 C75,90 90,75 90,50" fill="none" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </div>
                  <div className="exp-text">
                    <h3>25+</h3>
                    <p>Years of Education</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
