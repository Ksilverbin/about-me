import 'server-only';

import certificatesJson from "./certificates.json";
import educationsJson from "./educations.json";
import experiencesJson from "./experiences.json";
import profileJson from "./profile.json";
import projectsJson from "./projects.json";
import skillsJson from "./skills.json";
import type {
  Certificate,
  Education,
  Experience,
  Profile,
  Project,
  ResumeData, TechDetail,
} from './types';

export function getResume(): ResumeData {
  return {
    ...(profileJson as Profile),
    experiences: experiencesJson as Experience[],
    projects: projectsJson as Project[],
    skills: skillsJson as TechDetail[],
    educations: educationsJson as Education[],
    certificates: certificatesJson as Certificate[]
  };
}
