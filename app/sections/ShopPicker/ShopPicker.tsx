import Link from "next/link";
import Image from "next/image";
import { SHOP_PICKER } from "@/data";
import styles from "./ShopPicker.module.css";

export default function ShopPicker() {
  const { piro, bundle, rust } = SHOP_PICKER;
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>{SHOP_PICKER.eyebrow}</p>
        <h2 className={styles.heading}>
          {SHOP_PICKER.heading[0]}
          <br />
          {SHOP_PICKER.heading[1]}
        </h2>
      </div>

      <div className={styles.grid}>
        {/* Pirosmani */}
        <div className={styles.card}>
          <div className={styles.imgArea}>
            <Image
              src="/product-mockups/pirosmani-mockup.png"
              alt={piro.name}
              fill
              sizes="(max-width: 900px) 100vw, 33vw"
              style={{ objectFit: "contain", objectPosition: "center" }}
            />
          </div>
          <div className={styles.body}>
            <div className={styles.bodyTop}>
              <p className={styles.cat} style={{ color: "#B5121B" }}>
                {piro.cat}
              </p>
              <div className={styles.nameRow}>
                <h3 className={styles.modelName}>{piro.name}</h3>
                <span className={styles.georgian} style={{ color: "#B5121B" }}>
                  {piro.georgian}
                </span>
              </div>
              <p className={styles.desc}>{piro.desc}</p>
            </div>
            <div className={styles.priceRow}>
              <span className={styles.price}>74 ₾</span>
              <Link
                href="/pirosmani"
                className={styles.btn}
                style={{ background: "#B5121B", color: "#F4F1EA" }}
              >
                {piro.btn}
              </Link>
            </div>
          </div>
        </div>

        {/* Bundle */}
        <div className={`${styles.card} ${styles.bundleCard}`}>
          <div className={`${styles.imgArea} ${styles.bundleImgArea}`}>
            <Image
              src="/product-mockups/bundle-mockup.png"
              alt={bundle.name}
              fill
              sizes="(max-width: 900px) 100vw, 33vw"
              style={{ objectFit: "contain", objectPosition: "center" }}
            />
          </div>
          <div className={`${styles.body} ${styles.bundleBody}`}>
            <div className={styles.bodyTop}>
              <div className={styles.bundleBadge}>{bundle.badge}</div>
              <p className={styles.cat} style={{ color: "#E3B23C" }}>
                {bundle.cat}
              </p>
              <div className={styles.nameRow}>
                <h3 className={`${styles.modelName} ${styles.bundleModelName}`}>
                  {bundle.name}
                </h3>
              </div>
              <p className={styles.desc} style={{ color: "rgba(244,241,234,0.5)" }}>
                {bundle.desc}
              </p>
            </div>
            <div className={styles.priceRow}>
              <div className={styles.bundlePriceStack}>
                <span className={styles.priceWas}>148 ₾</span>
                <span className={`${styles.price} ${styles.bundlePrice}`}>
                  100 ₾
                </span>
              </div>
              <Link
                href="/pirosmani"
                className={styles.btn}
                style={{ background: "#E3B23C", color: "#0B0B0C" }}
              >
                {bundle.btn}
              </Link>
            </div>
          </div>
        </div>

        {/* Rustaveli */}
        <div className={styles.card}>
          <div className={styles.imgArea}>
            <Image
              src="/product-mockups/rustaveli-mockup.png"
              alt={rust.name}
              fill
              sizes="(max-width: 900px) 100vw, 33vw"
              style={{ objectFit: "contain", objectPosition: "center" }}
            />
          </div>
          <div className={styles.body}>
            <div className={styles.bodyTop}>
              <p className={styles.cat} style={{ color: "#E3B23C" }}>
                {rust.cat}
              </p>
              <div className={styles.nameRow}>
                <h3 className={styles.modelName}>{rust.name}</h3>
                <span className={styles.georgian} style={{ color: "#E3B23C" }}>
                  {rust.georgian}
                </span>
              </div>
              <p className={styles.desc}>{rust.desc}</p>
            </div>
            <div className={styles.priceRow}>
              <span className={styles.price}>74 ₾</span>
              <Link
                href="/rustaveli"
                className={styles.btn}
                style={{ background: "#E3B23C", color: "#0B0B0C" }}
              >
                {rust.btn}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
