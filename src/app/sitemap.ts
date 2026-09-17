import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://medicalsia.com";

const ROUTES = [
  "",
  "/fitur",
  "/migrasi",
  "/harga",
  "/tentang",
  "/faq",
  "/kontak",
  "/kebijakan-privasi",
  "/syarat-ketentuan",
  "/kebijakan-refund",
];

export default function sitemap(): MetadataRoute.Sitemap {
  // No lastModified — we don't track real per-page change dates, and an
  // identical build-time timestamp on every URL is a misleading signal
  // (Google uses lastmod as a recrawl-priority hint).
  return ROUTES.map((route) => ({
    url: `${siteUrl}${route}`,
  }));
}
