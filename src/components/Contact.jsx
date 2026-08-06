import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';
import './Contact.css';

export default function Contact() {
  const { personalInfo } = portfolioData;
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Simulate submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="contact-section section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-grid">
          <div className="contact-info-panel fade-in">
            <h3 className="contact-subtitle">Let's connect!</h3>
            <p className="contact-lead-text">
              I am always open to discussing new opportunities, creative projects, or collaboration ideas. Send me a message!
            </p>
            
            <div className="contact-details">
              <div className="detail-item">
                <Mail className="detail-icon" size={20} />
                <div className="detail-content">
                  <span className="detail-label">Email</span>
                  <a href={`mailto:${personalInfo.email}`} className="detail-value">{personalInfo.email}</a>
                </div>
              </div>
              
              <div className="detail-item">
                <MapPin className="detail-icon" size={20} />
                <div className="detail-content">
                  <span className="detail-label">Location</span>
                  <span className="detail-value">India</span>
                </div>
              </div>
            </div>
            
            <div className="social-links-panel">
              <h4>Follow Me</h4>
              <div className="social-row">
                <a href={personalInfo.github} target="_blank" rel="noreferrer" className="social-circle" aria-label="GitHub">
                  <GithubIcon size={20} />
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="social-circle" aria-label="LinkedIn">
                  <LinkedinIcon size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="contact-form-panel glass fade-in">
            {submitted ? (
              <div className="success-message">
                <CheckCircle className="success-icon animate-bounce" size={48} />
                <h3>Thank you, {formData.name}!</h3>
                <p>Your message has been sent successfully. I will get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange}
                    placeholder="Enter your name" 
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange}
                    placeholder="name@example.com" 
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange}
                    placeholder="Type your message here..." 
                    rows="5" 
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary submit-btn">
                  Send Message <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
