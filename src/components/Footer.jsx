import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaGlobe, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="site-footer">
      <div className="container">
        <div className="footer-container">
          
          
          <div className="footer-column contact-info">
            <h3>Contact Us</h3>
            <div className="footer-widget-content">
              <ul>
                <li>
                  <FaPhoneAlt className="footer-icon" /> 
                  <span>Phone: <a href="tel:+914962374584" style={{ color: 'inherit', textDecoration: 'none' }}>+91 496-2374584</a>, <a href="tel:+914952374585" style={{ color: 'inherit', textDecoration: 'none' }}>2374585</a></span>
                </li>
                <li>
                  <FaEnvelope className="footer-icon" /> 
<a href="mailto:msspublicschool@gmail.com">
  Email: msspublicschool@gmail.com
</a>                </li>
                <li>
                  <FaGlobe className="footer-icon" /> 
<a
  href="https://msspublicschool.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Web: www.msspublicschool.org
</a>                </li>
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
                <li><a href="/about">About Us</a></li>
                <li><a href="/admission">Admissions</a></li>
                <li><a href="/activities">Academics</a></li>
                <li><a href="/facilities">Facilities</a></li>
                <li><a href="/gallery">Gallery</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-column quick-links">
            <h3>Latest News</h3>
            <div className="footer-widget-content">
              <ul className="news-list">
                <li><a href="/admission">Registration for Admission Classes From KG to IX</a></li>
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
<a
  href="https://www.facebook.com/p/M-S-S-Public-School-100068983972724/"
  target="_blank"
  rel="noopener noreferrer"
  className="social-icon facebook"
>
  <FaFacebookF />
</a>              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom-bar">
        <div className="container">
          <div className="footer-bottom-content">
            <p>&copy; 2026 | Designed by Genova Technologies Pvt Ltd</p>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
