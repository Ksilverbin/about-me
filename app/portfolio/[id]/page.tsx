import { getResume } from "@/entities/resume/model/getResume";
import Image from "next/image";
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

        {project.image && (
          <figure className={styles.imageWrapper}>
            <Image
              src={project.image}
              alt={`${project.title} 썸네일`}
              width={1200}
              height={675}
              className={styles.image}
              priority
            />
          </figure>
        )}

        <article className={styles.content}>
          {project.background && (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>프로젝트 배경</h2>
              <p className={styles.body}>{project.background}</p>
            </section>
          )}

          {project.problem && (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>무엇이 문제였나</h2>
              <p className={styles.body}>{project.problem}</p>
            </section>
          )}

          {project.introduce.length > 0 && (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>어떻게 해결했나</h2>
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

          {project.retrospective && (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>회고 및 성과</h2>
              <p className={styles.body}>{project.retrospective}</p>
            </section>
          )}
        </article>
      </div>
    </main>
  );
}
