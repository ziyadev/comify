import Cta from "@/components/landing-page/cta";
import Hero from "@/components/pricing/hero";
import PricingCards from "@/components/pricing/plans-cards";
import PricingComparator from "@/components/pricing/pricing-comparator";

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
