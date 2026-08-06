import React from 'react';
import { portfolioData } from '../data/portfolioData';
import './Skills.css';

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="skills-section section">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        
        <div className="skills-grid">
          {skills.map((categoryGroup, index) => (
            <div key={index} className="skill-category-card glass">
              <h3 className="category-title">{categoryGroup.category}</h3>
              
              <div className="skills-list">
                {categoryGroup.items.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar-bg">
                      <div 
                        className="skill-bar-fill" 
                        style={{ '--width-percent': `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
