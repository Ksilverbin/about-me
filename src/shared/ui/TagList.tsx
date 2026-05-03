import styles from "./TagList.module.css";

interface TagListProps {
  items: string[];
}

export function TagList({ items }: TagListProps) {
  return (
    <div className={styles.row}>
      {items.map((item) => (
        <span className={styles.tag} key={item}>
          {item}
        </span>
      ))}
    </div>
  );
}
