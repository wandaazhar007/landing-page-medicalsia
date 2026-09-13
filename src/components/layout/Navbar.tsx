"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Container from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import LogoIcon from "@/components/ui/LogoIcon";
import styles from "./Navbar.module.scss";

const MENU_LINKS = [
  { href: "/fitur", label: "Fitur" },
  { href: "/migrasi", label: "Kenapa Pindah" },
  { href: "/harga", label: "Harga" },
  { href: "/faq", label: "FAQ" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.site}>
      <Container className={styles.nav}>
        <Link href="/" className={styles.brand} onClick={() => setOpen(false)}>
          <LogoIcon size={34} />
          Medicalsia
        </Link>
        <nav className={styles.menu}>
          {MENU_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className={pathname === link.href ? styles.active : ""}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className={styles.navActions}>
          <Link href="/kontak" className={`${styles.ghostLink} ${styles.desktopOnly}`}>
            Hubungi Kami
          </Link>
          <LinkButton href="/kontak" size="sm" className={styles.desktopOnly}>
            Request Demo
          </LinkButton>
          <button
            className={styles.burger}
            aria-label="Buka menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </Container>
      {open ? (
        <div className={styles.mobilePanel}>
          {MENU_LINKS.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link href="/kontak" onClick={() => setOpen(false)}>
            Hubungi Kami
          </Link>
          <LinkButton href="/kontak" block>
            Request Demo
          </LinkButton>
        </div>
      ) : null}
    </header>
  );
}
