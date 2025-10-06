export interface PortfolioData {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  profileImage: string;
  about: string;
  skills: string[];
  experience: Experience[];
  projects: Project[];
  education: Education[];
  achievements: string[];
}

export interface Experience {
  company: string;
  position: string;
  duration: string;
  description: string;
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  link?: string;
}

export interface Education {
  institution: string;
  degree: string;
  year: string;
}

export type ThemeType = 'google' | 'netflix' | 'uber' | 'whatsapp';