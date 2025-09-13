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
      <div className="relative rounded-2xl  aspect-[16/10] overflow-hidden flex justify-center items-center shadow-xs">
        <Image src={heropreview} alt="Hero Preview" fill objectFit="cover" />
        <div className=" h-142 sm:h-auto sm:w-304 relative aspect-[var(--width)/var(--height)] [--radius:var(--radius-xl)] z-20">
          <div className="absolute -inset-(--padding) rounded-[calc(var(--radius)+var(--padding))] shadow-xs ring-1 ring-black/5 [--padding:--spacing(2)]" />
          <Image
            alt=""
            src={apppreview}
            height={1200}
            width={1800}
            objectFit="cover"
            className="h-full rounded-(--radius) shadow-2xl ring-1 ring-black/10 "
          />
        </div>
        <div className="pointer-events-none  z-10 absolute inset-x-0 bottom-0 w-full h-[20%] bg-gradient-to-t from-background via-background/90 to-transparent"></div>
      </div>
    </motion.div>
  );
}
