import React, { useRef } from 'react';
import { useResume } from '../context/ResumeContext';
import { useReactToPrint } from 'react-to-print';
import { Download, Mail, Link, ExternalLink } from 'lucide-react';

const ResumePreview: React.FC = () => {
  const { resumeData } = useResume();
  const componentRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    contentRef: componentRef,
  });

  return (
    <div className="resume-preview-container">
      <div className="preview-toolbar flex justify-between items-center mb-4">
        <span className="text-muted text-sm">Live Preview (ATS Friendly)</span>
        <button onClick={handlePrint} className="btn-primary flex items-center gap-2">
          <Download size={18} /> Download PDF
        </button>
      </div>

      <div className="preview-scroll-area">
        <div ref={componentRef} className="resume-paper">
          {/* Header */}
          <header className="resume-header">
            <h1>{resumeData.personalInfo.fullName || 'YOUR NAME'}</h1>
            <div className="contact-info flex gap-4 flex-wrap justify-center mt-2">
              {resumeData.personalInfo.email && (
                <span className="info-item"><Mail size={12} /> {resumeData.personalInfo.email}</span>
              )}
              {resumeData.personalInfo.linkedin && (
                <span className="info-item"><Link size={12} /> {resumeData.personalInfo.linkedin}</span>
              )}
              {resumeData.personalInfo.github && (
                <span className="info-item"><ExternalLink size={12} /> {resumeData.personalInfo.github}</span>
              )}
            </div>
          </header>

          {/* Summary */}
          {resumeData.sections.find(s => s.id === 'summary')?.enabled && resumeData.personalInfo.summary && (
            <section className="resume-section">
              <h2 className="section-title">Professional Summary</h2>
              <p className="summary-text">{resumeData.personalInfo.summary}</p>
            </section>
          )}

          {/* Experience */}
          {resumeData.sections.find(s => s.id === 'experience')?.enabled && resumeData.experience.length > 0 && (
            <section className="resume-section">
              <h2 className="section-title">Work Experience</h2>
              {resumeData.experience.map((exp) => (
                <div key={exp.id} className="resume-item">
                  <div className="item-header flex justify-between">
                    <strong>{exp.position}</strong>
                    <span>{exp.startDate} - {exp.endDate}</span>
                  </div>
                  <div className="item-sub">{exp.company}</div>
                  <p className="item-desc">{exp.description}</p>
                </div>
              ))}
            </section>
          )}

          {/* Education */}
          {resumeData.sections.find(s => s.id === 'education')?.enabled && resumeData.education.length > 0 && (
            <section className="resume-section">
              <h2 className="section-title">Education</h2>
              {resumeData.education.map((edu) => (
                <div key={edu.id} className="resume-item">
                  <div className="item-header flex justify-between">
                    <strong>{edu.degree}</strong>
                    <span>{edu.startDate} - {edu.endDate}</span>
                  </div>
                  <div className="item-sub">{edu.school}</div>
                </div>
              ))}
            </section>
          )}

          {/* Projects */}
          {resumeData.sections.find(s => s.id === 'projects')?.enabled && resumeData.projects.length > 0 && (
            <section className="resume-section">
              <h2 className="section-title">Projects</h2>
              {resumeData.projects.map((proj) => (
                <div key={proj.id} className="resume-item">
                  <div className="item-header">
                    <strong>{proj.name}</strong>
                  </div>
                  <p className="item-desc">{proj.description}</p>
                </div>
              ))}
            </section>
          )}

          {/* Certifications */}
          {resumeData.sections.find(s => s.id === 'certifications')?.enabled && resumeData.certifications.length > 0 && (
            <section className="resume-section">
              <h2 className="section-title">Certifications</h2>
              {resumeData.certifications.map((cert) => (
                <div key={cert.id} className="resume-item">
                  <div className="item-header flex justify-between">
                    <strong>{cert.name}</strong>
                    <span>{cert.date}</span>
                  </div>
                  <div className="item-sub">{cert.issuer}</div>
                </div>
              ))}
            </section>
          )}

          {/* Skills */}
          {resumeData.sections.find(s => s.id === 'skills')?.enabled && resumeData.skills.length > 0 && (
            <section className="resume-section">
              <h2 className="section-title">Skills</h2>
              <ul className="skills-list">
                {resumeData.skills.map((skill, index) => (
                  <li key={index} className="skill-point">{skill}</li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>

      <style>{`
        .resume-preview-container {
          flex: 1;
          height: calc(100vh - 2rem);
          display: flex;
          flex-direction: column;
        }
        @media (max-width: 1024px) {
          .resume-preview-container {
            height: auto;
            min-height: 500px;
          }
        }
        .preview-scroll-area {
          flex: 1;
          overflow-y: auto;
          background: rgba(0, 0, 0, 0.2);
          padding: 1.5rem;
          border-radius: 1rem;
        }
        @media (max-width: 640px) {
          .preview-scroll-area {
            padding: 0.5rem;
          }
        }
        .resume-paper {
          background: white;
          color: #1a1a1a;
          width: 100%;
          min-height: 297mm; /* A4 Ratio */
          padding: 15mm; /* Reduced padding for single page fit */
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          margin: 0 auto;
          font-family: 'Inter', sans-serif;
          font-size: 10pt;
          line-height: 1.4;
        }
        .resume-header {
          text-align: center;
          border-bottom: 2px solid ${resumeData.personalInfo.themeColor || '#333'};
          padding-bottom: 0.5rem;
          margin-bottom: 1rem;
        }
        .resume-header h1 {
          font-size: 20pt;
          text-transform: uppercase;
          margin: 0;
          letter-spacing: 1px;
          font-family: 'Garamond', serif;
          color: ${resumeData.personalInfo.themeColor || '#000'};
        }
        .info-item {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 8.5pt;
        }
        .resume-section {
          margin-bottom: 0.75rem; /* Reduced margin */
        }
        .section-title {
          font-size: 11pt;
          text-transform: uppercase;
          border-bottom: 1px solid ${resumeData.personalInfo.themeColor || '#000'};
          padding-bottom: 1px;
          margin-bottom: 0.4rem;
          font-weight: bold;
          font-family: 'Garamond', serif;
          color: ${resumeData.personalInfo.themeColor || '#000'};
        }
        .resume-item {
          margin-bottom: 0.5rem;
        }
        .item-header {
          font-size: 10pt;
        }
        .item-sub {
          font-style: italic;
          font-size: 9pt;
          margin-bottom: 0.1rem;
        }
        .item-desc {
          white-space: pre-line;
          font-size: 9pt;
          margin-top: 0.1rem;
          text-align: justify;
        }
        .skills-list {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.2rem 1rem;
          padding-left: 1.2rem;
          margin: 0;
        }
        .skill-point {
          font-size: 9pt;
          list-style-type: disc;
        }
        .summary-text {
          font-size: 9pt;
          text-align: justify;
          margin: 0;
        }

        @media print {
          .resume-paper {
            box-shadow: none;
            margin: 0;
            padding: 10mm;
          }
          body { background: white !important; }
        }
      `}</style>
    </div>
  );
};

export default ResumePreview;
