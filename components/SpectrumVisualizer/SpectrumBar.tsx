"use client";

import styles from "./SpectrumVisualizer.module.css";

interface Lens {
  id: string;
  color: string;
  cutoff: number;
  overlayLabel: string;
  overlayRange: string;
  passRange: string;
}

interface SpectrumBarProps {
  activeLens: Lens | null;
  lenses: Lens[];
}

const toPercent = (nm: number) => ((nm - 380) / (700 - 380)) * 100;

const defaultCutoffs = [
  { nm: 500, color: "#E3B23C", label: "Rustaveli · ლურჯი დიაპაზონი" },
  { nm: 600, color: "#B5121B", label: "Pirosmani · ლურჯი + მწვანე" },
];

export default function SpectrumBar({ activeLens }: SpectrumBarProps) {
  return (
    <div className={styles.barWrap}>
      <div className={styles.rainbow} />

      {!activeLens &&
        defaultCutoffs.map(({ nm, color, label }) => (
          <div
            key={nm}
            className={styles.cutoffLine}
            style={{
              left: toPercent(nm) + "%",
              background: color,
            }}
          >
            <span className={styles.cutoffLabel} style={{ color }}>
              {label}
            </span>
          </div>
        ))}

      {activeLens && (
        <>
          <div
            className={styles.blockedOverlay}
            style={{
              width: toPercent(activeLens.cutoff) + "%",
              background: activeLens.color + "CC",
              borderRight: `3px solid ${activeLens.color}`,
            }}
          >
            <div>
              <p className={styles.overlayLabel}>{activeLens.overlayLabel}</p>
              <p className={styles.overlayRange}>{activeLens.overlayRange}</p>
            </div>
          </div>

          <div
            className={styles.passOverlay}
            style={{
              width: 100 - toPercent(activeLens.cutoff) + "%",
            }}
          >
            <div>
              <p className={styles.overlayLabel}>გადის</p>
              <p className={styles.overlayRange}>{activeLens.passRange}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
