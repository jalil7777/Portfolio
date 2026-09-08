export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  fullDescription?: string;
  category: 'GenAI & LLMs' | 'Machine Learning & Data' | 'Full-Stack & Systems';
  tags: string[];
  keyHighlights: string[];
  githubUrl: string;
  demoUrl?: string;
  featured?: boolean;
  architecture?: {
    inputs?: string;
    processing?: string;
    outputs?: string;
    pipeline?: string[];
  };
}

export interface SkillCategory {
  title: string;
  iconName: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    highlight?: boolean;
    description?: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  formerName?: string;
  period: string;
  location?: string;
  type: string;
  description: string[];
  technologies: string[];
  isCurrent?: boolean;
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  university: string;
  period: string;
  cgpa?: string;
  location: string;
  highlights: string[];
}
