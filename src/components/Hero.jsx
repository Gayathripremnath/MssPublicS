import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGraduationCap, FaAngleRight } from 'react-icons/fa';
import './Hero.css';

import logo from '../assets/mss_logo.png'

const Hero = () => {
  const images = [
    'https://msspublicschool.org/images/sliders/004.jpg',
    'https://msspublicschool.org/images/sliders/003.jpg'
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // 5 seconds interval
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-bg-wrapper">
        <AnimatePresence>
          <motion.div 
            key={currentIndex}
            className="hero-bg" 
            style={{ backgroundImage: `url(${images[currentIndex]})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "linear" }}
          ></motion.div>
        </AnimatePresence>
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container hero-content">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-text-content"
        >
          
          <motion.div
            className="hero-title-wrapper"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h1 className="hero-title"> International  </h1>
            <div className="hero-title-row">
              <span className="hero-title-icon"><img src={logo} alt="" /></span>
              <h1 className="hero-title">School</h1>
            </div>
          </motion.div>

          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a href="#" className="btn hero-btn">
              Join Our School <span className="btn-dots">...</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
