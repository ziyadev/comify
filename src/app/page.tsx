import Features from "@/components/landing-page/features";
import Hero from "@/components/landing-page/hero";
import HeroPreview from "@/components/landing-page/hero/hero-preview";
import MoreFeatures from "@/components/landing-page/more-features";

export default function Home() {
  return (
    <div className="min-h-[800vh] space-y-36">
      <Hero />
      <HeroPreview />
      <Features />
      <MoreFeatures />
    </div>
  );
}
