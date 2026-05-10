"use client";

import { useState } from "react";
import LensSelector from "./LensSelector";
import SpectrumBar from "./SpectrumBar";
import LensDetail from "./LensDetail";
import styles from "./SpectrumVisualizer.module.css";

const lenses = [
  {
    id: "pirosmani",
    label: "Pirosmani",
    sublabel: "ძილის ლინზა",
    color: "#B5121B",
    cutoff: 600,
    overlayLabel: "მკვეთრად იფილტრება",
    overlayRange: "380–600 ნმ · ლურჯი და მწვანე",
    passRange: "600–700 ნმ · წითელი ტალღები",
    tagline: "ღრმა წითელი ლინზა ძილის წინა საათებისთვის",
    explain:
      "საღამოს ეკრანი, ტელევიზორი და LED განათება სხეულს ისევ დღის სიგნალს აძლევს. PIROSMANI მკვეთრად ამცირებს ლურჯ და მწვანე სინათლეს — იმ დიაპაზონს, რომელიც ღამის რეჟიმში გადასვლას ყველაზე მეტად უშლის ხელს. გარემო თბილდება, ეკრანი ნაკლებად აგრესიული ხდება და სხეული უფრო ბუნებრივად გადადის საღამოს მდგომარეობაში.",
    when: "ატარე მზის ჩასვლის შემდეგ ან დაძინებამდე 2–3 საათით ადრე. არ გამოიყენო საჭესთან.",
    stat1: ["13.07%", "ხილული სინათლის გამტარობა"] as [string, string],
    stat2: ["~99%", "ლურჯი სინათლის ბლოკი"] as [string, string],
  },
  {
    id: "rustaveli",
    label: "Rustaveli",
    sublabel: "სამუშაო ლინზა",
    color: "#E3B23C",
    cutoff: 500,
    overlayLabel: "მცირდება",
    overlayRange: "380–500 ნმ · ლურჯი დიაპაზონი",
    passRange: "500–700 ნმ · ნათელი ხედვა",
    tagline: "მსუბუქი ყვითელი ლინზა ხანგრძლივი სამუშაოსთვის",
    explain:
      "ეკრანები და ოფისის განათება მთელი დღის განმავლობაში ლურჯ დიაპაზონში ტვირთავს თვალს. RUSTAVELI ამცირებს ამ დატვირთვას ისე, რომ გარემო არ ბნელდება. შედეგი: უფრო მშვიდი ხედვა, ნაკლები თვალის დაღლა და სტაბილური ფოკუსი ხანგრძლივი სამუშაო სესიების დროს.",
    when: "ატარე სამუშაოდ, სწავლისას, ვიდეოქოლებზე და ეკრანთან ხანგრძლივი საათების დროს.",
    stat1: ["79.87%", "ხილული სინათლის გამტარობა"] as [string, string],
    stat2: ["~82.6%", "ლურჯი დიაპაზონის შემცირება"] as [string, string],
  },
];

const nmLabels = [380, 400, 450, 500, 550, 600, 650, 700];

const toPercent = (nm: number) => ((nm - 380) / (700 - 380)) * 100;

export default function SpectrumVisualizer() {
  const [active, setActive] = useState<string | null>(null);
  const activeLens = lenses.find((l) => l.id === active) ?? null;

  const handleSelect = (id: string) => {
    setActive(active === id ? null : id);
  };

  return (
    <div>
      <p className={styles.intro}>
        ხილული სპექტრი დაახლოებით 380 ნმ-დან 700 ნმ-მდეა. მარცხენა მხარეს არის
        მოკლე ტალღები — იისფერი და ლურჯი. სწორედ ამ დიაპაზონს უკავშირდება
        ეკრანისა და LED განათების მთავარი დატვირთვა. აირჩიე ლინზა და ნახე,
        სპექტრის რომელ ნაწილზე მუშაობს.
      </p>

      <LensSelector lenses={lenses} active={active} onSelect={handleSelect} />

      <SpectrumBar activeLens={activeLens} lenses={lenses} />

      <div className={styles.axis}>
        {nmLabels.map((nm) => (
          <div
            key={nm}
            className={styles.axisTick}
            style={{ left: toPercent(nm) + "%" }}
          >
            <div className={styles.axisLine} />
            <span className={styles.axisLabel}>{nm}</span>
          </div>
        ))}

        <span className={styles.axisUnit}>ნმ · ნანომეტრი</span>
      </div>

      {activeLens && <LensDetail lens={activeLens} />}

      <p className={styles.source}>
        წყარო: Micro-Light Optics Co., Ltd · EN ISO 12312-1:2022 · ANSI
        Z80.3:2018 · AS/NZS 1067.1:2016
      </p>
    </div>
  );
}
