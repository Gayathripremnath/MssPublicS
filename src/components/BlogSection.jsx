import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaTag } from 'react-icons/fa';
import './BlogSection.css';

const BlogSection = () => {
  const newsItems = [
    {
      img: "https://msspublicschool.org/images/sliders/004.jpg",
      date: "December 9, 2025",
      category: "Educations",
      title: "Advancing Knowledge Through Student Research",
      author: "MSS Admin",
      authorImg: "https://msspublicschool.org/images/mss_logo.png"
    },
    {
      img: "https://msspublicschool.org/images/sliders/003.jpg",
      date: "December 9, 2025",
      category: "Educations",
      title: "Future-Ready Learning University Innovations",
      author: "MSS Admin",
      authorImg: "https://msspublicschool.org/images/mss_logo.png"
    },
    {
      img: "https://msspublicschool.org/images/mss.jpg",
      date: "December 9, 2025",
      category: "Educations",
      title: "Exploring the Future of Education in the Digital Age",
      author: "MSS Admin",
      authorImg: "https://msspublicschool.org/images/mss_logo.png"
    },
    {
      img: "https://msspublicschool.org/images/sliders/004.jpg",
      date: "December 9, 2025",
      category: "Educations",
      title: "The Power of Online Learning Flexibility Meets Opportunity",
      author: "MSS Admin",
      authorImg: "https://msspublicschool.org/images/mss_logo.png"
    }
  ];

  return (
    <section id="news" className="blog-section">
      <div className="container">
        
        {/* Header Row */}
        <div className="section-header-row">
          <motion.div 
            className="header-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="section-tag">
              <span className="tag-line"></span>
              <span className="tag-text">BLOG & NEWS</span>
            </div>
            <h2 className="news-main-title">Read Our Latest News</h2>
          </motion.div>
          
          <motion.div 
            className="header-right"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <a href="#" className="view-all-btn">
              View All Post <span className="btn-dots">...</span>
            </a>
          </motion.div>
        </div>

        {/* News Grid */}
        <div className="news-grid">
          {newsItems.map((item, index) => (
            <motion.div 
              key={index}
              className="news-card-horizontal"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="news-card-img">
                <img src={item.img} alt={item.title} />
              </div>
              <div className="news-card-info">
                <div className="news-meta">
                  <span className="meta-item"><FaTag className="meta-icon" /> {item.category}</span>
                  <span className="meta-item"><FaCalendarAlt className="meta-icon" /> {item.date}</span>
                </div>
                <h3>{item.title}</h3>
                <div className="news-author">
                  <img src={item.authorImg} alt={item.author} className="author-thumb" />
                  <span>{item.author}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BlogSection;
