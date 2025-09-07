import { clsx, type ClassValue } from "clsx"
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  fallback: ["sans-serif"],
  weight: ["400", "500", "600", "700"],
});
