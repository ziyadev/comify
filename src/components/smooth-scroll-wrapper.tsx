"use client";
import Lenis from "lenis";
import { type PropsWithChildren, useEffect } from "react";

export default function SmoothScrollWrapper({ children }: PropsWithChildren) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
    });

    const onFrame = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(onFrame);
    };
    requestAnimationFrame(onFrame);

    return () => {
      lenis.destroy();
    };
  }, []);
  return children;
}
