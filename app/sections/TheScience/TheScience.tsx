import SpectrumVisualizer from "@/components/SpectrumVisualizer/SpectrumVisualizer";
import { SCIENCE } from "@/data";
import styles from "./TheScience.module.css";

export default function TheScience() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.heading}>
          {SCIENCE.heading[0]}
          <br />
          {SCIENCE.heading[1]}
        </h2>
        <p className={styles.label}>
          {SCIENCE.labelMain}
          <br />
          <span className={styles.labelSub}>{SCIENCE.labelSub}</span>
        </p>
      </div>
      <SpectrumVisualizer />
      <div className={styles.cards}>
        {SCIENCE.cards.map((s) => (
          <div key={s.n}>
            <div className={styles.cardHead}>
              <span className={styles.cardNum}>{s.n}</span>
              <span className={styles.cardRule} />
              <span className={styles.cardLabel} style={{ color: s.accent }}>
                {s.label}
              </span>
            </div>
            <h3 className={styles.cardTitle}>{s.head}</h3>
            <p className={styles.cardBody}>{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
