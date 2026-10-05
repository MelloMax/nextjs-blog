import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: false,
  /* config options here */
    serverExternalPackages: [
        'langchain'
    ]
};

export default nextConfig;
