"use client";
import {
  ArrowUpRight,
  CircleCheckIcon,
  CircleHelpIcon,
  CircleIcon,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { motion } from "motion/react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import Link from "next/link";
import { transition } from "../ui/motions/transitions";
const components: { title: string; href: string; description: string }[] = [
  {
    title: "Blogs",
    href: "/blogs",
    description: "Stay updated with our latest news, insights, and articles.",
  },
  {
    title: "Changelog",
    href: "/changelog",
    description: "Track all new features, improvements, and bug fixes.",
  },
];
export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0, filter: "blur(10px)", scale: 0.5 }}
      animate={{ y: 0, opacity: 1, filter: "blur(0px)", scale: 1 }}
      transition={transition}
      className="border-b fixed top-4 z-[100] bg-background/80 backdrop-blur-lg max-w-6xl left-1/2 -translate-x-1/2 w-full border px-8 rounded-xl"
    >
      <nav className=" flex justify-between items-center h-16 mx-auto max-w-6xl">
        <Link href="/">
          <Image src="/logo.svg" alt="Comify Logo" width={40} height={45} />
        </Link>
        <NavigationMenu viewport={false}>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent ">
                Product
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-2 md:w-[400px] lg:w-[700px] lg:grid-cols-[.75fr_1fr] p-3 ">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-lg border-black/5 border bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                        href="https://github.com/ziyadev/comify"
                      >
                        <div className="mt-4 mb-2 text-lg font-medium">
                          Comify/template
                        </div>
                        <p className="text-muted-foreground text-sm leading-tight">
                          Beautifully designed landing pages for your product.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem
                    href="https://github.com/ziyadev/comify#readme"
                    title="Introduction"
                  >
                    Re-usable landing page template build with Next.js and
                    Tailwind CSS.
                  </ListItem>
                  <ListItem
                    href="https://github.com/ziyadev/comify#installation"
                    title="Installation"
                  >
                    How to clone and run the project.
                  </ListItem>
                  <ListItem href="/blog" title="Blog">
                    Stay updated with our latest news and features.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent ">
                Resources
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle({
                  className: "bg-transparent",
                })}
              >
                <Link href="/pricing">Pricing</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle({
                  className: "bg-transparent",
                })}
              >
                <Link href="/about">About</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle({
                  className: "bg-transparent flex flex-row",
                })}
              >
                <Link href="https://github.com/ziyadev/comify" target="_blank">
                  Docs
                  <ArrowUpRight />
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="space-x-3">
          <Button variant={"ghost"} className="text-muted-foreground">
            Changelog
            <ArrowUpRight />
          </Button>
          <Button>
            Get started
            <span className="p-1 bg-gray-900 rounded ">
              <ArrowUpRight />
            </span>
          </Button>
        </div>
      </nav>
    </motion.header>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
