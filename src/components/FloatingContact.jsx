import React, { useState } from 'react';
import './FloatingContact.css';
import { FaComments, FaTimes } from 'react-icons/fa';

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleForm = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="floating-contact">
      <div className={`contact-form-wrapper ${isOpen ? 'active' : ''}`}>
        <div className="contact-form-header">
          <h3>Quick Inquiry</h3>
          <button className="close-btn" onClick={toggleForm}>
            <FaTimes />
          </button>
        </div>
        <form className="contact-form-body">
          <input type="text" placeholder="Your Name" required />
          <input type="tel" placeholder="Phone Number" required />
          <textarea placeholder="Message" rows="3" required></textarea>
          <button type="submit" className="btn form-submit-btn">Send Message</button>
        </form>
      </div>
      
      <button 
        className={`contact-toggle-btn ${isOpen ? 'hidden' : ''}`} 
        onClick={toggleForm}
      >
        <FaComments />
      </button>
    </div>
  );
};

export default FloatingContact;
