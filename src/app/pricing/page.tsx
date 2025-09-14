import Cta from "@/components/landing-page/cta";
import Hero from "@/components/pricing/hero";
import PricingCards from "@/components/pricing/plans-cards";
import PricingComparator from "@/components/pricing/pricing-comparator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing Plans - Comify App | Find Your Perfect Subscription",
  description:
    "Discover Comify's flexible pricing plans. Compare features across Starter, Pro, and Enterprise tiers to find the perfect subscription that fits your needs.",
  keywords: [
    "pricing",
    "plans",
    "subscriptions",
    "cost",
    "features",
    "tiers",
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
        url: "/og-pricing.png",
        width: 1200,
        height: 630,
        alt: "Pricing plans preview",
      },
    ],
  },
  twitter: {
    images: ["/og-pricing.png"],
  },
};

export default function PricingPage() {
  return (
    <div>
      <Hero />
      <PricingCards />
      <PricingComparator />
      <Cta />
    </div>
  );
}
