import type { Metadata } from "next";
import { Playfair_Display, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MotionEffects from "@/components/MotionEffects";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-roboto",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Hayat Care Center | Assisted Support & Senior Community Living",
  description:
    "Explore assisted support, amenities, dining, life enrichment, and floor plans at Hayat Care Center.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable} ${playfair.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-[var(--bg)] text-[var(--ink)]">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <MotionEffects />
        <Header />
        <main id="main-content" className="relative flex-1">
          {children}
        </main>
        <div className="relative z-0">
          <Footer />
        </div>
      </body>
    </html>
  );
}
