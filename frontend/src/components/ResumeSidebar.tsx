import React from 'react';
import { useResume } from '../context/ResumeContext';
import { motion } from 'framer-motion';
import { 
  User, 
  FileText, 
  Briefcase, 
  GraduationCap, 
  Wrench, 
  FolderGit2,
  CheckCircle2,
  Circle,
  Shield
} from 'lucide-react';

const ResumeSidebar: React.FC = () => {
  const { resumeData, toggleSection } = useResume();

  const sectionIcons: Record<string, any> = {
    personal: User,
    summary: FileText,
    experience: Briefcase,
    education: GraduationCap,
    skills: Wrench,
    projects: FolderGit2,
    certifications: Shield,
  };

  return (
    <div className="resume-sidebar glass-morphism">
      <h3 className="sidebar-title">Resume Sections</h3>
      <div className="section-list">
        {resumeData.sections.map((section) => {
          const Icon = sectionIcons[section.id] || FileText;
          return (
            <motion.div 
              key={section.id}
              whileHover={{ x: 5 }}
              className={`section-item ${section.enabled ? 'active' : ''}`}
              onClick={() => toggleSection(section.id)}
            >
              <div className="flex items-center gap-3">
                <Icon size={20} className={section.enabled ? 'text-primary' : 'text-muted'} />
                <span>{section.title}</span>
              </div>
              {section.enabled ? (
                <CheckCircle2 size={18} className="text-primary" />
              ) : (
                <Circle size={18} className="text-muted" />
              )}
            </motion.div>
          );
        })}
      </div>

      <style>{`
        .resume-sidebar {
          width: 300px;
          height: calc(100vh - 2rem);
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
        }
        @media (max-width: 1024px) {
          .resume-sidebar {
            width: 100%;
            height: auto;
          }
        }
        .sidebar-title {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 2rem;
          color: var(--text-main);
        }
        .section-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .section-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem;
          border-radius: 0.75rem;
          cursor: pointer;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid transparent;
          transition: var(--transition);
        }
        .section-item:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: var(--glass-border);
        }
        .section-item.active {
          background: rgba(99, 102, 241, 0.1);
          border-color: rgba(99, 102, 241, 0.3);
        }
        .section-item span {
          font-size: 0.95rem;
          font-weight: 500;
        }
      `}</style>
    </div>
  );
};

export default ResumeSidebar;
