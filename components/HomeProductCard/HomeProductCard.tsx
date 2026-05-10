"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./HomeProductCard.module.css";

interface Spec { k: string; v: string; }
interface HomeProductCardProps {
  num: string; model: string; georgian: string; accent: string;
  tvLabel: string; cat: string; img: string; portraitImg: string;
  tagline: string; desc: string; specs: Spec[];
  dark?: boolean; imgRight?: boolean; href: string;
}

export default function HomeProductCard({ num, model, georgian, accent, cat, img, portraitImg, tagline, desc, specs, dark, imgRight, href }: HomeProductCardProps) {
  const [showPortrait, setShowPortrait] = useState(false);
  const bg = dark ? "#0B0B0C" : "#F4F1EA";
  const textColor = dark ? "#F4F1EA" : "#0B0B0C";
  const subColor = dark ? "rgba(244,241,234,0.5)" : "var(--graphite)";
  const borderColor = dark ? "rgba(244,241,234,0.07)" : "rgba(11,11,12,0.08)";
  const btnTextColor = accent === "#E3B23C" ? "#0B0B0C" : "#F4F1EA";

  const imageBlock = (
    <div className={styles.imageWrap} onMouseEnter={() => setTimeout(() => setShowPortrait(true), 80)} onMouseLeave={() => setShowPortrait(false)}>
      <Image src={img} alt={model} fill sizes="50vw" style={{ objectFit: "cover", objectPosition: "center", opacity: showPortrait ? 0 : 1, transition: "opacity 500ms ease" }} />
      <Image src={portraitImg} alt={`${model} worn`} fill sizes="50vw" style={{ objectFit: "cover", objectPosition: "20% 5%", opacity: showPortrait ? 1 : 0, transition: "opacity 500ms ease" }} />
      <span className={styles.imgNum}>{num}</span>
    </div>
  );

  const textBlock = (
    <div className={styles.textBlock} style={{ background: bg }}>
      <div>
        <p className={styles.cat} style={{ color: accent }}>{cat}</p>
        <div className={styles.nameRow}>
          <h3 className={styles.modelName} style={{ color: textColor }}>{model}</h3>
          <span className={styles.georgian} style={{ color: accent }}>{georgian}</span>
        </div>
        <p className={styles.tagline} style={{ color: textColor }}>{tagline}</p>
        <p className={styles.desc} style={{ color: subColor }}>{desc}</p>
      </div>
      <div>
        <div className={styles.specsTable}>
          {specs.map(({ k, v }) => (
            <div key={k} className={styles.specRow} style={{ borderBottom: `1px solid ${borderColor}` }}>
              <span className={styles.specKey} style={{ color: subColor }}>{k}</span>
              <span className={styles.specVal} style={{ color: accent }}>{v}</span>
            </div>
          ))}
        </div>
        <div className={styles.ctaRow}>
          <Link href={href} className={styles.ctaBtn} style={{ background: accent, color: btnTextColor }}>View model →</Link>
          <span className={styles.price} style={{ color: textColor }}>74 ₾</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className={styles.card}>
      {imgRight ? textBlock : imageBlock}
      {imgRight ? imageBlock : textBlock}
    </div>
  );
}
