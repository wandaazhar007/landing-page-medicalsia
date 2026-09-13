import type { FaqItem } from "@/components/ui/FaqAccordion";

// Source: docs/09-landing-page-brief.md, FAQ section. Order MUST be kept as-is
// (most important/frequently asked -> more detailed/technical).
// No. 18 and 19 are intentionally left unanswered — business decision not yet made by Wanda.
export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Apa itu Medicalsia?",
    answer:
      "Medicalsia adalah aplikasi manajemen klinik yang mengelola pendaftaran pasien, appointment, antrian, konsultasi dokter, farmasi, kasir, dan notifikasi otomatis ke pasien — semua dalam satu sistem.",
  },
  {
    question: "Apakah data pasien saya aman?",
    answer:
      "Setiap klinik punya database sendiri yang terpisah sepenuhnya dari klinik lain (bukan server bersama), dan kredensial sensitif (seperti akses WhatsApp dan email klinik) dienkripsi. Data rekam medis tersimpan sesuai kebutuhan retensi jangka panjang.",
  },
  {
    question: "Apakah server Medicalsia bisa diandalkan / sering down?",
    answer:
      "Infrastruktur didukung SLA uptime hingga 99,99% dari penyedia cloud yang kami pakai, dengan monitoring proaktif dan strategi backup rutin. Kami tidak menjanjikan “tanpa gangguan sama sekali” — tidak ada sistem yang bisa menjamin itu — tapi kami berkomitmen merespons cepat dan transparan kalau terjadi kendala.",
  },
  {
    question: "Saya sudah pakai aplikasi klinik lain, apakah bisa pindah ke Medicalsia?",
    answer:
      "Bisa. Kami bantu proses migrasinya lewat konsultasi awal, pemindahan data (sejauh sistem lama mengizinkan ekspor data), dan masa pendampingan sebelum klinik sepenuhnya pindah. Lihat detail di halaman Kenapa Pindah.",
  },
  {
    question: "Berapa biaya berlangganan Medicalsia?",
    answer:
      "Ada 3 paket: Starter, Professional, dan Enterprise/Multi-Cabang, dengan biaya setup sekali di awal dan biaya bulanan. Lihat rincian lengkap di halaman Harga.",
  },
  {
    question: "Apakah ada biaya tersembunyi?",
    answer:
      "Tidak. Biaya setup dan bulanan sudah mencakup hosting dan dukungan teknis. Biaya tambahan hanya muncul kalau klinik memilih layanan pihak ketiga sendiri (misal biaya WhatsApp gateway atau pulsa/kuota internet klinik), yang memang dikelola langsung oleh klinik, bukan lewat kami.",
  },
  {
    question: "Berapa lama proses migrasi/setup awal?",
    answer:
      "Tergantung volume data dan kompleksitas sistem lama yang dipakai — tim kami akan kasih estimasi waktu setelah sesi konsultasi awal.",
  },
  {
    question: "Fitur apa saja yang ada di Medicalsia?",
    answer:
      "Pendaftaran pasien & rekam medis, appointment & antrian (dengan layar display dan panggilan suara otomatis), konsultasi dokter & resep digital, farmasi, kasir dengan berbagai metode pembayaran, notifikasi WhatsApp & email otomatis, serta cetak kartu pasien/struk/rekam medis. Detail lengkap di halaman Fitur.",
  },
  {
    question: "Apakah notifikasi WhatsApp benar-benar otomatis?",
    answer:
      "Ya — konfirmasi booking, pengingat jadwal, konfirmasi pembayaran, dan notifikasi obat siap diambil semuanya terkirim otomatis dari nomor WhatsApp klinik sendiri, tanpa staf perlu kirim manual satu-satu.",
  },
  {
    question: "Apakah bisa terima pembayaran kartu/QRIS?",
    answer: "Bisa — kasir mendukung pencatatan pembayaran tunai, kartu debit/kredit (lewat mesin EDC), dan QRIS.",
  },
  {
    question: "Apakah bisa cetak kartu pasien, struk, dan rekam medis?",
    answer:
      "Bisa. Kartu pasien (dengan barcode untuk pencarian cepat), struk transaksi, dan dokumen rekam medis semuanya bisa dicetak langsung dari aplikasi.",
  },
  {
    question: "Apakah Medicalsia sudah sesuai regulasi Kementerian Kesehatan (Rekam Medis Elektronik)?",
    answer:
      "Kami merancang Medicalsia dengan mengacu pada ketentuan Rekam Medis Elektronik yang berlaku di Indonesia. Untuk kepastian kepatuhan penuh sesuai kebutuhan spesifik klinik Anda, kami sarankan diskusi langsung dengan tim kami — ini bukan pernyataan hukum resmi.",
  },
  {
    question: "Apakah Medicalsia terintegrasi dengan BPJS?",
    answer:
      "Belum untuk saat ini — fitur ini sedang dalam perencanaan pengembangan. Hubungi kami kalau klinik Anda membutuhkan ini secara prioritas.",
  },
  {
    question: "Apakah butuh koneksi internet terus-menerus?",
    answer:
      "Ya, karena data tersimpan di server cloud. Kami sarankan klinik menyiapkan koneksi internet cadangan untuk meminimalkan gangguan operasional.",
  },
  {
    question: "Apakah bisa diakses dari HP atau tablet?",
    answer:
      "Bisa, Medicalsia berbasis web sehingga bisa diakses lewat browser di komputer, tablet, maupun HP tanpa instalasi aplikasi tambahan.",
  },
  {
    question: "Perangkat apa saja yang dibutuhkan klinik?",
    answer:
      "Komputer/tablet dengan browser modern, koneksi internet, dan (opsional) printer untuk cetak kartu pasien/struk/dokumen, serta TV/monitor untuk layar antrian.",
  },
  {
    question: "Apakah ada pelatihan untuk staf klinik?",
    answer:
      "Ya, ada masa pendampingan saat onboarding supaya staf terbiasa memakai sistem sebelum benar-benar lepas dari sistem lama (kalau sedang migrasi) atau mulai operasional penuh.",
  },
  {
    question: "Apakah ada kontrak minimum berlangganan?",
    answer: "Detail kebijakan ini sedang kami siapkan. Silakan hubungi tim kami untuk informasi terkini.",
    pending: true,
  },
  {
    question: "Bagaimana kalau saya ingin berhenti berlangganan?",
    answer: "Kebijakan pembatalan sedang kami siapkan. Silakan hubungi tim kami untuk informasi terkini.",
    pending: true,
  },
  {
    question: "Bagaimana cara menghubungi dukungan teknis?",
    answer: "Lewat kontak yang tersedia di halaman Kontak — email/WhatsApp langsung ke tim kami.",
  },
];
