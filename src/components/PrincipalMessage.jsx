import React from 'react';
import { motion } from 'framer-motion';
import './PrincipalMessage.css';

const PrincipalMessage = () => {
  return (
    <section id="principal" className="principal-section">
      <div className="container">
        <div className="principal-content-area">
          <motion.div 
            className="principal-text-box"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="section-subtitle">Principal's View</h4>
            <h2 className="section-title">Principal's <span>Message</span></h2>
            <div className="title-separator"></div>

            <div className="principal-desc">
              <p>
                M.S.S Public School (Senior Secondary) run by Muslim Service Society, 
                offers universally accepted education through CBSE stream. M.S.S Public School 
                therefore meets the long-felt need of the students and parents for a standard 
                school offering effective child centric education.
              </p>
              <p>
                The biggest challenge faced by the educators of today is to prepare students 
                for the challenges of a globalised world. Students of today face a world that 
                continually demands new knowledge and abilities.
              </p>
            </div>
            
            <a href="#" className="btn principal-btn">Read Full Message</a>
          </motion.div>

          <motion.div 
            className="principal-img-box"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="principal-img-wrapper">
              <img src="https://msspublicschool.org/images/sindhu_incharge.jpg" alt="Principal" />
              <div className="principal-info">
                <h4>Sindhu</h4>
                <p>Principal In-charge</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PrincipalMessage;
