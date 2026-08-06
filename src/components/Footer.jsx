import React from 'react';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';
import './Footer.css';

export default function Footer() {
  const { personalInfo } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="footer-top">
          <a href="#" className="footer-logo">
            Pratik<span className="dot">.</span>
          </a>
          
          <div className="footer-nav">
            <a href="#about" className="footer-nav-link">About</a>
            <a href="#skills" className="footer-nav-link">Skills</a>
            <a href="#projects" className="footer-nav-link">Projects</a>
            <a href="#contact" className="footer-nav-link">Contact</a>
          </div>
          
          <div className="footer-socials">
            <a href={personalInfo.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <GithubIcon size={18} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedinIcon size={18} />
            </a>
            <a href={`mailto:${personalInfo.email}`} aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>
          <p className="credit">Designed & Built with React & CSS</p>
        </div>
      </div>
    </footer>
  );
}
