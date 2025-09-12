import type React from "react";
import { Button } from "@/components/ui/button";
import * as motion from "motion/react-client";
import { transition } from "@/components/ui/motions/transitions";
import { TextAnimate } from "@/components/ui/motions/text-animation";

export default function Hero() {
  return (
    <div className="max-w-7xl mx-auto  relative pt-12">
      <div className=" mx-auto max-w-6xl flex flex-col items-center gap-4 py-28 px-20">
        <div className="flex gap-2 items-center text-base/[19.2px] tracking-[-0.8px] mb-3">
          <span className="bg-foreground w-4 rounded-full h-1.5" />
          <TextAnimate
            transition={transition}
            animation="blurInUp"
            by="character"
            once
          >
            Simple, Transparent Pricing
          </TextAnimate>
        </div>

        <TextAnimate
          animation="blurInUp"
          by="word"
          once
          transition={transition}
          className="text-6xl/[72px]  text-center font-semibold text-balance "
        >
          Find the perfect plan for your team, designed to grow with you.
        </TextAnimate>
        <TextAnimate
          animation="blurInUp"
          by="line"
          once
          transition={transition}
          delay={0.5}
          className="text-center text-muted-foreground text-xl text-balance mx-auto max-w-5xl"
        >
          Unlock powerful features and collaborate seamlessly. Choose a plan
          that scales with your needs, with no hidden fees or long-term
          commitments.
        </TextAnimate>
      </div>
    </div>
  );
}
