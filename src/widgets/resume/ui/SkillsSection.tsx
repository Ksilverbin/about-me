import { getResume } from "@/entities/resume/model/getResume";
import { Section } from "@/shared/ui/Section";
import styles from "./SkillsSection.module.css";

const resume = getResume();

export function SkillsSection() {
  return (
    <Section title="Skills">
      <ul className={styles.techList}>
        {resume.skills.map((skill) => (
          <li key={skill.name} className={styles.techItem}>
            <strong>{skill.name}</strong>: {skill.description}
          </li>
        ))}
      </ul>
    </Section>
  );
}
