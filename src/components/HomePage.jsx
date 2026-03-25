import React from 'react';
import { motion } from 'framer-motion';
import './HomePage.css';
import NewsMarquee from './NewsMarquee';

const HomePage = () => {
  return (
    <section className="welcome-section">
      <div className="container">
     
        {/* Admission Banners */}
        <div className="admission-banners">
          <motion.div 
            className="admission-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="admission-card-content">
              <div className="admission-icon-wrapper">
                <img src="https://univet.rstheme.com/red-school/wp-content/uploads/2023/12/f2-1.png" alt="KG to IX" className="admission-icon-img" />
              </div>
              <div className="admission-text-wrapper">
                <h3>KG to IX</h3>
                <p>Admission open for all classes from KG to IX. Enroll your child today.</p>
              </div>
            </div>
            <div className="admission-card-bottom">
              <a href="#" className="admission-circle-btn">
                <i className="arrow-down">⋁</i>
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
                <img src="https://univet.rstheme.com/red-school/wp-content/uploads/2023/12/f3-1.png" alt="Class XI & XII" className="admission-icon-img" />
              </div>
              <div className="admission-text-wrapper">
                <h3>Class XI & XII</h3>
                <p>Admission open for Class XI & XII. Science and Commerce streams.</p>
              </div>
            </div>
            <div className="admission-card-bottom">
              <a href="#" className="admission-circle-btn">
                <i className="arrow-down">⋁</i>
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
                <img src="https://univet.rstheme.com/red-school/wp-content/uploads/2023/12/f1-2.png" alt="Apply Online" className="admission-icon-img" />
              </div>
              <div className="admission-text-wrapper">
                <h3>Apply Online</h3>
                <p>Register online through our portal and secure your seat for this year.</p>
              </div>
            </div>
            <div className="admission-card-bottom">
              <a href="#" className="admission-circle-btn">
                <i className="arrow-down">⋁</i>
              </a>
            </div>
          </motion.div>
        </div>

        {/* News Marquee under admission section */}
        <NewsMarquee />

        {/* Welcome Area */}
        <div className="welcome-area">
          <motion.div 
            className="welcome-img-box"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="img-wrapper">
              <img src="img2.jpg" alt="Welcome to MSS Public School" />
              <div className="experience-badge">
                <span className="years">25+</span>
                <span className="text">Years of<br/>Excellence</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="welcome-text-box"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="wel-text">
              <h4 className="section-subtitle">About Us</h4>
              <h1 className="section-title">Welcome to <span>M.S.S. Public School</span></h1>
              <div className="title-separator"></div>
              
              <p className="welcome-desc">
                M.S.S. Public School is a leading mixed school, situated in the suburbs of Kozhikode city. 
                It caters to the needs of students of the society on masse, irrespective of their caste and creed.
              </p>
              <p className="welcome-desc">
                It prepares students according to the set standards, curricular and co-curricular as well, 
                prevailing in national and international level.
              </p>
              
              <a href="#" className="read-more-btn">Learn More</a>
            </div>
          </motion.div>
        </div>

        {/* Register Section (New) */}
        <div className="register-banners-row">
          <motion.div 
            className="register-banner-item"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img src="mss_admission_img.jpg" alt="Admission Open" />
          </motion.div>
          <motion.div 
            className="register-banner-item"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img src="plustwo.jpg" alt="Plus Two Admission" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
