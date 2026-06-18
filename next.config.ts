import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "docs",
  basePath: "/docs",
  images: {
    unoptimized: true,
  },
  
};

export default nextConfig;
