import React from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import './Experience.css';

export default function Experience() {
  const { experience, education } = portfolioData;

  return (
    <section id="experience" className="experience-section section">
      <div className="container">
        <h2 className="section-title">Experience & Education</h2>
        
        <div className="experience-grid">
          {/* Work Experience Timeline */}
          <div className="timeline-column">
            <h3 className="column-title">
              <Briefcase className="title-icon" size={24} /> Professional Experience
            </h3>
            
            <div className="timeline">
              {experience.map((exp, index) => (
                <div key={index} className="timeline-item glass">
                  <div className="timeline-dot"></div>
                  
                  <div className="timeline-header">
                    <h4 className="timeline-role">{exp.role}</h4>
                    <span className="timeline-company">{exp.company}</span>
                  </div>
                  
                  <div className="timeline-meta">
                    <span className="meta-item">
                      <Calendar size={14} /> {exp.duration}
                    </span>
                    <span className="meta-item">
                      <MapPin size={14} /> {exp.location}
                    </span>
                  </div>
                  
                  <ul className="timeline-details">
                    {exp.details.map((detail, dIdx) => (
                      <li key={dIdx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education Timeline */}
          <div className="timeline-column">
            <h3 className="column-title">
              <GraduationCap className="title-icon" size={24} /> Education & Training
            </h3>
            
            <div className="timeline">
              {education.map((edu, index) => (
                <div key={index} className="timeline-item glass">
                  <div className="timeline-dot"></div>
                  
                  <div className="timeline-header">
                    <h4 className="timeline-role">{edu.degree}</h4>
                    <span className="timeline-company">{edu.institution}</span>
                  </div>
                  
                  <div className="timeline-meta">
                    <span className="meta-item">
                      <Calendar size={14} /> {edu.duration}
                    </span>
                    <span className="meta-item">
                      <MapPin size={14} /> {edu.location}
                    </span>
                  </div>
                  
                  {edu.grade && (
                    <div className="education-grade">
                      <strong>Result/Status:</strong> {edu.grade}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
