import Link from "next/link";
import { Button } from "../ui/button";
import * as motion from "motion/react-client";
import { fadeUp, transition, viewPort } from "../ui/motions/transitions";
export default function PricingCards() {
  return (
    <section className="mx-auto max-w-5xl">
      <motion.div
        variants={{
          hidden: { ...fadeUp.initial, y: 50 },
          show: {
            ...fadeUp.animate,
            transition: {
              staggerChildren: 0.17,
            },
          },
        }}
        initial="hidden"
        whileInView="show"
        viewport={viewPort}
        className=" grid gap-6 md:grid-cols-3"
      >
        <motion.div
          variants={{
            hidden: { ...fadeUp.initial, y: 50 },
            show: { ...fadeUp.animate },
          }}
          transition={transition}
          className=" bg-muted p-6 rounded-xl flex flex-col justify-between space-y-8 shadow-black/5/[0.03]"
        >
          <div className="space-y-4">
            <div>
              <h2 className="text-title font-medium">Free</h2>
              <span className="text-title my-3 block text-2xl font-semibold">
                $0 / mo
              </span>
              <p className="text-sm">Per editor</p>
            </div>
            <hr className="border-dashed border-black/5" />
            <ul className="list-outside list-image-[url(/dark-check.svg)] space-y-3 pl-4 text-sm *:pl-2 dark:list-image-[url(/check.svg)]">
              <li>Basic Analytics Dashboard</li>
              <li>5GB Cloud Storage</li>
              <li>Email and Chat Support</li>
            </ul>
          </div>
          <div className="space-y-4 w-full grid">
            <hr className="border-dashed border-black/5" />
            <Button>Get Started</Button>
          </div>
        </motion.div>
        <motion.div
          variants={{
            hidden: { ...fadeUp.initial, y: 50 },
            show: { ...fadeUp.animate },
          }}
          transition={transition}
          className=" p-6 rounded-xl relative shadow-gray-950/[0.03] bg-primary text-background"
        >
          <span className="absolute inset-x-0 -top-3 mx-auto flex h-6 w-fit items-center rounded-full bg-muted px-3 py-1 text-xs font-medium text-foreground shadow-md">
            Popular
          </span>
          <div className="flex flex-col justify-between space-y-8 [--ui-border-color:var(--input-border)]">
            <div className="space-y-4">
              <div>
                <h2 className="text-title font-medium">Pro</h2>
                <span className="text-title my-3 block text-2xl font-semibold">
                  $19 / mo
                </span>
                <p className="text-sm">Per editor</p>
              </div>
              <hr className="border-dashed border-white/5" />
              <ul className="text-title list-outside list-image-[url(/dark-check.svg)] space-y-3 pl-5 text-sm *:pl-2 dark:list-image-[url(/check.svg)]">
                <li>Basic Analytics Dashboard</li>
                <li>5GB Cloud Storage</li>
                <li>Email and Chat Support</li>
                <li>Access to Community Forum</li>
                <li>Single User Access</li>
                <li>Access to Basic Templates</li>
                <li>Mobile App Access</li>
                <li>1 Custom Report Per Month</li>
                <li>Monthly Product Updates</li>
                <li>Standard Security Features</li>
              </ul>
            </div>
            <div className="space-y-4 w-full grid">
              <hr className="border-dashed border-white/5" />
              <Button variant={"secondary"}>Get Started</Button>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={{
            hidden: { ...fadeUp.initial, y: 50 },
            show: { ...fadeUp.animate },
          }}
          transition={transition}
          className=" bg-muted p-6 rounded-xl flex flex-col justify-between space-y-8 shadow-gray-950/[0.03]"
        >
          <div className="space-y-4">
            <div>
              <h2 className="text-title font-medium">Startup</h2>
              <span className="text-title my-3 block text-2xl font-semibold">
                $29 / mo
              </span>
              <p className="text-sm">Per editor</p>
            </div>
            <hr className="border-dashed border-black/5" />
            <ul className="list-outside list-image-[url(/dark-check.svg)] space-y-3 pl-4 text-sm *:pl-2 dark:list-image-[url(/check.svg)]">
              <li>Everything in Basic Plan</li>
              <li>5GB Cloud Storage</li>
              <li>Email and Chat Support</li>
            </ul>
          </div>
          <div className="space-y-4 w-full grid">
            <hr className="border-dashed border-black/5" />
            <Button>Get Started</Button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
