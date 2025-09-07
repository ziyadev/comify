"use client";

import type { HTMLAttributes } from "react";
import type { MarqueeProps as FastMarqueeProps } from "react-fast-marquee";
import FastMarquee from "react-fast-marquee";
import { cn } from "@/lib/utils";

export type MarqueeProps = HTMLAttributes<HTMLDivElement>;

export const Marquee = ({ className, ...props }: MarqueeProps) => (
  <div
    className={cn("relative w-full overflow-hidden", className)}
    {...props}
  />
);

export type MarqueeContentProps = FastMarqueeProps;

export const MarqueeContent = ({
  loop = 0,
  autoFill = true,
  pauseOnHover = true,
  ...props
}: MarqueeContentProps) => (
  <FastMarquee
    autoFill={autoFill}
    loop={loop}
    pauseOnHover={pauseOnHover}
    {...props}
  />
);

export type MarqueeFadeProps = HTMLAttributes<HTMLDivElement> & {
  side: "left" | "right" | "top" | "bottom";
};

export const MarqueeFade = ({
  className,
  side,
  ...props
}: MarqueeFadeProps) => (
  <div
    className={cn(
      "absolute z-10 from-background to-transparent",
      side === "left" && "top-0 bottom-0 left-0 h-full w-24 bg-gradient-to-r",
      side === "right" && "top-0 bottom-0 right-0 h-full w-24 bg-gradient-to-l",
      side === "top" && "left-0 right-0 top-0 h-24 w-full bg-gradient-to-b",
      side === "bottom" &&
      "left-0 right-0 bottom-0 h-24 w-full bg-gradient-to-t",
      className,
    )}
    {...props}
  />
);

export type MarqueeItemProps = HTMLAttributes<HTMLDivElement>;

export const MarqueeItem = ({ className, ...props }: MarqueeItemProps) => (
  <div
    className={cn("mx-2 flex-shrink-0 object-contain", className)}
    {...props}
  />
);
