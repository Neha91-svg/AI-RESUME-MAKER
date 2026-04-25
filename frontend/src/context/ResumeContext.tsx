import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ResumeData } from '../types/resume';

interface ResumeContextType {
  resumeData: ResumeData;
  updatePersonalInfo: (info: Partial<ResumeData['personalInfo']>) => void;
  addExperience: () => void;
  updateExperience: (id: string, exp: Partial<ResumeData['experience'][0]>) => void;
  removeExperience: (id: string) => void;
  addEducation: () => void;
  updateEducation: (id: string, edu: Partial<ResumeData['education'][0]>) => void;
  removeEducation: (id: string) => void;
  addProject: () => void;
  updateProject: (id: string, proj: Partial<ResumeData['projects'][0]>) => void;
  removeProject: (id: string) => void;
  addCertification: () => void;
  updateCertification: (id: string, cert: Partial<ResumeData['certifications'][0]>) => void;
  removeCertification: (id: string) => void;
  updateSkills: (skills: string[]) => void;
  toggleSection: (id: string) => void;
}

const initialData: ResumeData = {
  personalInfo: {
    fullName: '',
    email: '',
    address: '',
    summary: '',
    linkedin: '',
    github: '',
  },
  experience: [],
  education: [],
  skills: [],
  projects: [],
  certifications: [],
  sections: [
    { id: 'summary', title: 'Professional Summary', enabled: true },
    { id: 'experience', title: 'Work Experience', enabled: true },
    { id: 'education', title: 'Education', enabled: true },
    { id: 'skills', title: 'Skills', enabled: true },
    { id: 'projects', title: 'Projects', enabled: true },
    { id: 'certifications', title: 'Certifications', enabled: true },
  ],
};

const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

export const ResumeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [resumeData, setResumeData] = useState<ResumeData>(() => {
    const saved = localStorage.getItem('resume_data');
    if (saved) {
      const parsed = JSON.parse(saved);
      // Ensure new fields exist
      if (!parsed.certifications) parsed.certifications = [];
      if (!parsed.sections.find((s: any) => s.id === 'certifications')) {
        parsed.sections.push({ id: 'certifications', title: 'Certifications', enabled: true });
      }
      return parsed;
    }
    return initialData;
  });

  useEffect(() => {
    localStorage.setItem('resume_data', JSON.stringify(resumeData));
  }, [resumeData]);

  const updatePersonalInfo = (info: Partial<ResumeData['personalInfo']>) => {
    setResumeData(prev => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, ...info },
    }));
  };

  const addExperience = () => {
    const newExp = { id: crypto.randomUUID(), company: '', position: '', startDate: '', endDate: '', description: '' };
    setResumeData(prev => ({ ...prev, experience: [...prev.experience, newExp] }));
  };

  const updateExperience = (id: string, exp: Partial<ResumeData['experience'][0]>) => {
    setResumeData(prev => ({
      ...prev,
      experience: prev.experience.map(e => (e.id === id ? { ...e, ...exp } : e)),
    }));
  };

  const removeExperience = (id: string) => {
    setResumeData(prev => ({ ...prev, experience: prev.experience.filter(e => e.id !== id) }));
  };

  const addEducation = () => {
    const newEdu = { id: crypto.randomUUID(), school: '', degree: '', startDate: '', endDate: '' };
    setResumeData(prev => ({ ...prev, education: [...prev.education, newEdu] }));
  };

  const updateEducation = (id: string, edu: Partial<ResumeData['education'][0]>) => {
    setResumeData(prev => ({
      ...prev,
      education: prev.education.map(e => (e.id === id ? { ...e, ...edu } : e)),
    }));
  };

  const removeEducation = (id: string) => {
    setResumeData(prev => ({ ...prev, education: prev.education.filter(e => e.id !== id) }));
  };

  const addProject = () => {
    const newProj = { id: crypto.randomUUID(), name: '', description: '' };
    setResumeData(prev => ({ ...prev, projects: [...prev.projects, newProj] }));
  };

  const updateProject = (id: string, proj: Partial<ResumeData['projects'][0]>) => {
    setResumeData(prev => ({
      ...prev,
      projects: prev.projects.map(p => (p.id === id ? { ...p, ...proj } : p)),
    }));
  };

  const removeProject = (id: string) => {
    setResumeData(prev => ({ ...prev, projects: prev.projects.filter(p => p.id !== id) }));
  };

  const addCertification = () => {
    const newCert = { id: crypto.randomUUID(), name: '', issuer: '', date: '' };
    setResumeData(prev => ({ ...prev, certifications: [...prev.certifications, newCert] }));
  };

  const updateCertification = (id: string, cert: Partial<ResumeData['certifications'][0]>) => {
    setResumeData(prev => ({
      ...prev,
      certifications: prev.certifications.map(c => (c.id === id ? { ...c, ...cert } : c)),
    }));
  };

  const removeCertification = (id: string) => {
    setResumeData(prev => ({ ...prev, certifications: prev.certifications.filter(c => c.id !== id) }));
  };

  const updateSkills = (skills: string[]) => {
    setResumeData(prev => ({ ...prev, skills }));
  };

  const toggleSection = (id: string) => {
    setResumeData(prev => ({
      ...prev,
      sections: prev.sections.map(s => (s.id === id ? { ...s, enabled: !s.enabled } : s)),
    }));
  };

  return (
    <ResumeContext.Provider value={{
      resumeData,
      updatePersonalInfo,
      addExperience,
      updateExperience,
      removeExperience,
      addEducation,
      updateEducation,
      removeEducation,
      addProject,
      updateProject,
      removeProject,
      addCertification,
      updateCertification,
      removeCertification,
      updateSkills,
      toggleSection,
    }}>
      {children}
    </ResumeContext.Provider>
  );
};

export const useResume = () => {
  const context = useContext(ResumeContext);
  if (!context) throw new Error('useResume must be used within ResumeProvider');
  return context;
};
