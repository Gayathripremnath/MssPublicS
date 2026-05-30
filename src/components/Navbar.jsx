import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/mss_logo.png';
import { FaSearch, FaBars, FaSignOutAlt, FaTimes, FaChevronDown, FaThLarge, FaSignInAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = ({ isScrolled, isNavHidden, isBannerHidden, isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const [openDropdowns, setOpenDropdowns] = useState({});

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (menuName) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [menuName]: !prev[menuName],
    }));
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
              <Link to="/about">About Us <FaChevronDown className="drop-icon" /></Link>
              <ul className="dropdown-menu">
                <li><Link to="/management">Management</Link></li>
                <li><Link to="/mandatory">Mandatory Disclosure</Link></li>
                <li><Link to="/principal">Principal's Message</Link></li>
                <li><Link to="/faculty">Faculty</Link></li>
                <li><Link to="/news-events">News &amp; Events</Link></li>
                <li><Link to="/activities">Activities</Link></li>
              </ul>
            </li>
            <li className="dropdown">
              <Link to="/about">For CBSE <FaChevronDown className="drop-icon" /></Link>
              <ul className="dropdown-menu">
                <li><a href="/document/Transfer Certificate/transfer.pdf" target="_blank" rel="noopener noreferrer">Transfer Certificate</a></li>
                <li><a href="/document/annual_report/annual.pdf" target="_blank" rel="noopener noreferrer">Annual Report</a></li>
                <li><a href="/document/Book List/book.pdf" target="_blank" rel="noopener noreferrer">Book List</a></li>
                <li><a href="/document/Circular/circular.pdf" target="_blank" rel="noopener noreferrer">Circular</a></li>
                <li><a href="/document/Curriculum/curriculum.pdf" target="_blank" rel="noopener noreferrer">Curriculum</a></li>
                <li><a href="/document/Fire & Safety Certificate/fscertificate.pdf" target="_blank" rel="noopener noreferrer">Fire &amp; Safety Certificate</a></li>
                <li><a href="/document/Fitness Certificate/fitness.pdf" target="_blank" rel="noopener noreferrer">Fitness Certificate</a></li>
                <li><a href="/document/Affiliation Certificate/affiliation.pdf" target="_blank" rel="noopener noreferrer">Affiliation Certificate</a></li>
                <li><a  href="/document/DEO Certificate/deo.pdf" target="_blank" rel="noopener noreferrer">DEO Certificate</a></li>
                <li><a href="/document/NOC/noc.pdf" target="_blank" rel="noopener noreferrer">NOC </a></li>
                <li><a href="/document/Sanitation Certificate/sanitation.pdf" target="_blank" rel="noopener noreferrer">Sanitation Certificate</a></li>
                <li><a href="/document/Recognition Letter/recognition.pdf" target="_blank" rel="noopener noreferrer">Recognition Letter</a></li>
                <li><a href="/document/Water Analysis Certificate/water.pdf" target="_blank" rel="noopener noreferrer">Water Analysis Certificate</a></li>
                <li><a href="/document/Trust Certificate/trust.pdf" target="_blank" rel="noopener noreferrer">Trust Certificate</a></li>
                <li><a href="/document/Affidavit/affidavit.pdf" target="_blank" rel="noopener noreferrer">Affidavit</a></li>
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
            <li><Link to="/home" className="active-link" onClick={toggleMobileMenu}>Home</Link></li>
            <li className={`dropdown ${openDropdowns['about'] ? 'open' : ''}`}>
              <div className="dropdown-toggle" onClick={() => toggleDropdown('about')}>
                <span>About Us</span> <FaChevronDown className="drop-icon" />
              </div>
              <ul className="dropdown-menu">
                <li><Link to="/management" onClick={toggleMobileMenu}>Management</Link></li>
                <li><Link to="/mandatory-disclosure" onClick={toggleMobileMenu}>Mandatory Disclosure</Link></li>
                <li><Link to="/principal" onClick={toggleMobileMenu}>Principal's Message</Link></li>
                <li><Link to="/faculty" onClick={toggleMobileMenu}>Faculty</Link></li>
                <li><Link to="/news-events" onClick={toggleMobileMenu}>News &amp; Events</Link></li>
                <li><Link to="/activities" onClick={toggleMobileMenu}>Activities</Link></li>
              </ul>
            </li>
            <li className={`dropdown ${openDropdowns['cbse'] ? 'open' : ''}`}>
              <div className="dropdown-toggle" onClick={() => toggleDropdown('cbse')}>
                <span>For CBSE</span> <FaChevronDown className="drop-icon" />
              </div>
              <ul className="dropdown-menu">
                 <li><a href="/document/Transfer Certificate/transfer.pdf" target="_blank" rel="noopener noreferrer">Transfer Certificate</a></li>
                <li><a href="/document/annual_report/annual.pdf" target="_blank" rel="noopener noreferrer">Annual Report</a></li>
                <li><a href="/document/Book List/book.pdf" target="_blank" rel="noopener noreferrer">Book List</a></li>
                <li><a href="/document/Circular/circular.pdf" target="_blank" rel="noopener noreferrer">Circular</a></li>
                <li><a href="/document/Curriculum/curriculum.pdf" target="_blank" rel="noopener noreferrer">Curriculum</a></li>
                <li><a href="/document/Fire & Safety Certificate/fscertificate.pdf" target="_blank" rel="noopener noreferrer">Fire &amp; Safety Certificate</a></li>
                <li><a href="/document/Fitness Certificate/fitness.pdf" target="_blank" rel="noopener noreferrer">Fitness Certificate</a></li>
                <li><a href="/document/Affiliation Certificate/affiliation.pdf" target="_blank" rel="noopener noreferrer">Affiliation Certificate</a></li>
                <li><a  href="/document/DEO Certificate/deo.pdf" target="_blank" rel="noopener noreferrer">DEO Certificate</a></li>
                <li><a href="/document/NOC/noc.pdf" target="_blank" rel="noopener noreferrer">NOC </a></li>
                <li><a href="/document/Sanitation Certificate/sanitation.pdf" target="_blank" rel="noopener noreferrer">Sanitation Certificate</a></li>
                <li><a href="/document/Recognition Letter/recognition.pdf" target="_blank" rel="noopener noreferrer">Recognition Letter</a></li>
                <li><a href="/document/Water Analysis Certificate/water.pdf" target="_blank" rel="noopener noreferrer">Water Analysis Certificate</a></li>
                <li><a href="/document/Trust Certificate/trust.pdf" target="_blank" rel="noopener noreferrer">Trust Certificate</a></li>
                <li><a href="/document/Affidavit/affidavit.pdf" target="_blank" rel="noopener noreferrer">Affidavit</a></li>
              </ul>
            </li>
            <li><Link to="/result" onClick={toggleMobileMenu}>Results</Link></li>
            <li><Link to="/cocurricular" onClick={toggleMobileMenu}>Co-Curricular</Link></li>
            <li><Link to="/students" onClick={toggleMobileMenu}>Students</Link></li>
            <li>
              <a href="https://msspublicschool.sactin.com/online" target="_blank" rel="noopener noreferrer">
                Online Admission
              </a>
            </li>
            <li className="dropdown">
              <Link to="/gallery" onClick={toggleMobileMenu}>Gallery </Link>
            </li>
            <li><Link to="/contact" onClick={toggleMobileMenu}>Contact Us</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
