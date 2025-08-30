"use client";
import airbnbLogo from "#/public/logos/airbnb.svg";
import appleLogo from "#/public/logos/apple.svg";
import disneyLogo from "#/public/logos/disney.svg";
import facebookLogo from "#/public/logos/facebook.svg";
import nvidiaLogo from "#/public/logos/nvidia.svg";
import quoraLogo from "#/public/logos/quora.svg";
import samsungLogo from "#/public/logos/samsung.svg";
import sparkLogo from "#/public/logos/spark.svg";
import { motion } from "motion/react";
import Image, { type StaticImageData } from "next/image";
import React from "react";
import { Dot } from "lucide-react";
import { Button } from "@/components/ui/button";
import LogoLoop from "@/components/ui/motions/logo-loop";

export default function Hero() {
  return (
    <div>
      <div className="border-x mx-auto max-w-6xl flex flex-col items-center gap-4 py-28 px-20">
        <div className="flex gap-2 items-center text-base/[19.2px] tracking-[-0.8px] mb-3">
          <span className="bg-foreground w-4 rounded-full h-1.5" />
          <span>all-in-one productivity hub</span>
        </div>
        <h1 className="text-6xl/[72px]  text-center font-semibold text-balance ">
          Your productivity hub, perfectly built to work just the way you do.
        </h1>
        <p className="text-center text-muted-foreground text-xl text-balance mx-auto max-w-5xl">
          Plan your day, organise your ideas, and collaborate with ease—all in
          one place. Comify helps you stay focused and in control, no matter
          what you’re working on.
        </p>
        <div className="flex gap-4 mt-6">
          <Button size={"xxl"}>Get Comify for Free</Button>
          <Button variant="secondary" size={"xxl"}>
            Request Demo
          </Button>
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
    </div>
  );
}

const CompanyLogoData: Array<{
  node: React.ReactNode;
  title: string;
  href: string;
}> = [
    {
      node: (
        <Image src={airbnbLogo} alt='Airbnb Logo' className="h-8 w-auto  flex-none" />
      ),
      title: "Airbnb Logo",
      href: "https://www.airbnb.com/",
    },
    {
      node: (
        <Image src={appleLogo} alt='Apple Logo' className="h-8 w-auto  flex-none" />
      ),
      title: "Apple Logo",
      href: "https://www.apple.com/",
    },
    {
      node: (
        <Image src={disneyLogo} alt='Disney Logo' className="h-8 w-auto  flex-none" />
      ),
      title: "Disney Logo",
      href: "https://www.disney.com/",
    },
    {
      node: (
        <Image src={facebookLogo} alt='Facebook Logo' className="h-8 w-auto  flex-none" />
      ),
      title: "Facebook Logo",
      href: "https://www.facebook.com/",
    },
    {
      node: (
        <Image src={quoraLogo} alt='Quora Logo' className="h-8 w-auto  flex-none" />
      ),
      title: "Quora Logo",
      href: "https://www.quora.com/",
    },
    {
      node: (
        <Image src={samsungLogo} alt='Samsung Logo' className="h-8 w-auto  flex-none" />
      ),
      title: "Samsung Logo",
      href: "https://www.samsung.com/",
    },
    {
      node: (
        <Image src={sparkLogo} alt='Spark Logo' className="h-8 w-auto  flex-none" />
      ),
      title: "Spark Logo",
      href: "https://www.spark.com/",
    }, {
      node: (
        <Image src={nvidiaLogo} alt='Nvidia Logo' className="h-8 w-auto  flex-none" />
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
