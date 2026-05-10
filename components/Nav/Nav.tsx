"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoMark from "@/components/LogoMark/LogoMark";
import { NAV } from "@/data";
import styles from "./Nav.module.css";

function NavLink({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  const [hov, setHov] = useState(false);
  const color = active
    ? "#F4F1EA"
    : hov
      ? "rgba(244,241,234,0.85)"
      : "rgba(244,241,234,0.42)";
  const border = active
    ? "1px solid rgba(244,241,234,0.45)"
    : "1px solid transparent";
  return (
    <Link
      href={href}
      className={styles.navLink}
      style={{ color, borderBottom: border }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {label}
    </Link>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 56);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ""}`}>
      <Link href="/" className={styles.logo}>
        <LogoMark size={30} color="#F4F1EA" />
        <span className={styles.logoText}>LUMINEX</span>
      </Link>
      <div className={styles.links}>
        {NAV.links.map(({ href, label }) => (
          <NavLink
            key={href}
            href={href}
            label={label}
            active={pathname === href}
          />
        ))}
      </div>
      <div className={styles.right}>
        <a href="https://ig.me/m/luminexglasses" className={styles.shopBtn}>
          {NAV.shopBtn}
        </a>
      </div>
    </nav>
  );
}
