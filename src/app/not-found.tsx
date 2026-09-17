import Link from "next/link";
import { Home, MessageCircleQuestion } from "lucide-react";
import Container from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import styles from "./not-found.module.scss";

const QUICK_LINKS = [
  { href: "/fitur", label: "Fitur" },
  { href: "/harga", label: "Harga" },
  { href: "/migrasi", label: "Kenapa Pindah" },
  { href: "/faq", label: "FAQ" },
];

export default function NotFound() {
  return (
    <section className={styles.wrap}>
      <Container className={styles.grid}>
        <div>
          <span className={styles.eyebrow}>Error 404</span>
          <h1 className={styles.title}>
            Nomor antrian ini
            <br />
            nggak <em>ketemu</em>.
          </h1>
          <p className={styles.lede}>
            Halaman yang Anda cari mungkin sudah dipindah, dihapus, atau alamatnya salah ketik. Coba kembali ke
            beranda, atau langsung ke salah satu halaman populer di bawah.
          </p>
          <div className={styles.ctas}>
            <LinkButton href="/">
              <Home size={18} />
              Kembali ke Beranda
            </LinkButton>
            <LinkButton href="/kontak" variant="ghost">
              <MessageCircleQuestion size={18} />
              Hubungi Kami
            </LinkButton>
          </div>
          <div className={styles.quickLinks}>
            <span>Mungkin yang Anda cari:</span>
            <nav>
              {QUICK_LINKS.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
        <div className={styles.illustration}>
          <div className={styles.ticket}>
            <div className={styles.label}>Nomor Antrian</div>
            <div className={styles.num}>404</div>
            <div className={styles.sub}>Halaman tidak ditemukan di sistem kami</div>
          </div>
        </div>
      </Container>
    </section>
  );
}
