import { getResume } from "@/entities/resume/model/getResume";
import Link from "next/link";
import styles from "./portfolio.module.css";

export const metadata = {
  title: "프로젝트 포트폴리오 | 김은빈",
  description: "김은빈의 프로젝트 포트폴리오 목록",
};

export default function PortfolioPage() {
  const resume = getResume();

  return (
    <main className={styles.shell}>
      <div className={styles.wrap}>
        <header className={styles.header}>
          <Link href="/" className={styles.backLink}>
            ← 돌아가기
          </Link>
          <h1 className={styles.title}>프로젝트</h1>
          <p className={styles.description}>
            지금까지 진행했던 주요 프로젝트들을 소개합니다.
          </p>
        </header>

        <div className={styles.grid}>
          {resume.projects.map((project) => (
            <Link
              key={project.id}
              href={`/portfolio/${project.slug}`}
              className={styles.cardLink}
            >
              <article className={styles.card}>
                <div className={styles.cardHeader}>
                  <h2>{project.title}</h2>
                  <span className={styles.period}>{project.period}</span>
                </div>
                <p className={styles.company}>{project.company}</p>
                <p className={styles.body}>{project.description}</p>
                <div className={styles.tags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
