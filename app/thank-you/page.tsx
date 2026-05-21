"use client";
import { useState } from "react";
import Image from "next/image";
import Nav from "@/components/Nav/Nav";
import Footer from "@/components/Footer/Footer";
import ThankYouHero from "./sections/ThankYouHero/ThankYouHero";
import VideoSection from "./sections/VideoSection/VideoSection";
import TestimonialGrid, {
  MockTestimonial,
} from "@/components/TestimonialGrid/TestimonialGrid";

// Swap these out for real screenshot paths once you have them:
//   TESTIMONIALS = ["/images/testimonials/t1.png", ...]
// Until then, MOCKS renders automatically.
const TESTIMONIALS: string[] = [];

const MOCKS: MockTestimonial[] = [
  {
    name: "ნინო ბ.",
    location: "თბილისი",
    text: "პირველი ღამიდანვე ვიგრძენი განსხვავება. ახლა 11 საათზე ბუნებრივად მეძინება — ადრე ეს წარმოუდგენელი იყო.",
    stars: 5,
  },
  {
    name: "გიორგი მ.",
    location: "თბილისი",
    text: "მთელი დღე ეკრანთან ვარ. PIROSMANI ჩავიცვი საღამოს 9-ზე და 2 კვირაში ძილი სრულად გამიუმჯობესდა.",
    stars: 5,
  },
  {
    name: "ნათია ლ.",
    location: "ბათუმი",
    text: "სკეპტიკოსი ვიყავი, მაგრამ მეამიგომ გამომიგზავნა ბმული. ახლა ოჯახის ყველა წევრს მაქვს შეძენილი.",
    stars: 5,
  },
  {
    name: "დავით ო.",
    location: "თბილისი",
    text: "14 დღეში ჩვეულება ჩამოყალიბდა. ახლა სათვალეს რომ ვიცვამ, ტვინი იცის — ძილის დრო მოახლოვდა.",
    stars: 5,
  },
  {
    name: "მარიამ კ.",
    location: "ქუთაისი",
    text: "ფასი სრულად გამართლდა. 74 ₾ — ერთი კვირის ღვინოზე ნაკლები. ძილი კი — სრულიად სხვა.",
    stars: 5,
  },
  {
    name: "ლუკა ა.",
    location: "თბილისი",
    text: "RUSTAVELI ვატარებ სამუშაოდ. ფოკუსი გაიზარდა, თვალები ნაკლებად იღლება. ვარდისფერი? ჩვეული ფერი გახდა.",
    stars: 5,
  },
];


// Drop real story images here when ready — e.g. "/images/stories/s1.jpg"
const STORY_IMAGES = ["", "", "", ""];

const STORY_PLACEHOLDERS = [
  "linear-gradient(170deg, #1A1A1C 0%, #2A2A2D 100%)",
  "linear-gradient(200deg, #2A2A2D 0%, #1A1A1C 100%)",
  "linear-gradient(145deg, #1A1A1C 0%, #3C3C40 100%)",
  "linear-gradient(185deg, #2A2A2D 0%, #1A1A1C 100%)",
];

function StoryCard({ src, index }: { src: string; index: number }) {
  return (
    <div style={{
      aspectRatio: "9 / 16",
      position: "relative",
      overflow: "hidden",
      background: src ? "transparent" : STORY_PLACEHOLDERS[index % STORY_PLACEHOLDERS.length],
      borderRadius: "4px",
    }}>
      {src ? (
        <Image
          src={src}
          alt={`Community post ${index + 1}`}
          fill
          sizes="25vw"
          style={{ objectFit: "cover" }}
        />
      ) : (
        <div style={{
          position: "absolute", inset: 0,
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center", gap: "10px",
        }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
            stroke="rgba(244,241,234,0.12)" strokeWidth="1.5"
            strokeLinecap="round" strokeLinejoin="round">
            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
            <circle cx="12" cy="13" r="4"/>
          </svg>
        </div>
      )}
    </div>
  );
}

function SocialNudge() {
  const [hov, setHov] = useState(false);

  return (
    <section style={{ background: "#0B0B0C", borderTop: "1px solid rgba(244,241,234,0.06)" }}>

      {/* text block — padded */}
      <div style={{
        padding: "120px 80px 56px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        gap: "20px",
      }}>
        <p style={{
          fontFamily: "var(--font-mono)",
          fontSize: "10px",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "rgba(244,241,234,0.22)",
        }}>
          community
        </p>
        <p style={{
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          fontSize: "clamp(52px, 7.5vw, 108px)",
          letterSpacing: "-0.03em",
          lineHeight: 0.95,
          color: "#F4F1EA",
          margin: 0,
        }}>
          გადაიღე.<br />დაგვთაგე.
        </p>
        <p style={{
          fontFamily: "var(--font-body)",
          fontSize: "16px",
          color: "#B5121B",
          marginTop: "4px",
        }}>
          ყოველ tagged კადრს გამოვაქვეყნებთ.
        </p>
      </div>

      {/* story cards */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "4px",
        padding: "0 80px",
      }}>
        {STORY_IMAGES.map((src, i) => (
          <StoryCard key={i} src={src} index={i} />
        ))}
      </div>

      {/* handle — padded */}
      <div style={{
        padding: "48px 80px 80px",
        display: "flex",
        justifyContent: "center",
      }}>
        <a
          href="https://www.instagram.com/luminexglasses/"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHov(true)}
          onMouseLeave={() => setHov(false)}
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "clamp(15px, 1.8vw, 20px)",
            letterSpacing: "0.08em",
            color: hov ? "#B5121B" : "rgba(244,241,234,0.3)",
            textDecoration: "none",
            transition: "color 0.2s",
            borderBottom: `1px solid ${hov ? "#B5121B" : "rgba(244,241,234,0.1)"}`,
            paddingBottom: "3px",
          }}
        >
          @luminexglasses
        </a>
      </div>
    </section>
  );
}

export default function ThankYouPage() {
  return (
    <div style={{ background: "#0B0B0C", minHeight: "100vh" }}>
      <Nav />
      <ThankYouHero />
      <VideoSection />
      <TestimonialGrid
        images={TESTIMONIALS}
        mocks={MOCKS}
        eyebrow="რეალური შედეგები"
      />
      <SocialNudge />
      <Footer />
    </div>
  );
}
