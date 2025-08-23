import Hero from "@/components/hero";
import HeroPreview from "@/components/hero/hero-preview";

export default function Home() {
  return (
    <div className="min-h-[200vh] space-y-36">
      <Hero />
      <HeroPreview />
    </div>
  );
}
