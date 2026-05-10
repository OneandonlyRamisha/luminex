"use client";
import { useState } from "react";
import { PRODUCT_CTA_UI } from "@/data";
import styles from "./ProductCta.module.css";

interface ProductCtaProps {
  eyebrow: string; headline: string; subline: string;
  bg: string; textColor: string; btnBg: string; btnText: string; btnHoverBg: string;
}

export default function ProductCta({ eyebrow, headline, subline, bg, textColor, btnBg, btnText, btnHoverBg }: ProductCtaProps) {
  const [hov, setHov] = useState(false);
  return (
    <section className={styles.section} style={{ background: bg }}>
      <p className={styles.eyebrow} style={{ color: textColor, opacity: 0.55 }}>{eyebrow}</p>
      <h2 className={styles.headline} style={{ color: textColor }}>{headline}</h2>
      <p className={styles.subline} style={{ color: textColor, opacity: 0.5 }}>{subline}</p>
      <button
        className={styles.btn}
        style={{ background: hov ? btnHoverBg : btnBg, color: btnText }}
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
      >
        {PRODUCT_CTA_UI.btnText}
      </button>
    </section>
  );
}
