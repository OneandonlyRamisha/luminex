"use client";

import styles from "./SpectrumVisualizer.module.css";

interface LensDetailProps {
  lens: {
    color: string;
    tagline: string;
    explain: string;
    when: string;
    stat1: [string, string];
    stat2: [string, string];
  };
}

export default function LensDetail({ lens }: LensDetailProps) {
  return (
    <div
      className={styles.detail}
      style={{
        background: lens.color + "0D",
        border: `1.5px solid ${lens.color}30`,
      }}
    >
      <div>
        <p className={styles.detailTagline} style={{ color: lens.color }}>
          {lens.tagline}
        </p>

        <p className={styles.detailExplain}>{lens.explain}</p>

        <p className={styles.detailWhen} style={{ color: lens.color }}>
          {lens.when}
        </p>
      </div>

      <div className={styles.statsRow}>
        {[lens.stat1, lens.stat2].map(([val, lbl]) => (
          <div key={lbl} className={styles.statItem}>
            <p className={styles.statVal} style={{ color: lens.color }}>
              {val}
            </p>
            <p className={styles.statLbl}>{lbl}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
