"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./SocialNudge.module.css";

const STORY_IMAGES = ["", "", "", ""];

const STORY_PLACEHOLDERS = [
  "linear-gradient(170deg, #1A1A1C 0%, #2A2A2D 100%)",
  "linear-gradient(200deg, #2A2A2D 0%, #1A1A1C 100%)",
  "linear-gradient(145deg, #1A1A1C 0%, #3C3C40 100%)",
  "linear-gradient(185deg, #2A2A2D 0%, #1A1A1C 100%)",
];

const COUNT = STORY_IMAGES.length;
const AUTO_INTERVAL = 3200;

function StoryCard({ src, index }: { src: string; index: number }) {
  return (
    <div
      className={styles.storyCard}
      style={{
        background: src
          ? "transparent"
          : STORY_PLACEHOLDERS[index % STORY_PLACEHOLDERS.length],
      }}
    >
      {src ? (
        <Image
          src={src}
          alt={`Community post ${index + 1}`}
          fill
          sizes="(max-width: 540px) 92vw, 25vw"
          style={{ objectFit: "cover" }}
        />
      ) : (
        <div className={styles.cardPlaceholder}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="rgba(244,241,234,0.12)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
            <circle cx="12" cy="13" r="4" />
          </svg>
        </div>
      )}
    </div>
  );
}

export default function SocialNudge() {
  const [hov, setHov] = useState(false);
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % COUNT);
    }, AUTO_INTERVAL);
    return () => clearInterval(id);
  }, []);

  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }

  function handleTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) {
      setCurrent((prev) =>
        delta > 0 ? (prev + 1) % COUNT : (prev - 1 + COUNT) % COUNT,
      );
    }
    touchStartX.current = null;
  }

  return (
    <section className={styles.section}>
      <div className={styles.textBlock}>
        <p className={styles.eyebrow}>community</p>
        <p className={styles.headline}>
          გადაიღე.
          <br />
          დაგვთაგე.
        </p>
        <p className={styles.sub}>ყოველ tagged კადრს გამოვაქვეყნებთ.</p>
      </div>

      {/* desktop + tablet grid */}
      <div className={styles.grid}>
        {STORY_IMAGES.map((src, i) => (
          <StoryCard key={i} src={src} index={i} />
        ))}
      </div>

      {/* mobile carousel */}
      <div className={styles.carousel}>
        <div
          className={styles.carouselViewport}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className={styles.carouselTrack}
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {STORY_IMAGES.map((src, i) => (
              <div key={i} className={styles.carouselSlide}>
                <StoryCard src={src} index={i} />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.dots}>
          {STORY_IMAGES.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === current ? styles.dotActive : ""}`}
              onClick={() => setCurrent(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <div className={styles.handleWrap}>
        <a
          href="https://www.instagram.com/luminexglasses/"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHov(true)}
          onMouseLeave={() => setHov(false)}
          className={styles.handle}
          style={{
            color: hov ? "#B5121B" : "rgba(244,241,234,0.3)",
            borderBottomColor: hov ? "#B5121B" : "rgba(244,241,234,0.1)",
          }}
        >
          @luminexglasses
        </a>
      </div>
    </section>
  );
}
