"use client";
import Nav from "@/components/Nav/Nav";
import Footer from "@/components/Footer/Footer";
import ProductShopHero from "@/components/ProductShopHero/ProductShopHero";
import SpectralData from "@/components/SpectralData/SpectralData";
import Portrait from "@/components/Portrait/Portrait";
import Protocol from "@/components/Protocol/Protocol";
import ProductCta from "@/components/ProductCta/ProductCta";
import ProductFaq from "@/components/ProductFaq/ProductFaq";
import { PIROSMANI } from "@/data";

export default function PirosmaniPage() {
  return (
    <div style={{ background: "#0B0B0C" }}>
      <Nav />
      <ProductShopHero
        productName={PIROSMANI.productName}
        georgianName={PIROSMANI.georgianName}
        sku={PIROSMANI.sku}
        tagline={PIROSMANI.tagline}
        price={PIROSMANI.price}
        currency={PIROSMANI.currency}
        features={PIROSMANI.features}
        images={PIROSMANI.shopImages}
        accent="#B5121B"
        accentTextColor="#F4F1EA"
        bundleProductName={PIROSMANI.bundleProductName}
        bundleProductGeorgian={PIROSMANI.bundleProductGeorgian}
        bundleProductAccent="#E3B23C"
        bundlePrice={PIROSMANI.bundlePrice}
        originalTotalPrice={PIROSMANI.originalTotalPrice}
      />
      <SpectralData
        stats={PIROSMANI.spectralStats}
        labRows={PIROSMANI.labRows}
        certifications={PIROSMANI.certifications}
        accent="#B5121B"
        blockLabel={PIROSMANI.blockLabel}
        blockStart={0}
        blockEnd={0.3}
        downloadUrl="/lab/pirosmani-lab-results.pdf"
      />
      <Portrait
        imageSrc="/images/piro-card.png"
        imageAlt="Pirosmani glasses"
        imageWidth={1254}
        imageHeight={1254}
        imageFit="contain"
        eyebrow={PIROSMANI.portraitEyebrow}
        heading={PIROSMANI.portraitHeading}
        paragraphs={PIROSMANI.portraitParagraphs}
        accentColor="#B5121B"
      />
      <Protocol items={PIROSMANI.protocolItems} accent="#B5121B" />
      <ProductCta
        eyebrow={PIROSMANI.ctaEyebrow}
        headline={PIROSMANI.ctaHeadline}
        subline={PIROSMANI.ctaSubline}
        bg="#B5121B"
        textColor="#F4F1EA"
        btnBg="#F4F1EA"
        btnText="#B5121B"
        btnHoverBg="#EAE6DC"
      />
      <ProductFaq eyebrow={PIROSMANI.faqEyebrow} faqs={PIROSMANI.faqs} />
      <Footer />
    </div>
  );
}
