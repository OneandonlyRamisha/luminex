"use client";
import { useState } from "react";
import styles from "./Btn.module.css";

interface BtnProps {
  label: string;
  bg: string;
  text: string;
  hoverBg: string;
  small?: boolean;
  full?: boolean;
  onClick?: () => void;
}

export default function Btn({ label, bg, text, hoverBg, small, full, onClick }: BtnProps) {
  const [hov, setHov] = useState(false);
  const cls = [styles.btn, small ? styles.small : styles.normal, full ? styles.full : ""].join(" ");
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className={cls}
      style={{ background: hov ? hoverBg : bg, color: text }}
    >
      {label}
    </button>
  );
}
