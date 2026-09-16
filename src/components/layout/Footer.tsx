import Link from "next/link";
import Container from "@/components/ui/Container";
import LogoIcon from "@/components/ui/LogoIcon";
import styles from "./Footer.module.scss";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.site}>
      <Container>
        <div className={styles.footGrid}>
          <div className={styles.footBrand}>
            <div className={styles.brand}>
              <LogoIcon variant="dark" size={34} />
              Medicalsia
            </div>
            <p>Aplikasi manajemen klinik modern untuk Indonesia — satu server, satu database, khusus untuk klinik Anda sendiri.</p>
          </div>
          <div>
            <h4>Produk</h4>
            <ul>
              <li>
                <Link href="/fitur">Fitur</Link>
              </li>
              <li>
                <Link href="/migrasi">Kenapa Pindah</Link>
              </li>
              <li>
                <Link href="/harga">Harga</Link>
              </li>
              <li>
                <Link href="/faq">FAQ</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Perusahaan</h4>
            <ul>
              <li>
                <Link href="/tentang">Tentang Kami</Link>
              </li>
              <li>
                <Link href="/kontak">Kontak</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Hubungi Kami</h4>
            <ul>
              <li>
                <a href="mailto:cs@medicalsia.com">cs@medicalsia.com</a>
              </li>
              <li>
                <Link href="/kontak">WhatsApp Admin</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.footBottom}>
          <span>© {year} Medicalsia. Seluruh hak cipta dilindungi.</span>
          <div className={styles.legalLinks}>
            <Link href="/kebijakan-privasi">Kebijakan Privasi</Link>
            <Link href="/syarat-ketentuan">Syarat &amp; Ketentuan</Link>
            <Link href="/kebijakan-refund">Kebijakan Refund</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
