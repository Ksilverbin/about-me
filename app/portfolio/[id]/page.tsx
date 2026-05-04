import { getResume } from "@/entities/resume/model/getResume";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./detail.module.css";

// 빌드 시 정적 페이지 생성을 위한 params 제공
export function generateStaticParams() {
  const resume = getResume();
  return resume.projects.map((project) => ({
    id: project.id.toString(),
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const resume = getResume();
  const project = resume.projects.find((p) => p.id.toString() === resolvedParams.id);
  if (!project) return { title: "프로젝트 찾을 수 없음" };
  return { title: `${project.title} | 프로젝트` };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const resume = getResume();
  const project = resume.projects.find((p) => p.id.toString() === resolvedParams.id);

  if (!project) {
    notFound();
  }

  return (
    <main className={styles.shell}>
      <div className={styles.wrap}>
        <nav className={styles.nav}>
          <Link href="/portfolio" className={styles.backLink}>
            ← 프로젝트 목록으로
          </Link>
        </nav>

        <header className={styles.header}>
          <h1 className={styles.title}>{project.title}</h1>
          <div className={styles.meta}>
            <span className={styles.company}>{project.company}</span>
            <span className={styles.period}>{project.period}</span>
          </div>
          <div className={styles.tags}>
            {project.tags.map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        </header>

        <article className={styles.content}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Overview</h2>
            <p className={styles.body}>{project.description}</p>
          </section>

          {project.introduce.length > 0 && (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Details & Contributions</h2>
              <div className={styles.detailsList}>
                {project.introduce.map((item) => (
                  <div key={item.id} className={styles.detailItem}>
                    <h3 className={styles.detailSubtitle}>{item.subTitle}</h3>
                    <p className={styles.detailDesc}>{item.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </article>
      </div>
    </main>
  );
}
