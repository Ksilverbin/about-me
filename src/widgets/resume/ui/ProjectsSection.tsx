import { getResume } from "@/entities/resume/model/getResume";
import { Section } from "@/shared/ui/Section";
import { TagList } from "@/shared/ui/TagList";
import { TimelineCard } from "@/shared/ui/TimelineCard";
import Link from "next/link";
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
              {project.contributions?.map((item) => (
                <li key={item.id}>
                  <div className={styles.point}>
                    <strong>{item.title}</strong>
                    <span>: {item.solution}</span>
                  </div>
                </li>
              ))}
            </ul>
            <Link href={`/portfolio/${project.slug}`} className={styles.detailLink}>
              자세히 보기 →
            </Link>
          </TimelineCard>
        ))}
      </div>
    </Section>
  );
}
