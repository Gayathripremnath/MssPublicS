import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence ,useTransform,useScroll} from 'framer-motion';
import {
  FaCheckCircle, FaUserGraduate, FaCalendarAlt, FaTag,
  FaMicroscope, FaLaptopCode, FaChalkboardTeacher,
  FaBasketballBall, FaArrowRight, FaChevronLeft,
  FaChevronRight,
  FaBook, FaGraduationCap, FaCertificate, FaGlobe, FaLightbulb, FaSchool,
  FaQuoteLeft, FaUsers
} from 'react-icons/fa';
import sindhu from '../assets/sindhu_incharge.jpg';
// CSS Imports
import './NewsMarquee.css';
import './AboutSection.css';
import './Principal.css';
import './StudyResources.css';
import './BlogSection.css';
import './BackgroundDecor.css';
import './DepartmentSection.css';
import affairsImg from '../assets/affairs.jpg';
import cultureImg from '../assets/cultural.jpg';
import museumImg from '../assets/44001.jpg';
import chemi from '../assets/chemi.jpg';
import physics from '../assets/phy.jpg';
import comp from '../assets/comp.jpg';
import sports from '../assets/sports.jpeg';
import other from '../assets/other.jpg';
import library from '../assets/libr.jpg';
import bio from '../assets/bio.jpg';
import labImg from '../assets/lab.jpg';
import mss from '../assets/mss7.jpg';
import online from '../assets/online.jpg';
import future from '../assets/05.jpg';



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
              <img src={museumImg} alt="Students" className="main-about-img" />
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
                A public school with  <br /><span>standards of excellence.</span>
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
                <a href="/about" className="btn-modern">More About Us <span className="btn-icon"></span></a>
                <div className="years-experience">
                  <div className="exp-icon">

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
    <div className="principal-container">

    
      {/* Content Section */}
      <div className="principal-content-wrapper">
        <div className="principal-grid">

          {/* Left Side */}
          <div className="principal-sidebar">
            <div className="image-card">
              <img
                src={sindhu}
                alt="Principal Sindhu B P"
                className="principal-image"
              />

              <div className="principal-meta">
                <h3>Sindhu B P</h3>
                <p className="credentials">M.A., B.Ed.</p>
                <p className="designation">
                  Principal, M.S.S Public School
                </p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="principal-text-section">

            <p className="intro-text">
              <strong>M.S.S Public School (Senior Secondary)</strong>,
              run by Muslim Service Society, offers universally accepted
              education through the CBSE stream. The school provides
              child-centric education focusing on the all-round
              development of body, mind, and spirit.The biggest challenge faced by educators today is preparing
              students for the demands of a globalized world. Students
              need to become adaptable lifelong learners with strong
              communication, critical thinking, and creative problem-solving
              skills.
            </p>

            <blockquote>
              "The crux of education is after all, the education of the heart.
              We want our pupils to develop valuable life skills and become
              more independent and confident individuals."
            </blockquote>

            <p>
              Education at M.S.S Public School develops a global outlook
              while maintaining respect for our homeland and cultural
              values. The curriculum helps students understand worldwide
              developments and prepares them to collaborate effectively
              with people from diverse backgrounds.It will remain our constant endeavor to provide quality
              education that inspires a passion for learning and nurtures
              reflective, responsive, and adaptable individuals capable of
              meeting the challenges of a rapidly changing world.
            </p>
        

            <div className="sign-off">
              <p>Warm Regards,</p>
              <h4>Sindhu B P</h4>
              <span>Principal</span>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
};


