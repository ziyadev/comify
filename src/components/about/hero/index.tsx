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
            Our Story
          </TextAnimate>
        </div>

        <TextAnimate
          animation="blurInUp"
          by="word"
          once
          transition={transition}
          className="text-3xl md:text-6xl/[72px]  text-center font-semibold text-balance "
        >
          Empowering Innovation Through Technology
        </TextAnimate>
        <TextAnimate
          animation="blurInUp"
          by="line"
          once
          transition={transition}
          delay={0.5}
          className="text-center text-muted-foreground md:text-xl text-balance mx-auto max-w-5xl"
        >
          At comify, we're driven by a passion for creating impactful solutions.
          Learn about our journey, our core values, and the dedicated team
          making a difference.
        </TextAnimate>
      </div>
    </div>
  );
}
