import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/mss_logo.png';
import { FaSearch, FaBars, FaSignOutAlt, FaTimes, FaChevronDown, FaThLarge, FaSignInAlt } from 'react-icons/fa';

const Navbar = ({ isScrolled, isNavHidden, isBannerHidden, isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isNavHidden ? 'nav-hidden' : ''} ${isBannerHidden ? 'banner-hidden' : ''}`}>
      <div className="nav-content-fluid">

        {/* The Banner Logo */}
        <div className="logo-banner">
          <div className="logo-inner">
            <img src={logo} alt="MSS Logo" className="logo-icon-img" />
            <div className="logo-text-small">MSS</div>
            <div className="logo-text-large">PUBLIC SCHOOL</div>
          </div>
        </div>

        {/* Compact logo shown only after scroll */}
        <div className="logo-compact">
          <img src={logo} alt="MSS Logo" />
        </div>

        <div className="nav-links-wrapper">
          <ul className="main-nav">
            <li><a href="/home" className="active-link">Home</a></li>
            <li className="dropdown">
              <a href="/about">About Us <FaChevronDown className="drop-icon" /></a>
              <ul className="dropdown-menu">
                <li><a href="/management">Management</a></li>
                <li><a href="/mandatory-disclosure">Mandatory Disclosure</a></li>
                <li><a href="/principal">Principal's Message</a></li>
                <li><a href="/faculty">Faculty</a></li>
                <li><a href="/news-events">News & Events</a></li>
                <li><a href="/activities">Activities</a></li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="/about">For CBSE <FaChevronDown className="drop-icon" /></a>
              <ul className="dropdown-menu">
                <li><a href="/transfer-certificate">Transfer Certificate</a></li>
                <li><a href="/annual-report">Annual Report</a></li>
                <li><a href="/book-list">Book List</a></li>
                <li><a href="/circular">Circular</a></li>
                <li><a href="/curriculum">Curriculum</a></li>
                <li><a href="/fire-safety-certificate">Fire & Safety Certificate</a></li>
                <li><a href="/fitness-certificate">Fitness Certificate</a></li>
                <li><a href="/affiliation-certificate">Affiliation Certificate</a></li>
                <li><a href="/deo-certificate">DEO Certificate</a></li>
                <li><a href="/noc">NOC</a></li>
                <li><a href="/sanitation-certificate">Sanitation Certificate</a></li>
                <li><a href="/recognition-letter">Recognition Letter</a></li>
                <li><a href="/water-analysis-certificate">Water Analysis Certificate</a></li>
                <li><a href="/trust-certificate">Trust Certificate</a></li>
                <li><a href="/affidavit">Affidavit</a></li>
              </ul>
            </li>
            <li><a href="/result">Results</a></li>
            <li><a href="/cocurricular">Co-Curricular</a></li>
            <li><a href="/students">Students</a></li>
<li>
  <a
    href="https://msspublicschool.sactin.com/online"
    target="_blank"
    rel="noopener noreferrer"
  >
    Online Admission
  </a>
</li>
            <li className="dropdown">
              <a href="/gallery">Gallery </a>
            </li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        <div className="nav-actions">
          <button className="action-btn-icon search-trigger"><FaSearch /></button>
          <span className="action-separator">|</span>
          <button className="action-btn-icon menu-trigger" onClick={toggleMobileMenu}><FaThLarge size={18} /></button>
          <a href="/apply" className="btn action-btn-apply">Apply Now <FaSignInAlt style={{ marginLeft: '8px' }} /></a>
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
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/admission">Online Admission</a></li>
            <li><a href="/contact">Contact Us</a></li>
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
