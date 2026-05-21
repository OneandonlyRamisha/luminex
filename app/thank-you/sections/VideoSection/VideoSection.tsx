"use client";
import styles from "./VideoSection.module.css";

const VIDEO_SRC = ""; // drop /videos/thank-you.mp4 into /public when ready

export default function VideoSection() {
  return (
    <section className={styles.section}>
      <div className={styles.wrap}>
        {VIDEO_SRC ? (
          <video
            className={styles.video}
            src={VIDEO_SRC}
            poster="/images/video-poster.png"
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
