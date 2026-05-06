import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  const { about } = portfolioData.personalInfo;

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
          
          <div className="about-grid">
            <div className="about-text-container glass-card">
              <p className="about-text">{about}</p>
              
              <div className="about-stats">
                <div className="stat-item">
                  <span className="stat-number">2+</span>
                  <span className="stat-label">Projects Completed</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">2</span>
                  <span className="stat-label">Internships</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">CS</span>
                  <span className="stat-label">Undergraduate</span>
                </div>
              </div>
            </div>
            
            <div className="about-highlights">
              <h3 className="highlight-title">Why Hire Me?</h3>
              <ul className="highlight-list">
                <li className="highlight-item">
                  <div className="highlight-icon">✓</div>
                  <div>
                    <h4>Clean Code</h4>
                    <p>I write maintainable, scalable, and well-documented code.</p>
                  </div>
                </li>
                <li className="highlight-item">
                  <div className="highlight-icon">✓</div>
                  <div>
                    <h4>Modern Tech Stack</h4>
                    <p>Experience with React.js and contemporary frontend tools.</p>
                  </div>
                </li>
                <li className="highlight-item">
                  <div className="highlight-icon">✓</div>
                  <div>
                    <h4>Fast Learner</h4>
                    <p>Quick to adapt to new technologies and workflows.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .about {
          position: relative;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-xl);
          align-items: center;
        }

        .about-text {
          font-size: 1.1rem;
          color: var(--text-secondary);
          margin-bottom: var(--space-lg);
        }

        .about-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-md);
          border-top: 1px solid var(--border-color);
          padding-top: var(--space-lg);
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          display: block;
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--accent-primary);
          font-family: 'Outfit', sans-serif;
        }

        .stat-label {
          font-size: 0.8rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .highlight-title {
          font-size: 1.8rem;
          margin-bottom: var(--space-lg);
        }

        .highlight-list {
          display: flex;
          flex-direction: column;
          gap: var(--space-lg);
        }

        .highlight-item {
          display: flex;
          gap: var(--space-md);
        }

        .highlight-icon {
          width: 40px;
          height: 40px;
          background: var(--gradient-primary);
          border-radius: var(--radius-full);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-weight: bold;
        }

        .highlight-item h4 {
          font-size: 1.2rem;
          margin-bottom: 4px;
        }

        .highlight-item p {
          color: var(--text-secondary);
          font-size: 0.95rem;
        }

        @media (max-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
