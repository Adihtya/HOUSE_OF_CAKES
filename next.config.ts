import type { NextConfig } from "next";

const isExport = process.env.EXPORT === "true" || process.env.GITHUB_ACTIONS === "true";
const repo = process.env.GITHUB_REPOSITORY
  ? `/${process.env.GITHUB_REPOSITORY.split("/")[1]}`
  : (process.env.NEXT_PUBLIC_BASE_PATH || "");

const nextConfig: NextConfig = {
  output: isExport ? "export" : undefined,
  basePath: isExport && repo ? repo : undefined,
  images: {
    unoptimized: isExport,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "thehungryfamily.com",
      },
    ],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
