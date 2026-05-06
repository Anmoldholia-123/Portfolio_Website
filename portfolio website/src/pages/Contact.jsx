import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, MapPin, Phone } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const Contact = () => {
  const { email } = portfolioData.personalInfo;

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Get In Touch</h2>

          <div className="contact-grid">
            <div className="contact-info">
              <h3 className="contact-subtitle">Let's talk about everything!</h3>
              <p className="contact-text">
                Don't like forms? Send me an email. 👋
              </p>

              <div className="contact-details">
                <div className="detail-item">
                  <div className="detail-icon"><Mail size={20} /></div>
                  <div className="detail-content">
                    <h4>Email</h4>
                    <a href={`mailto:${email}`}>{email}</a>
                  </div>
                </div>
                <div className="detail-item">
                  <div className="detail-icon"><MapPin size={20} /></div>
                  <div className="detail-content">
                    <h4>Location</h4>
                    <span>Pakistan</span>
                  </div>
                </div>
              </div>

              <div className="contact-socials">
                <a href="#" className="social-btn"><FaGithub size={20} /></a>
                <a href="#" className="social-btn"><FaLinkedin size={20} /></a>
              </div>
            </div>

            <form className="contact-form glass-card" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Subject" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-full">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: var(--space-xl);
        }

        .contact-subtitle {
          font-size: 1.8rem;
          margin-bottom: var(--space-sm);
        }

        .contact-text {
          color: var(--text-secondary);
          margin-bottom: var(--space-xl);
        }

        .contact-details {
          display: flex;
          flex-direction: column;
          gap: var(--space-lg);
          margin-bottom: var(--space-xl);
        }

        .detail-item {
          display: flex;
          gap: var(--space-md);
          align-items: center;
        }

        .detail-icon {
          width: 45px;
          height: 45px;
          background: rgba(99, 102, 241, 0.1);
          color: var(--accent-primary);
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .detail-content h4 {
          font-size: 0.9rem;
          color: var(--text-muted);
          text-transform: uppercase;
          margin-bottom: 2px;
        }

        .contact-socials {
          display: flex;
          gap: var(--space-md);
        }

        .social-btn {
          width: 45px;
          height: 45px;
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-normal);
          color: var(--text-secondary);
        }

        .social-btn:hover {
          background: var(--gradient-primary);
          color: white;
          border-color: transparent;
          transform: translateY(-3px);
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: var(--space-md);
        }

        .form-group input, 
        .form-group textarea {
          width: 100%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 0.8rem 1rem;
          color: var(--text-primary);
          font-family: inherit;
          transition: var(--transition-normal);
        }

        .form-group input:focus, 
        .form-group textarea:focus {
          outline: none;
          border-color: var(--accent-primary);
          background: rgba(255, 255, 255, 0.08);
        }

        .w-full {
          width: 100%;
        }

        @media (max-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
