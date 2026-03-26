import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaCheckCircle, FaUserGraduate, FaCalendarAlt, FaTag,
  FaMicroscope, FaLaptopCode, FaChalkboardTeacher,
  FaBasketballBall, FaArrowRight, FaChevronLeft,
  FaChevronRight, FaFacebookF, FaInstagram,
  FaLinkedinIn, FaUserFriends, FaShareAlt,
  FaBook, FaGraduationCap, FaCertificate, FaGlobe, FaLightbulb, FaSchool
} from 'react-icons/fa';

// Assets
import teacher1 from '../assets/teacher1.png';
import teacher2 from '../assets/teacher2.png';
import teacher3 from '../assets/teacher3.png';
import grad_cap from '../assets/grad_cap.png';

// CSS Imports
import './NewsMarquee.css';
import './AboutSection.css';
import './TeachersSection.css';
import './PrincipalMessage.css';
import './StudyResources.css';
import './BlogSection.css';
import './BackgroundDecor.css';

// ---------------------------------------------------------
// 0. BackgroundDecorations Component
// ---------------------------------------------------------
const BackgroundDecorations = () => {
  return (
    <div className="floating-bg-icons">
      <FaGraduationCap className="floating-icon icon-1 ani-1" />
      <FaBook className="floating-icon icon-2 ani-2" />
      <FaCertificate className="floating-icon icon-3 ani-3" />
      <FaBook className="floating-icon icon-4 ani-1" />
      <FaGraduationCap className="floating-icon icon-5 ani-2" />
      <FaCertificate className="floating-icon icon-6 ani-3" />
      <FaBook className="floating-icon icon-7 ani-1" />
      <FaGraduationCap className="floating-icon icon-8 ani-2" />
    </div>
  );
};

// ---------------------------------------------------------
// 1. NewsMarquee Section
// ---------------------------------------------------------
const NewsMarquee = () => {
  return (
    <div className="marquee-container">
      <div className="marquee-label">
        <span className="marquee-icon">📰</span> Latest News
      </div>
      <div className="marquee-content-wrapper">
        <div className="marquee-content">
          <p>
            Registration for Admission Classes From KG to IX &gt;&gt; <a href="#">Click here to Apply</a>
            <span className="marquee-separator">|</span>
            Result for Term 1 announced &gt;&gt; <a href="#">Click here to View</a>
          </p>
        </div>
      </div>
    </div>
  );
};

