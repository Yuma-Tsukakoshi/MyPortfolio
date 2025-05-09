import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "s3.us-west-2.amazonaws.com",
      "images.unsplash.com",
      "github-contributions-api.deno.dev",
      "skillicons.dev",
    ],
    dangerouslyAllowSVG: true, // SVG 画像を許可
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.amazonaws.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "skillicons.dev",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
