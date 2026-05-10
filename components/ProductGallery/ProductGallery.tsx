"use client";
import { useRef, useCallback } from "react";
import Image from "next/image";
import styles from "./ProductGallery.module.css";

interface GalleryImage { src: string; alt: string; caption: string; }
interface ProductGalleryProps {
  images: GalleryImage[];
  accent: string;
  modelName: string;
  modelNum: string;
}

export default function ProductGallery({ images, accent, modelName, modelNum }: ProductGalleryProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    if (!trackRef.current) return;
    isDragging.current = true;
    startX.current = e.pageX - trackRef.current.offsetLeft;
    scrollLeft.current = trackRef.current.scrollLeft;
    trackRef.current.style.cursor = "grabbing";
  }, []);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging.current || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.2;
    trackRef.current.scrollLeft = scrollLeft.current - walk;
  }, []);

  const onMouseUp = useCallback(() => {
    isDragging.current = false;
    if (trackRef.current) trackRef.current.style.cursor = "grab";
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.label}>
        <p className={styles.labelEyebrow}>The Instrument</p>
        <p className={styles.labelName} style={{ color: accent }}>{modelName}</p>
        <p className={styles.labelDrag}>← drag to explore</p>
      </div>

      <div
        ref={trackRef}
        className={styles.track}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
      >
        {images.map((img, i) => (
          <div key={i} className={styles.frame}>
            <div className={styles.frameHeader}>
              <span className={styles.frameNum} style={{ color: accent }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className={styles.frameModel}>{modelNum}</span>
            </div>
            <div className={styles.frameImg}>
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="40vw"
                style={{ objectFit: "cover", objectPosition: "center 20%" }}
                draggable={false}
              />
            </div>
            <p className={styles.frameCaption}>{img.caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
