import Features from "@/components/features";
import Hero from "@/components/hero";
import HeroPreview from "@/components/hero/hero-preview";

export default function Home() {
  return (
    <div className="min-h-[400vh] space-y-36">
      <Hero />
      <HeroPreview />
      <Features />
    </div>
  );
}
