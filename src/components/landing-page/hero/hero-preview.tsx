"use client";
import heropreview from "#/public/sky.png";
import apppreview from "#/public/app-preview.jpg";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { transition } from "@/components/ui/motions/transitions";
export default function HeroPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.4, y: -100, filter: "blur(10px)" }}
      animate={{ opacity: 1, scale: 0.9, y: 0, filter: "blur(0px)" }}
      style={{ scale }}
      transition={{ ...transition, delay: 0.5 }}
      className="container mx-auto px-2 md:px-10 group"
    >
      <div className="pb-24 px-6 lg:px-8">
        <div className="relative   rounded-2xl  aspect-[16/10] md:overflow-hidden md:flex justify-center items-center shadow-xs">
          <Image
            className="hidden md:block"
            src={heropreview}
            alt="Hero Preview"
            fill
            objectFit="cover"
          />
          <div className="mx-auto max-w-2xl lg:max-w-7xl ">
            <div
              style={{ width: 1216, height: 768 }}
              className="mt-16 h-144 sm:h-auto sm:w-304 relative aspect-[var(--width)/var(--height)] [--radius:var(--radius-xl)] z-20"
            >
              <div className="absolute -inset-(--padding) rounded-[calc(var(--radius)+var(--padding))] shadow-xs ring-1 ring-black/5 [--padding:--spacing(2)]"></div>
              <Image
                alt=""
                src={apppreview}
                className="h-full rounded-(--radius) shadow-2xl ring-1 ring-black/10"
              />
            </div>
          </div>
          <div className="pointer-events-none hidden md:block  z-10 absolute inset-x-0 bottom-0 w-full h-[20%] bg-gradient-to-t from-background via-background/90 to-transparent"></div>
        </div>
      </div>
    </motion.div>
  );
}
