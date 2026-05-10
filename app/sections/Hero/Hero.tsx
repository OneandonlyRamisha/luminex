import Image from "next/image";
import Link from "next/link";
import { HERO } from "@/data";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.section}>
      <div style={{ position: "absolute", inset: 0 }}>
        <Image
          src="/images/hero-home.png"
          alt="Luminex model"
          fill
          priority
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: "60% center",
            filter: "brightness(0.75) contrast(1.08)",
          }}
        />
      </div>
      <div className={styles.imgOverlay} />
      <div className={styles.bottomFade} />
      <div className={styles.content}>
        <p className={styles.eyebrow}>{HERO.eyebrow}</p>
        <h1 className={styles.h1}>
          {HERO.h1[0]}
          <br />
          {HERO.h1[1]}
        </h1>
        <p className={styles.subline}>
          <span className={styles.sublineFull}>{HERO.subline}</span>
          <span className={styles.sublineMobile}>{HERO.sublineMobile}</span>
        </p>
        <div className={styles.btnRow}>
          <Link href="/pirosmani" className={styles.btnPrimary}>
            {HERO.btnPrimary}
          </Link>
          <Link href="/rustaveli" className={styles.btnGhost}>
            {HERO.btnGhost}
          </Link>
        </div>
      </div>
      <div className={styles.vertLabel}>
        <div className={styles.vertLine} />
        <span className={styles.vertText}>{HERO.vertText}</span>
      </div>
    </section>
  );
}
