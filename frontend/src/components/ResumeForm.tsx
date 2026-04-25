import React from 'react';
import { useResume } from '../context/ResumeContext';
import { Plus, Trash2, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ResumeForm: React.FC = () => {
  const { 
    resumeData, 
    updatePersonalInfo, 
    addExperience, updateExperience, removeExperience,
    addEducation, updateEducation, removeEducation,
    addProject, updateProject, removeProject,
    addCertification, updateCertification, removeCertification,
    updateSkills 
  } = useResume();

  return (
    <div className="resume-form-container">
      <div className="form-sections">
        {/* Personal Info */}
        <Section title="Personal Information" id="personal">
          <div className="grid-2">
            <div className="input-group">
              <label>Full Name</label>
              <input 
                type="text" 
                value={resumeData.personalInfo.fullName} 
                onChange={(e) => updatePersonalInfo({ fullName: e.target.value })}
                placeholder="John Doe"
              />
            </div>
            <div className="input-group">
              <label>Email</label>
              <input 
                type="email" 
                value={resumeData.personalInfo.email} 
                onChange={(e) => updatePersonalInfo({ email: e.target.value })}
                placeholder="john@example.com"
              />
            </div>
            <div className="input-group">
              <label>Address</label>
              <input 
                type="text" 
                value={resumeData.personalInfo.address} 
                onChange={(e) => updatePersonalInfo({ address: e.target.value })}
                placeholder="New York, NY"
              />
            </div>
            <div className="input-group">
              <label>LinkedIn URL</label>
              <input 
                type="text" 
                value={resumeData.personalInfo.linkedin} 
                onChange={(e) => updatePersonalInfo({ linkedin: e.target.value })}
                placeholder="linkedin.com/in/username"
              />
            </div>
            <div className="input-group">
              <label>GitHub URL</label>
              <input 
                type="text" 
                value={resumeData.personalInfo.github} 
                onChange={(e) => updatePersonalInfo({ github: e.target.value })}
                placeholder="github.com/username"
              />
            </div>
          </div>
          <div className="input-group mt-4">
            <label>Professional Summary</label>
            <textarea 
              rows={4} 
              value={resumeData.personalInfo.summary} 
              onChange={(e) => updatePersonalInfo({ summary: e.target.value })}
              placeholder="Briefly describe your career goals and achievements..."
            />
          </div>
        </Section>

        {/* Experience */}
        {resumeData.sections.find(s => s.id === 'experience')?.enabled && (
          <Section title="Work Experience" id="experience" onAdd={addExperience}>
            <AnimatePresence>
              {resumeData.experience.map((exp, index) => (
                <motion.div 
                  key={exp.id} 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="sub-item"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-primary">Position #{index + 1}</h4>
                    <button onClick={() => removeExperience(exp.id)} className="btn-icon text-red-500">
                      <Trash2 size={18} />
                    </button>
                  </div>
                  <div className="grid-2">
                    <div className="input-group">
                      <label>Company</label>
                      <input 
                        type="text" 
                        value={exp.company} 
                        onChange={(e) => updateExperience(exp.id, { company: e.target.value })}
                      />
                    </div>
                    <div className="input-group">
                      <label>Position</label>
                      <input 
                        type="text" 
                        value={exp.position} 
                        onChange={(e) => updateExperience(exp.id, { position: e.target.value })}
                      />
                    </div>
                    <div className="input-group">
                      <label>Start Date</label>
                      <input 
                        type="text" 
                        value={exp.startDate} 
                        onChange={(e) => updateExperience(exp.id, { startDate: e.target.value })}
                        placeholder="MM/YYYY"
                      />
                    </div>
                    <div className="input-group">
                      <label>End Date</label>
                      <input 
                        type="text" 
                        value={exp.endDate} 
                        onChange={(e) => updateExperience(exp.id, { endDate: e.target.value })}
                        placeholder="Present"
                      />
                    </div>
                  </div>
                  <div className="input-group mt-4">
                    <label>Description</label>
                    <textarea 
                      rows={3} 
                      value={exp.description} 
                      onChange={(e) => updateExperience(exp.id, { description: e.target.value })}
                    />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </Section>
        )}

        {/* Education */}
        {resumeData.sections.find(s => s.id === 'education')?.enabled && (
          <Section title="Education" id="education" onAdd={addEducation}>
            {resumeData.education.map((edu) => (
              <div key={edu.id} className="sub-item">
                <div className="flex justify-between items-start mb-4">
                  <button onClick={() => removeEducation(edu.id)} className="btn-icon text-red-500">
                    <Trash2 size={18} />
                  </button>
                </div>
                <div className="grid-2">
                  <div className="input-group">
                    <label>School/University</label>
                    <input 
                      type="text" 
                      value={edu.school} 
                      onChange={(e) => updateEducation(edu.id, { school: e.target.value })}
                    />
                  </div>
                  <div className="input-group">
                    <label>Degree</label>
                    <input 
                      type="text" 
                      value={edu.degree} 
                      onChange={(e) => updateEducation(edu.id, { degree: e.target.value })}
                    />
                  </div>
                </div>
              </div>
            ))}
          </Section>
        )}

        {/* Projects */}
        {resumeData.sections.find(s => s.id === 'projects')?.enabled && (
          <Section title="Projects" id="projects" onAdd={addProject}>
            {resumeData.projects.map((proj) => (
              <div key={proj.id} className="sub-item">
                <div className="flex justify-between items-start mb-4">
                  <button onClick={() => removeProject(proj.id)} className="btn-icon text-red-500">
                    <Trash2 size={18} />
                  </button>
                </div>
                <div className="grid-1">
                  <div className="input-group">
                    <label>Project Name</label>
                    <input 
                      type="text" 
                      value={proj.name} 
                      onChange={(e) => updateProject(proj.id, { name: e.target.value })}
                    />
                  </div>
                  <div className="input-group mt-2">
                    <label>Description</label>
                    <textarea 
                      rows={2} 
                      value={proj.description} 
                      onChange={(e) => updateProject(proj.id, { description: e.target.value })}
                    />
                  </div>
                </div>
              </div>
            ))}
          </Section>
        )}

        {/* Certifications */}
        {resumeData.sections.find(s => s.id === 'certifications')?.enabled && (
          <Section title="Certifications" id="certifications" onAdd={addCertification}>
            {resumeData.certifications.map((cert) => (
              <div key={cert.id} className="sub-item">
                <div className="flex justify-between items-start mb-4">
                  <button onClick={() => removeCertification(cert.id)} className="btn-icon text-red-500">
                    <Trash2 size={18} />
                  </button>
                </div>
                <div className="grid-2">
                  <div className="input-group">
                    <label>Certification Name</label>
                    <input 
                      type="text" 
                      value={cert.name} 
                      onChange={(e) => updateCertification(cert.id, { name: e.target.value })}
                    />
                  </div>
                  <div className="input-group">
                    <label>Issuer</label>
                    <input 
                      type="text" 
                      value={cert.issuer} 
                      onChange={(e) => updateCertification(cert.id, { issuer: e.target.value })}
                    />
                  </div>
                </div>
              </div>
            ))}
          </Section>
        )}

        {/* Skills */}
        {resumeData.sections.find(s => s.id === 'skills')?.enabled && (
          <Section title="Skills" id="skills">
            <div className="input-group">
              <label>Skills (comma separated)</label>
              <textarea 
                rows={3} 
                value={resumeData.skills.join(', ')} 
                onChange={(e) => updateSkills(e.target.value.split(',').map(s => s.trim()))}
                placeholder="React, TypeScript, Node.js, Design..."
              />
            </div>
          </Section>
        )}
      </div>

      <style>{`
        .resume-form-container {
          flex: 1;
          height: calc(100vh - 2rem);
          overflow-y: auto;
          padding: 0 1rem;
        }
        @media (max-width: 1024px) {
          .resume-form-container {
            height: auto;
            overflow: visible;
            padding: 0;
          }
        }
        .form-sections {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .section-box {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 1rem;
          padding: 1.5rem;
        }
        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid var(--border);
        }
        .section-header h3 {
          font-size: 1.25rem;
          color: var(--text-main);
        }
        .grid-1 {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }
        .grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        @media (max-width: 640px) {
          .grid-2 {
            grid-template-columns: 1fr;
          }
        }
        .input-group label {
          display: block;
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-bottom: 0.5rem;
        }
        .sub-item {
          background: rgba(255, 255, 255, 0.02);
          border: 1px dashed var(--border);
          border-radius: 0.75rem;
          padding: 1rem;
          margin-bottom: 1rem;
        }
        .btn-add {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--primary);
          font-size: 0.9rem;
          font-weight: 600;
          background: none;
        }
        .btn-icon {
          padding: 0.5rem;
          border-radius: 0.5rem;
          background: rgba(255, 0, 0, 0.1);
        }
        .text-red-500 { color: #ef4444; }
      `}</style>
    </div>
  );
};

const Section: React.FC<{ 
  title: string, 
  id: string, 
  children: React.ReactNode, 
  onAdd?: () => void 
}> = ({ title, children, onAdd }) => {
  return (
    <div className="section-box animate-fade-in">
      <div className="section-header">
        <h3>{title}</h3>
        {onAdd && (
          <button onClick={onAdd} className="btn-add">
            <Plus size={18} /> Add New
          </button>
        )}
      </div>
      <div className="section-content">
        {children}
      </div>
    </div>
  );
};

export default ResumeForm;
