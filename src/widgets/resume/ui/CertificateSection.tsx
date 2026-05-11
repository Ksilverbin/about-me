import { getResume } from "@/entities/resume/model/getResume";
import { Section } from "@/shared/ui/Section";
import styles from "./CertificateSection.module.css";
import { TimelineCard } from "@/shared/ui/TimelineCard";

const resume = getResume();

export function CertificateSection() {
  return (
    <Section title="Certificate">
      <div className={styles.row}>
        {resume.certificates.map((certificate) => (
          <TimelineCard
            key={certificate.id}
            heading={<p className={styles.heading}>{certificate.name}</p>}
            meta={`(${certificate.date} ${certificate.organization})`}
          />
        ))}
      </div>
    </Section>
  );
}
