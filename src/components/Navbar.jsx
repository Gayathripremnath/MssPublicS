import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/mss_logo.png';
import { FaSearch, FaBars, FaSignOutAlt, FaTimes, FaChevronDown, FaThLarge, FaSignInAlt } from 'react-icons/fa';

const Navbar = ({ isScrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-content-fluid">
        
        {/* The Banner Logo */}
        <div className="logo-banner">
          <div className="logo-inner">
            <img src={logo} alt="MSS Logo" className="logo-icon-img" />
            <div className="logo-text-small">SCHOOL OF</div>
            <div className="logo-text-large">M.S.S.</div>
          </div>
        </div>
        
        <div className="nav-links-wrapper">
          <ul className="main-nav">
            <li><a href="#" className="active-link">Home</a></li>
            <li className="dropdown">
              <a href="#">About Us <FaChevronDown className="drop-icon" /></a>
              <ul className="dropdown-menu">
                <li><a href="#">Management</a></li>
                <li><a href="#">Mandatory Disclosure</a></li>
                <li><a href="#">Principal's Message</a></li>
                <li><a href="#">Faculty</a></li>
                <li><a href="#">News & Events</a></li>
                <li><a href="#">Activities</a></li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="#">For CBSE <FaChevronDown className="drop-icon" /></a>
              <ul className="dropdown-menu">
                <li><a href="#">Transfer Certificate</a></li>
                <li><a href="#">Annual Report</a></li>
                <li><a href="#">Book List</a></li>
                <li><a href="#">Circular</a></li>
                <li><a href="#">Curriculum</a></li>
                <li><a href="#">Fire & Safety Certificate</a></li>
                <li><a href="#">Fitness Certificate</a></li>
                <li><a href="#">Affiliation Certificate</a></li>
                <li><a href="#">DEO Certificate</a></li>
                <li><a href="#">NOC</a></li>
                <li><a href="#">Sanitation Certificate</a></li>
                <li><a href="#">Recognition Letter</a></li>
                <li><a href="#">Water Analysis Certificate</a></li>
                <li><a href="#">Trust Certificate</a></li>
                <li><a href="#">Affidavit</a></li>
              </ul>
            </li>
            <li><a href="#">Results</a></li>
            <li><a href="#">Co-Curricular</a></li>
            <li><a href="#">Students</a></li>
            <li><a href="#">Online Admission</a></li>
            <li className="dropdown">
              <a href="#">Gallery <FaChevronDown className="drop-icon" /></a>
              <ul className="dropdown-menu">
                <li><a href="#">Photo Gallery</a></li>
                <li><a href="#">Video Gallery</a></li>
              </ul>
            </li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        <div className="nav-actions">
          <button className="action-btn-icon"><FaSearch /></button>
          <span className="action-separator">|</span>
          <button className="action-btn-icon menu-trigger" onClick={toggleMobileMenu}><FaThLarge size={18}/></button>
          <a href="#" className="btn action-btn-apply">Apply Now <FaSignInAlt style={{marginLeft: '8px'}} /></a>
        </div>
      </div>
      {/* Side Menu Drawer */}
      <div className={`side-drawer-overlay ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}></div>
      <div className={`side-drawer ${isMobileMenuOpen ? 'active' : ''}`}>
          <div className="drawer-header">
            <div className="drawer-logo">
              <img src={logo} alt="MSS Logo" />
              <h3>MSS School</h3>
            </div>
            <button className="drawer-close-btn" onClick={toggleMobileMenu}><FaTimes size={20} /></button>
          </div>
          <div className="drawer-content">
            <p className="drawer-desc">Empowering students through quality education and excellence since 1998.</p>
            <ul className="drawer-menu-list">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">For CBSE</a></li>
              <li><a href="#">Results</a></li>
              <li><a href="#">Co-Curricular</a></li>
              <li><a href="#">Online Admission</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
            <div className="drawer-footer">
              <h4>Contact Info</h4>
              <p>Kozhikode, Kerala</p>
              <p>+91 495 - 2374584</p>
            </div>
          </div>
      </div>
    </nav>
  );
};

export default Navbar;
