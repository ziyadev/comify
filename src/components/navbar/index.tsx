import {
  ArrowUpRight,
  CircleCheckIcon,
  CircleHelpIcon,
  CircleIcon,
  AlignJustify,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import * as motion from "motion/react-client";
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
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import Github from "../ui/icons/github";
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
async function getStars() {
  const res = await fetch("https://api.github.com/repos/ziyadev/comify", {
    next: { revalidate: 3600 }, // cache for 1 hour
  });

  if (!res.ok) {
    return null;
  }

  const data = await res.json();
  return data.stargazers_count as number;
}
export default async function Navbar() {
  const stars = await getStars();
  return (
    <motion.header
      initial={{ y: -100, opacity: 0, filter: "blur(10px)", scale: 0.5 }}
      animate={{ y: 0, opacity: 1, filter: "blur(0px)", scale: 1 }}
      transition={transition}
      className="border-b fixed top-0 md:top-4 z-30 bg-muted shadow-sm max-w-sm sm:max-w-md md:max-w-xl lg:max-w-6xl left-1/2 -translate-x-1/2 w-full border px-8 rounded-xl"
    >
      <nav className=" flex justify-between items-center h-16 mx-auto lg:max-w-6xl">
        <Link href="/">
          <Image src="/logo.svg" alt="Comify Logo" width={40} height={45} />
        </Link>

        <NavigationMenu className="hidden lg:block" viewport={false}>
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
        <div className="space-x-3 hidden lg:block">
          <Button variant={"ghost"} className="text-muted-foreground" asChild>
            <Link
              href="https://github.com/ziyadev/comify"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github fill="black" className="size-4" />
              GitHub {stars !== null ? `(${stars.toLocaleString()})` : "(…)"}
              <ArrowUpRight className="ml-1 size-4" />
            </Link>
          </Button>
          <Button>
            Get started
            <span className="p-1 bg-gray-900 rounded ">
              <ArrowUpRight />
            </span>
          </Button>
        </div>
        <div className="lg:hidden flex items-center ">
          <Sheet>
            <SheetTrigger asChild>
              <Button size={"icon"} variant={"ghost"}>
                <AlignJustify className="size-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader className="sr-only">
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="grid gap-4 mt-20 px-3">
                <SheetClose asChild>
                  <Button
                    variant={"ghost"}
                    className="text-muted-foreground"
                    asChild
                  >
                    <Link href="/pricing">Pricing</Link>
                  </Button>
                </SheetClose>
                <SheetClose asChild>
                  <Button
                    asChild
                    variant={"ghost"}
                    className="text-muted-foreground"
                  >
                    <Link href="/about">About</Link>
                  </Button>
                </SheetClose>
                <SheetClose asChild>
                  <Button
                    variant={"ghost"}
                    className="text-muted-foreground"
                    asChild
                  >
                    <Link
                      href="https://github.com/ziyadev/comify"
                      target="_blank"
                    >
                      Docs
                      <ArrowUpRight />
                    </Link>
                  </Button>
                </SheetClose>
                <SheetClose asChild>
                  <Button
                    variant={"ghost"}
                    className="text-muted-foreground"
                    asChild
                  >
                    <Link
                      href="https://github.com/ziyadev/comify"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github fill="black" className="size-4" />
                      GitHub{" "}
                      {stars !== null ? `(${stars.toLocaleString()})` : "(…)"}
                      <ArrowUpRight className="ml-1 size-4" />
                    </Link>
                  </Button>
                </SheetClose>
                <SheetClose asChild>
                  <Button>
                    Get started
                    <span className="p-1 bg-gray-900 rounded ">
                      <ArrowUpRight />
                    </span>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
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
