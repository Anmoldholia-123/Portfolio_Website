import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Education = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="education">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Education</h2>

          <div className="education-grid">
            {education.map((edu, index) => (
              <motion.div 
                key={edu.degree}
                className="edu-card glass-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="edu-icon">
                  <GraduationCap size={32} />
                </div>
                <div className="edu-content">
                  <span className="edu-duration">{edu.duration}</span>
                  <h3 className="edu-degree">{edu.degree}</h3>
                  <h4 className="edu-institution">{edu.institution}</h4>
                  <p className="edu-desc">{edu.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .education-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--space-lg);
          max-width: 900px;
          margin: 0 auto;
        }

        .edu-card {
          display: flex;
          gap: var(--space-lg);
          padding: var(--space-xl);
          align-items: flex-start;
        }

        .edu-icon {
          width: 60px;
          height: 60px;
          background: rgba(99, 102, 241, 0.1);
          color: var(--accent-primary);
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .edu-duration {
          display: inline-block;
          font-size: 0.85rem;
          color: var(--accent-tertiary);
          font-weight: 600;
          margin-bottom: 4px;
        }

        .edu-degree {
          font-size: 1.4rem;
          margin-bottom: 4px;
        }

        .edu-institution {
          font-size: 1.1rem;
          color: var(--text-secondary);
          margin-bottom: var(--space-md);
        }

        .edu-desc {
          color: var(--text-muted);
          font-size: 0.95rem;
        }

        @media (max-width: 600px) {
          .edu-card {
            flex-direction: column;
            text-align: center;
            align-items: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Education;
