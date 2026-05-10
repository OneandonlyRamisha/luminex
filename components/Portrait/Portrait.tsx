import Image from "next/image";
import styles from "./Portrait.module.css";

interface PortraitProps {
  imageSrc: string;
  imageAlt: string;
  imageWidth?: number;
  imageHeight?: number;
  imageFit?: "cover" | "contain";
  eyebrow: string;
  heading: string;
  paragraphs: string[];
  quote?: string;
  quoteAttrib?: string;
  accentColor: string;
}

export default function Portrait({
  imageSrc,
  imageAlt,
  imageWidth = 1254,
  imageHeight = 1254,
  imageFit = "cover",
  eyebrow,
  heading,
  paragraphs,
  quote,
  quoteAttrib,
  accentColor,
}: PortraitProps) {
  const [name, dates] = heading.split("\n");
  return (
    <section className={styles.section}>
      {/* Top bar */}
      <div className={styles.topBar}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <p className={styles.dates}>{dates}</p>
      </div>

      {/* Body grid */}
      <div className={styles.body}>
        <div className={styles.left}>
          <p className={styles.figureName} style={{ color: accentColor }}>{name}</p>
          {imageFit === "contain" ? (
            <div className={styles.imgBoxContain}>
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={imageWidth}
                height={imageHeight}
                style={{ width: "100%", height: "auto", display: "block" }}
                sizes="45vw"
              />
            </div>
          ) : (
            <div className={styles.imgBox}>
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                sizes="45vw"
                style={{ objectFit: "cover", objectPosition: "20% 8%" }}
              />
            </div>
          )}
        </div>

        <div className={styles.right}>
          {paragraphs.map((p, i) => (
            <p key={i} className={styles.para}>{p}</p>
          ))}
        </div>
      </div>

      {/* Full-width Georgian quote */}
      {quote && (
        <div className={styles.quoteWrap}>
          <p className={styles.quote} style={{ color: accentColor }}>
            &ldquo;{quote}&rdquo;
          </p>
          {quoteAttrib && <p className={styles.quoteAttrib}>{quoteAttrib}</p>}
        </div>
      )}
    </section>
  );
}
