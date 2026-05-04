export interface Profile {
  name: string;
  title: string;
  contact: {
    email: string;
    github: string;
  };
  headline: string;
  introduce: string[];
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string;
  introduce: string[];
}

export interface ProjectHighlight {
  id: number;
  subTitle: string;
  description: string;
}

export interface Project {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
  background?: string;
  problem?: string;
  retrospective?: string;
  introduce: ProjectHighlight[];
}

export interface Education {
  id: number;
  period: string;
  description: string;
  introduce: string[];
}

export interface Certificate {
  id: number;
  name: string;
  date: string;
  organization: string;
}

export interface ResumeData extends Profile {
  experiences: Experience[];
  projects: Project[];
  skills: string[];
  educations: Education[];
  certificates: Certificate[];
}
