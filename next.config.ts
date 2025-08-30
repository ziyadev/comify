import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    // Setting unoptimized to true will disable Next.js Image Optimization,
    // allowing images from all origins without needing to configure remotePatterns or domains.
    // Be aware that this also means images will not be optimized or served from the Next.js image optimizer.
    unoptimized: true,
  },
};

export default nextConfig;
