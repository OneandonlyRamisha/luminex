import Link from "next/link";
import styles from "./Crosslink.module.css";

interface CrosslinkProps {
  label: string; headline: string; description: string;
  href: string; btnLabel: string; accentColor: string; btnTextColor: string;
}

export default function Crosslink({ label, headline, description, href, btnLabel, accentColor, btnTextColor }: CrosslinkProps) {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div>
          <p className={styles.label}>{label}</p>
          <h3 className={styles.headline}>{headline}</h3>
          <p className={styles.description}>{description}</p>
        </div>
        <Link href={href} className={styles.btn} style={{ background: accentColor, color: btnTextColor }}>
          {btnLabel}
        </Link>
      </div>
    </section>
  );
}
