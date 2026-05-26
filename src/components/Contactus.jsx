import React, { useState } from 'react';
import { Mail, Phone, MapPin, GraduationCap, MessageSquareCode } from 'lucide-react';
import './Contactus.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'general',
    message: '',
    saveInfo: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    alert(`Thank you ${formData.name}! Your ${formData.inquiryType} request has been submitted successfully.`);
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      inquiryType: 'general',
      message: '',
      saveInfo: false
    });
  };

  return (
    <div className="contact-page-wrapper">
      {/* Top Header Banner Section */}
      <div className="contact-banner">
        <div className="banner-overlay">
          <h1 className="banner-title">Contact & Support</h1>
          <div className="banner-underline"></div>
          <p className="banner-subtitle">
            Education goes beyond textbooks and classrooms. We believe in empowering students to explore their passions and challenge conventions. Reach out to us for any queries.
          </p>
        </div>
      </div>

      {/* Info Cards Row */}
      <div className="info-cards-container">
        <div className="info-card">
          <div className="card-icon-wrapper">
            <Mail className="card-icon" />
          </div>
          <h3>Support Email</h3>
          <p><a href="mailto:msspublicschool@gmail.com">msspublicschool@gmail.com</a></p>
          <p><a href="mailto:info@msspublicschool.org">info@msspublicschool.org</a></p>
        </div>

        <div className="info-card">
          <div className="card-icon-wrapper">
            <Phone className="card-icon" />
          </div>
          <h3>Phone Number</h3>
          <p>+91 495 - 2374584</p>
          <p>+91 9072993855</p>
        </div>

        <div className="info-card">
          <div className="card-icon-wrapper">
            <MapPin className="card-icon" />
          </div>
          <h3>Address</h3>
          <p className="address-text">
            M.S.S. PUBLIC SCHOOL<br />
            Mavilikadavu, Kozhikode<br />
            Kerala - 673 010
          </p>
        </div>

        <div className="info-card">
          <div className="card-icon-wrapper">
            <GraduationCap className="card-icon" />
          </div>
          <h3>Admission</h3>
          <p><a href="mailto:msspublicschool@gmail.com">msspublicschool@gmail.com</a></p>
          <p>+91 495 - 2374585</p>
        </div>
      </div>

      {/* Bottom Section: Map Left & Form Right */}
      <div className="main-content-split">
        
        {/* Left Column: Google Map */}
        <div className="map-column-box">
          <iframe 
            src="https://www.google.com/maps?q=MSS+Public+School+Calicut&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="M.S.S Public School Location Map"
          ></iframe>
        </div>

        {/* Right Column: Contact/Feedback Form */}
        <div className="form-column-box">
          <div className="form-title-area">
            <MessageSquareCode className="title-icon-spec" />
            <h2>Feedback / Enquiry / Quick Contact</h2>
          </div>
          
          <form onSubmit={handleSubmit} className="school-contact-form">
            
            {/* Inquiry Type Dropdown */}
            <div className="form-field-block">
              <label className="field-label">Select Purpose of Contact*</label>
              <select 
                name="inquiryType" 
                className="form-custom-select"
                value={formData.inquiryType}
                onChange={handleChange}
                required
              >
                <option value="general">General Enquiry</option>
                <option value="feedback">Share Feedback / Suggestions </option>
                <option value="admission">Admission Request </option>
                <option value="complaint">Quick Support / Complaints </option>
              </select>
            </div>

            {/* Name and Phone Row */}
            <div className="inputs-dual-row">
              <input 
                type="text" 
                name="name"
                placeholder="Full Name*" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
              <input 
                type="tel" 
                name="phone"
                placeholder="Phone Number" 
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            
            {/* Email Field */}
            <input 
              type="email" 
              name="email"
              placeholder="Email Address*" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
            
            {/* Message Area */}
            <textarea 
              name="message"
              placeholder="Type your detailed message here...*" 
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            {/* Checkbox Save Info */}
            <div className="checkbox-container">
              <input 
                type="checkbox" 
                id="saveInfo" 
                name="saveInfo"
                checked={formData.saveInfo}
                onChange={handleChange}
              />
              <label htmlFor="saveInfo">Save my name & email into browser for the next time I comment</label>
            </div>

            <button type="submit" className="school-submit-btn">Submit Form Now</button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default ContactUs;