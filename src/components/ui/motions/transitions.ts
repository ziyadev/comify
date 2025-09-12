import { TargetAndTransition, Transition } from "motion";

export const transition: Transition = {
  duration: 0.4,
  ease: "easeInOut",
  mass: 0.3,
  damping: 8,
  stiffness: 50,
  type: "spring",
};

export const fadeUp: {
  initial: TargetAndTransition;
  animate: TargetAndTransition;
} = {
  initial: { opacity: 0, y: 20, filter: "blur(10px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0)" },
};

export const scaleUp: {
  initial: TargetAndTransition;
  animate: TargetAndTransition;
} = {
  initial: { opacity: 0, y: 20, scale: 0.9, filter: "blur(10px)" },
  animate: { opacity: 1, y: 0, scale: 1, filter: "blur(0)" },
};
export const viewPort = {
  once: true,
  amount: 0.3,
} as const;
