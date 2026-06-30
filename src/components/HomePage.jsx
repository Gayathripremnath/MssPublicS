import React from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown, FaAddressCard, FaUserGraduate } from 'react-icons/fa';
import './HomePage.css';

const HomePage = () => {
  return (
    <section className="hp-welcome-section">
      <div className="container">

        {/* Admission Banners */}
        <div id="admission" className="hp-admission-banners">

          {/* Card 1 */}
          <motion.div
            className="hp-admission-card-wrapper"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <a
              href="https://msspublicschool.sactin.com/online"
              target="_blank"
              rel="noopener noreferrer"
              className="hp-admission-card"
            >
              <div className="hp-admission-card-content">
                <div className="hp-admission-icon-wrapper">
                  <FaAddressCard className="hp-admission-icon" />
                </div>

                <div className="hp-admission-text-wrapper">
                  <h3>ADMISSION OPEN</h3>
                  <p>For All Classes From KG To IX</p>
                </div>
              </div>

              <div className="hp-admission-card-bottom">
                <span className="hp-admission-circle-btn">
                  <FaChevronDown />
                </span>
              </div>
            </a>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="hp-admission-card-wrapper"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <a
              href="https://msspublicschool.sactin.com/online"
              target="_blank"
              rel="noopener noreferrer"
              className="hp-admission-card"
            >
              <div className="hp-admission-card-content">
                <div className="hp-admission-icon-wrapper">
                  <FaUserGraduate className="hp-admission-icon" />
                </div>

                <div className="hp-admission-text-wrapper">
                  <h3>ADMISSION OPEN</h3>
                  <p>Class XI & XII</p>
                </div>
              </div>

              <div className="hp-admission-card-bottom">
                <span className="hp-admission-circle-btn">
                  <FaChevronDown />
                </span>
              </div>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HomePage;