// ---------------------------------------------------------
// 2. AboutSection
// ---------------------------------------------------------
const SchoolAbout = () => {
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
          <div className="about-image-column">
            <motion.div
              className="about-image-container"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img src="https://msspublicschool.org/images/mss.jpg" alt="Students" className="main-about-img" />
              <div className="about-stats-badge">
                <div className="badge-icon">
                  <FaUserGraduate />
                </div>
                <div className="badge-text">
                  <h4>4550+</h4>
                  <p>Admission</p>
                </div>
              </div>
              <div className="about-shape"></div>
            </motion.div>
          </div>

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
                An International Standard <br /> of <span>Excellence School</span>
              </h2>

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

              <div className="about-footer-row">
                <a href="#" className="btn-modern">More About Us <span className="btn-icon"></span></a>
                <div className="years-experience">
                  <div className="exp-icon">
                    <svg viewBox="0 0 100 100" className="wreath-svg">
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

// ---------------------------------------------------------
// 3. TeachersSection 
// ---------------------------------------------------------
const TeachersSection = () => {
  const [index, setIndex] = useState(0);
  const teachers = [
    { name: 'Savannah Nguyen', role: 'Academic Advisor', img: teacher1 },
    { name: 'Kathryn Murphy', role: 'Support Teacher', img: teacher2 },
    { name: 'Cameron Williamson', role: 'Assistant Teacher', img: teacher3 },
    { name: 'Arlene McCoy', role: 'Principal Assistant', img: teacher1 }, // Mock 4th for carousel feel
  ];

  const nextStep = () => setIndex((prev) => (prev + 1) % (teachers.length - (window.innerWidth > 800 ? 2 : window.innerWidth > 480 ? 1 : 0)));

  useEffect(() => {
    const timer = setInterval(nextStep, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="teachers" className="teachers-section">
      <div className="container">
        <header className="teachers-header">
          <div className="teachers-title-box">
            <div className="teachers-tag">
              <FaUserFriends className="tag-icon" />
              <span>OUR TEACHERS</span>
            </div>
            <h2 className="teachers-main-title">Honorable Teacher</h2>
          </div>
          <div className="teachers-header-right">
            <a href="/" className="view-teachers-btn">
              View All Teachers <span className="btn-icon"></span>
            </a>
            <img src={grad_cap} alt="Decor" className="decor-cap" />
          </div>
        </header>

        <div className="teachers-carousel-wrapper">
          <div className="teachers-track-wrapper">
            <motion.div
              className="teachers-track"
              animate={{ x: `-${index * (100 / (window.innerWidth > 800 ? 3 : window.innerWidth > 480 ? 2 : 1))}%` }}
              transition={{ tension: 300, friction: 30, type: "spring" }}
            >
              {teachers.map((t, i) => (
                <div key={i} className="teacher-card">
                  <div className="teacher-img-wrapper">
                    <img src={t.img} alt={t.name} className="teacher-img" />
                    <div className="teacher-social-overlay">
                      <a href="#" className="social-link"><FaLinkedinIn /></a>
                      <a href="#" className="social-link"><FaInstagram /></a>
                      <a href="#" className="social-link"><FaFacebookF /></a>
                    </div>
                  </div>
                  <div className="share-btn-wrapper">
                    <button className="share-btn"><FaShareAlt /></button>
                  </div>
                  <div className="teacher-info">
                    <h3>{t.name}</h3>
                    <p>{t.role}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="teachers-dots">
            {[0, 1, 2].map((dot) => (
              <button
                key={dot}
                className={`dot ${index === dot ? 'active' : ''}`}
                onClick={() => setIndex(dot)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ---------------------------------------------------------
// 4. PrincipalMessage
// ---------------------------------------------------------
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
              <p>M.S.S Public School (Senior Secondary) run by Muslim Service Society, offers universally accepted education through CBSE stream. M.S.S Public School therefore meets the long-felt need of the students and parents for a standard school offering effective child centric education.</p>
              <p>The biggest challenge faced by the educators of today is to prepare students for the challenges of a globalised world. Students of today face a world that continually demands new knowledge and abilities.</p>
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

// ---------------------------------------------------------
// 5. FacilitiesSection
// ---------------------------------------------------------
const FacilitiesSection = () => {
  const [index, setIndex] = useState(0);
  const trackRef = useRef(null);

  const facilities = [
    { img: "https://msspublicschool.org/images/sliders/004.jpg", icon: <FaMicroscope />, title: "Science Lab", desc: "Our high-tech science laboratories are designed to foster curiosity and hands-on experimental learning.", color: "#D31E25" },
    { img: "https://msspublicschool.org/images/mss.jpg", icon: <FaLaptopCode />, title: "Computer Center", desc: "Advanced computing labs with high-speed internet to ensure our students are future-ready.", color: "#222" },
    { img: "https://msspublicschool.org/images/sliders/003.jpg", icon: <FaChalkboardTeacher />, title: "Smart Classroom", desc: "Digital classrooms equipped with interactive boards and modern tools for immersive learning.", color: "#D31E25" },
    { img: "https://msspublicschool.org/images/sliders/004.jpg", icon: <FaBasketballBall />, title: "Sports & Games", desc: "State-of-the-art sports facilities promoting physical health and a collaborative spirit.", color: "#222" }
  ];

  const nextStep = () => setIndex((prev) => (prev + 1) % (facilities.length - (window.innerWidth > 800 ? 2 : window.innerWidth > 480 ? 1 : 0)));
  const prevStep = () => setIndex((prev) => (prev - 1 + (facilities.length - (window.innerWidth > 800 ? 2 : window.innerWidth > 480 ? 1 : 0))) % (facilities.length - (window.innerWidth > 800 ? 2 : window.innerWidth > 480 ? 1 : 0)));

  useEffect(() => {
    const timer = setInterval(nextStep, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="resources" className="resources-section">
      <div className="container">
        <div className="facilities-header-row">
          <motion.div className="header-left" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div className="section-tag"><span className="tag-line"></span><span className="tag-text">ACADEMIC FACILITIES</span></div>
            <h2 className="facilities-main-title">We Excel in New Ways</h2>
          </motion.div>

        </div>
        <div className="carousel-root">
          <div className="carousel-track-wrapper">
            <motion.div
              ref={trackRef}
              className="facilities-slider-track"
              animate={{ x: `-${index * (100 / (window.innerWidth > 800 ? 3 : window.innerWidth > 480 ? 2 : 1))}%` }}
              transition={{ type: "spring", stiffness: 100, damping: 22 }}
            >
              {facilities.map((fac, i) => (
                <div key={i} className="fac-card-new">
                  <div className="fac-card-img-box"><img src={fac.img} alt={fac.title} /></div>
                  <div className="fac-card-content">
                    <div className="fac-card-title-row"><span className="fac-card-icon" style={{ color: fac.color }}>{fac.icon}</span><h3>{fac.title}</h3></div>
                    <p>{fac.desc}</p>
                    <div className="fac-card-footer"><a href="#admission" className="apply-now-btn">Apply Now <FaArrowRight className="arrow-icon" /></a></div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
          <div className="teachers-dots">
            {Array.from({ length: facilities.length - (window.innerWidth > 800 ? 2 : window.innerWidth > 480 ? 1 : 0) }).map((_, dot) => (
              <button
                key={dot}
                className={`dot ${index === dot ? 'active' : ''}`}
                onClick={() => setIndex(dot)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ---------------------------------------------------------
// 6. BlogSection
// ---------------------------------------------------------
const SchoolBlog = () => {
  const newsItems = [
    { img: "https://msspublicschool.org/images/sliders/00.jpg", date: "December 9, 2025", category: "Educations", title: "Advancing Knowledge Through Student Research", author: "MSS Admin", authorImg: "https://msspublicschool.org/images/mss_logo.png" },
    { img: "https://msspublicschool.org/images/sliders/002.jpg", date: "December 9, 2025", category: "Educations", title: "Future-Ready Learning University Innovations", author: "MSS Admin", authorImg: "https://msspublicschool.org/images/mss_logo.png" },
    { img: "https://msspublicschool.org/images/mss.jpg", date: "December 9, 2025", category: "Educations", title: "Exploring the Future of Education in the Digital Age", author: "MSS Admin", authorImg: "https://msspublicschool.org/images/mss_logo.png" },
    { img: "https://msspublicschool.org/images/sliders/004.jpg", date: "December 9, 2025", category: "Educations", title: "The Power of Online Learning Flexibility Meets Opportunity", author: "MSS Admin", authorImg: "https://msspublicschool.org/images/mss_logo.png" }
  ];

  return (
    <section id="news" className="blog-section">
      <div className="container">
        <div className="section-header-row">
          <motion.div className="header-left" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div className="section-tag"><span className="tag-line"></span><span className="tag-text">BLOG & NEWS</span></div>
            <h2 className="news-main-title">Read Our Latest News</h2>
          </motion.div>
          <motion.div className="header-right" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}><a href="#" className="view-all-btn">View All Post <span className="btn-dots">...</span></a></motion.div>
        </div>
        <div className="news-grid">
          {newsItems.map((item, index) => (
            <motion.div key={index} className="news-card-horizontal" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} whileHover={{ y: -5 }}>
              <div className="news-card-img"><img src={item.img} alt={item.title} /></div>
              <div className="news-card-info">
                <div className="news-meta"><span className="meta-item"><FaTag className="meta-icon" /> {item.category}</span><span className="meta-item"><FaCalendarAlt className="meta-icon" /> {item.date}</span></div>
                <h3>{item.title}</h3>
                <div className="news-author"><img src={item.authorImg} alt={item.author} className="author-thumb" /><span>{item.author}</span></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ---------------------------------------------------------
// MAIN Home Component
// ---------------------------------------------------------
const Home = () => {
  return (
    <div className="main-home-wrapper" style={{ position: 'relative' }}>
      <BackgroundDecorations />
      <NewsMarquee />
      <SchoolAbout />
      <TeachersSection />
      <PrincipalMessage />
      <FacilitiesSection />
      <SchoolBlog />
    </div>
  );
};

export default Home;
