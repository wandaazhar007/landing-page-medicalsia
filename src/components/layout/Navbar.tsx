"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import {
  ArrowLeftRight,
  CalendarPlus,
  HelpCircle,
  LayoutGrid,
  Menu,
  Phone,
  Tag,
  X,
} from "lucide-react";
import Container from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import LogoIcon from "@/components/ui/LogoIcon";
import styles from "./Navbar.module.scss";

const MENU_LINKS = [
  { href: "/fitur", label: "Fitur", icon: LayoutGrid },
  { href: "/migrasi", label: "Kenapa Pindah", icon: ArrowLeftRight },
  { href: "/harga", label: "Harga", icon: Tag },
  { href: "/faq", label: "FAQ", icon: HelpCircle },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  // Portal target (document.body) only exists on the client — this avoids a
  // server/client hydration mismatch without a setState-in-effect.
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const sidebar = (
    <>
      <div
        className={`${styles.backdrop} ${open ? styles.backdropOpen : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
      <aside className={`${styles.sidebar} ${open ? styles.sidebarOpen : ""}`} aria-hidden={!open}>
        <div className={styles.sidebarHead}>
          <Link href="/" className={styles.brand} onClick={() => setOpen(false)}>
            <LogoIcon size={30} />
            Medicalsia
          </Link>
          <button className={styles.closeBtn} aria-label="Tutup menu" onClick={() => setOpen(false)}>
            <X size={20} />
          </button>
        </div>
        <nav className={styles.sidebarNav}>
          {MENU_LINKS.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={pathname === link.href ? styles.sidebarActive : ""}
                onClick={() => setOpen(false)}
              >
                <Icon size={18} />
                {link.label}
              </Link>
            );
          })}
          <Link href="/kontak" onClick={() => setOpen(false)}>
            <Phone size={18} />
            Hubungi Kami
          </Link>
        </nav>
        <div className={styles.sidebarFooter}>
          <LinkButton href="/kontak" block className={styles.sidebarCta}>
            <CalendarPlus size={18} />
            Request Demo
          </LinkButton>
        </div>
      </aside>
    </>
  );

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
            <Menu size={20} />
          </button>
        </div>
      </Container>
      {/* Portalled to <body> so the header's backdrop-filter never turns it into
          the containing block for these position:fixed elements. */}
      {mounted ? createPortal(sidebar, document.body) : null}
    </header>
  );
}
