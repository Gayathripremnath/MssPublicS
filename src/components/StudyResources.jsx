import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaMicroscope, FaLaptopCode, FaChalkboardTeacher, FaBasketballBall, FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './StudyResources.css';

const StudyResources = () => {
  const [index, setIndex] = useState(0);
  const [offsetWidth, setOffsetWidth] = useState(0);
  const trackRef = useRef(null);
  const cardRef = useRef(null);

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

  const nextStep = () => {
    setIndex((prev) => (prev + 1) % facilities.length);
  };

  const prevStep = () => {
    setIndex((prev) => (prev - 1 + facilities.length) % facilities.length);
  };

  useEffect(() => {
    const calculateWidth = () => {
      if (cardRef.current) {
        // Measure the first card + its gap (from track flex gap)
        const styles = window.getComputedStyle(trackRef.current);
        const gap = parseInt(styles.gap) || 30;
        const rect = cardRef.current.getBoundingClientRect();
        setOffsetWidth(rect.width + gap);
      }
    };

    calculateWidth();
    window.addEventListener('resize', calculateWidth);
    
    const timer = setInterval(nextStep, 5000);
    return () => {
      window.removeEventListener('resize', calculateWidth);
      clearInterval(timer);
    };
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
            <button className="carousel-control-btn" onClick={prevStep} aria-label="Previous"><FaChevronLeft /></button>
            <button className="carousel-control-btn" onClick={nextStep} aria-label="Next"><FaChevronRight /></button>
          </div>
        </div>

        {/* Carousel Root */}
        <div className="carousel-root">
          <div className="carousel-track-wrapper">
             <motion.div 
                ref={trackRef}
                className="facilities-slider-track"
                animate={{ x: `-${index * offsetWidth}px` }}
                transition={{ type: "spring", stiffness: 100, damping: 22 }}
             >
                {facilities.map((fac, i) => (
                  <motion.div 
                    key={i} 
                    ref={i === 0 ? cardRef : null}
                    className="fac-card-new"
                    whileHover={{ y: -10 }}
                  >
                    <div className="fac-card-img-box">
                      <img src={fac.img} alt={fac.title} loading="lazy" />
                    </div>
                    <div className="fac-card-content">
                      <div className="fac-card-title-row">
                        <span className="fac-card-icon" style={{ color: fac.color }}>{fac.icon}</span>
                        <h3>{fac.title}</h3>
                      </div>
                      <p>{fac.desc}</p>
                      <div className="fac-card-footer">
                        <a href="#admission" className="apply-now-btn">
                          Apply Now <FaArrowRight className="arrow-icon" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
                {/* Visual Clone for smoother wrapping feel on Desktop when cycling */}
                {facilities.map((fac, i) => (
                  <div key={`clone-${i}`} className="fac-card-new clone">
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
                        <a href="#admission" className="apply-now-btn">
                          Apply Now <FaArrowRight className="arrow-icon" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
             </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default StudyResources;
