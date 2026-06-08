import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Noto_Serif_Georgian } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const notoSerifGeorgian = Noto_Serif_Georgian({
  variable: "--font-display",
  subsets: ["georgian", "latin"],
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Luminex — Optics for Performance",
  description:
    "Tinted lenses calibrated to the wavelengths that shape how you sleep, focus, and perform. Made in Tbilisi. Lab-certified.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} ${notoSerifGeorgian.variable}`}
    >
      <body>
        {children}
        <GoogleAnalytics gaId="G-PNWKGFJT1K" />
      </body>
    </html>
  );
}
