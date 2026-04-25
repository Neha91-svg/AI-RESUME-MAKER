export interface ResumeData {
  personalInfo: {
    fullName: string;
    email: string;
    address: string;
    linkedin?: string;
    github?: string;
    website?: string;
    summary: string;
  };
  experience: Experience[];
  education: Education[];
  skills: string[];
  projects: Project[];
  certifications: Certification[];
  sections: {
    id: string;
    title: string;
    enabled: boolean;
  }[];
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Education {
  id: string;
  school: string;
  degree: string;
  startDate: string;
  endDate: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  link?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
}

export const SECTION_TYPES = ['personal', 'summary', 'experience', 'education', 'skills', 'projects', 'certifications'] as const;