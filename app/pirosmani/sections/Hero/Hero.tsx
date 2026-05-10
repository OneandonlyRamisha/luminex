"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./Hero.module.css";

const stats: [string, string, string][] = [
  ["Tv", "13%", "#B5121B"],
  ["Category", "3", "#F4F1EA"],
  ["UV Block", "100%", "#F4F1EA"],
  ["Price", "74 ₾", "#F4F1EA"],
];

export default function PirosmaniHero() {
  const [ctaHov, setCtaHov] = useState(false);
  return (
    <section className={styles.section}>
      <Image
        src="/images/piro-hero.png"
        alt="Pirosmani"
        fill
        priority
        sizes="100vw"
        style={{
          objectFit: "cover",
          objectPosition: "center 35%",
          filter: "brightness(0.7) contrast(1.05)",
        }}
      />
      <div className={styles.gradient} />
      <div className={styles.bottomFade} />
      <div className={styles.content}>
        <div className={styles.inner}>
          <div className={styles.skuRow}>
            <span className={styles.skuText}>Model 01</span>
            <span className={styles.skuDash} />
            <span className={styles.skuText}>LMX-01-PIR-RED</span>
          </div>
          <h1 className={styles.h1}>
            Piro-
            <br />
            smani
          </h1>
          <p className={styles.georgian} style={{ color: "#B5121B" }}>
            ფიროსმანი
          </p>
          <p className={styles.desc}>
            The lens for the painter&rsquo;s hour. Blocks 99% of the wavelengths
            that delay melatonin. Wear it after sundown.
          </p>
          <div className={styles.stats}>
            {stats.map(([l, v, c], i) => (
              <div
                key={l}
                className={styles.stat}
                style={{
                  borderRight:
                    i < 3 ? "1px solid rgba(244,241,234,0.1)" : "none",
                }}
              >
                <p className={styles.statLabel}>{l}</p>
                <p className={styles.statVal} style={{ color: c }}>
                  {v}
                </p>
              </div>
            ))}
          </div>
          <div className={styles.btnRow}>
            <button
              className={styles.btnCta}
              style={{
                background: ctaHov ? "#8B0D14" : "#B5121B",
                color: "#F4F1EA",
              }}
              onMouseEnter={() => setCtaHov(true)}
              onMouseLeave={() => setCtaHov(false)}
            >
              Add to cart — 74 ₾
            </button>
            <button className={styles.btnText}>
              Ships from Tbilisi in 48h →
            </button>
          </div>
        </div>
      </div>
      <span className={styles.vertLabel}>Sleep · Evening · Recovery</span>
    </section>
  );
}
