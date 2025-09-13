/** biome-ignore-all lint/correctness/useHookAtTopLevel: <explanation> */
"use client";
import heropreview from "#/public/sky.png";
import feature2 from "#/public/features/f2.png";
import feature3 from "#/public/features/f3.png";
import feature4 from "#/public/features/f4.png";
import feature5 from "#/public/features/f5.png";
import feature6 from "#/public/features/f6.png";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { transition } from "@/components/ui/motions/transitions";
import Image from "next/image";
import { Dot } from "lucide-react";

type CardData = {
  id: string;
  title: string;
  label: string;
  description: string;
  image: string;
};
const cardsData: CardData[] = [
  {
    id: "1",
    title: "Workspace templates",
    label: "Get started quickly",
    description:
      "Choose from a variety of pre-built templates to kickstart your projects and teams, ensuring consistency and efficiency from day one.",
    image: "https://placehold.co/800x600?text=Workspace+Templates&font=raleway",
  },
  {
    id: "2",

    title: "Real-Time Collaboration",
    label: "Work together seamlessly",
    description:
      "Collaborate with your team in real-time on documents, tasks, and projects, eliminating delays and ensuring everyone stays on the same page.",
    image:
      "https://placehold.co/800x600?text=Real-Time+Collaboration&font=raleway",
  },

  {
    id: "3",
    title: "Calendar sync",
    label: "Stay organized effortlessly",
    description:
      "Integrate your calendar to manage schedules, deadlines, and meetings directly within your workspace, never missing an important event.",
    image: "https://placehold.co/800x600?text=Calendar+sync&font=raleway",
  },
  {
    id: "4",
    title: "Progress tracking",
    label: "Monitor project progress",
    description:
      "Track the status of tasks and projects with detailed dashboards and reports, gaining insights into team performance and bottlenecks.",
    image: "https://placehold.co/800x600?text=Progress+tracking&font=raleway",
  },
  {
    id: "5",
    title: "Focus mode",
    label: "Boost productivity",
    description:
      "Eliminate distractions and concentrate on your most important work with a dedicated focus mode, enhancing productivity and deep work sessions.",
    image: "https://placehold.co/800x600?text=Focus+mode&font=raleway",
  },
];
function generateRandomId() {
  return Math.random().toString(36).substr(2, 9);
}

