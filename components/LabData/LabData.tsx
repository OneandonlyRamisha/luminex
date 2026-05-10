import Image from "next/image";
import styles from "./LabData.module.css";

interface LabDataProps {
  imageSrc: string; imageAlt: string;
  rows: [string, string][]; accent: string;
}

export default function LabData({ imageSrc, imageAlt, rows, accent }: LabDataProps) {
  return (
    <section className={styles.section}>
      <div className={styles.imgWrap}>
        <Image src={imageSrc} alt={imageAlt} fill sizes="50vw" style={{ objectFit: "cover", objectPosition: "center 30%" }} />
      </div>
      <div className={styles.dataSide}>
        <p className={styles.eyebrow}>Lab Data</p>
        <div className={styles.table}>
          {rows.map(([k, v]) => (
            <div key={k} className={styles.row}>
              <span className={styles.key}>{k}</span>
              <span className={styles.val} style={{ color: accent }}>{v}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
