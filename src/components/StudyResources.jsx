import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMicroscope, FaLaptopCode, FaChalkboardTeacher, FaBasketballBall, FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './StudyResources.css';

const StudyResources = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const facilities = [
    {
      img: "https://msspublicschool.org/images/sliders/004.jpg",
      icon: <FaMicroscope />,
      title: "Science Lab",
      desc: "Our high-tech science laboratories are designed to foster curiosity and hands-on experimental learning.",
      color: "#D31E25"
    },
    {
      img: "https://msspublicschool.org/images/mss.jpg",
      icon: <FaLaptopCode />,
      title: "Computer Center",
      desc: "Advanced computing labs with high-speed internet to ensure our students are future-ready.",
      color: "#222"
    },
    {
      img: "https://msspublicschool.org/images/sliders/003.jpg",
      icon: <FaChalkboardTeacher />,
      title: "Smart Classroom",
      desc: "Digital classrooms equipped with interactive boards and modern tools for immersive learning.",
      color: "#D31E25"
    },
    {
      img: "https://msspublicschool.org/images/sliders/004.jpg", 
      icon: <FaBasketballBall />,
      title: "Sports & Games",
      desc: "State-of-the-art sports facilities promoting physical health and a collaborative spirit.",
      color: "#222"
    }
  ];

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  };

  const nextStep = () => {
    setDirection(1);
    setIndex((prevIndex) => (prevIndex + 1) % facilities.length);
  };

  const prevStep = () => {
    setDirection(-1);
    setIndex((prevIndex) => (prevIndex - 1 + facilities.length) % facilities.length);
  };

  useEffect(() => {
    const timer = setInterval(nextStep, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="resources" className="resources-section">
      <div className="container">
        
        {/* Header Row */}
        <div className="facilities-header-row">
          <motion.div 
            className="header-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="section-tag">
              <span className="tag-line"></span>
              <span className="tag-text">ACADEMIC FACILITIES</span>
            </div>
            <h2 className="facilities-main-title">We Excel in New Ways</h2>
          </motion.div>
          
          <div className="header-right carousel-controls">
            <button className="carousel-control-btn" onClick={prevStep}><FaChevronLeft /></button>
            <button className="carousel-control-btn" onClick={nextStep}><FaChevronRight /></button>
          </div>
        </div>

        {/* Carousel Viewport */}
        <div className="carousel-viewport">
          <div className="carousel-cards-container">
               {/* Show 3 cards at a time on desktop, scrolling through them */}
               {facilities.map((fac, i) => {
                 // Logic to determine if card should be visible (modelling a window)
                 const isVisible = (i >= index && i < index + 3) || (index + 3 > facilities.length && i < (index + 3) % facilities.length);
                 
                 // However, for simpler animation, we'll use a sliding row
                 return null;
               })}

               {/* REFINED SLIDER: CSS-driven with state-controlled transform */}
               <motion.div 
                  className="facilities-slider-track"
                  animate={{ x: `-${index * 430}px` }} // 400px width + 30px gap
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
               >
                  {/* Triple the items to create a pseudo-infinite feel */}
                  {[...facilities, ...facilities].map((fac, i) => (
                    <motion.div 
                      key={i} 
                      className="fac-card-new"
                      whileHover={{ y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="fac-card-img-box">
                        <img src={fac.img} alt={fac.title} />
                      </div>
                      <div className="fac-card-content">
                        <div className="fac-card-title-row">
                          <span className="fac-card-icon" style={{ color: fac.color }}>{fac.icon}</span>
                          <h3>{fac.title}</h3>
                        </div>
                        <p>{fac.desc}</p>
                        <div className="fac-card-footer">
                          <a href="#" className="apply-now-btn">
                            Apply Now <FaArrowRight className="arrow-icon" />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
               </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default StudyResources;
