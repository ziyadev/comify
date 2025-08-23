import { ArrowUpRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
export default function Navbar() {
  return (
    <header className="border-b sticky top-0 z-[100] bg-background/80 backdrop-blur-lg ">
      <nav className=" flex justify-between items-center h-16 mx-auto max-w-6xl">
        <Image src="/logo.svg" alt="Comify Logo" width={40} height={45} />
        <ul className="flex  gap-7 text-sm font-medium text-muted-foreground">
          <li>Home</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>About</li>
          <li>Case studies</li>
        </ul>
        <div className="space-x-3">
          <Button variant={"ghost"} className="text-muted-foreground">
            Changelog
            <ArrowUpRight />
          </Button>
          <Button >Get started
            <span className="p-1 bg-gray-900 rounded ">
              <ArrowUpRight />

            </span>

          </Button>
        </div>
      </nav>
    </header>
  );
}
