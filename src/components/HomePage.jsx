import React from 'react';
import { motion } from 'framer-motion';
import './HomePage.css';
import NewsMarquee from './NewsMarquee';

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
      </div>
    </section>
  );
};

export default HomePage;
