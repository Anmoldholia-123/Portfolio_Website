import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';
import profileImg from '../assets/hero.jpeg';

const Hero = () => {
  const { name, role, intro } = portfolioData.personalInfo;

  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="hero-subtitle">Hi, I am</h2>
            <h1 className="hero-title">
              <span className="text-gradient">{name}</span>
            </h1>
            <h3 className="hero-role">{role}</h3>
            <p className="hero-description">{intro}</p>
            
            <div className="hero-actions">
              <motion.a 
                href="#projects" 
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work <ArrowRight size={20} />
              </motion.a>
              <motion.a 
                href="#contact" 
                className="btn btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
            </div>

            <div className="hero-socials">
              <a href="#" className="social-icon"><FaGithub size={24} /></a>
              <a href="#" className="social-icon"><FaLinkedin size={24} /></a>
              <a href="#" className="social-icon"><Mail size={24} /></a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="hero-image-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="blob-shape"></div>
          <img 
            src={profileImg} 
            alt={name} 
            className="hero-image"
          />
        </motion.div>

      </div>

      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 100px;
          position: relative;
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: -10%;
          right: -5%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%);
          z-index: -1;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: var(--space-xl);
          align-items: center;
        }

        .hero-subtitle {
          font-size: 1.2rem;
          color: var(--accent-primary);
          margin-bottom: var(--space-xs);
          font-weight: 600;
        }

        .hero-title {
          font-size: clamp(3rem, 8vw, 5rem);
          line-height: 1.1;
          margin-bottom: var(--space-xs);
        }

        .hero-role {
          font-size: clamp(1.5rem, 4vw, 2.5rem);
          color: var(--text-secondary);
          margin-bottom: var(--space-md);
        }

        .hero-description {
          font-size: 1.1rem;
          color: var(--text-secondary);
          max-width: 600px;
          margin-bottom: var(--space-lg);
        }

        .hero-actions {
          display: flex;
          gap: var(--space-md);
          margin-bottom: var(--space-lg);
        }

        .hero-socials {
          display: flex;
          gap: var(--space-md);
        }

        .social-icon {
          color: var(--text-muted);
          transition: var(--transition-normal);
        }

        .social-icon:hover {
          color: var(--accent-primary);
          transform: translateY(-3px);
        }

        .hero-image-container {
          position: relative;
          display: flex;
          justify-content: center;
        }

        .blob-shape {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 110%;
          height: 110%;
          background: var(--gradient-primary);
          border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
          filter: blur(40px);
          opacity: 0.3;
          z-index: -1;
          animation: blob-anim 10s infinite alternate;
        }

        @keyframes blob-anim {
          0% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; }
          100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
        }

        .hero-image {
          width: 350px;
          height: 450px;
          object-fit: crop;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--border-color);
        }

        @media (max-width: 992px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hero-content {
            order: 2;
          }
          .hero-image-container {
            order: 1;
            margin-bottom: var(--space-lg);
          }
          .hero-description {
            margin: 0 auto var(--space-lg);
          }
          .hero-actions {
            justify-content: center;
          }
          .hero-socials {
            justify-content: center;
          }
          .hero-image {
            width: 280px;
            height: 350px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
