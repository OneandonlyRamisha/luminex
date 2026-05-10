"use client";
import Nav from "@/components/Nav/Nav";
import Footer from "@/components/Footer/Footer";
import Hero from "./sections/Hero/Hero";
import WhatWeMake from "./sections/WhatWeMake/WhatWeMake";
import ShopPicker from "./sections/ShopPicker/ShopPicker";
import FillerBanner from "./sections/FillerBanner/FillerBanner";
import TheScience from "./sections/TheScience/TheScience";
import TheModels from "./sections/TheModels/TheModels";
import About from "./sections/About/About";
import HomeFaq from "./sections/HomeFaq/HomeFaq";

export default function HomePage() {
  return (
    <div>
      <Nav />
      <Hero />
      {/* <WhatWeMake /> */}
      <ShopPicker />
      <FillerBanner />
      <TheScience />
      <TheModels />
      <About />
      <HomeFaq />
      <Footer />
    </div>
  );
}
