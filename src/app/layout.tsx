import type { Metadata } from "next";
import { Playfair_Display, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HelpDock from "@/components/HelpDock";
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
  title: "Hayat Care Centers | Adult Care Center & Home Care Agency",
  description:
    "Hayat Care Centers offers an adult care center for daytime support and a home care agency for trusted in-home help—personal care, companionship, and family-centered coordination.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable} ${playfair.variable} h-full scroll-pt-24`}>
      <body className="min-h-full flex flex-col bg-[var(--bg)] text-[var(--ink)]">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <MotionEffects />
        <Header />
        <main id="main-content" className="relative z-[1] flex-1 bg-white pt-24 sm:pt-[5.75rem]">
          {children}
        </main>
        <HelpDock />
        <div className="relative z-0">
          <Footer />
        </div>
      </body>
    </html>
  );
}
