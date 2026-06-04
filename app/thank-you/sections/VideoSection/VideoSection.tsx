"use client";
import styles from "./VideoSection.module.css";

const VIDEO_SRC = "/thankyou.mp4";

export default function VideoSection() {
  return (
    <section className={styles.section}>
      <div className={styles.wrap}>
        {VIDEO_SRC ? (
          <video
            className={styles.video}
            src={VIDEO_SRC}
            controls
            playsInline
          />
        ) : (
          <div className={styles.placeholder}>
            <div className={styles.playIcon}>
              <div className={styles.playTriangle} />
            </div>
            <span className={styles.placeholderText}>Video coming soon</span>
          </div>
        )}
      </div>
    </section>
  );
}
