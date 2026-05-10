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


export interface Image {
  id: number;
  src: string;
  width: number;
  height: number;
}

export interface Contribution {
  id: number;
  title: string;
  images: Image[];
  problem: string;
  solution: string;
}

export interface TechDetail {
  name: string;
  description: string;
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
  image?: string;
  overview?: string;
  contributions?: Contribution[];
  techDetails?: TechDetail[];
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
