import { PROTOCOL_UI } from "@/data";
import styles from "./Protocol.module.css";

interface ProtocolItem { time: string; use: string; }
interface ProtocolProps { items: ProtocolItem[]; accent: string; }

export default function Protocol({ items, accent }: ProtocolProps) {
  const mainItems = items.slice(0, -1);
  const lastItem = items[items.length - 1];

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>{PROTOCOL_UI.eyebrow}</p>
        <p className={styles.subline}>{PROTOCOL_UI.subline}</p>
      </div>

      <div className={styles.list}>
        {mainItems.map((item, i) => (
          <div key={i} className={styles.item}>
            <p className={styles.time} style={{ color: accent }}>{item.time}</p>
            <p className={styles.use}>{item.use}</p>
          </div>
        ))}
      </div>

      {lastItem && (
        <div className={styles.notFor}>
          <span className={styles.notForLabel}>{lastItem.time}</span>
          <span className={styles.notForText}>{lastItem.use}</span>
        </div>
      )}
    </section>
  );
}
