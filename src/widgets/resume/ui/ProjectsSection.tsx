import { getResume } from "@/entities/resume/model/getResume";
import { Section } from "@/shared/ui/Section";
import { TagList } from "@/shared/ui/TagList";
import { TimelineCard } from "@/shared/ui/TimelineCard";
import styles from "./ProjectsSection.module.css";

const resume = getResume();

export function ProjectsSection() {
  return (
    <Section title="Project">
      <div className={styles.stack}>
        {resume.projects.map((project) => (
          <TimelineCard
            key={project.id}
            heading={
              <>
                {project.title}
                <small>{project.company}</small>
              </>
            }
            meta={project.period}
            body={project.description}
          >
            <TagList items={project.tags} />
            <ul className={styles.points}>
              {project.introduce.map((item) => (
                <li key={item.id}>
                  <div className={styles.point}>
                    <strong>{item.subTitle}</strong>
                    <span>: {item.description}</span>
                  </div>
                </li>
              ))}
            </ul>
          </TimelineCard>
        ))}
      </div>
    </Section>
  );
}
