import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaCheckCircle, FaUserGraduate, FaCalendarAlt, FaTag,
  FaMicroscope, FaLaptopCode, FaChalkboardTeacher,
  FaBasketballBall, FaArrowRight, FaChevronLeft,
  FaChevronRight,
  FaBook, FaGraduationCap, FaCertificate, FaGlobe, FaLightbulb, FaSchool,
  FaQuoteLeft, FaUsers
} from 'react-icons/fa';

// CSS Imports
import './NewsMarquee.css';
import './AboutSection.css';
import './PrincipalMessage.css';
import './StudyResources.css';
import './BlogSection.css';
import './BackgroundDecor.css';
import './DepartmentSection.css';

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
// 4. PrincipalMessage
// ---------------------------------------------------------
const PrincipalMessage = () => {
  return (
    <section id="principal" className="principal-section">
      <div className="principal-container">
        <div className="principal-content-grid">
          {/* Image Column (Left) */}
          <motion.div
            className="principal-image-col"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="principal-image-container">
              <img src="https://msspublicschool.org/images/sindhu_incharge.jpg" alt="Principal" />
              <div className="image-decoration-dots"></div>
            </div>
          </motion.div>

          {/* Text Column (Right) */}
          <motion.div
            className="principal-text-col"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="principal-tag">
              <span className="tag-line-red"></span>
              <span className="tag-text-red">PRINCIPAL'S VIEW</span>
            </div>
            <h2 className="principal-header-title">A Word from our <span>Principal</span></h2>

            <div className="principal-message-body">
              <p>M.S.S Public School (Senior Secondary) run by Muslim Service Society, offers universally accepted education through CBSE stream. M.S.S Public School therefore meets the long-felt need of the students and parents for a standard school offering effective child centric education. The biggest challenge faced by the educators of today is to prepare students for the challenges of a globalised world.</p>
              <p>Students of today face a world that continually demands new knowledge and abilities. We are committed to nurturing every learner towards excellence.</p>
            </div>

            <div className="principal-sig-box">
              <h3 className="principal-name-main">Mrs. Sindhu</h3>
              <p className="principal-role-main">Principal In-charge</p>
            </div>

            <div className="principal-btn-box">
              <a href="#" className="modern-btn-maroon">Read Full Message</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ---------------------------------------------------------
// 4.5. DepartmentSection (Univet Theme Inspired)
// ---------------------------------------------------------
const DepartmentSection = () => {
  return (
    <section className="dept-container">
      {/* Left Content Column */}
      <div className="dept-content">
        <div className="dept-label">
          <span className="dept-icon">👥</span>
          OUR DEPARTMENTS
        </div>
        
        <h2 className="dept-title">Academic Department</h2>
        
        <p className="dept-description">
          Enroll now to begin your transformative academic journey with us.
        </p>
        
        <button className="dept-button">
          Explore All Section
          <span className="button-dots">⠿</span>
        </button>
      </div>

      {/* Right Image Stack Column */}
      <div className="dept-visuals">
        {/* Top Small Image */}
        <div className="img-wrapper small">
          <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80" alt="Students in library" />
        </div>

        {/* Middle Main Image with Overlay */}
        <div className="img-wrapper large">
          <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80" alt="Student raising hand" />
          <div className="img-overlay">
            <h2>Athletics</h2>
          </div>
        </div>

        {/* Bottom Small Image (Partially visible) */}
        <div className="img-wrapper small">
          <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" alt="Group study" />
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
  const [direction, setDirection] = useState(1); // 1 = Forward, -1 = Backward
  const trackRef = useRef(null);

  const facilities = [
    { img: "https://msspublicschool.org/images/01.jpg", icon: <FaBook />, title: "Library", desc: "A vast collection of books, journals, and digital resources to support academic research and reading habits.", color: "#D31E25" },
    { img: "https://msspublicschool.org/images/02.jpg", icon: <FaBook />, title: "Laboratory", desc: "A vast collection of books, journals, and digital resources to support academic research and reading habits.", color: "#D31E25" },
    { img: "https://msspublicschool.org/images/phys.jpg", icon: <FaMicroscope />, title: "Physics Lab", desc: "Equipped with modern apparatus for exploring the laws of physics through precision experiments.", color: "#222" },
    { img: "https://msspublicschool.org/images/09.jpg", icon: <FaMicroscope />, title: "Biology Lab", desc: "Discovery-based learning with advanced microscopes and specimen collections for life sciences.", color: "#D31E25" },
    { img: "https://msspublicschool.org/images/05.jpg", icon: <FaMicroscope />, title: "Chemistry Lab", desc: "A safe and well-ventilated space for hands-on chemical analysis and experimentation.", color: "#222" },
    { img: "https://msspublicschool.org/images/06.jpg", icon: <FaLaptopCode />, title: "Computer Lab", desc: "Advanced computing labs with high-speed internet to ensure our students are future-ready.", color: "#D31E25" },
    { img: "https://msspublicschool.org/images/07.jpg", icon: <FaBasketballBall />, title: "Sports", desc: "Comprehensive sports facilities promoting physical health, discipline, and team spirit.", color: "#222" },
    { img: "https://msspublicschool.org/images/mss_03.jpg", icon: <FaSchool />, title: "Other Amenities", desc: "Additional facilities including art rooms, music rooms, and safe student living spaces.", color: "#D31E25" }
  ];

  // Oscillating Logic (Ping-Pong 1-2-3-2-1)
  const totalPages = 3;

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => {
        let next = prev + direction;
        if (next >= totalPages) {
          setDirection(-1);
          return prev - 1;
        }
        if (next < 0) {
          setDirection(1);
          return prev + 1;
        }
        return next;
      });
    }, 5000);
    return () => clearInterval(timer);
  }, [direction]);

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
              animate={{ x: `-${index * 100}%` }}
              transition={{ type: "spring", stiffness: 80, damping: 20 }}
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
      <PrincipalMessage />
      <DepartmentSection />
      <FacilitiesSection />
      <SchoolBlog />
    </div>
  );
};

export default Home;
