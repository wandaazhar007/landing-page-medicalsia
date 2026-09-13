import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://medicalsia.id";

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
  return ROUTES.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));
}