export default function MoreFeatures() {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [activeCardId, setActiveCardId] = useState<string>(cardsData[0].id);

  const [cards, setCards] = useState<(CardData & { animationId: string })[]>(
    () =>
      cardsData.map((item) => ({ ...item, animationId: item.id })).reverse(),
  );

  const handleSelectedCardToTop = (targetCardDataId?: string) => {
    if (targetCardDataId !== undefined) {
      // we check if the target card data exists
      const targetCardData = cardsData.find(
        (item) => item.id === targetCardDataId,
      );
      if (targetCardData) {
        setCards((prev) => {
          // find the index of the target card in the array
          const targetCardIndex = prev.findIndex(
            (item) => item.id === targetCardDataId,
          );
          if (targetCardIndex === -1) return prev; // safety: target not found
          const targetCard = prev[targetCardIndex];

          const afterTarget = prev.slice(targetCardIndex + 1).map((item) => ({
            ...item,
            animationId: generateRandomId(),
          }));
          const beforeTarget = prev.slice(0, targetCardIndex);

          setActiveCardId(targetCard.id);
          // return new array (target + afterTarget)
          return [...afterTarget, ...beforeTarget, targetCard];
        });

        return;
      }
    }

    setCards((prev) => {
      const currentActiveCard = prev[prev.length - 1];
      const currentOriginalIndex = cardsData.findIndex(
        (item) => item.id === currentActiveCard.id,
      );
      const nextOriginalIndex = (currentOriginalIndex + 1) % cardsData.length;
      const nextItemData = cardsData[nextOriginalIndex];

      const lastItem = prev[prev.length - 1];
      const nextItem = {
        ...nextItemData,
        animationId: prev[prev.length - 2].animationId, // get id from previous item to seemless continuation of the animation
      };
      setActiveCardId(nextItem.id);
      return [
        {
          ...lastItem,
          animationId: generateRandomId(), // new id to trigger the exit animation
        },
        ...prev.slice(0, -2),
        nextItem,
      ];
    });
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: we need start interval when opened changes
  useEffect(() => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        handleSelectedCardToTop();
      }, 10000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [cards]);

  return (
    <div className="mx-auto max-w-7xl flex flex-col items-center gap-12">
      <div className="flex flex-col gap-6 max-w-2xl text-center text-balance">
        <div className="flex flex-col gap-3 items-center">
          <div className="flex gap-2 items-center text-base/[19.2px] tracking-[-0.8px] mb-3">
            <span className="bg-foreground w-4 rounded-full h-1.5" />
            <span>Trusted by fast-moving teams</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold  ">
            Comify helps us stay aligned and move faster, without the chaos.
          </h1>
        </div>
        <p className=" text-muted-foreground md:text-lg ">
          From customisable workspaces to effortless team collaboration, Comify
          is designed to simplify your day and help you focus on what matters
          most.
        </p>
      </div>
      <div className="  w-full min-h-[70vh] md:min-h-[50vh] grid md:grid-cols-2">
        <div className=" relative grid w-full px-3 md:px-0  ">
          {cardsData.map((item, idx) => {
            const _active = activeCardId === item.id;
            return (
              <button
                key={item.title}
                onClick={() => {
                  if (_active) return;
                  handleSelectedCardToTop(item.id);
                  if (intervalRef.current) {
                    clearInterval(intervalRef.current);
                    intervalRef.current = null;
                  }
                }}
                type="button"
                className="last:pb-0 relative pb-px bg-gradient-to-r from-primary/30 to-100% to-transparent w-full"
              >
                <Dot
                  style={{
                    display: idx === cardsData.length - 1 ? "none" : "block",
                  }}
                  className=" absolute -bottom-2  -left-2 size-4.5 z-10"
                />
                <div
                  className={
                    "flex flex-col justify-center overflow-hidden relative pl-10 bg-background size-full"
                  }
                >
                  <div className="flex gap-8 items-center ">
                    <span className="font-bold text-2xl">{item.title}</span>
                    <AnimatePresence initial={false} mode="wait">
                      {!_active && (
                        <motion.span
                          initial={{
                            opacity: 0,
                            filter: "blur(10px)",
                          }}
                          animate={{
                            opacity: 1,
                            filter: "blur(0)",
                          }}
                          exit={{ opacity: 0, filter: "blur(10px)" }}
                          transition={transition}
                          className="text-muted-foreground text-base hidden md:block"
                        >
                          {item.label}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>
                  <AnimatePresence initial={false} mode="wait">
                    {_active && (
                      <>
                        <motion.div
                          initial={{
                            opacity: 0,
                            top: 20,
                            height: 0,
                            filter: "blur(10px)",
                          }}
                          animate={{
                            opacity: 1,
                            top: 0,
                            height: 120,
                            filter: "blur(0)",
                          }}
                          exit={{
                            opacity: 0,
                            height: 0,
                            top: -20,
                            filter: "blur(10px)",
                          }}
                          transition={transition}
                          className="text-start flex items-center"
                        >
                          <span className="text-muted-foreground text-base text-balance">
                            {item.description}
                          </span>
                        </motion.div>
                        <motion.div
                          initial={{
                            opacity: 0,
                            height: 0,
                          }}
                          animate={{
                            opacity: 1,
                            height: "100%",
                          }}
                          exit={{
                            opacity: 0,
                            height: "50%",
                            transition: { opacity: { duration: 0.3 } },
                          }}
                          className="absolute left-0 h-full w-1 bg-primary"
                          transition={transition}
                        />
                      </>
                    )}
                  </AnimatePresence>
                </div>
              </button>
            );
          })}
        </div>
        <motion.div className="  relative  rounded-2xl bg-muted p-10 hidden md:block  ">
          <AnimatePresence>
            {cards.map((item, idx) => {
              return (
                <motion.div
                  key={item.animationId}
                  className={
                    "  h-[310px]  w-[450px] absolute border border-border/50 transform left-1/2 -translate-x-1/2 rounded-2xl inset-0 shadow-xs bg-background overflow-hidden"
                  }
                  initial={{
                    top: (idx + 0.1) * 30,
                    opacity: 0,
                    scale: 1 - (cards.length - 1 - idx) * 0.05,
                    filter: "blur(10px)",
                  }}
                  animate={{
                    top: (idx + 0.1) * 25,
                    scale: 0.9 + idx * 0.05,
                    zIndex: idx,
                    opacity: 0.7 + idx * 0.15,
                    filter: `blur(${Math.max(0, (cards.length - 1 - idx) * 0.9)}px) saturate(${Math.max(0.5, 1 - (cards.length - 1 - idx) * 0.2)}) `,
                  }}
                  exit={{
                    top: (idx + 0.9) * 30,
                    scale: 1 - (cards.length - 1 - idx) * 0.05,
                    opacity: 0,
                    zIndex: 10,
                    filter: "blur(10px)",
                  }}
                  transition={transition}
                  layoutId={item.animationId}
                >
                  <div className=" size-full overflow-hidden relative rounded-2xl ">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      objectPosition="center"
                      objectFit="cover"
                    />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
