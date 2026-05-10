import { IN_THE_BOX_UI } from "@/data";
import styles from "./InTheBox.module.css";

interface InTheBoxProps { lensName: string; lensNote: string; }

export default function InTheBox({ lensName, lensNote }: InTheBoxProps) {
  const items = [
    { item: lensName, note: lensNote },
    ...IN_THE_BOX_UI.items,
  ];
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>{IN_THE_BOX_UI.eyebrow}</p>
        <h2 className={styles.heading}>{IN_THE_BOX_UI.heading}</h2>
        <div className={styles.grid}>
          {items.map((b) => (
            <div key={b.item} className={styles.boxItem}>
              <p className={styles.itemName}>{b.item}</p>
              <p className={styles.itemNote}>{b.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
