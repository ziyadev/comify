import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/landing-page/footer";
import SmoothScrollWrapper from "@/components/smooth-scroll-wrapper";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  fallback: ["sans-serif"],
  weight: ["600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title:
    "Next.js Landing Page Template | Framer Motion, Lenis, Tailwind CSS & Shadcn UI",
  description:
    "Elevate your web projects with this modern Next.js landing page template, featuring smooth animations with Framer Motion, performant scrolling with Lenis, styled with Tailwind CSS, and powered by Shadcn UI components. Perfect for startups, portfolios, and marketing sites.",
  keywords: [
    "Next.js",
    "Landing Page",
    "Template",
    "Framer Motion",
    "Lenis",
    "Tailwind CSS",
    "Shadcn UI",
    "React",
    "TypeScript",
    "Web Development",
    "UI/UX",
    "SEO",
    "Animations",
    "Smooth Scroll",
    "Modern Web",
  ],
  authors: [{ name: "ziyadev", url: "https://dub.co/ziyadev" }],
  creator: "ziyadev",
  publisher: "ziyadev",
  metadataBase: new URL("https://comify-self.vercel.app"),
  openGraph: {
    title:
      "Next.js Landing Page Template | Framer Motion, Lenis, Tailwind CSS & Shadcn UI",
    description:
      "Elevate your web projects with this modern Next.js landing page template, featuring smooth animations with Framer Motion, performant scrolling with Lenis, styled with Tailwind CSS, and powered by Shadcn UI components. Perfect for startups, portfolios, and marketing sites.",
    url: "https://comify-self.vercel.app",
    siteName: "Next.js Landing Page Template",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Next.js Landing Page Template with Framer Motion, Lenis, Tailwind CSS & Shadcn UI",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Next.js Landing Page Template | Framer Motion, Lenis, Tailwind CSS & Shadcn UI",
    description:
      "Elevate your web projects with this modern Next.js landing page template, featuring smooth animations with Framer Motion, performant scrolling with Lenis, styled with Tailwind CSS, and powered by Shadcn UI components. Perfect for startups, portfolios, and marketing sites.",
    creator: "@ziyaDev0",
    images: ["https://github.com/ziyadev.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} ${raleway.className}  antialiased`}
        style={{
          fontWeight: "600",
          letterSpacing: "0.02em",
        }}
      >
        <SmoothScrollWrapper>
          <Navbar />
          {children}
          <Footer />
        </SmoothScrollWrapper>
      </body>
    </html>
  );
}
