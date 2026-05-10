import styles from "./TrustBar.module.css";

interface TrustBarProps { items: string[]; }

export default function TrustBar({ items }: TrustBarProps) {
  return (
    <div className={styles.bar}>
      <div className={styles.inner}>
        {items.map((t) => <span key={t} className={styles.item}>{t}</span>)}
      </div>
    </div>
  );
}
