"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { PRODUCT_SHOP_HERO_UI } from "@/data";
import styles from "./ProductShopHero.module.css";

export interface ShopImage {
  src: string;
  alt: string;
  type?: "image" | "video";
}

export interface ProductShopHeroProps {
  productName: string;
  georgianName: string;
  sku: string;
  tagline: string;
  price: number;
  currency: string;
  features: string[];
  images: ShopImage[];
  accent: string;
  accentTextColor: string;
  bundleProductName: string;
  bundleProductGeorgian: string;
  bundleProductAccent: string;
  bundlePrice: number;
  originalTotalPrice: number;
}

export default function ProductShopHero({
  productName,
  georgianName,
  sku,
  tagline,
  price,
  currency,
  features,
  images,
  accent,
  accentTextColor,
  bundleProductName,
  bundleProductGeorgian,
  bundleProductAccent,
  bundlePrice,
  originalTotalPrice,
}: ProductShopHeroProps) {
  const [activeImg, setActiveImg] = useState(0);
  const [bundleSelected, setBundleSelected] = useState(false);
  const [muted, setMuted] = useState(true);
  const [videoLoading, setVideoLoading] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || images[activeImg]?.type !== "video") return;

    setVideoLoading(true);
    setMuted(true);
    video.muted = true;
    video.load();

    const onCanPlay = () => {
      setVideoLoading(false);
      video.play().then(() => {
        video.muted = false;
        setMuted(false);
      }).catch(() => {
        // browser blocked unmuted autoplay — stay muted
      });
    };

    video.addEventListener("canplay", onCanPlay, { once: true });
    return () => video.removeEventListener("canplay", onCanPlay);
  }, [activeImg, images]);

  const savings = originalTotalPrice - bundlePrice;
  const displayPrice = bundleSelected ? bundlePrice : price;

  return (
    <section className={styles.section}>
      {/* LEFT — image panel */}
      <div className={styles.leftPanel}>
        <div className={styles.mainImageWrap}>
          {images[activeImg].type === "video" ? (
            <>
              <video
                ref={videoRef}
                key={images[activeImg].src}
                loop
                muted
                playsInline
                preload="auto"
                className={styles.mainVideo}
                onWaiting={() => setVideoLoading(true)}
                onPlaying={() => setVideoLoading(false)}
              >
                <source src={images[activeImg].src} />
              </video>
              {videoLoading && <div className={styles.videoSpinner}><div className={styles.spinner} /></div>}
              <button
                className={styles.muteBtn}
                onClick={() => {
                  const video = videoRef.current;
                  if (video) video.muted = !video.muted;
                  setMuted((m) => !m);
                }}
                aria-label={muted ? "Unmute" : "Mute"}
              >
                {muted ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                    <line x1="23" y1="9" x2="17" y2="15"/>
                    <line x1="17" y1="9" x2="23" y2="15"/>
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
                    <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
                  </svg>
                )}
              </button>
            </>
          ) : (
            <Image
              src={images[activeImg].src}
              alt={images[activeImg].alt}
              fill
              priority
              sizes="(max-width: 860px) 100vw, 55vw"
              style={{ objectFit: "cover", objectPosition: "center 30%" }}
            />
          )}
          <div className={styles.imageGradient} />
          <p className={styles.imageDisclaimer}>
            {PRODUCT_SHOP_HERO_UI.imageDisclaimer}
          </p>
        </div>

        <div className={styles.thumbStrip}>
          {images.map((img, i) => (
            <button
              key={i}
              className={`${styles.thumb} ${activeImg === i ? styles.thumbActive : ""}`}
              style={activeImg === i ? { borderColor: accent } : undefined}
              onClick={() => setActiveImg(i)}
              aria-label={img.alt}
            >
              {img.type === "video" ? (
                <>
                  <video
                    src={img.src}
                    muted
                    playsInline
                    preload="metadata"
                    className={styles.thumbVideo}
                  />
                  <span className={styles.thumbPlayIcon}>▶</span>
                </>
              ) : (
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="80px"
                  style={{ objectFit: "cover", objectPosition: "center 30%" }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* RIGHT — product info */}
      <div className={styles.rightPanel}>
        <h1 className={styles.productName}>{productName}</h1>
        <p className={styles.productGeorgian}>{georgianName}</p>
        <p className={styles.skuLine}>
          {sku} · {tagline}
        </p>

        <div className={styles.ratingRow}>
          <span className={styles.stars}>★★★★★</span>
          <span className={styles.ratingText}>
            {PRODUCT_SHOP_HERO_UI.ratingText}
          </span>
        </div>

        <p className={styles.price}>
          {displayPrice} {currency}
          {bundleSelected && (
            <span className={styles.priceSub}> · bundle of 2</span>
          )}
        </p>

        <ul className={styles.features}>
          {features.map((f, i) => (
            <li key={i} className={styles.featureItem}>
              <span className={styles.featureCheck}>✓</span>
              {f}
            </li>
          ))}
        </ul>

        <div className={styles.bundleCard}>
          <div className={styles.bundleCardHeader}>
            <svg
              className={styles.bundleCardIcon}
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M3 6H13V14H3V6Z"
                stroke="#22c55e"
                strokeWidth="1.4"
                strokeLinejoin="round"
              />
              <path
                d="M1 6H15"
                stroke="#22c55e"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
              <path d="M8 6V14" stroke="#22c55e" strokeWidth="1.4" />
              <path
                d="M5.5 6C5.5 6 5.5 3 8 3C10.5 3 10.5 6 10.5 6"
                stroke="#22c55e"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            </svg>
            <p className={styles.bundleCardTitle}>
              {PRODUCT_SHOP_HERO_UI.bundleTitle(savings, currency)}
            </p>
          </div>
          <p className={styles.bundleCardBody}>
            {PRODUCT_SHOP_HERO_UI.bundleBody(bundlePrice, currency)}
          </p>
        </div>

        <div className={styles.bundleSection}>
          <p className={styles.bundleLabel}>
            {PRODUCT_SHOP_HERO_UI.bundleLabel}
          </p>
          <div
            className={`${styles.bundleOption} ${bundleSelected ? styles.bundleOptionActive : ""}`}
            style={bundleSelected ? { borderColor: accent } : undefined}
            onClick={() => setBundleSelected((s) => !s)}
            role="button"
            aria-pressed={bundleSelected}
          >
            <div className={styles.bundleOptionLeft}>
              <span
                className={styles.bundleOptionDot}
                style={{ background: bundleProductAccent }}
              />
              <div>
                <p className={styles.bundleOptionName}>
                  {bundleProductName}{" "}
                  <span className={styles.bundleOptionGeorgian}>
                    {bundleProductGeorgian}
                  </span>
                </p>
                <p className={styles.bundleOptionMeta}>
                  {PRODUCT_SHOP_HERO_UI.bundleOptionMeta(
                    bundlePrice - price,
                    savings,
                    currency,
                  )}
                </p>
              </div>
            </div>
            <div
              className={`${styles.toggle} ${bundleSelected ? styles.toggleOn : ""}`}
              style={bundleSelected ? { background: accent } : undefined}
            >
              <div className={styles.toggleKnob} />
            </div>
          </div>
        </div>

        <div className={styles.ctaRow}>
          <a
            href="https://ig.me/m/luminexglasses"
            className={styles.btnPrimary}
            style={{ background: accent, color: accentTextColor }}
          >
            {bundleSelected
              ? PRODUCT_SHOP_HERO_UI.addBothToCart(bundlePrice, currency)
              : PRODUCT_SHOP_HERO_UI.addToCart(price, currency)}
          </a>
          <p className={styles.shipping}>{PRODUCT_SHOP_HERO_UI.shipping}</p>
        </div>
      </div>
    </section>
  );
}
