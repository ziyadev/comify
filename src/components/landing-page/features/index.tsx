import heropreview from "#/public/sky.png";

import apppreview from "#/public/app-preview.jpg"

import Image from "next/image";
export default function Features() {
  return (
    <div className="mx-auto max-w-7xl flex flex-col items-center gap-16 ">
      <div className="flex justify-between items-end">
        <div className="flex flex-col gap-3">
          <div className="flex gap-2 items-center text-base/[19.2px] tracking-[-0.8px] mb-3">
            <span className="bg-foreground w-4 rounded-full h-1.5" />
            <span>Our first in class features</span>
          </div>
          <h1 className="text-5xl font-semibold text-balance ">
            Tools that keep you organised, on track, and ready to achieve more.
          </h1>
        </div>
        <div className="space-y-2 w-full max-w-lg flex flex-col  items-start">
          <p className=" text-muted-foreground text-lg ">
            From customisable workspaces to effortless team collaboration,
            Comify is designed to simplify your day and help you focus on what
            matters most.
          </p>
          <button
            type="button"
            className="group relative rounded-full bg-transparent font-medium "
          >
            <span className="relative inline-flex overflow-hidden">
              <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[150%] group-hover:skew-y-12">
                Explore our features
              </div>
              <div className="absolute translate-y-[150%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                Explore our features
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
      <div className="grid gap-6 w-full">
        <div className="relative w-full rounded-2xl  aspect-[16/10] overflow-hidden flex justify-center items-center">
          <Image src={heropreview} alt="Hero Preview" fill objectFit="cover" />
          <div className="pointer-events-none  z-10 absolute inset-x-0 bottom-0 w-full h-[20%] bg-gradient-to-t from-background via-background/90 to-transparent"></div>
          <div className="absolute  translate-x-[6%] translate-y-[10%] ">
            <div className=" relative aspect-[3/2] z-20">
              <div className="absolute -inset-(--padding) shadow-xs ring-1 ring-black/5 [--padding:--spacing(2)]" />
              <Image
                alt=""
                src={apppreview}
                width={2880}
                height={1920}
                className="rounded-(--radius) shadow-2xl ring-1 ring-black/10 "
              />
            </div>
          </div>
        </div>

        {/* bento grid section */}
        <div className="grid grid-cols-3 gap-6 w-full">
          {/* first feature */}
          <div className="flex flex-col gap-3">
            <div className=" rounded-(--radius) aspect-[3/2] overflow-hidden relative">
              <Image
                src={heropreview}
                alt="Hero Preview"
                fill
                objectFit="cover"
                objectPosition="center"
              />
              <div className="pointer-events-none  z-10 absolute inset-x-0 bottom-0 w-full h-[40%] bg-gradient-to-t from-background via-background/80 to-transparent"></div>
            </div>
            <div className="px-2 pt-3">
              <h4 className="font-semibold text-lg">
                Plan your week with clarity.
              </h4>
              <p className="text-muted-foreground text-balance">
                Drag tasks into your calendar and block time for deep work — no
                bouncing between apps.
              </p>
              <button
                type="button"
                className="group relative rounded-full bg-transparent font-medium  mt-2"
              >
                <span className="relative inline-flex overflow-hidden">
                  <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[150%] group-hover:skew-y-12">
                    Learn more
                  </div>
                  <div className="absolute translate-y-[150%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                    Learn more
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
          {/* second feature */}
          <div className="flex flex-col gap-3">
            <div className=" rounded-(--radius) aspect-[3/2] overflow-hidden relative">
              <Image
                src={heropreview}
                alt="Hero Preview"
                fill
                objectFit="cover"
                objectPosition="center"
              />
              <div className="pointer-events-none  z-10 absolute inset-x-0 bottom-0 w-full h-[40%] bg-gradient-to-t from-background via-background/80 to-transparent"></div>
            </div>
            <div className="px-2 pt-3">
              <h4 className="font-semibold text-lg">
                Setup templates once, reuse forever.
              </h4>
              <p className="text-muted-foreground text-balance">
                Start with clean, proven templates for meetings, projects, and
                weekly planning.
              </p>
              <button
                type="button"
                className="group relative rounded-full bg-transparent font-medium  mt-2"
              >
                <span className="relative inline-flex overflow-hidden">
                  <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[150%] group-hover:skew-y-12">
                    Learn more
                  </div>
                  <div className="absolute translate-y-[150%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                    Learn more
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
          {/* third feature */}
          <div className="flex flex-col gap-3">
            <div className=" rounded-(--radius) aspect-[3/2] overflow-hidden relative">
              <Image
                src={heropreview}
                alt="Hero Preview"
                fill
                objectFit="cover"
                objectPosition="center"
              />
              <div className="pointer-events-none  z-10 absolute inset-x-0 bottom-0 w-full h-[40%] bg-gradient-to-t from-background via-background/80 to-transparent"></div>
            </div>
            <div className="px-2 pt-3">
              <h4 className="font-semibold text-lg">
                Collaborate without interruptions.
              </h4>
              <p className="text-muted-foreground text-balance">
                Share updates, tag teammates, and move work forward — even when you’re not online.
              </p>
              <button
                type="button"
                className="group relative rounded-full bg-transparent font-medium  mt-2"
              >
                <span className="relative inline-flex overflow-hidden">
                  <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[150%] group-hover:skew-y-12">
                    Learn more
                  </div>
                  <div className="absolute translate-y-[150%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                    Learn more
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
        </div>
      </div>
    </div>
  );
}
