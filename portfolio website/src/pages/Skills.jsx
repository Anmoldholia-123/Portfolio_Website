import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Skills = () => {
  const { skills } = portfolioData;

  const categories = [...new Set(skills.map(skill => skill.category))];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">My Skills</h2>

          <div className="skills-grid">
            {categories.map((category, catIndex) => (
              <div key={category} className="skill-category-box">
                <h3 className="category-title">{category}</h3>
                <div className="skills-items">
                  {skills
                    .filter(skill => skill.category === category)
                    .map((skill, index) => (
                      <motion.div 
                        key={skill.name} 
                        className="skill-item"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="skill-info">
                          <span className="skill-name">{skill.name}</span>
                          <span className="skill-percentage">{skill.level}%</span>
                        </div>
                        <div className="skill-bar-bg">
                          <motion.div 
                            className="skill-bar-fill"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.5 }}
                          ></motion.div>
                        </div>
                      </motion.div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--space-xl);
        }

        .category-title {
          font-size: 1.5rem;
          margin-bottom: var(--space-lg);
          color: var(--accent-tertiary);
          border-left: 4px solid var(--accent-tertiary);
          padding-left: var(--space-sm);
        }

        .skills-items {
          display: flex;
          flex-direction: column;
          gap: var(--space-md);
        }

        .skill-item {
          width: 100%;
        }

        .skill-info {
          display: flex;
          justify-content: space-between;
          margin-bottom: 8px;
        }

        .skill-name {
          font-weight: 500;
          color: var(--text-primary);
        }

        .skill-percentage {
          color: var(--text-muted);
          font-size: 0.9rem;
        }

        .skill-bar-bg {
          width: 100%;
          height: 8px;
          background: var(--bg-tertiary);
          border-radius: var(--radius-full);
          overflow: hidden;
        }

        .skill-bar-fill {
          height: 100%;
          background: var(--gradient-primary);
          border-radius: var(--radius-full);
        }
      `}</style>
    </section>
  );
};

export default Skills;
