import { CertificateSection } from "@/widgets/resume/ui/CertificateSection";
import { EducationSection } from "@/widgets/resume/ui/EducationSection";
import { ExperienceSection } from "@/widgets/resume/ui/ExperienceSection";
import { HeroSection } from "@/widgets/resume/ui/HeroSection";
import { ProjectsSection } from "@/widgets/resume/ui/ProjectsSection";
import { SkillsSection } from "@/widgets/resume/ui/SkillsSection";
import { formatUpdatedAt } from "@/shared/lib/date/formatUpdatedAt";
import styles from "./page.module.css";

export default function Page() {
  const updatedAt = formatUpdatedAt();

  return (
    <main className={styles.shell}>
      <div className={styles.wrap}>
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <CertificateSection />
      </div>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>마지막 업데이트 일시 : {updatedAt}.</div>
      </footer>
    </main>
  );
}
