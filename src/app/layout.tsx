import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Fraunces, Outfit } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HOUSE OF CAKES — Parisian Café, Brunch & Haute Pâtisserie",
  description:
    "A joyful cafe and patisserie celebrating fluffy soufflé pancakes, ceremonial matcha blends, artisanal brunch, and architectural celebration cakes.",
  keywords: [
    "House of Cakes",
    "Bon Bouquet Cafe Paris",
    "Brunch Paris",
    "Haute Pâtisserie",
    "Soufflé Pancakes",
    "Matcha Latte",
    "Acai Bowl",
    "Artisan Cakes",
  ],
  authors: [{ name: "House of Cakes Maison" }],
  openGraph: {
    title: "HOUSE OF CAKES — Parisian Café & Pâtisserie",
    description:
      "Everyday brunch joy, fluffy pancakes, rotating star confections, and bespoke cakes crafted with French butter and tropical sunshine.",
    type: "website",
    locale: "en_GB",
  },
};

export const viewport: Viewport = {
  themeColor: "#FAD5DF",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${cormorant.variable} ${outfit.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#FFFDF7] text-[#222222] font-sans antialiased selection:bg-[#FAD5DF] selection:text-[#004F3C] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