// ---------------------------------------------------------
// 4.5. DepartmentSection (Academic experience grid)
// ---------------------------------------------------------
const DepartmentSection = () => {
  const cards = [
    {
      title: "Student Affairs",
      desc:
        "Begin your academic journey with flexible entry requirements and application.",
      img:affairsImg,
        
    },
    {
      title: "Cultural Organizations",
      desc:
        "Advance your career with streamlined graduate program admissions with mss school.",
      img:
        cultureImg,
    },
    {
      title: "Museums",
      desc:
        "Join a diverse campus community through a simple application and visa guidance.",
      img:
        museumImg,
    },
  ];

  const stats = [
    { value: "200K+", title: "Active Student Clubs", desc: "Clubs encourage leadership" },
    { value: "80+", title: "Cultural Events", desc: "Enrich campus life" },
    { value: "120+", title: "Sports Activities", desc: "Fitness and a healthy lifestyle" },
    { value: "100+", title: "School Organizations", desc: "Student involvement across" },
  ];

  return (
    <section className="dept-container">
      <div className="dept-heading">
        <div className="dept-label">OUR DEPARTMENTS</div>
        <h2 className="dept-title">Academic Department</h2>
        <p className="dept-subtitle">
          Enroll now to begin your transformative academic journey with us.
        </p>
      </div>

      <div className="academic-cards">
        {cards.map((card) => (
          <div className="academic-card" key={card.title}>
            <span className="card-accent" aria-hidden="true"></span>
            <h3>{card.title}</h3>
            <p className="card-desc">{card.desc}</p>
            <div className="card-image">
              <img src={card.img} alt={card.title} />
            </div>
          </div>
        ))}
      </div>

      <div className="academic-stats">
        {stats.map((item) => (
          <div className="stat" key={item.title}>
            <div className="stat-value">{item.value}</div>
            <div className="stat-title">{item.title}</div>
            <div className="stat-desc">{item.desc}</div>
          </div>
        ))}
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
    { img: library, icon: <FaBook />, title: "Library", desc: "A vast collection of books, journals, and digital resources to support academic research and reading habits.", color: "#D31E25" },
    { img: labImg, icon: <FaBook />, title: "Laboratory", desc: "A vast collection of books, journals, and digital resources to support academic research and reading habits.", color: "#D31E25" },
    { img: physics, icon: <FaMicroscope />, title: "Physics Lab", desc: "Equipped with modern apparatus for exploring the laws of physics through precision experiments.", color: "#222" },
    { img: bio, icon: <FaMicroscope />, title: "Biology Lab", desc: "Discovery-based learning with advanced microscopes and specimen collections for life sciences.", color: "#D31E25" },
    { img: chemi, icon: <FaMicroscope />, title: "Chemistry Lab", desc: "A safe and well-ventilated space for hands-on chemical analysis and experimentation.", color: "#222" },
    { img: comp, icon: <FaLaptopCode />, title: "Computer Lab", desc: "Advanced computing labs with high-speed internet to ensure our students are future-ready.", color: "#D31E25" },
    { img: sports, icon: <FaBasketballBall />, title: "Sports", desc: "Comprehensive sports facilities promoting physical health, discipline, and team spirit.", color: "#222" },
    { img: other, icon: <FaSchool />, title: "Other Amenities", desc: "Additional facilities including art rooms, music rooms, and safe student living spaces.", color: "#D31E25" }
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
                    <div className="fac-card-footer"><a href="/facilities" className="apply-now-btn">Read More<FaArrowRight className="arrow-icon" /></a></div>
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
    { img: mss, date: "December 9, 2025", category: "Educations", title: "Advancing Knowledge Through Student Research", author: "MSS Admin", authorImg: "https://msspublicschool.org/images/sindhu.jpg" },
    { img: future, date: "December 9, 2025", category: "Educations", title: "Future-Ready Learning University Innovations", author: "MSS Admin", authorImg: "https://msspublicschool.org/images/sindhu.jpg" },
    { img: comp, date: "December 9, 2025", category: "Educations", title: "Exploring the Future of Education in the Digital Age", author: "MSS Admin", authorImg: "https://msspublicschool.org/images/sindhu.jpg" },
    { img: online, date: "December 9, 2025", category: "Educations", title: "The Power of Online Learning Flexibility Meets Opportunity", author: "MSS Admin", authorImg: "https://msspublicschool.org/images/sindhu.jpg" }
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
