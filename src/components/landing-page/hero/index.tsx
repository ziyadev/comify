import airbnbLogo from "#/public/logos/airbnb.svg";
import appleLogo from "#/public/logos/apple.svg";
import disneyLogo from "#/public/logos/disney.svg";
import facebookLogo from "#/public/logos/facebook.svg";
import nvidiaLogo from "#/public/logos/nvidia.svg";
import quoraLogo from "#/public/logos/quora.svg";
import samsungLogo from "#/public/logos/samsung.svg";
import sparkLogo from "#/public/logos/spark.svg";
import Image from "next/image";
import type React from "react";
import { Dot } from "lucide-react";
import { Button } from "@/components/ui/button";
import LogoLoop from "@/components/ui/motions/logo-loop";
import * as motion from "motion/react-client";
import { transition } from "@/components/ui/motions/transitions";
import { TextAnimate } from "@/components/ui/motions/text-animation";

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)", y: 100 }}
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)", y: 0 }}
      transition={transition}
    >
      <div className="max-w-7xl mx-auto border-x relative pt-12">
        <Dot className="absolute size-8   -bottom-4 -right-4 z-20" />
        <Dot className="absolute size-8   -bottom-4 -left-4 z-20" />
        <div className="border-x mx-auto max-w-6xl flex flex-col items-center gap-4 py-28 px-8 md:px-20">
          <div className="flex gap-2 items-center text-base/[19.2px] tracking-[-0.8px] mb-3">
            <span className="bg-foreground w-4 rounded-full h-1.5" />
            <TextAnimate
              transition={transition}
              animation="blurInUp"
              by="character"
              once
            >
              smart collaboration platform
            </TextAnimate>
          </div>

          <TextAnimate
            animation="blurInUp"
            by="word"
            once
            transition={transition}
            className="text-4xl md:text-6xl/[72px]  text-center font-semibold text-balance "
          >
            Transform the way your team works, unlocking collaboration and
            productivity, together.
          </TextAnimate>
          <TextAnimate
            animation="blurInUp"
            by="line"
            once
            transition={transition}
            delay={0.5}
            className="text-center text-muted-foreground md:text-xl text-balance mx-auto md:max-w-5xl"
          >
            Bring your ideas to life faster, manage tasks effortlessly, and keep
            everyone on the same page. Our platform empowers teams to achieve
            more, with less friction.
          </TextAnimate>
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
            transition={transition}
            className="flex flex-col md:flex-row gap-4 mt-6 "
          >
            <Button size={"xxl"}>Get Comify for Free</Button>
            <Button variant="secondary" size={"xxl"}>
              Request Demo
            </Button>
          </motion.div>
        </div>
      </div>
      <div className="border-y h-22">
        <div className="relative mx-auto border-x max-w-6xl h-full flex items-center">
          <Dot className="absolute size-8   -top-4 -right-4 z-20" />
          <Dot className="absolute size-8   -top-4 -left-4 z-20" />
          <Dot className="absolute size-8   -bottom-4 -right-4 z-20" />
          <Dot className="absolute size-8   -bottom-4 -left-4 z-20" />
          <InfiniteScrollingLogosAnimation />
        </div>
      </div>
    </motion.div>
  );
}

const CompanyLogoData: Array<{
  node: React.ReactNode;
  title: string;
  href: string;
}> = [
  {
    node: (
      <Image
        src={airbnbLogo}
        alt="Airbnb Logo"
        className="h-8 w-auto  flex-none"
      />
    ),
    title: "Airbnb Logo",
    href: "https://www.airbnb.com/",
  },
  {
    node: (
      <Image
        src={appleLogo}
        alt="Apple Logo"
        className="h-8 w-auto  flex-none"
      />
    ),
    title: "Apple Logo",
    href: "https://www.apple.com/",
  },
  {
    node: (
      <Image
        src={disneyLogo}
        alt="Disney Logo"
        className="h-8 w-auto  flex-none"
      />
    ),
    title: "Disney Logo",
    href: "https://www.disney.com/",
  },
  {
    node: (
      <Image
        src={facebookLogo}
        alt="Facebook Logo"
        className="h-8 w-auto  flex-none"
      />
    ),
    title: "Facebook Logo",
    href: "https://www.facebook.com/",
  },
  {
    node: (
      <Image
        src={quoraLogo}
        alt="Quora Logo"
        className="h-8 w-auto  flex-none"
      />
    ),
    title: "Quora Logo",
    href: "https://www.quora.com/",
  },
  {
    node: (
      <Image
        src={samsungLogo}
        alt="Samsung Logo"
        className="h-8 w-auto  flex-none"
      />
    ),
    title: "Samsung Logo",
    href: "https://www.samsung.com/",
  },
  {
    node: (
      <Image
        src={sparkLogo}
        alt="Spark Logo"
        className="h-8 w-auto  flex-none"
      />
    ),
    title: "Spark Logo",
    href: "https://www.spark.com/",
  },
  {
    node: (
      <Image
        src={nvidiaLogo}
        alt="Nvidia Logo"
        className="h-8 w-auto  flex-none"
      />
    ),
    title: "Nvidia Logo",
    href: "https://www.nvidia.com/",
  },
];

const InfiniteScrollingLogosAnimation = () => {
  return (
    <div className="flex relative h-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-10 before:bg-gradient-to-r before:from-background before:to-transparent before:content-[''] after:absolute after:right-0 after:top-0 after:h-full after:w-10 after:bg-gradient-to-l after:from-background after:to-transparent after:content-['']">
      <LogoLoop
        logos={CompanyLogoData}
        speed={120}
        direction="left"
        logoHeight={50}
        gap={90}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="#ffffff"
        ariaLabel="Technology partners"
      />
    </div>
  );
};
