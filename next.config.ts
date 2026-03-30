import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: "/site-transport",
  assetPrefix: "/site-transport",
};

export default nextConfig;
