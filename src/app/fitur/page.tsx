import type { Metadata } from "next";
import { ClipboardList, Calendar, Stethoscope, Pill, CreditCard, Printer, MessageCircle } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Divider from "@/components/ui/Divider";
import Section from "@/components/ui/Section";
import IconBox from "@/components/ui/IconBox";
import HighlightBox from "@/components/ui/HighlightBox";
import CtaBand from "@/components/ui/CtaBand";
import styles from "@/components/ui/ModuleList.module.scss";

export const metadata: Metadata = {
  title: "Fitur",
  description:
    "Modul yang benar-benar dipakai klinik setiap hari: pendaftaran, appointment & antrian, konsultasi, farmasi, kasir, notifikasi WhatsApp, dan cetak dokumen.",
  alternates: { canonical: "/fitur" },
};

const MODULES = [
  {
    icon: <ClipboardList size={20} />,
    title: "Pendaftaran & Rekam Medis",
    description:
      "Data pasien, riwayat kunjungan, alergi, dan diagnosis tersimpan rapi — bisa dicari dalam hitungan detik, bahkan lewat scan barcode kartu pasien.",
  },
  {
    icon: <Calendar size={20} />,
    title: "Appointment & Antrian Real-Time",
    description:
      "Booking lewat resepsionis atau tautan online, nomor antrian otomatis, dua layar terpisah untuk ruang tunggu dan farmasi — lengkap dengan panggilan suara.",
  },
  {
    icon: <Stethoscope size={20} />,
    title: "Konsultasi Dokter & Resep Digital",
    description:
      "Dokter langsung lihat riwayat pasien, tulis diagnosis dan resep digital — obat yang stoknya habis pun tetap bisa dipilih, keputusan diserahkan ke kasir.",
  },
  {
    icon: <Pill size={20} />,
    title: "Farmasi",
    description:
      "Stok obat termonitor, resep otomatis masuk antrian farmasi setelah pasien bayar — bukan sebelumnya, supaya tidak ada obat “kebobolan” belum dibayar.",
  },
  {
    icon: <CreditCard size={20} />,
    title: "Kasir Multi Metode Bayar",
    description: "Tunai, kartu debit/kredit lewat EDC, dan QRIS — kasir tinggal catat metodenya, sistem yang jaga alurnya.",
  },
  {
    icon: <Printer size={20} />,
    title: "Cetak Dokumen",
    description:
      "Kartu pasien dengan barcode, struk transaksi, sampai rekam medis lengkap — semua bisa dicetak langsung dari aplikasi tanpa software tambahan.",
  },
];

export default function FiturPage() {
  return (
    <>
      <PageHero
        eyebrow="Fitur"
        title="Semua yang dipakai klinik Anda, dalam satu aplikasi."
        lede="Bukan daftar fitur teknis yang panjang — ini modul yang benar-benar dipakai setiap hari, dari pasien datang sampai pulang bawa obat."
      />
      <Divider />
      <Section>
        <div className={styles.modList}>
          {MODULES.map((mod) => (
            <div key={mod.title} className={styles.mod}>
              <IconBox>{mod.icon}</IconBox>
              <div>
                <h3>{mod.title}</h3>
                <p>{mod.description}</p>
              </div>
            </div>
          ))}
        </div>
        <HighlightBox icon={<MessageCircle size={24} />} title="Yang paling ditunggu: Notifikasi WhatsApp Otomatis">
          Konfirmasi booking, pengingat H-1, konfirmasi pembayaran, sampai kabar &ldquo;obat sudah siap diambil&rdquo;
          — semua terkirim sendiri dari nomor WhatsApp klinik Anda. Staf tidak perlu lagi kirim pesan satu-satu ke
          tiap pasien.
        </HighlightBox>
      </Section>
      <CtaBand title="Mau lihat langsung cara kerjanya?" ctaLabel="Request Demo" ctaHref="/kontak">
        Kami tunjukkan lewat demo singkat, disesuaikan dengan alur klinik Anda.
      </CtaBand>
    </>
  );
}
