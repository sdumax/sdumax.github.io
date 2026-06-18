import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "docs",
  basePath: "/sdumax.github.io",
  images: {
    unoptimized: true,
  },
  
};

export default nextConfig;
