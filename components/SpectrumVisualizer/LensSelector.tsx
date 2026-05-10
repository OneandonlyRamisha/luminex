"use client";

import styles from "./SpectrumVisualizer.module.css";

interface Lens {
  id: string;
  label: string;
  sublabel: string;
  color: string;
}

interface LensSelectorProps {
  lenses: Lens[];
  active: string | null;
  onSelect: (id: string) => void;
}

export default function LensSelector({
  lenses,
  active,
  onSelect,
}: LensSelectorProps) {
  return (
    <div className={styles.selectorRow}>
      {lenses.map((l) => {
        const isActive = active === l.id;

        return (
          <button
            key={l.id}
            onClick={() => onSelect(l.id)}
            className={styles.lensBtn}
            style={{
              border: `2px solid ${isActive ? l.color : "rgba(11,11,12,0.15)"}`,
              background: isActive ? l.color + "10" : "transparent",
            }}
          >
            <div className={styles.lensBtnInner}>
              <span className={styles.dot} style={{ background: l.color }} />
              <span className={styles.lensBtnLabel}>{l.label}</span>
            </div>

            <span className={styles.lensBtnSub}>{l.sublabel}</span>

            {isActive && (
              <span className={styles.selected} style={{ color: l.color }}>
                არჩეულია ✓
              </span>
            )}
          </button>
        );
      })}

      <div className={styles.hint}>
        {active
          ? "დააჭირე კიდევ ერთხელ, რომ მოხსნა არჩევა"
          : "აირჩიე ლინზა და ნახე, როგორ მუშაობს ფილტრი"}
      </div>
    </div>
  );
}
