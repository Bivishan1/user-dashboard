import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // 👈 your remote image domain
      },
    ],
  },
};

export default nextConfig;
