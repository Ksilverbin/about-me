import type { ReactNode } from "react";
import styles from "./TimelineCard.module.css";

interface TimelineCardProps {
  heading: ReactNode;
  meta: string;
  body?: string;
  children?: ReactNode;
}

export function TimelineCard({
  heading,
  meta,
  body,
  children
}: TimelineCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.heading}>{heading}</h3>
        <span className={styles.meta}>{meta}</span>
      </div>
      {body ? <p className={styles.body}>{body}</p> : null}
      {children}
    </article>
  );
}
