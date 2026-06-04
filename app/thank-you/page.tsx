"use client";
import Nav from "@/components/Nav/Nav";
import Footer from "@/components/Footer/Footer";
import ThankYouHero from "./sections/ThankYouHero/ThankYouHero";
import VideoSection from "./sections/VideoSection/VideoSection";
import TestimonialGrid, {
  MockTestimonial,
} from "@/components/TestimonialGrid/TestimonialGrid";
import SocialNudge from "./sections/SocialNudge/SocialNudge";

const TESTIMONIALS: string[] = [
  "/testimonails/Screenshot%202026-06-04%20at%2015.39.58.png",
  "/testimonails/Screenshot%202026-06-04%20at%2015.40.08.png",
  "/testimonails/Screenshot%202026-06-04%20at%2015.40.17.png",
  "/testimonails/Screenshot%202026-06-04%20at%2015.40.25.png",
  "/testimonails/Screenshot%202026-06-04%20at%2015.40.32.png",
  "/testimonails/Screenshot%202026-06-04%20at%2015.40.39.png",
  "/testimonails/Screenshot%202026-06-04%20at%2015.40.59.png",
  "/testimonails/Screenshot%202026-06-04%20at%2015.41.07.png",
  "/testimonails/Screenshot%202026-06-04%20at%2015.41.14.png",
  "/testimonails/Screenshot%202026-06-04%20at%2015.41.19.png",
  "/testimonails/Screenshot%202026-06-04%20at%2015.41.23.png",
  "/testimonails/Screenshot%202026-06-04%20at%2015.41.27.png",
  "/testimonails/Screenshot%202026-06-04%20at%2015.41.32.png",
  "/testimonails/Screenshot%202026-06-04%20at%2015.41.36.png",
];

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
