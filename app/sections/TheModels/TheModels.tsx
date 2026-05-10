"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { MODELS } from "@/data";
import styles from "./TheModels.module.css";

export default function TheModels() {
  const [activeModel, setActiveModel] = useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let isSnapping = false;
    let lastScrollY = window.scrollY;

    const isDesktop = () => window.matchMedia("(min-width: 861px)").matches;

    const handleScroll = () => {
      const wrapper = wrapperRef.current;
      const track = trackRef.current;
      if (!wrapper || !track) return;

      // On mobile, panels stack vertically — bypass the transform animation.
      if (!isDesktop()) {
        track.style.transform = "";
        return;
      }

      const wrapperTop = wrapper.getBoundingClientRect().top + window.scrollY;
      const vh = window.innerHeight;
      const rawProgress = (window.scrollY - wrapperTop) / vh;
      const clampedProgress = Math.max(0, Math.min(1, rawProgress));

      track.style.transform = `translateY(-${clampedProgress * vh}px)`;
      setActiveModel(clampedProgress >= 0.5 ? 1 : 0);

      if (!isSnapping && rawProgress > 0.02 && rawProgress < 0.98) {
        const goingDown = window.scrollY > lastScrollY;
        const targetPanel = goingDown ? 1 : 0;
        const targetY = wrapperTop + targetPanel * vh;

        if (Math.abs(window.scrollY - targetY) > 20) {
          isSnapping = true;
          window.scrollTo({ top: targetY, behavior: "smooth" });
          setTimeout(() => { isSnapping = false; }, 800);
        }
      }

      lastScrollY = window.scrollY;
    };

    const handleResize = () => {
      const track = trackRef.current;
      if (track && !isDesktop()) track.style.transform = "";
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div ref={wrapperRef} className={styles.wrapper}>
      <section className={styles.section}>
        <div className={styles.imageColumn}>
          <div className={styles.imageWrap}>
            {MODELS.items.map((m, i) => (
              <Image
                key={m.num}
                src={m.img}
                alt={m.model}
                fill
                sizes="55vw"
                priority={i === 0}
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                  opacity: activeModel === i ? 1 : 0,
                  transition: "opacity 700ms ease",
                }}
              />
            ))}
            <div className={styles.modelIndicator}>
              {MODELS.items.map((m, i) => (
                <span
                  key={m.num}
                  className={styles.indicatorNum}
                  style={{
                    opacity: activeModel === i ? 1 : 0.25,
                    color: activeModel === i ? m.accent : "#F4F1EA",
                    transition: "opacity 700ms ease, color 700ms ease",
                  }}
                >
                  {m.num}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.dataColumn}>
          <div ref={trackRef} className={styles.dataTrack}>
            {MODELS.items.map((m) => (
              <div key={m.num} className={styles.panel}>
                <div className={styles.panelImage}>
                  <Image
                    src={m.img}
                    alt={m.model}
                    fill
                    sizes="100vw"
                    style={{ objectFit: "cover", objectPosition: "center" }}
                  />
                </div>
                <div className={styles.panelInner}>
                  <div className={styles.top}>
                    <p className={styles.eyebrow} style={{ color: m.accent }}>
                      {MODELS.eyebrowPrefix} {m.num} — {m.cat}
                    </p>
                    <div className={styles.nameRow}>
                      <h2 className={styles.modelName}>{m.model}</h2>
                      <span className={styles.georgian} style={{ color: m.accent }}>
                        {m.georgian}
                      </span>
                    </div>
                    <p className={styles.tagline}>{m.tagline}</p>
                    <p className={styles.desc}>{m.desc}</p>
                  </div>

                  <div className={styles.middle}>
                    <div
                      className={styles.wavelengthBox}
                      style={{ borderColor: `${m.accent}55` }}
                    >
                      <span className={styles.wavelengthText} style={{ color: m.accent }}>
                        {m.wavelength}
                      </span>
                    </div>

                    <div className={styles.specsTable}>
                      {m.specs.map(({ k, v }) => (
                        <div key={k} className={styles.specRow}>
                          <span className={styles.specKey}>{k}</span>
                          <span className={styles.specVal} style={{ color: m.accent }}>
                            {v}
                          </span>
                        </div>
                      ))}
                    </div>

                    <p className={styles.designedFor}>{m.designedFor}</p>
                  </div>

                  <div className={styles.bottom}>
                    <Link
                      href={m.href}
                      className={styles.ctaBtn}
                      style={{ background: m.accent, color: m.btnColor }}
                    >
                      {MODELS.ctaBtn}
                    </Link>
                    <span className={styles.price}>{MODELS.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
