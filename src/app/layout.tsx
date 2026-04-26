import type { Metadata } from "next";
import { Playfair_Display, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MotionEffects from "@/components/MotionEffects";
import SiteAIAssistant from "@/components/SiteAIAssistant";

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
  title: {
    default: "Adult Day Care, Home Care & Senior Transportation in Colorado Springs | Hayat Care Center",
    template: "%s | Hayat Care Center",
  },
  description:
    "Hayat Care Center provides adult day programs, home care, personal care, companionship, meals, and non-medical transportation in Colorado Springs. Schedule a tour today.",
  keywords: [
    "adult day care Colorado Springs",
    "adult care center Colorado Springs",
    "home care agency Colorado Springs",
    "non medical home care Colorado Springs",
    "senior transportation Colorado Springs",
    "non medical transportation Colorado Springs",
    "companion care Colorado Springs",
    "personal care assistance Colorado Springs",
    "respite care Colorado Springs",
    "Hayat Care Center",
  ],
  metadataBase: new URL("https://www.hayatcarecenter.org"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Adult Day Care, Home Care & Senior Transportation in Colorado Springs | Hayat Care Center",
    description:
      "Hayat Care Center provides adult day programs, home care, personal care, companionship, meals, and non-medical transportation in Colorado Springs.",
    url: "https://www.hayatcarecenter.org",
    siteName: "Hayat Care Center",
    images: [
      {
        url: "/newimage.jpg",
        width: 1200,
        height: 630,
        alt: "Hayat Care Center adult day care and home care services in Colorado Springs",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adult Day Care, Home Care & Senior Transportation in Colorado Springs | Hayat Care Center",
    description:
      "Adult day care, home care, personal care, companionship, meals, and non-medical transportation in Colorado Springs.",
    images: ["/newimage.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.hayatcarecenter.org/#organization",
        name: "Hayat Care Center",
        url: "https://www.hayatcarecenter.org",
        telephone: "+1-719-678-6228",
        address: {
          "@type": "PostalAddress",
          streetAddress: "2030 Jet Wing Dr",
          addressLocality: "Colorado Springs",
          addressRegion: "CO",
          postalCode: "80916",
          addressCountry: "US",
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.hayatcarecenter.org/#localbusiness",
        name: "Hayat Care Center",
        url: "https://www.hayatcarecenter.org",
        telephone: "+1-719-678-6228",
        address: {
          "@type": "PostalAddress",
          streetAddress: "2030 Jet Wing Dr",
          addressLocality: "Colorado Springs",
          addressRegion: "CO",
          postalCode: "80916",
          addressCountry: "US",
        },
        areaServed: {
          "@type": "City",
          name: "Colorado Springs",
        },
        description:
          "Hayat Care Center provides adult day programs, home care, personal care, companionship, meals, and non-medical transportation in Colorado Springs.",
        sameAs: ["https://www.hayatcarecenter.org"],
        parentOrganization: {
          "@id": "https://www.hayatcarecenter.org/#organization",
        },
      },
    ],
  };

  return (
    <html lang="en" className={`${roboto.variable} ${playfair.variable} h-full scroll-pt-24`}>
      <body className="min-h-full flex flex-col bg-[var(--bg)] text-[var(--ink)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(siteSchema),
          }}
        />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <MotionEffects />
        <Header />
        <main id="main-content" className="relative z-[1] flex-1 bg-white pt-24 sm:pt-[5.75rem]">
          {children}
        </main>
        <SiteAIAssistant />
        <div className="relative z-0">
          <Footer />
        </div>
      </body>
    </html>
  );
}
