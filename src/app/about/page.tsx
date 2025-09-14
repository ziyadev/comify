import Cta from "@/components/landing-page/cta";
import Hero from "@/components/about/hero";
import OurStory from "@/components/about/our-story";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Comify App | Our Story & Mission",
  description:
    "Learn about Comify's journey, mission, and the team behind our innovative app. Discover our commitment to simplifying your digital life.",
  keywords: [
    "about us",
    "our story",
    "mission",
    "team",
    "company",
    "vision",
    "values",
    "Comify",
    "Next.js",
    "Landing Page",
    "Template",
    "Framer Motion",
    "Lenis",
    "Tailwind CSS",
    "Shadcn UI",
    "React",
    "TypeScript",
    "Web Development",
    "UI/UX",
    "SEO",
    "Animations",
    "Smooth Scroll",
    "Modern Web",
  ],
  openGraph: {
    images: [
      {
        url: "/og-about-us.png",
        width: 1200,
        height: 630,
        alt: "Pricing plans preview",
      },
    ],
  },
  twitter: {
    images: ["/og-about-us.png"],
  },
};

export default function PricingPage() {
  return (
    <div className="md:space-y-22">
      <Hero />
      <OurStory />
      <Cta />
    </div>
  );
}
