import React, { useState, useEffect } from 'react';
import { Menu, X, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { personalInfo } = portfolioData;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#" className="navbar-logo">
          Pratik<span className="dot">.</span>
        </a>

        {/* Desktop Links */}
        <div className="navbar-links">
          <a href="#about" className="nav-link">About</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>

        {/* Desktop Socials */}
        <div className="navbar-socials">
          <a href={personalInfo.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <GithubIcon size={20} className="social-icon" />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedinIcon size={20} className="social-icon" />
          </a>
          <a href={`mailto:${personalInfo.email}`} aria-label="Email">
            <Mail size={20} className="social-icon" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${isOpen ? 'open' : ''}`}>
        <div className="mobile-links">
          <a href="#about" className="mobile-nav-link" onClick={toggleMenu}>About</a>
          <a href="#skills" className="mobile-nav-link" onClick={toggleMenu}>Skills</a>
          <a href="#projects" className="mobile-nav-link" onClick={toggleMenu}>Projects</a>
          <a href="#contact" className="mobile-nav-link" onClick={toggleMenu}>Contact</a>
          
          <div className="mobile-socials-row">
            <a href={personalInfo.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <GithubIcon size={24} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedinIcon size={24} />
            </a>
            <a href={`mailto:${personalInfo.email}`} aria-label="Email">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
