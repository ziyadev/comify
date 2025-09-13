import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { transition } from "@/components/ui/motions/transitions";
import * as motion from "motion/react-client";
import { TestamonialItem } from "./item";
export default function Testamonial() {
  return (
    <div className="mx-auto max-w-7xl flex flex-col items-center gap-12">
      <div className="flex flex-col gap-6 max-w-2xl text-center text-balance">
        <div className="flex flex-col gap-3 items-center">
          <div className="flex gap-2 items-center text-base/[19.2px] tracking-[-0.8px] mb-3">
            <span className="bg-foreground w-4 rounded-full h-1.5" />
            <span>Loved by forward-thinking teams</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold  ">
            Comify transformed our workflow, boosting efficiency and
            collaboration.
          </h1>
        </div>
        <p className=" text-muted-foreground md:text-lg ">
          From intuitive project management to seamless team communication,
          Comify provides the tools we need to succeed and stay ahead in a
          dynamic environment.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 w-full px-4 md:px-0">
        {[
          {
            testamonial:
              "Comify has revolutionized our team's collaboration. Projects flow smoother, and communication is clearer than ever. A game-changer!",
            name: "Eleanor Vance",
            role: "Head of Product, Apex Solutions",
            title: "Optimized Global Supply Chain for PharmaCorp",
            avatar: "https://github.com/shadcn.png",
            subtitle:
              "PharmaCorp leveraged Comify to build an efficient, secure, and compliant supply chain network:",
            list: [
              "End-to-end visibility across all logistics.",
              "Automated compliance checks and reporting.",
              "Reduced operational costs by 15%.",
            ],
          },
          {
            testamonial:
              "We've seen a significant boost in productivity since adopting Comify. Its intuitive design and powerful features make complex tasks manageable.",
            name: "Marcus Thorne",
            role: "Senior Project Manager, Horizon Innovations",
            title: "Streamlined Project Management for Horizon Innovations",
            avatar: "https://github.com/ziyadev.png",
            subtitle:
              "Horizon Innovations leveraged Comify to enhance project delivery and team collaboration:",
            list: [
              "Centralized project dashboards for all stakeholders.",
              "Automated task assignments and progress tracking.",
              "Improved project completion rates by 20%.",
            ],
          },
          {
            testamonial:
              "The support team at Comify is exceptional, and the platform itself is incredibly robust. It truly helps us stay agile and competitive.",
            name: "Sophia Chen",
            role: "Operations Director, Quantum Dynamics",
            title: "Optimized Operational Efficiency at Quantum Dynamics",
            avatar: "https://github.com/leerob.png",
            subtitle:
              "Quantum Dynamics used Comify to achieve greater agility and responsiveness in their operations:",
            list: [
              "Real-time monitoring of operational workflows.",
              "Enhanced cross-departmental communication.",
              "Reduced response times to market changes by 25%.",
            ],
          },
          {
            testamonial:
              "From initial setup to daily use, Comify has exceeded our expectations. Our workflow is now streamlined, and we're achieving our goals faster.",
            name: "David Kincaid",
            role: "Lead Software Engineer, InnovateCorp",
            title: "Accelerated Software Development Cycles for InnovateCorp",
            avatar: "https://github.com/emilkowalski.png",
            subtitle:
              "InnovateCorp integrated Comify to streamline their development process and boost team performance:",
            list: [
              "Unified platform for code reviews and issue tracking.",
              "Faster iteration and deployment cycles.",
              "Increased developer productivity by 18%.",
            ],
          },
        ].map((data, idx) => {
          return <TestamonialItem key={idx} {...data} />;
        })}
      </div>
    </div>
  );
}
