"use client";
import { useState } from "react";
import { PRODUCT_FAQ_UI } from "@/data";
import styles from "./ProductFaq.module.css";

interface Faq { q: string; a: string; }
interface ProductFaqProps { eyebrow: string; faqs: Faq[]; }

export default function ProductFaq({ eyebrow, faqs }: ProductFaqProps) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className={styles.section}>
      <div className={styles.left}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h2 className={styles.headline}>
          {PRODUCT_FAQ_UI.headline[0]}<br />
          {PRODUCT_FAQ_UI.headline[1]}<br />
          {PRODUCT_FAQ_UI.headline[2]}
        </h2>
      </div>

      <div className={styles.right}>
        {faqs.map((f, i) => (
          <div key={i} className={styles.row}>
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className={styles.trigger}
              aria-expanded={open === i}
            >
              <span className={styles.num}>{String(i + 1).padStart(2, "0")}</span>
              <span className={styles.question}>{f.q}</span>
              <span
                className={styles.icon}
                style={{ transform: open === i ? "rotate(45deg)" : "rotate(0deg)" }}
              >
                +
              </span>
            </button>
            <div className={styles.body} style={{ maxHeight: open === i ? 400 : 0 }}>
              <p className={styles.answer}>{f.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
