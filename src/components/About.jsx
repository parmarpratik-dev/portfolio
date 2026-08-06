import React from 'react';
import { Award, FolderKanban, Zap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import './About.css';

export default function About() {
  const { aboutMe, stats } = portfolioData;

  const statIcons = [
    <Award className="stat-icon" size={24} />,
    <FolderKanban className="stat-icon" size={24} />,
    <Zap className="stat-icon" size={24} />
  ];

  return (
    <section id="about" className="about-section section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-grid">
          <div className="about-text-content">
            <p className="about-paragraph">{aboutMe.paragraph1}</p>
            <p className="about-paragraph">{aboutMe.paragraph2}</p>
            <p className="about-paragraph">{aboutMe.paragraph3}</p>
          </div>
          
          <div className="about-stats-container">
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card glass">
                  <div className="stat-icon-wrapper">
                    {statIcons[index % statIcons.length]}
                  </div>
                  <h3 className="stat-value gradient-text">{stat.value}</h3>
                  <p className="stat-label">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="about-philosophy glass">
              <h4 className="philosophy-title">My Philosophy</h4>
              <ul className="philosophy-list">
                <li>
                  <span className="bullet">✦</span>
                  <strong>User First:</strong> I craft products that are fast, accessible, and delight users.
                </li>
                <li>
                  <span className="bullet">✦</span>
                  <strong>Clean Architecture:</strong> I write modular, self-documenting code that scales easily.
                </li>
                <li>
                  <span className="bullet">✦</span>
                  <strong>Continuous Learning:</strong> I constantly explore new technologies and refine my craft.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
