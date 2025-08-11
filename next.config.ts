import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'finvu.in',
        port: '',
        pathname: '/static/media/**',
      },
    ],
  },
};

export default nextConfig;
