import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pixel-p1.s3.sa-east-1.amazonaws.com",
        pathname: "/doctor/avatar/**",
      },
    ],
  },
};

export default nextConfig;
