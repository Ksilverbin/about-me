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
            heading={<strong>{certificate.name}</strong>}
            meta={`(${certificate.date} ${certificate.organization})`}
          />
        ))}
      </div>
    </Section>
  );
}
