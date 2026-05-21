"use client";
import Image from "next/image";
import styles from "./TestimonialGrid.module.css";

export interface MockTestimonial {
  name: string;
  location?: string;
  text: string;
  stars?: number;
}

interface TestimonialGridProps {
  images?: string[];
  mocks?: MockTestimonial[];
  eyebrow?: string;
}

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className={styles.stars}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < count ? styles.starFilled : styles.starEmpty}>
          ★
        </span>
      ))}
    </div>
  );
}

function MockCard({ item }: { item: MockTestimonial }) {
  const initials = item.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className={styles.mockCard}>
      <div className={styles.mockHeader}>
        <div className={styles.avatar}>{initials}</div>
        <span className={styles.mockName}>{item.name}</span>
      </div>
      <Stars count={item.stars ?? 5} />
      <p className={styles.mockText}>{item.text}</p>
    </div>
  );
}

export default function TestimonialGrid({
  images = [],
  mocks = [],
  eyebrow = "რეალური შედეგები",
}: TestimonialGridProps) {
  const useImages = images.length > 0;
  const count = useImages ? images.length : mocks.length;

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <p className={styles.count}>{count} მომხმარებელი</p>
      </div>
      <div className={styles.grid}>
        {useImages
          ? images.map((src, i) => (
              <div key={i} className={styles.card}>
                <Image
                  src={src}
                  alt={`Customer review ${i + 1}`}
                  width={0}
                  height={0}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>
            ))
          : mocks.map((item, i) => <MockCard key={i} item={item} />)}
      </div>
    </section>
  );
}
