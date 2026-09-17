import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { getWhatsappHref } from "@/lib/whatsapp";
import "./globals.scss";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://medicalsia.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Medicalsia — The Modern Clinic App for Indonesia",
    template: "%s — Medicalsia",
  },
  description:
    "Medicalsia adalah aplikasi manajemen klinik untuk Indonesia — antrian, farmasi, kasir, dan notifikasi WhatsApp otomatis dalam satu sistem.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "Medicalsia",
    url: siteUrl,
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const whatsappHref = getWhatsappHref() ?? "/kontak";

  return (
    <html lang="id" className={inter.className}>
      <body>
        <Navbar whatsappHref={whatsappHref} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
