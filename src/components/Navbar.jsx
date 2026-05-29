import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import logo from '../assets/mss_logo.png';
import { FaSearch, FaBars, FaSignOutAlt, FaTimes, FaChevronDown, FaThLarge, FaSignInAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = ({ isScrolled, isNavHidden, isBannerHidden, isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const handleDropdownClick = (e, name) => {
    e.preventDefault();
    setOpenDropdown(prev => (prev === name ? null : name));
  };



  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isNavHidden ? 'nav-hidden' : ''} ${isBannerHidden ? 'banner-hidden' : ''}`}>
      <div className="nav-content-fluid">
        {/* Banner Logo */}
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
            <li><Link to="/home" className="active-link">Home</Link></li>
            <li className="dropdown">
              <a href="#" onClick={e => handleDropdownClick(e, 'about')} className="dropdown-toggle">About Us <FaChevronDown className="drop-icon" /></a>
              <ul className={`dropdown-menu ${openDropdown === 'about' ? 'open' : ''}` }>
                <li><Link to="/management">Management</Link></li>
                <li><Link to="/mandatory">Mandatory Disclosure</Link></li>
                <li><Link to="/principal">Principal's Message</Link></li>
                <li><Link to="/faculty">Faculty</Link></li>
                <li><Link to="/news-events">News &amp; Events</Link></li>
                <li><Link to="/activities">Activities</Link></li>
              </ul>
            </li>

            <li className="dropdown">
              <a href="#" onClick={e => handleDropdownClick(e, 'cbse')} className="dropdown-toggle">For CBSE <FaChevronDown className="drop-icon" /></a>
              <ul className={`dropdown-menu ${openDropdown === 'cbse' ? 'open' : ''}`}>
                <li><Link to="/transfer-certificate">Transfer Certificate</Link></li>
                <li><Link to="/annual-report">Annual Report</Link></li>
                <li><Link to="/book-list">Book List</Link></li>
                <li><Link to="/circular">Circular</Link></li>
                <li><Link to="/curriculum">Curriculum</Link></li>
                <li><Link to="/fire-safety-certificate">Fire &amp; Safety Certificate</Link></li>
                <li><Link to="/fitness-certificate">Fitness Certificate</Link></li>
                <li><Link to="/affiliation-certificate">Affiliation Certificate</Link></li>
                <li><Link to="/deo-certificate">DEO Certificate</Link></li>
                <li><Link to="/noc">NOC</Link></li>
                <li><Link to="/sanitation-certificate">Sanitation Certificate</Link></li>
                <li><Link to="/recognition-letter">Recognition Letter</Link></li>
                <li><Link to="/water-analysis-certificate">Water Analysis Certificate</Link></li>
                <li><Link to="/trust-certificate">Trust Certificate</Link></li>
                <li><Link to="/affidavit">Affidavit</Link></li>
              </ul>
            </li>
            <li><Link to="/result">Results</Link></li>
            <li><Link to="/cocurricular">Co-Curricular</Link></li>
            <li><Link to="/students">Students</Link></li>
            <li>
              <a href="https://msspublicschool.sactin.com/online" target="_blank" rel="noopener noreferrer">
                Online Admission
              </a>
            </li>
            <li className="dropdown">
              <Link to="/gallery">Gallery </Link>
            </li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="nav-actions">
          <button className="action-btn-icon search-trigger"><FaSearch /></button>
          <span className="action-separator">|</span>
          <button className="action-btn-icon menu-trigger" onClick={toggleMobileMenu}><FaThLarge size={18} /></button>
          <Link to="/apply" className="btn action-btn-apply">
            Apply Now <FaSignInAlt style={{ marginLeft: '8px' }} />
          </Link>
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
          <ul className="drawer-menu-list">
            <li><Link to="/home" className="active-link">Home</Link></li>
            <li className="dropdown">
              <a href="#" onClick={e => handleDropdownClick(e, 'about')} className="dropdown-toggle">About Us <FaChevronDown className="drop-icon" /></a>
              <ul className={`dropdown-menu ${openDropdown === 'about' ? 'open' : ''}`}>
                <li><Link to="/management">Management</Link></li>
                <li><Link to="/mandatory-disclosure">Mandatory Disclosure</Link></li>
                <li><Link to="/principal">Principal's Message</Link></li>
                <li><Link to="/faculty">Faculty</Link></li>
                <li><Link to="/news-events">News &amp; Events</Link></li>
                <li><Link to="/activities">Activities</Link></li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="#" onClick={e => handleDropdownClick(e, 'cbse')} className="dropdown-toggle">For CBSE <FaChevronDown className="drop-icon" /></a>
              <ul className={`dropdown-menu ${openDropdown === 'cbse' ? 'open' : ''}`}>
                <li><Link to="/transfer-certificate">Transfer Certificate</Link></li>
                <li><Link to="/annual-report">Annual Report</Link></li>
                <li><Link to="/book-list">Book List</Link></li>
                <li><Link to="/circular">Circular</Link></li>
                <li><Link to="/curriculum">Curriculum</Link></li>
                <li><Link to="/fire-safety-certificate">Fire &amp; Safety Certificate</Link></li>
                <li><Link to="/fitness-certificate">Fitness Certificate</Link></li>
                <li><Link to="/affiliation-certificate">Affiliation Certificate</Link></li>
                <li><Link to="/deo-certificate">DEO Certificate</Link></li>
                <li><Link to="/noc">NOC</Link></li>
                <li><Link to="/sanitation-certificate">Sanitation Certificate</Link></li>
                <li><Link to="/recognition-letter">Recognition Letter</Link></li>
                <li><Link to="/water-analysis-certificate">Water Analysis Certificate</Link></li>
                <li><Link to="/trust-certificate">Trust Certificate</Link></li>
                <li><Link to="/affidavit">Affidavit</Link></li>
              </ul>
            </li>
            <li><Link to="/result">Results</Link></li>
            <li><Link to="/cocurricular">Co-Curricular</Link></li>
            <li><Link to="/students">Students</Link></li>
            <li>
              <a href="https://msspublicschool.sactin.com/online" target="_blank" rel="noopener noreferrer">
                Online Admission
              </a>
            </li>
            <li className="dropdown">
              <Link to="/gallery">Gallery </Link>
            </li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
