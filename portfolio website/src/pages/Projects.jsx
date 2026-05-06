import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const Projects = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">My Projects</h2>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div 
                key={project.title}
                className="project-card glass-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="project-image-wrapper">
                  <img src={project.image} alt={project.title} className="project-image" />
                  <div className="project-overlay">
                    <div className="overlay-links">
                      <a href={project.link} className="overlay-link"><ExternalLink size={24} /></a>
                      <a href="#" className="overlay-link"><FaGithub size={24} /></a>
                    </div>
                  </div>
                </div>
                
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-tech">
                    {project.technologies.map(tech => (
                      <span key={tech} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: var(--space-xl);
        }

        .project-card {
          padding: 0;
          overflow: hidden;
        }

        .project-image-wrapper {
          position: relative;
          height: 220px;
          overflow: hidden;
        }

        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: var(--transition-slow);
        }

        .project-card:hover .project-image {
          transform: scale(1.1);
        }

        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(99, 102, 241, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: var(--transition-normal);
        }

        .project-card:hover .project-overlay {
          opacity: 1;
        }

        .overlay-links {
          display: flex;
          gap: var(--space-md);
        }

        .overlay-link {
          width: 50px;
          height: 50px;
          background: white;
          color: var(--accent-primary);
          border-radius: var(--radius-full);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-normal);
        }

        .overlay-link:hover {
          transform: scale(1.1);
          background: var(--bg-primary);
          color: white;
        }

        .project-content {
          padding: var(--space-lg);
        }

        .project-title {
          font-size: 1.4rem;
          margin-bottom: var(--space-sm);
        }

        .project-description {
          color: var(--text-secondary);
          font-size: 0.95rem;
          margin-bottom: var(--space-lg);
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tech-badge {
          background: rgba(255, 255, 255, 0.05);
          padding: 4px 12px;
          border-radius: var(--radius-full);
          font-size: 0.8rem;
          color: var(--text-muted);
          border: 1px solid var(--border-color);
        }

        @media (max-width: 480px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
