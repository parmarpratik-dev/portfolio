import React, { useState, useEffect } from 'react';
import { ArrowDown, FileText } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import './Hero.css';

export default function Hero() {
  const { personalInfo } = portfolioData;
  const words = ["Full-Stack Developer", "Software Engineer", "MERN Stack Specialist"];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  // Typing effect
  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 75 : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, reverse, index]);

  // Blinking cursor
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  return (
    <section className="hero-section">
      <div className="hero-grid container">
        <div className="hero-content fade-in">
          <p className="hero-greeting">Hi, my name is</p>
          <h1 className="hero-title">{personalInfo.name}</h1>
          <h2 className="hero-subtitle">
            I am a <span className="typing-text">{words[index].substring(0, subIndex)}</span>
            <span className={`cursor ${blink ? 'visible' : ''}`}>|</span>
          </h2>
          <p className="hero-description">
            {personalInfo.subtitle} {personalInfo.bio}
          </p>
          
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View My Work <ArrowDown size={18} />
            </a>
            <a href={personalInfo.resumeUrl} className="btn btn-secondary" download>
              Download CV <FileText size={18} />
            </a>
          </div>
        </div>
        
        <div className="hero-visual fade-in">
          <div className="blob-container">
            <div className="glow-blob blob-1"></div>
            <div className="glow-blob blob-2"></div>
            <div className="hero-card glass">
              <div className="code-header">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
                <span className="code-title">portfolio.js</span>
              </div>
              <pre className="code-content">
                <code>
{`const developer = {
  name: "${personalInfo.name}",
  skills: ["React", "Node", "Express", "Mongo"],
  hardWorker: true,
  problemSolver: true,
  code: () => {
    return "Beautiful Web Apps";
  }
};`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
