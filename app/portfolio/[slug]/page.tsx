import { getResume } from "@/entities/resume/model/getResume";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./detail.module.css";

// 빌드 시 정적 페이지 생성을 위한 params 제공
export function generateStaticParams() {
  const resume = getResume();
  return resume.projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const resume = getResume();
  const project = resume.projects.find((p) => p.slug === resolvedParams.slug);
  if (!project) return { title: "프로젝트 찾을 수 없음" };
  return { title: `${project.title} | 프로젝트` };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const resume = getResume();
  const project = resume.projects.find((p) => p.slug === resolvedParams.slug);

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
          {/* V2 Structure */}
          {project.overview && (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>프로젝트 소개</h2>
              <p className={styles.body}>{project.overview}</p>
            </section>
          )}

          {project.contributions && project.contributions.length > 0 && (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>내가 기여한 부분</h2>
              <div className={styles.detailsList}>
                {project.contributions.map((item) => (
                  <div key={item.id} className={styles.detailItem}>
                    <h3 className={styles.detailSubtitle}>{item.title}</h3>
                    {item.images?.length > 0 && (
                      <div className={styles.imagesGrid}>
                        {item.images.map((image, index: number) => (
                          <figure key={index} className={styles.gridImageWrapper}>
                            <Image
                              key={image.id}
                              src={image.src}
                              alt={`${item.title} 기여한 부분 이미지 ${index + 1}`}
                              width={image.width}
                              height={image.height}
                              className={styles.image}
                            />
                          </figure>
                        ))}
                      </div>
                    )}
                    <div className={styles.psBlock}>
                      <div className={styles.problemBlock}>
                        <strong className={styles.psLabel}>문제 상황</strong>
                        <p className={styles.detailDesc}>{item.problem}</p>
                      </div>
                      <div className={styles.solutionBlock}>
                        <strong className={styles.psLabel}>해결 방안</strong>
                        <p className={styles.detailDesc}>{item.solution}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {project.architecture && (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>구성 및 아키텍처 설계</h2>
              <p className={styles.body}>{project.architecture}</p>
            </section>
          )}

          {project.overview && project.techDetails && project.techDetails.length > 0 && (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>사용 기술</h2>
              <ul className={styles.techList}>
                {project.techDetails.map((tech) => (
                  <li key={tech.name} className={styles.techItem}>
                    <strong>{tech.name}</strong>: {tech.description}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {project.overview && (!project.techDetails || project.techDetails.length === 0) && (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>사용 기술</h2>
              <div className={styles.tags}>
                {project.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </section>
          )}

          {/* V1 Structure Fallbacks */}
          {!project.overview && project.background && (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>프로젝트 배경</h2>
              <p className={styles.body}>{project.background}</p>
            </section>
          )}

          {!project.overview && project.problem && (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>무엇이 문제였나</h2>
              <p className={styles.body}>{project.problem}</p>
            </section>
          )}

          {!project.overview && project.introduce && project.introduce.length > 0 && (
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

          {!project.overview && project.retrospective && (
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
