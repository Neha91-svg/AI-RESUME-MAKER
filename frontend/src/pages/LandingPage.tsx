import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Zap, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  return (
    <div className="landing-container">
      <nav className="navbar glass-morphism">
        <div className="container flex justify-between items-center p-4">
          <div className="logo flex items-center gap-2">
            <FileText className="text-primary" size={32} />
            <span className="text-xl font-bold">ResumePro</span>
          </div>
          <div className="nav-links flex gap-4">
            <Link to="/auth" className="btn-secondary">Login</Link>
            <Link to="/dashboard" className="btn-primary">Get Started</Link>
          </div>
        </div>
      </nav>

      <header className="hero container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-content"
        >
          <h1 className="hero-title">
            Build a <span className="text-gradient">Professional Resume</span> in 5 Minutes
          </h1>
          <p className="hero-subtitle">
            ATS-friendly templates, real-time preview, and expert formatting to help you land your dream job.
          </p>
          <div className="hero-btns flex gap-4 justify-center mt-4">
            <Link to="/dashboard" className="btn-primary-lg">
              Create My Resume <ArrowRight size={20} />
            </Link>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="hero-preview"
        >
          <img src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=1000" alt="Resume Preview" className="preview-img" />
        </motion.div>
      </header>

      <section className="features container">
        <div className="feature-grid">
          <div className="feature-card glass-morphism">
            <Zap className="text-accent" size={40} />
            <h3>Lightning Fast</h3>
            <p>Our intuitive editor helps you build a resume in minutes, not hours.</p>
          </div>
          <div className="feature-card glass-morphism">
            <Shield className="text-primary" size={40} />
            <h3>ATS Friendly</h3>
            <p>Our templates are optimized for Applicant Tracking Systems to ensure you get noticed.</p>
          </div>
          <div className="feature-card glass-morphism">
            <FileText className="text-primary" size={40} />
            <h3>Single Page Magic</h3>
            <p>Perfectly balanced layouts that fit all your info on one professional page.</p>
          </div>
        </div>
      </section>

      <style>{`
        .landing-container {
          min-height: 100vh;
          background: radial-gradient(circle at top right, #1e1b4b 0%, #0f172a 50%);
        }
        .navbar {
          position: fixed;
          top: 1rem;
          left: 50%;
          transform: translateX(-50%);
          width: 90%;
          z-index: 100;
        }
        .hero {
          padding-top: 10rem;
          text-align: center;
        }
        @media (max-width: 768px) {
          .hero {
            padding-top: 7rem;
          }
          .hero-title {
            font-size: 2.5rem !important;
          }
          .hero-subtitle {
            font-size: 1.1rem !important;
          }
          .navbar {
            width: 95%;
          }
        }
        .hero-title {
          font-size: 4rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1.5rem;
        }
        .text-gradient {
          background: linear-gradient(to right, #818cf8, #c084fc);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .hero-subtitle {
          font-size: 1.25rem;
          color: var(--text-muted);
          max-width: 600px;
          margin: 0 auto 2rem;
        }
        .btn-primary {
          background: var(--primary);
          color: white;
          padding: 0.5rem 1.5rem;
          border-radius: 0.5rem;
          text-decoration: none;
          font-weight: 600;
        }
        .btn-primary-lg {
          background: var(--primary);
          color: white;
          padding: 1rem 2rem;
          border-radius: 0.75rem;
          text-decoration: none;
          font-weight: 600;
          font-size: 1.1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          box-shadow: 0 10px 15px -3px rgba(99, 102, 241, 0.3);
        }
        .btn-primary:hover, .btn-primary-lg:hover {
          background: var(--primary-hover);
          transform: translateY(-2px);
        }
        .btn-secondary {
          color: var(--text-main);
          text-decoration: none;
          padding: 0.5rem 1.5rem;
          font-weight: 600;
        }
        .hero-preview {
          margin-top: 4rem;
          position: relative;
        }
        .preview-img {
          width: 100%;
          max-width: 800px;
          border-radius: 1rem;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          border: 1px solid var(--glass-border);
        }
        .feature-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin: 5rem 0;
        }
        .feature-card {
          padding: 2.5rem;
          text-align: center;
          transition: var(--transition);
        }
        .feature-card:hover {
          transform: translateY(-10px);
          border-color: var(--primary);
        }
        .feature-card h3 {
          margin: 1.5rem 0 0.5rem;
          font-size: 1.5rem;
        }
        .feature-card p {
          color: var(--text-muted);
        }
      `}</style>
    </div>
  );
};

export default LandingPage;
