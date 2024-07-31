// src/pages/ContactPage.js
import React, { useState } from 'react';
import './ContactPage.css';
import { FaWhatsapp } from 'react-icons/fa'; // Import WhatsApp icon from react-icons

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    if (formData.name && formData.email && formData.message) {
      setSuccess('Your message has been sent successfully!');
      setError('');
      setFormData({ name: '', email: '', message: '' });
    } else {
      setError('Please fill out all fields.');
      setSuccess('');
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-content container">
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          {success && <div className="alert alert-success">{success}</div>}
          {error && <div className="alert alert-danger">{error}</div>}
          <div className="form-group mb-3">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="form-group mb-3">
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="form-control"
              rows="5"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
        <div className="contact-whatsapp mt-4 text-center">
          <a href="https://wa.me/+918541032213" target="_blank" rel="noopener noreferrer" className="whatsapp-link">
            <FaWhatsapp size={40} color="#25D366" />
            <span className="whatsapp-text">Chat with us on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
