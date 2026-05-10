import { FILLER_BANNER } from "@/data";
import styles from "./FillerBanner.module.css";

export default function FillerBanner() {
  return (
    <section className={styles.section}>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h2 className={styles.heading}>
          {FILLER_BANNER.heading[0]}
          <br />
          {FILLER_BANNER.heading[1]}
        </h2>
      </div>
    </section>
  );
}
