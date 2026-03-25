import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaGlobe, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-container">
          
          {/* Contact Info */}
          <div className="footer-column contact-info">
            <h3>Contact Us</h3>
            <div className="footer-widget-content">
              <ul>
                <li>
                  <FaPhoneAlt className="footer-icon" /> 
                  <span>Phone: +91 496-2374584, 2374585</span>
                </li>
                <li>
                  <FaEnvelope className="footer-icon" /> 
                  <span>Email: msspublicschool@gmail.com</span>
                </li>
                <li>
                  <FaGlobe className="footer-icon" /> 
                  <span>Web: www.msspublicschool.com</span>
                </li>
                <li>
                  <FaMapMarkerAlt className="footer-icon" /> 
                  <span>Mavilikkadavu, Kozhikode - 673 010</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column quick-links">
            <h3>Quick Links</h3>
            <div className="footer-widget-content">
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Admissions</a></li>
                <li><a href="#">Academics</a></li>
                <li><a href="#">Facilities</a></li>
                <li><a href="#">Gallery</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-column quick-links">
            <h3>Latest News</h3>
            <div className="footer-widget-content">
              <ul className="news-list">
                <li><a href="#">Registration for Admission Classes From KG to IX</a></li>
                <li><a href="#">Result for Term 1 announced</a></li>
                <li><a href="#">Annual Sports Day 2026</a></li>
              </ul>
            </div>
          </div>

          {/* Social Section */}
          <div className="footer-column social-section">
            <h3>Follow Us</h3>
            <div className="footer-widget-content">
              <p>Stay connected with us on social media for latest updates and events.</p>
              <div className="social-links">
                <a href="#" className="social-icon facebook"><FaFacebookF /></a>
                <a href="#" className="social-icon twitter"><FaTwitter /></a>
                <a href="#" className="social-icon instagram"><FaInstagram /></a>
                <a href="#" className="social-icon youtube"><FaYoutube /></a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom-bar">
        <div className="container">
          <div className="footer-bottom-content">
            <p>&copy; 2026 | Designed by Genova Technologies Pvt Ltd</p>
            <ul className="footer-bottom-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Activities</a></li>
              <li><a href="#">Gallery</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
