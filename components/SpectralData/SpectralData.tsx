"use client";
import { useEffect, useRef, useState } from "react";
import { SPECTRAL_DATA_UI } from "@/data";
import styles from "./SpectralData.module.css";

interface SpectralStat {
  stat: string;
  label: string;
  body: string;
}
interface SpectralDataProps {
  stats: SpectralStat[];
  labRows: [string, string][];
  certifications: string[];
  accent: string;
  blockLabel: string;
  blockStart: number;
  blockEnd: number;
  downloadUrl?: string;
}

const TICKS = [
  { nm: 380, label: "380" },
  { nm: 420, label: "420" },
  { nm: 460, label: "460" },
  { nm: 500, label: "500" },
  { nm: 550, label: "550" },
  { nm: 600, label: "600" },
  { nm: 650, label: "650" },
  { nm: 700, label: "700" },
  { nm: 780, label: "780" },
];

function nmToPos(nm: number) {
  return ((nm - 380) / (780 - 380)) * 100;
}

function StatCard({
  stat,
  label,
  body,
  accent,
  index,
}: SpectralStat & { accent: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.statCard} ${visible ? styles.statCardVisible : ""}`}
      style={{ animationDelay: `${index * 120}ms` }}
    >
      <div className={styles.statCardInner}>
        <div className={styles.statTopRow}>
          <span className={styles.statIndex}>
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className={styles.statLabel}>{label}</span>
        </div>
        <p className={styles.statNum} style={{ color: accent }}>
          {stat}
        </p>
        <p className={styles.statBody}>{body}</p>
      </div>
      <div className={styles.statAccentBar} style={{ background: accent }} />
    </div>
  );
}

export default function SpectralData({
  stats,
  labRows,
  certifications,
  accent,
  blockLabel,
  blockStart,
  blockEnd,
  downloadUrl,
}: SpectralDataProps) {
  const blockPct = blockEnd * 100;

  return (
    <section className={styles.section}>
      {/* ── Section header ── */}
      <div className={styles.sectionHeader}>
        <div className={styles.headerLeft}>
          <span className={styles.headerTag}>
            {SPECTRAL_DATA_UI.sectionTag}
          </span>
          <span className={styles.headerDivider} />
          <span className={styles.headerSub}>
            {SPECTRAL_DATA_UI.sectionSub}
          </span>
        </div>
        <span className={styles.headerRef}>{SPECTRAL_DATA_UI.sectionRef}</span>
      </div>

      {/* ── Stat cards ── */}
      <div className={styles.statsGrid}>
        {stats.map((s, i) => (
          <StatCard key={s.label} {...s} accent={accent} index={i} />
        ))}
      </div>

      {/* ── Spectrum instrument ── */}
      <div className={styles.instrument}>
        <div className={styles.instrumentHeader}>
          <span className={styles.instrumentLabel}>
            {SPECTRAL_DATA_UI.curveLabel}
          </span>
          <span className={styles.instrumentRange}>
            {SPECTRAL_DATA_UI.curveRange}
          </span>
        </div>

        {/* The main spectrum display */}
        <div className={styles.spectrumDisplay}>
          {/* Scan-line grid overlay */}
          <div className={styles.scanGrid} />

          {/* Visible spectrum gradient */}
          <div className={styles.spectrumGradient} />

          {/* Blocked region dark overlay */}
          <div
            className={styles.blockedOverlay}
            style={{ width: `${blockPct}%` }}
          />

          {/* Transmission curve line */}
          <svg
            className={styles.curveSvg}
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
          >
            {/* Flat zero line in blocked zone */}
            <line
              x1="0"
              y1="85"
              x2={blockPct * 10}
              y2="85"
              stroke={accent}
              strokeWidth="1.5"
              strokeOpacity="0.6"
            />
            {/* Rise at cutoff */}
            <path
              d={`M ${blockPct * 10} 85 C ${blockPct * 10 + 30} 85 ${blockPct * 10 + 50} 15 ${blockPct * 10 + 80} 15`}
              fill="none"
              stroke={accent}
              strokeWidth="1.5"
            />
            {/* Flat high line in transmitted zone */}
            <line
              x1={blockPct * 10 + 80}
              y1="15"
              x2="1000"
              y2="15"
              stroke={accent}
              strokeWidth="1.5"
              strokeOpacity="0.6"
            />
            {/* Vertical cutoff marker */}
            <line
              x1={blockPct * 10}
              y1="0"
              x2={blockPct * 10}
              y2="100"
              stroke={accent}
              strokeWidth="1"
              strokeDasharray="4 4"
              strokeOpacity="0.5"
            />
            {/* Shaded area under curve (transmitted) */}
            <path
              d={`M ${blockPct * 10 + 80} 15 L 1000 15 L 1000 100 L ${blockPct * 10 + 80} 100 Z`}
              fill={accent}
              fillOpacity="0.06"
            />
          </svg>

          {/* Y-axis labels */}
          <div className={styles.yAxis}>
            <span className={styles.yLabel}>100%</span>
            <span className={styles.yLabel}>50%</span>
            <span className={styles.yLabel}>0%</span>
          </div>

          {/* Cutoff callout */}
          <div
            className={styles.cutoffCallout}
            style={{ left: `${blockPct}%` }}
          >
            <div
              className={styles.cutoffLine}
              style={{ borderColor: accent }}
            />
            <span className={styles.cutoffLabel} style={{ color: accent }}>
              {Math.round(380 + blockEnd * 400)}nm
            </span>
          </div>

          {/* Tick marks */}
          <div className={styles.tickRow}>
            {TICKS.map(({ nm, label }) => (
              <div
                key={nm}
                className={styles.tick}
                style={{ left: `${nmToPos(nm)}%` }}
              >
                <div className={styles.tickLine} />
                <span className={styles.tickLabel}>{label}</span>
              </div>
            ))}
          </div>

          {/* Region labels */}
          <div className={styles.regionLabels}>
            <span
              className={styles.regionLabel}
              style={{ left: `${blockPct / 2}%`, color: accent }}
            >
              {SPECTRAL_DATA_UI.regionBlocked}
            </span>
            <span
              className={styles.regionLabel}
              style={{ left: `${blockPct + (100 - blockPct) / 2}%` }}
            >
              {SPECTRAL_DATA_UI.regionTransmitted}
            </span>
          </div>
        </div>

        <p className={styles.spectrumNote}>{blockLabel}</p>
      </div>
    </section>
  );
}
