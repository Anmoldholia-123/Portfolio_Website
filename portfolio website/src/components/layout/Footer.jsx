import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <p className="copyright">
          &copy; {new Date().getFullYear()} <span className="text-gradient">Anmol Hindu</span>. All rights reserved.
        </p>
        <p className="made-with">
          Made with <Heart size={16} fill="red" color="red" /> in Pakistan
        </p>
      </div>

      <style jsx>{`
        .footer {
          padding: var(--space-lg) 0;
          border-top: 1px solid var(--border-color);
          background: var(--bg-secondary);
        }

        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .copyright {
          font-weight: 500;
          color: var(--text-muted);
        }

        .made-with {
          display: flex;
          align-items: center;
          gap: 6px;
          color: var(--text-muted);
          font-size: 0.9rem;
        }

        @media (max-width: 600px) {
          .footer-content {
            flex-direction: column;
            gap: var(--space-sm);
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
