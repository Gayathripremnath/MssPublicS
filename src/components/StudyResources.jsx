import React from 'react';
import { motion } from 'framer-motion';
import { FaBookReader, FaFlask, FaLaptopCode, FaChalkboardTeacher, FaBook, FaBullseye } from 'react-icons/fa';
import './StudyResources.css';

const StudyResources = () => {
  const resources = [
    {
      icon: <FaBookReader />,
      title: "Digital Library",
      desc: "Access to 10,000+ books and e-resources"
    },
    {
      icon: <FaFlask />,
      title: "Science Labs",
      desc: "Physics, Chemistry & Biology laboratories"
    },
    {
      icon: <FaLaptopCode />,
      title: "Computer Lab",
      desc: "50+ computers with high-speed internet"
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "Smart Classrooms",
      desc: "Interactive boards in every classroom"
    },
    {
      icon: <FaBook />,
      title: "Study Materials",
      desc: "CBSE syllabus books and reference guides"
    },
    {
      icon: <FaBullseye />,
      title: "Test Series",
      desc: "Regular assessments and mock tests"
    }
  ];

  return (
    <section id="resources" className="resources-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h4 className="section-subtitle">Facilities</h4>
          <h2 className="section-title">Study <span>Resources</span> & Facilities</h2>
          <div className="title-separator mx-auto"></div>
        </motion.div>

        <div className="resources-grid">
          {resources.map((res, index) => (
            <motion.div
              key={index}
              className="resource-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="resource-icon-wrapper">
                {res.icon}
              </div>
              <h3>{res.title}</h3>
              <p>{res.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudyResources;
