import { Button } from "../ui/button";

export default function Features() {
  return (
    <div className="mx-auto max-w-7xl flex flex-col items-center gap-4 ">
      <div className="flex justify-between items-end">
        <div className="flex flex-col gap-3">
          <div className="flex gap-2 items-center text-base/[19.2px] tracking-[-0.8px] mb-3">
            <span className="bg-foreground w-4 rounded-full h-1.5" />
            <span>Our first in class features</span>
          </div>
          <h1 className="text-5xl font-semibold text-balance ">
            Tools that keep you organised, on track, and ready to achieve
            more.
          </h1>
        </div>
        <div className="space-y-2 w-full max-w-lg">
          <p className=" text-muted-foreground text-lg text-balance mx-auto ">
            From customisable workspaces to effortless team collaboration,
            Nestly is designed to simplify your day and help you focus on what
            matters most.
          </p>
          <button type="button" className="group relative rounded-full bg-transparent font-medium ">
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
                      fill-rule="evenodd"
                      clip-rule="evenodd"
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
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
