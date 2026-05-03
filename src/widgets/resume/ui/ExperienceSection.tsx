import { getResume } from "@/entities/resume/model/getResume";
import { BulletList } from "@/shared/ui/BulletList";
import { Section } from "@/shared/ui/Section";
import { TimelineCard } from "@/shared/ui/TimelineCard";
import styles from "./ExperienceSection.module.css";

const resume = getResume();

export function ExperienceSection() {
  return (
    <Section title="Experience">
      <div className={styles.stack}>
        {resume.experiences.map((experience) => (
          <TimelineCard
            key={experience.id}
            heading={experience.company}
            meta={experience.period}
            body={experience.description}
          >
            <p className={styles.roleMuted}>{experience.role}</p>
            <BulletList items={experience.introduce} />
          </TimelineCard>
        ))}
      </div>
    </Section>
  );
}
