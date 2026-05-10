import Image from "next/image";
import styles from "./Hero.module.css";

const stats: [string, string, string][] = [
  ["Tv", "80%", "#E3B23C"],
  ["Category", "1", "#F4F1EA"],
  ["Night drive", "PASS", "#F4F1EA"],
  ["Price", "74 ₾", "#F4F1EA"],
];

export default function RustavelliHero() {
  return (
    <section className={styles.section}>
      <Image src="/images/rust-hero.png" alt="Rustaveli" fill priority sizes="100vw"
        style={{ objectFit: "cover", objectPosition: "center 35%", filter: "brightness(0.7) contrast(1.05)" }} />
      <div className={styles.gradient} />
      <div className={styles.bottomFade} />
      <div className={styles.content}>
        <div className={styles.inner}>
          <div className={styles.skuRow}>
            <span className={styles.skuText}>Model 02</span>
            <span className={styles.skuDash} />
            <span className={styles.skuText}>LMX-02-RUS-YEL</span>
          </div>
          <h1 className={styles.h1}>Rusta-<br />veli</h1>
          <p className={styles.georgian} style={{ color: "#E3B23C" }}>რუსთაველი</p>
          <p className={styles.desc}>The work lens. Filters screen and LED blue light without darkening the world. Wear it at your desk, all day.</p>
          <div className={styles.stats}>
            {stats.map(([l, v, c], i) => (
              <div key={l} className={styles.stat} style={{ borderRight: i < 3 ? "1px solid rgba(244,241,234,0.1)" : "none" }}>
                <p className={styles.statLabel}>{l}</p>
                <p className={styles.statVal} style={{ color: c }}>{v}</p>
              </div>
            ))}
          </div>
          <div className={styles.btnRow}>
            <button className={styles.btnCta} style={{ background: "#E3B23C", color: "#0B0B0C" }}>
              Add to cart — 74 ₾
            </button>
            <button className={styles.btnText}>Ships from Tbilisi in 48h →</button>
          </div>
        </div>
      </div>
      <span className={styles.vertLabel}>Work · Focus · Deep Work</span>
    </section>
  );
}
