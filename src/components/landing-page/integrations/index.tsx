import {
  bitwarden,
  dropbox,
  figma,
  gmail,
  googleDrive,
  googlepalm,
  notion,
  ph,
  shopify,
  strapi,
  trust,
  vercel,
} from "@/components/ui/icons";
import * as motion from "motion/react-client";
import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "@/components/ui/motions/marquee";
import { transition } from "@/components/ui/motions/transitions";

const icons = {
  bitwarden,
  figma,
  dropbox,
  gmail,
  notion,
  googlepalm,
  trust,
  googleDrive,
  shopify,
  vercel,
  strapi,
  ph,
};
export default function Integrations() {
  return (
    <div className="mx-auto md:max-w-7xl flex flex-col items-center gap-16  overflow-hidden ">
      <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-end px-6 md:px-0 ">
        <div className="flex flex-col gap-3">
          <div className="flex gap-2 items-center text-base/[19.2px] tracking-[-0.8px] mb-3">
            <span className="bg-foreground w-4 rounded-full h-1.5" />
            <span>Seamless Integrations</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-semibold text-balance ">
            Connect your favorite tools and seamlessly streamline your entire
            workflow.
          </h1>
        </div>
        <div className="space-y-2 w-full max-w-lg flex flex-col  items-start">
          <p className=" text-muted-foreground md:text-lg ">
            Connect with the tools you already use and love. Our powerful
            integrations help you centralize your work, automate tasks, and
            enhance productivity without leaving Comify.
          </p>
          <button
            type="button"
            className="group relative rounded-full bg-transparent font-medium "
          >
            <span className="relative inline-flex overflow-hidden">
              <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[150%] group-hover:skew-y-12">
                Explore our integrations
              </div>
              <div className="absolute translate-y-[150%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                Explore our integrations
              </div>
              <div className="relative ml-1 h-5 w-5 overflow-hidden">
                <div className="absolute transition-all duration-500 group-hover:-translate-y-5 group-hover:translate-x-4">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                  >
                    <title>Arrow up</title>
                    <path
                      d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 -translate-x-4"
                  >
                    <title>Arrow up</title>
                    <path
                      d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
            </span>
          </button>
        </div>
      </div>
      <div className=" w-full h-[45dvh]  relative overflow-hidden">
        <MarqueeFade side="left" />
        <MarqueeFade side="right" />
        <MarqueeFade side="top" />
        <MarqueeFade side="bottom" />
        <div className=" absolute size-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform  h-[130%]">
          <Marquee>
            {Array.from({ length: 4 }).map((_, index) => (
              <MarqueeContent
                key={index}
                direction={index % 2 === 0 ? "left" : "right"}
              >
                {Object.entries(icons)
                  .sort(() => Math.random() - 0.5)
                  .map(([name, Icon]) => (
                    <MarqueeItem
                      className=" w-16 md:w-28 mx-5 my-3 aspect-square bg-muted rounded-xl  flex items-center justify-center"
                      key={name}
                    >
                      <Icon className="size-8 md:size-14" />
                    </MarqueeItem>
                  ))}
              </MarqueeContent>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}
