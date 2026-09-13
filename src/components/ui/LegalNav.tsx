import Link from "next/link";
import styles from "./LegalNav.module.scss";

const LEGAL_LINKS = [
  { href: "/kebijakan-privasi", label: "Kebijakan Privasi" },
  { href: "/syarat-ketentuan", label: "Syarat & Ketentuan" },
  { href: "/kebijakan-refund", label: "Kebijakan Refund" },
];

export default function LegalNav({ active }: { active: string }) {
  return (
    <div className={styles.legalNav}>
      {LEGAL_LINKS.map((link) => (
        <Link key={link.href} href={link.href} className={link.href === active ? styles.active : ""}>
          {link.label}
        </Link>
      ))}
    </div>
  );
}
