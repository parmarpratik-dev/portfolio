import React from 'react';
import { ExternalLink, Code } from 'lucide-react';
import { GithubIcon } from './Icons';
import ProjectSlider from './ProjectSlider';
import { portfolioData } from '../data/portfolioData';
import './Projects.css';

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="projects-section section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.id} className="project-card glass">
              <div className="project-media">
                <ProjectSlider media={project.media} />
              </div>

              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tags">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="tag-chip">{tag}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link-btn"
                      aria-label="GitHub Repository"
                    >
                      <GithubIcon size={18} /> Code
                    </a>
                  )}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link-btn primary-link"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={18} /> Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
