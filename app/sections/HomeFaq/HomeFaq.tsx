"use client";
import { useState } from "react";
import FaqRow from "@/components/FaqRow/FaqRow";
import { HOME_FAQ } from "@/data";
import styles from "./HomeFaq.module.css";

export default function HomeFaq() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <p className={styles.eyebrow}>{HOME_FAQ.eyebrow}</p>
          <h2 className={styles.heading}>
            {HOME_FAQ.heading[0]}
            <br />
            {HOME_FAQ.heading[1]}
          </h2>
        </div>
        <div className={styles.right}>
          {HOME_FAQ.faqs.map((f, i) => (
            <FaqRow
              key={i}
              num={String(i + 1).padStart(2, "0")}
              q={f.q}
              a={f.a}
              open={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
