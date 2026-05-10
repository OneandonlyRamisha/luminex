"use client";
import styles from "./FaqRow.module.css";

interface FaqRowProps {
  num?: string;
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
}

export default function FaqRow({ num, q, a, open, onToggle }: FaqRowProps) {
  return (
    <div className={styles.row}>
      <button onClick={onToggle} className={styles.trigger}>
        {num && <span className={styles.num}>{num}</span>}
        <span className={styles.question}>{q}</span>
        <span
          className={styles.icon}
          style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          +
        </span>
      </button>
      <div className={`${styles.body} ${open ? styles.bodyOpen : ""}`}>
        <div className={styles.bodyInner}>
          <p className={styles.answer} style={num ? { paddingLeft: 44 } : undefined}>{a}</p>
        </div>
      </div>
    </div>
  );
}
