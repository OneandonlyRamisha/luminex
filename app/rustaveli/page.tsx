"use client";
import Nav from "@/components/Nav/Nav";
import Footer from "@/components/Footer/Footer";
import ProductShopHero from "@/components/ProductShopHero/ProductShopHero";
import SpectralData from "@/components/SpectralData/SpectralData";
import Portrait from "@/components/Portrait/Portrait";
import Protocol from "@/components/Protocol/Protocol";
import ProductCta from "@/components/ProductCta/ProductCta";
import ProductFaq from "@/components/ProductFaq/ProductFaq";
import { RUSTAVELI } from "@/data";

export default function RustavelliiPage() {
  return (
    <div style={{ background: "#0B0B0C" }}>
      <Nav />
      <ProductShopHero
        productName={RUSTAVELI.productName}
        georgianName={RUSTAVELI.georgianName}
        sku={RUSTAVELI.sku}
        tagline={RUSTAVELI.tagline}
        price={RUSTAVELI.price}
        currency={RUSTAVELI.currency}
        features={RUSTAVELI.features}
        images={RUSTAVELI.shopImages}
        accent="#E3B23C"
        accentTextColor="#0B0B0C"
        bundleProductName={RUSTAVELI.bundleProductName}
        bundleProductGeorgian={RUSTAVELI.bundleProductGeorgian}
        bundleProductAccent="#B5121B"
        bundlePrice={RUSTAVELI.bundlePrice}
        originalTotalPrice={RUSTAVELI.originalTotalPrice}
      />
      <SpectralData
        stats={RUSTAVELI.spectralStats}
        labRows={RUSTAVELI.labRows}
        certifications={RUSTAVELI.certifications}
        accent="#E3B23C"
        blockLabel={RUSTAVELI.blockLabel}
        blockStart={0}
        blockEnd={0.225}
        downloadUrl="/lab/rustaveli-lab-results.pdf"
      />
      <Portrait
        imageSrc="/images/rust-card.png"
        imageAlt="Rustaveli glasses"
        imageWidth={1254}
        imageHeight={1254}
        imageFit="contain"
        eyebrow={RUSTAVELI.portraitEyebrow}
        heading={RUSTAVELI.portraitHeading}
        paragraphs={RUSTAVELI.portraitParagraphs}
        accentColor="#E3B23C"
      />
      <Protocol items={RUSTAVELI.protocolItems} accent="#E3B23C" />
      <ProductCta
        eyebrow={RUSTAVELI.ctaEyebrow}
        headline={RUSTAVELI.ctaHeadline}
        subline={RUSTAVELI.ctaSubline}
        bg="#E3B23C"
        textColor="#0B0B0C"
        btnBg="#0B0B0C"
        btnText="#F4F1EA"
        btnHoverBg="#1A1A1C"
      />
      <ProductFaq eyebrow={RUSTAVELI.faqEyebrow} faqs={RUSTAVELI.faqs} />
      <Footer />
    </div>
  );
}
