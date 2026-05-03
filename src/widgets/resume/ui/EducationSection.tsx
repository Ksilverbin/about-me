import { getResume } from "@/entities/resume/model/getResume";
import { BulletList } from "@/shared/ui/BulletList";
import { Section } from "@/shared/ui/Section";
import { TimelineCard } from "@/shared/ui/TimelineCard";
import styles from "./EducationSection.module.css";

const resume = getResume();

export function EducationSection() {
  return (
    <Section title="Education">
      <div className={styles.row}>
        {resume.educations.map((education) => (
          <TimelineCard
            key={education.id}
            heading={<p className={styles.heading}>{education.description}</p>}
            meta={education.period}
          >
            <BulletList items={education.introduce} />
          </TimelineCard>
        ))}
      </div>
    </Section>
  );
}
