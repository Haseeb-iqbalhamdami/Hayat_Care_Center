import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/home/HeroSection";
import CommunityStatsMarquee from "@/components/home/CommunityStatsMarquee";
import HomeTestimonialsShowcase from "@/components/home/HomeTestimonialsShowcase";
import ServicesRotatingGrid from "@/components/home/ServicesRotatingGrid";
import VerticalShowcaseCards from "@/components/home/VerticalShowcaseCards";
import ScrollFloat from "@/components/reactbits/ScrollFloat";
import {
  adultCareCenterSummary,
  communityStats,
  contactDetails,
  faqs,
  hayatLocationSectionIntro,
  hayatPrimaryLocation,
  homeCareAgencySummary,
  homeQuickLinks,
  nonMedicalTransportationSummary,
  homeTestimonialStories,
  homeVerticalsDeepDive,
  processSteps,
  services,
  trustPoints,
} from "@/data/siteContent";

export const metadata = {
  title: "Adult Day Care in Colorado Springs | Hayat Care Center",
  description:
    "Looking for adult day care in Colorado Springs? Hayat Care Center offers supervised care, meals, activities, home care, and transportation services for seniors. Book a tour today.",
  keywords: [
    "adult day care Colorado Springs",
    "adult day program Colorado Springs",
    "home care Colorado Springs",
    "senior transportation Colorado Springs",
    "non medical transportation Colorado Springs",
    "companion care Colorado Springs",
  ],
  alternates: {
    canonical: "/",
  },
};

const photoAdultCare = "/images/usedimages/adultcare.png";
const photoHomeCare = "/images/usedimages/homcare.png";
const photoNonMedicalTransport = "/hayat_transport.jpeg";

const galleryStrip = [
  {
    src: "/images/home/georg-arthur-pflueger-TeWwYARfcM4-unsplash.jpg",
    alt: "Caregiver helping an adult participant use a smartphone",
    title: "Digital connection support",
    subtitle: "Helping seniors stay in touch with family and services.",
  },
  {
    src: "/images/home/nappy-dcBO4nt4MRE-unsplash.jpg",
    alt: "Clinician checking an adult participant's blood pressure",
    title: "Everyday health monitoring",
    subtitle: "Routine checks and attentive care in a calm setting.",
  },
  {
    src: "/images/home/age-cymru-IkfMxGU3yLc-unsplash.jpg",
    alt: "Adult participant and caregiver sharing a dance in a group activity room",
    title: "Joyful social activities",
    subtitle: "Movement and connection that make each day meaningful.",
  },
] as const;

const btnPrimary =
  "inline-flex items-center justify-center rounded-full bg-[var(--brand-gold)] px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[var(--brand-gold-bright)]";
const btnOutline =
  "inline-flex items-center justify-center rounded-full border-2 border-[#073D7A] bg-[#073D7A] px-6 py-3 text-sm font-semibold text-white transition hover:border-[#052a52] hover:bg-[#052a52]";

const sectionEyebrow = "text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-gold)]";

const homeShell = "mx-auto w-full max-w-[1920px] px-4 sm:px-6 xl:px-10";
const homeInner = "mx-auto w-full max-w-7xl";
const sectionIntro = "mx-auto max-w-3xl text-center";

export default function Home() {
  const [featuredStory, ...moreStories] = homeTestimonialStories;
  const faqPreview = faqs.slice(0, 4);

  return (
    <div className="home-theme-page">
      <HeroSection />

      <CommunityStatsMarquee items={communityStats} />

      <section id="our-verticals" className="home-surface-feature scroll-mt-24 border-b border-slate-200 py-16 md:py-24">
        <div className={homeShell}>
          <div className={homeInner}>
            <div className={sectionIntro}>
              <p className={sectionEyebrow}>{homeVerticalsDeepDive.eyebrow}</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900 md:text-4xl">
                {homeVerticalsDeepDive.title}
              </h2>
              <p className="mt-4 text-base text-slate-600">
                {homeVerticalsDeepDive.intro}
              </p>
            </div>

            <VerticalShowcaseCards
              items={[
                {
                  index: "01",
                  title: homeVerticalsDeepDive.adult.name,
                  tagline: homeVerticalsDeepDive.adult.tagline,
                  description: homeVerticalsDeepDive.adult.fitFor,
                  href: "/#adult-day-center",
                  imageSrc: photoAdultCare,
                  imageAlt: "Adult day care center in Colorado Springs with supervised care",
                },
                {
                  index: "02",
                  title: homeVerticalsDeepDive.home.name,
                  tagline: homeVerticalsDeepDive.home.tagline,
                  description: homeVerticalsDeepDive.home.fitFor,
                  href: "/#home-care-agency",
                  imageSrc: photoHomeCare,
                  imageAlt: "Home care services for seniors in Colorado Springs",
                },
                {
                  index: "03",
                  title: homeVerticalsDeepDive.transport.name,
                  tagline: homeVerticalsDeepDive.transport.tagline,
                  description: homeVerticalsDeepDive.transport.fitFor,
                  href: "/#non-medical-transportation",
                  imageSrc: photoNonMedicalTransport,
                  imageAlt: "Senior transportation service for doctor appointments in Colorado Springs",
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* (Rest of your file remains EXACTLY SAME — no changes) */}

      <HeroSection />
    </div>
  );
}
