"use client";
import { Button } from "@/components/ui/button";
import { transition } from "@/components/ui/motions/transitions";
import { cn, inter } from "@/lib/utils";
import NumberFlow from "@number-flow/react";
import { ChevronLeft, ChevronRight, Cloud, Plus } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Usage() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [visible, setVisible] = useState<Record<number, boolean>>({});
  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = el;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    };
    const observer = new IntersectionObserver(
      (entries) => {
        const newVisible: Record<number, boolean> = {};
        entries.forEach((entry) => {
          const idx = Number((entry.target as HTMLElement).dataset.index);
          // Only fully visible when intersectionRatio === 1
          newVisible[idx] = entry.intersectionRatio === 1;
        });
        setVisible((prev) => ({ ...prev, ...newVisible }));
      },
      {
        root: el,
        threshold: [0, 1],
      },
    );

    el.querySelectorAll("[data-index]").forEach((el) => {
      observer.observe(el);
    });

    handleScroll();
    el.addEventListener("scroll", handleScroll);

    return () => {
      el.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);
  return (
    <div className=" relative bg-[#161616]">
      <div className="relative top-0 z-0 mx-auto mt-0 flex h-16 max-w-[min(700px,calc(100vw-2rem))] -translate-y-px items-start justify-center text-white">
        <svg
          viewBox="0 0 85 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-auto shrink-0 translate-x-px translate-y-px overflow-visible"
        >
          <title>Arrow</title>
          <rect
            x={0}
            y={0}
            width={85}
            height={1}
            fill="currentColor"
            transform="translate(0, -1)"
          />
          <path
            d="M50 45C57.3095 56.6952 71.2084 63.9997 85 64V0H0C13.7915 0 26.6905 7.30481 34 19L50 45Z"
            fill="currentColor"
          />
        </svg>
        <div className="border-t-1 relative z-10 h-[calc(100%+1px)] min-w-0 grow border-current bg-current" />
        <svg
          viewBox="0 0 85 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-auto shrink-0 -translate-x-px translate-y-px -scale-x-100 overflow-visible"
        >
          <title>Arrow</title>
          <rect
            x={0}
            y={0}
            width={85}
            height={1}
            fill="currentColor"
            transform="translate(0, -1)"
          />
          <path
            d="M50 45C57.3095 56.6952 71.2084 63.9997 85 64V0H0C13.7915 0 26.6905 7.30481 34 19L50 45Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <div className="px-12 py-32 -my-16 border-x  text-background border-white/5 mx-auto max-w-7xl flex flex-col gap-22">
        <div>
          <div className="flex justify-between items-end">
            <div className="flex flex-col gap-3">
              <div className="flex gap-2 items-center text-base/[19.2px] tracking-[-0.8px] mb-3">
                <span className="bg-background w-4 rounded-full h-1.5" />
                <span>How people use comify</span>
              </div>
              <h1 className="text-5xl font-semibold text-balance ">
                From individuals to teams, Comify adapts to any workflow.
              </h1>
            </div>
          </div>
        </div>
        <div className="relative space-y-14 w-full">
          <div
            ref={scrollContainerRef}
            className="relative -mx-12 flex gap-8 px-(--scroll-padding) [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-smooth [--scroll-padding:max(--spacing(6),calc((100vw-(var(--container-2xl)))/2))] lg:[--scroll-padding:max(--spacing(8),calc((100vw-(var(--container-7xl)))/2))]"
          >
            {Array.from({ length: 8 }).map((_, idx) => {
              return (
                <motion.div
                  key={idx}
                  data-index={idx}
                  initial={{
                    opacity: 0.2,
                    filter: "blur(1.5px)",
                  }}
                  animate={
                    visible[idx]
                      ? {
                          opacity: 1,
                          filter: "blur(0px)",
                        }
                      : {
                          opacity: 0.5,
                          filter: "blur(1.5px)",
                        }
                  }
                  transition={transition}
                  className="relative border border-[#202020] flex px-2 aspect-9/16 pb-6 w-72 shrink-0 snap-start scroll-ml-(--scroll-padding) flex-col justify-end overflow-hidden rounded-2xl sm:aspect-3/4 sm:w-96"
                >
                  <Image
                    alt=""
                    src="https://placehold.co/600x900?text=Example+Usage&font=raleway"
                    fill
                    objectFit="cover"
                    objectPosition="center"
                    className="rounded-2xl"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 size-full bg-linear-to-t via-[#161616]/75 from-[#161616] from-[calc(7/16*100%)] ring-1 ring-gray-950/10 ring-inset sm:from-10%"
                  />
                  <figure className="relative p-6">
                    <figcaption>
                      <p className="text-sm/6 font-medium">
                        <span className="text-muted-foreground">
                          Customer Requests
                        </span>
                      </p>
                      <p className="text-base/6 font-medium text-background">
                        Build what customers actually want
                      </p>
                    </figcaption>
                  </figure>
                </motion.div>
              );
            })}
          </div>
          <div
            className={cn(
              "absolute top-0 bottom-0 z-10 h-full w-24 from-[#161616]/80 to-transparent",
              "-left-12 bg-gradient-to-r",
            )}
          />
          <div
            className={cn(
              "absolute top-0 bottom-0 z-10 h-full w-24 from-[#161616]/80 to-transparent",
              "-right-12 bg-gradient-to-l",
            )}
          />
          <div className="w-full justify-center flex gap-3">
            <Button
              type="button"
              onClick={() => {
                if (scrollContainerRef.current) {
                  scrollContainerRef.current.scrollBy({
                    left: -scrollContainerRef.current.clientWidth,
                    behavior: "smooth",
                  });
                }
              }}
              size="icon"
              variant={"secondary"}
              className="rounded-full hover:bg-[#303030] bg-[#404040]"
              aria-label="Scroll left"
              disabled={!canScrollLeft}
            >
              <ChevronLeft />
            </Button>
            <Button
              type="button"
              onClick={() => {
                if (scrollContainerRef.current) {
                  scrollContainerRef.current.scrollBy({
                    left: scrollContainerRef.current.clientWidth,
                    behavior: "smooth",
                  });
                }
              }}
              size="icon"
              variant={"secondary"}
              className="rounded-full hover:bg-[#303030] bg-[#404040]"
              aria-label="Scroll right"
              disabled={!canScrollRight}
            >
              <ChevronRight />
            </Button>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-4 border-y border-white/5  -mx-12 *:border-white/5 [clip-path:inset(1px_0_0_1px)] *:border-l *:border-t ">
            {[
              {
                title: "Collaboration",
                description:
                  "Share insights and work together seamlessly across teams.",
              },
              {
                title: "Prioritization",
                description:
                  "Focus on the most impactful tasks and features first.",
              },
              {
                title: "Feedback Loop",
                description:
                  "Continuously gather and act on user and customer feedback.",
              },
              {
                title: "Roadmapping",
                description:
                  "Plan your product future with clear visibility and strategy.",
              },
              {
                title: "Analytics",
                description:
                  "Understand user behavior and product performance with data.",
              },
              {
                title: "Integrations",
                description:
                  "Connect with your favorite tools and services effortlessly.",
              },
              {
                title: "Customization",
                description:
                  "Tailor the platform to fit your unique workflow and needs.",
              },
              {
                title: "Scalability",
                description:
                  "Grow your operations and user base without limits or hurdles.",
              },
            ].map((feature, idx) => {
              return (
                <div key={idx} className=" p-8 ">
                  <div className="space-y-2">
                    <h3 className=" text-background text-lg font-medium">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-24">
          <div className="flex justify-between items-end">
            <div className="flex flex-col gap-3">
              <div className="flex gap-2 items-center text-base/[19.2px] tracking-[-0.8px] mb-3">
                <span className="bg-background w-4 rounded-full h-1.5" />
                <span>Comify's impact in numbers.</span>
              </div>
              <h1 className="text-5xl font-semibold text-balance ">
                Engineering teams everywhere love and use Comify to build better
                products.
              </h1>
            </div>
          </div>
          <div className="grid gap-12 divide-y md:divide-y-0 md:divide-x *:text-center md:grid-cols-3 md:gap-2 divide-white/5">
            <div className="space-y-4">
              <div
                className="text-background text-5xl font-bold"
                style={{ fontFamily: inter.style.fontFamily }}
              >
                +1200
              </div>
              <p className="text-muted-foreground">Stars on GitHub</p>
            </div>
            <div className="space-y-4">
              <div
                className="text-background text-5xl font-bold"
                style={{ fontFamily: inter.style.fontFamily }}
              >
                22 K
              </div>
              <p className="text-muted-foreground">Active Users</p>
            </div>
            <div className="space-y-4">
              <div
                className="text-background text-5xl font-bold"
                style={{ fontFamily: inter.style.fontFamily }}
              >
                +22
              </div>
              <p className="text-muted-foreground">Powered Apps</p>
            </div>
          </div>
          <p className="text-muted-foreground mx-auto text-xl max-w-3xl text-center">
            Comify is a powerful tool designed to revolutionize how engineering
            teams build, manage, and iterate on products. It provides a
            comprehensive platform that streamlines workflows, enhances
            collaboration, and ensures that development efforts are always
            aligned with user needs and business goals.
          </p>
        </div>
      </div>
      <div className="relative top-0 z-0 mx-auto mt-0 flex h-16 max-w-[min(700px,calc(100vw-2rem))] -translate-y-px items-start justify-center text-white">
        {/* Left arrow flipped vertically */}
        <svg
          viewBox="0 0 85 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-auto shrink-0 translate-x-px overflow-visible"
        >
          <g transform="scale(1,-1) translate(0,-64)">
            <title>Arrow</title>
            <rect
              x={0}
              y={0}
              width={85}
              height={1}
              fill="currentColor"
              transform="translate(0, -1)"
            />
            <path
              d="M50 45C57.3095 56.6952 71.2084 63.9997 85 64V0H0C13.7915 0 26.6905 7.30481 34 19L50 45Z"
              fill="currentColor"
            />
          </g>
        </svg>

        {/* Middle bar (unchanged) */}
        <div className="border-t-1 relative z-10 h-[calc(100%+1px)] min-w-0 grow border-current bg-current" />

        {/* Right arrow flipped vertically and horizontally */}
        <svg
          viewBox="0 0 85 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-auto shrink-0 -translate-x-px overflow-visible -scale-x-100"
        >
          <g transform="scale(1,-1) translate(0,-64)">
            <title>Arrow</title>
            <rect
              x={0}
              y={0}
              width={85}
              height={1}
              fill="currentColor"
              transform="translate(0, -1)"
            />
            <path
              d="M50 45C57.3095 56.6952 71.2084 63.9997 85 64V0H0C13.7915 0 26.6905 7.30481 34 19L50 45Z"
              fill="currentColor"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}
