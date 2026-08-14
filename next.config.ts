import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  /* TypeScript errors MUST fail the production build. Do not re-add
     typescript.ignoreBuildErrors — fix the errors instead. */
};

export default nextConfig;
