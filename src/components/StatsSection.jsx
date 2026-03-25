import React from 'react';
import { motion } from 'framer-motion';
import './StatsSection.css';

const StatsSection = () => {
  const stats = [
    { label: 'Teaching', value: 95, icon: '👨‍🏫' },
    { label: 'Facilities', value: 90, icon: '🏫' },
    { label: 'Exams', value: 100, icon: '📝' },
    { label: 'Activities', value: 85, icon: '🎨' }
  ];

  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="stat-item"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="progress-circle">
                <svg viewBox="0 0 100 100">
                  <circle 
                    className="circle-bg" 
                    cx="50" cy="50" r="45" 
                  />
                  <motion.circle 
                    className="circle-progress" 
                    cx="50" cy="50" r="45" 
                    initial={{ strokeDasharray: "0 283" }}
                    whileInView={{ strokeDasharray: `${(stat.value / 100) * 283} 283` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5 + index * 0.2 }}
                  />
                </svg>
                <div className="progress-text">
                  <span className="percent">{stat.value}%</span>
                </div>
              </div>
              <div className="stat-info">
                <span className="stat-icon">{stat.icon}</span>
                <h3>{stat.label}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
