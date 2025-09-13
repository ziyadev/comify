"use client";
import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { type PropsWithChildren, useEffect, useRef } from "react";

export default function SmoothScrollWrapper({ children }: PropsWithChildren) {
  const pathname = usePathname();
  const lenis = useRef<Lenis | null>(null);

  // biome-ignore lint/correctness/useExhaustiveDependencies: we need to trigger a scroll to top when the pathname changes
  useEffect(() => {
    if (lenis.current) lenis.current!.scrollTo(0, { immediate: true });
  }, [pathname, lenis]);

  useEffect(() => {
    lenis.current = new Lenis({
      duration: 2.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    const onFrame = (time: number) => {
      lenis.current!.raf(time);
      requestAnimationFrame(onFrame);
    };
    requestAnimationFrame(onFrame);

    return () => {
      lenis.current!.destroy();
    };
  }, []);

  return children;
}
