import { Button } from "@/components/ui/button";

export default function Cta() {
  return (
    <div className="relative bg-[#161616] px-4">
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-30 mix-blend-overlay">
        <div className="absolute -inset-[40px] bg-[#161616] blur-[30px]" />
      </div>
      <div>
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 border-x border-white/5 [mask-image:linear-gradient(black,transparent)]" />
          <div className="absolute inset-y-0 left-1/2 w-[1200px] -translate-x-1/2">
            <svg
              className="pointer-events-none absolute inset-0 text-white/15 [mask-composite:intersect] [mask-image:linear-gradient(black,transparent),radial-gradient(black,transparent)]"
              width="100%"
              height="100%"
            >
              <title>bg pattern</title>

              <defs>
                <pattern
                  id="grid-«Rju7ninb»"
                  x={-1}
                  y={-1}
                  width={60}
                  height={60}
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 60 0 L 0 0 0 60"
                    fill="transparent"
                    stroke="currentColor"
                    strokeWidth={1}
                  />
                </pattern>
              </defs>
              <rect fill="url(#grid-«Rju7ninb»)" width="100%" height="100%" />
            </svg>
          </div>
        </div>
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
        <div className="relative flex flex-col items-center -mt-16 px-4 pb-32 pt-44 text-center border-white/5 mx-auto max-w-7xl border-x">
          <h2 className="max-w-lg text-balance font-display text-4xl font-medium text-neutral-50 sm:text-5xl">
            Experience the Future of Marketing
          </h2>
          <p className="mt-6 max-w-[560px] text-pretty text-lg font-medium text-neutral-400 sm:text-xl">
            Discover innovative strategies and tools that empower your team to
            achieve unparalleled success.
          </p>
          <div className="mt-10 flex items-center justify-center gap-3">
            <Button variant={"secondary"} size={"xl"}>
              Start Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
