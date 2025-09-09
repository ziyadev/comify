import Cta from "@/components/landing-page/cta";
import Features from "@/components/landing-page/features";
import Hero from "@/components/landing-page/hero";
import HeroPreview from "@/components/landing-page/hero/hero-preview";
import Integrations from "@/components/landing-page/integrations";
import MoreFeatures from "@/components/landing-page/more-features";
import Testamonial from "@/components/landing-page/testamonial";
import Usage from "@/components/landing-page/usage";

export default function Home() {
  return (
    <div className="min-h-[800vh] space-y-36">
      <Hero />
      <HeroPreview />
      <Features />
      <MoreFeatures />
      <Usage />
      <Integrations />
      <Testamonial />
      <Cta />
    </div>
  );
}
