import { getResume } from "@/entities/resume/model/getResume";
import { BulletList } from "@/shared/ui/BulletList";
import { Section } from "@/shared/ui/Section";
import styles from "./HeroSection.module.css";

const resume = getResume();

export function HeroSection() {
  return (
    <Section>
      <div className={`${styles.hero} ${styles.heroStack}`}>
        <div>
          <h1>{resume.name}</h1>
          <p className={styles.role}>{resume.title}</p>
        </div>
        <div className={styles.contactLinks}>
          <a href={`mailto:${resume.contact.email}`}>Email</a>
          <a
            href={`https://${resume.contact.github}`}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
      <div className={styles.headlineBox}>{resume.headline}</div>
      <BulletList items={resume.introduce} />
    </Section>
  );
}
