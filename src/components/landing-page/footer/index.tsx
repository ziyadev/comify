import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="max-w-7xl mx-auto  py-24">
      <div className="items-end grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <h2 className="text-lg md:text-xl font-semibold text-zinc-900">
            Get started with our app today
          </h2>
          <p className="text-base mt-4 font-medium text-zinc-500 lg:text-balance">
            Streamline your workflow and collaborate seamlessly on staging and
            temporary environments
          </p>
        </div>
        <div className="flex flex-col items-center lg:flex-row gap-2 sm:ml-auto">
          <button
            type="button"
            className="flex items-center justify-center text-center font-medium duration-500 ease-in-out transition-colors focus:outline-2 focus:z-10 select-none text-zinc-700 bg-white outline outline-zinc-200 hover:shadow-sm focus:outline-zinc-900 shadow-sm h-9 px-4 py-2 text-sm gap-2 rounded-tl-md rounded-tr-md rounded-bl-md rounded-br-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler-layout-apple size-4"
            >
              <title>Download on App Store</title>
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M8.286 7.008c-3.216 0 -4.286 3.23 -4.286 5.92c0 3.229 2.143 8.072 4.286 8.072c1.165 -.05 1.799 -.538 3.214 -.538c1.406 0 1.607 .538 3.214 .538s4.286 -3.229 4.286 -5.381c-.03 -.011 -2.649 -.434 -2.679 -3.23c-.02 -2.335 2.589 -3.179 2.679 -3.228c-1.096 -1.606 -3.162 -2.113 -3.75 -2.153c-1.535 -.12 -3.032 1.077 -3.75 1.077c-.729 0 -2.036 -1.077 -3.214 -1.077z"></path>
              <path d="M12 4a2 2 0 0 0 2 -2a2 2 0 0 0 -2 2"></path>
            </svg>
            <span>Download on App Store</span>
          </button>
          <button
            type="button"
            className="flex items-center justify-center text-center font-medium duration-500 ease-in-out transition-colors focus:outline-2 focus:z-10 select-none text-zinc-700 bg-white outline outline-zinc-200 hover:shadow-sm focus:outline-zinc-900 shadow-sm h-9 px-4 py-2 text-sm gap-2 rounded-tl-md rounded-tr-md rounded-bl-md rounded-br-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler-layout-grid size-4"
            >
              <title>Download on App Store</title>
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M4 3.71v16.58a.7 .7 0 0 0 1.05 .606l14.622 -8.42a.55 .55 0 0 0 0 -.953l-14.622 -8.419a.7 .7 0 0 0 -1.05 .607z"></path>
              <path d="M15 9l-10.5 11.5"></path>
              <path d="M4.5 3.5l10.5 11.5"></path>
            </svg>
            <span>Download on Google Play</span>
          </button>
        </div>
      </div>
      <div className="pt-6 mt-6 border-t grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-24 border-black/5">
        <div className="space-y-4">
          <nav aria-labelledby="footer-heading-0">
            <h2
              className="text-base font-semibold text-zinc-900"
              id="footer-heading-0"
            >
              Company
            </h2>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  className={buttonVariants({
                    size: "sm",
                    variant: "link",
                    className: "text-muted-foreground!",
                  })}
                  href="#_"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className={buttonVariants({
                    size: "sm",
                    variant: "link",
                    className: "text-muted-foreground!",
                  })}
                  href="#_"
                >
                  Mission
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="space-y-4">
          <nav aria-labelledby="footer-heading-1">
            <h2
              className="text-base font-semibold text-zinc-900"
              id="footer-heading-1"
            >
              Services
            </h2>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  className={buttonVariants({
                    size: "sm",
                    variant: "link",
                    className: "text-muted-foreground!",
                  })}
                  href="#_"
                >
                  Marketing
                </a>
              </li>
              <li>
                <a
                  className={buttonVariants({
                    size: "sm",
                    variant: "link",
                    className: "text-muted-foreground!",
                  })}
                  href="#_"
                >
                  Analytics
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="space-y-4">
          <nav aria-labelledby="footer-heading-2">
            <h2
              className="text-base font-semibold text-zinc-900"
              id="footer-heading-2"
            >
              Resources
            </h2>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  className={buttonVariants({
                    size: "sm",
                    variant: "link",
                    className: "text-muted-foreground!",
                  })}
                  href="#_"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  className={buttonVariants({
                    size: "sm",
                    variant: "link",
                    className: "text-muted-foreground!",
                  })}
                  href="#_"
                >
                  Guides
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="space-y-4">
          <nav aria-labelledby="footer-heading-3">
            <h2
              className="text-base font-semibold text-zinc-900"
              id="footer-heading-3"
            >
              Support &amp; Legal
            </h2>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  className={buttonVariants({
                    size: "sm",
                    variant: "link",
                    className: "text-muted-foreground!",
                  })}
                  href="#_"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  className={buttonVariants({
                    size: "sm",
                    variant: "link",
                    className: "text-muted-foreground!",
                  })}
                  href="#_"
                >
                  API Status
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between pt-6 mt-12 border-t md:flex-row border-black/5">
        <a
          className={buttonVariants({
            size: "sm",
            variant: "link",
            className: "text-muted-foreground!",
          })}
          href="#_"
        >
          <Image src="/logo.svg" alt="Comify Logo" width={40} height={45} />
          Comify
        </a>
        <h2 className="text-sm font-medium text-zinc-400">
          Copyright © 2025 Comify. All rights reserved.
        </h2>
      </div>
    </div>
  );
}
