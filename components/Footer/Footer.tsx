"use client";
import Link from "next/link";
import LogoMark from "@/components/LogoMark/LogoMark";
import { FOOTER } from "@/data";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div>
          <Link href="/" className={styles.logoLink}>
            <LogoMark size={26} color="#F4F1EA" />
            <span className={styles.logoText}>LUMINEX</span>
          </Link>
          <p className={styles.tagline}>{FOOTER.tagline}</p>
          <div className={styles.social}>
            <a
              href="https://www.facebook.com/profile.php?id=61573487801635"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Facebook"
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/luminexglasses/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Instagram"
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>
        <div className={styles.cols}>
          <div>
            <p className={styles.colHead}>{FOOTER.colHeadModels}</p>
            <div className={styles.colLinks}>
              <Link href="/pirosmani" className={styles.flink}>
                {FOOTER.linkPiro}
              </Link>
              <Link href="/rustaveli" className={styles.flink}>
                {FOOTER.linkRust}
              </Link>
            </div>
          </div>
          <div>
            <p className={styles.colHead}>{FOOTER.colHeadInfo}</p>
            <div className={styles.colLinks}>
              <Link href="/" className={styles.flink}>
                {FOOTER.linkAbout}
              </Link>
              <Link href="/" className={styles.flink}>
                {FOOTER.linkLab}
              </Link>
              <Link href="/" className={styles.flink}>
                {FOOTER.linkShipping}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <p className={styles.copy}>{FOOTER.copyright}</p>
        <p className={styles.copy}>{FOOTER.certs}</p>
      </div>
    </footer>
  );
}
