import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, ArrowRight } from 'lucide-react';

const AuthPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login
    navigate('/dashboard');
  };

  return (
    <div className="auth-container">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="auth-card glass-morphism"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isLogin ? 'Welcome Back' : 'Create Account'}
        </h2>
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group mb-4">
            <label className="block text-sm text-muted mb-2">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-muted" size={20} />
              <input type="email" placeholder="name@example.com" required className="pl-10" />
            </div>
          </div>
          <div className="form-group mb-6">
            <label className="block text-sm text-muted mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-muted" size={20} />
              <input type="password" placeholder="••••••••" required className="pl-10" />
            </div>
          </div>
          <button type="submit" className="btn-primary-lg w-full mb-4">
            {isLogin ? 'Sign In' : 'Sign Up'} <ArrowRight size={20} />
          </button>
        </form>
        <p className="text-center text-muted">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
          <button 
            onClick={() => setIsLogin(!isLogin)}
            className="text-primary font-bold hover:underline"
          >
            {isLogin ? 'Sign Up' : 'Sign In'}
          </button>
        </p>
      </motion.div>

      <style>{`
        .auth-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg-dark);
        }
        .auth-card {
          width: 100%;
          max-width: 400px;
          padding: 2.5rem;
        }
        .form-group {
          margin-bottom: 1.5rem;
        }
        .relative { position: relative; }
        .absolute { position: absolute; }
        .pl-10 { padding-left: 2.75rem; }
        .w-full { width: 100%; }
        .mb-2 { margin-bottom: 0.5rem; }
        .mb-4 { margin-bottom: 1rem; }
        .mb-6 { margin-bottom: 1.5rem; }
        .text-2xl { font-size: 1.5rem; }
        .text-center { text-align: center; }
        .font-bold { font-weight: 700; }
        .block { display: block; }
        .text-sm { font-size: 0.875rem; }
      `}</style>
    </div>
  );
};

export default AuthPage;
