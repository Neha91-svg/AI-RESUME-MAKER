import React from 'react';
import ResumeSidebar from '../components/ResumeSidebar';
import ResumeForm from '../components/ResumeForm';
import ResumePreview from '../components/ResumePreview';
import { motion } from 'framer-motion';
import { FileText, LogOut, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header glass-morphism">
        <div className="flex items-center gap-2">
          <FileText className="text-primary" />
          <span className="font-bold text-lg">ResumePro Dashboard</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="btn-icon-ghost"><Settings size={20} /></button>
          <Link to="/" className="btn-icon-ghost"><LogOut size={20} /></Link>
        </div>
      </header>

      <main className="dashboard-main">
        <ResumeSidebar />
        <ResumeForm />
        <ResumePreview />
      </main>

      <style>{`
        .dashboard-container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          background: #020617;
          overflow-x: hidden;
        }
        .dashboard-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          margin: 0.5rem;
          border-radius: 1rem;
        }
        .dashboard-main {
          flex: 1;
          display: flex;
          gap: 1.5rem;
          padding: 1rem;
          overflow: hidden;
        }
        @media (max-width: 1024px) {
          .dashboard-main {
            flex-direction: column;
            overflow-y: auto;
          }
          .dashboard-container {
            overflow-y: auto;
            height: auto;
          }
        }
        .btn-icon-ghost {
          background: none;
          color: var(--text-muted);
          padding: 0.5rem;
          border-radius: 0.5rem;
          transition: var(--transition);
        }
        .btn-icon-ghost:hover {
          color: var(--text-main);
          background: rgba(255, 255, 255, 0.05);
        }
      `}</style>
    </div>
  );
};

export default Dashboard;
