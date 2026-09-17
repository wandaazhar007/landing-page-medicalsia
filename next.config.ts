import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    // Defining localPatterns makes it an allow-list for ALL local next/image
    // sources site-wide, not just the query-string ones — every local path
    // used with <Image> (Hero's /logos/*.png too) must be listed here.
    // /screenshots/** needs no `search` restriction so the `?v=` cache-busting
    // query param (see src/data/screenshots.ts) is allowed through.
    localPatterns: [{ pathname: "/screenshots/**" }, { pathname: "/logos/**" }],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
