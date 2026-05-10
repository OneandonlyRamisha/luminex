import styles from "./WhatWeMake.module.css";

const rows = [
  { n: "01", h: "Calibrated spectra", b: "Each lens is engineered around a measured transmission profile, not a dye. The numbers are on the page." },
  { n: "02", h: "Georgian heritage", b: "Named for Pirosmani the painter and Rustaveli the poet. Made in Tbilisi. Shipped direct." },
  { n: "03", h: "Lab independent", b: "Independently tested by Micro-Light Optics Co., Ltd to three international standards. Full cert ships in the box." },
];

export default function WhatWeMake() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        <div>
          <p className={styles.eyebrow}>What We Make</p>
          <h2 className={styles.heading}>Not eyewear.<br />An instrument.</h2>
          <p className={styles.para}>Every hour of the day has a spectrum. Morning sun. Screen blue. Evening red. Your body reads each one differently — some sharpen you, some wear you down, some block sleep before it arrives.</p>
          <p className={styles.para}>Luminex makes lenses that edit the spectrum. Each model is tuned for a specific state — focus, recovery — and named for a Georgian mind that lived inside that state.</p>
        </div>
        <div className={styles.rows}>
          {rows.map((item) => (
            <div key={item.n} className={styles.row}>
              <span className={styles.rowNum}>{item.n}</span>
              <div>
                <p className={styles.rowHead}>{item.h}</p>
                <p className={styles.rowBody}>{item.b}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
