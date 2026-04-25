import createNextIntlPlugin from "next-intl/plugin";
import type { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin("./src/shared/lib/i18n/request.ts");

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizeCss: true,
    optimisticClientCache: true,
    webpackMemoryOptimizations: true,
    optimizeServerReact: true,
    optimizePackageImports: ["swiper", "axios"],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  compress: true,
  images: {
    qualities: [25, 50,60, 75],
    remotePatterns: [new URL('https://silkroadempirehotel.com/media/room_images/**'),new URL("https://images.unsplash.com/**?auto=format&fit=crop&w=800&q=80")],
  },
};

export default withNextIntl(nextConfig);
