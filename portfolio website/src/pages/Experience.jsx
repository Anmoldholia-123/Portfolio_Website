import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Professional Experience</h2>

          <div className="timeline">
            {experience.map((exp, index) => (
              <motion.div 
                key={exp.company + index}
                className="timeline-item"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="timeline-dot">
                  <Briefcase size={20} color="white" />
                </div>
                <div className="timeline-content glass-card">
                  <span className="timeline-duration">{exp.duration}</span>
                  <h3 className="timeline-role">{exp.role}</h3>
                  <h4 className="timeline-company">{exp.company}</h4>
                  <p className="timeline-desc">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .timeline {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
          padding: var(--space-xl) 0;
        }

        .timeline::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 2px;
          height: 100%;
          background: var(--border-color);
        }

        .timeline-item {
          position: relative;
          width: 100%;
          margin-bottom: var(--space-xl);
          display: flex;
          justify-content: flex-end;
          padding-right: 50%;
        }

        .timeline-item:nth-child(even) {
          justify-content: flex-start;
          padding-right: 0;
          padding-left: 50%;
        }

        .timeline-dot {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translate(-50%, 0);
          width: 40px;
          height: 40px;
          background: var(--gradient-primary);
          border-radius: var(--radius-full);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
          box-shadow: 0 0 15px rgba(99, 102, 241, 0.4);
        }

        .timeline-content {
          width: 90%;
          position: relative;
        }

        .timeline-duration {
          display: inline-block;
          background: rgba(99, 102, 241, 0.1);
          color: var(--accent-primary);
          padding: 4px 12px;
          border-radius: var(--radius-full);
          font-size: 0.8rem;
          font-weight: 600;
          margin-bottom: var(--space-sm);
        }

        .timeline-role {
          font-size: 1.3rem;
          margin-bottom: 4px;
        }

        .timeline-company {
          font-size: 1rem;
          color: var(--text-muted);
          margin-bottom: var(--space-md);
        }

        .timeline-desc {
          color: var(--text-secondary);
          font-size: 0.95rem;
        }

        @media (max-width: 768px) {
          .timeline::before {
            left: 20px;
          }
          .timeline-item {
            justify-content: flex-start;
            padding-left: 50px;
            padding-right: 0;
          }
          .timeline-item:nth-child(even) {
            padding-left: 50px;
          }
          .timeline-dot {
            left: 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;
