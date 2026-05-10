import { ABOUT } from "@/data";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <blockquote className={styles.quote}>
          <span className={styles.quoteLine}>{ABOUT.quote}</span>
        </blockquote>

        <div className={styles.divider} />

        <p className={styles.para}>{ABOUT.para}</p>

        <div className={styles.divider} />

        <div className={styles.specsGrid}>
          {ABOUT.specs.map(([k, v]) => (
            <div key={k} className={styles.specItem}>
              <span className={styles.specKey}>{k}</span>
              <span className={styles.specVal}>{v}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
