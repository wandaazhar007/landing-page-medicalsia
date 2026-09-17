export type AppScreenshot = {
  id: string;
  src: string;
  alt: string;
  caption: string;
  version: number;
};

// Placeholder images live in public/screenshots/*.png — swap them for real
// captures whenever they're ready, no code changes needed EXCEPT bumping
// `version` by 1 for that entry. Next.js's image optimizer caches derivatives
// by URL+width+quality only — it does NOT notice the underlying file changed,
// so browsers (and the optimizer itself) keep serving the old cached image
// forever unless the URL itself changes. `version` is appended as `?v=` to
// force a new cache key every time a file is replaced.
export const APP_SCREENSHOTS: AppScreenshot[] = [
  {
    id: "dashboard",
    src: "/screenshots/dashboard.png",
    alt: "Tampilan dashboard ringkasan klinik Medicalsia",
    caption: "Dashboard Ringkasan Klinik",
    version: 2,
  },
  {
    id: "antrian",
    src: "/screenshots/antrian.png",
    alt: "Tampilan antrian dan appointment Medicalsia",
    caption: "Antrian & Appointment",
    version: 2,
  },
  {
    id: "konsultasi",
    src: "/screenshots/konsultasi.png",
    alt: "Tampilan konsultasi dokter dan resep digital Medicalsia",
    caption: "Konsultasi & Resep Digital",
    version: 2,
  },
  {
    id: "kasir",
    src: "/screenshots/kasir.png",
    alt: "Tampilan kasir pembayaran Medicalsia",
    caption: "Kasir Pembayaran",
    version: 2,
  },
  {
    id: "farmasi",
    src: "/screenshots/farmasi.png",
    alt: "Tampilan farmasi dan stok obat Medicalsia",
    caption: "Farmasi & Stok Obat",
    version: 2,
  },
  {
    id: "pasien",
    src: "/screenshots/pasien.png",
    alt: "Tampilan rekam medis pasien Medicalsia",
    caption: "Rekam Medis Pasien",
    version: 2,
  },
];
