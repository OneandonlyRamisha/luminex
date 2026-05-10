import styles from "./WhyItWorks.module.css";

interface Stat { accent: string; stat: string; label: string; body: string; }
interface WhyItWorksProps { stats: Stat[]; }

export default function WhyItWorks({ stats }: WhyItWorksProps) {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Why it works</p>
        <div className={styles.grid}>
          {stats.map((b) => (
            <div key={b.label} className={styles.statCard}>
              <p className={styles.statNum} style={{ color: b.accent }}>{b.stat}</p>
              <p className={styles.statLabel}>{b.label}</p>
              <p className={styles.statBody}>{b.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
