import { Clock, Mail, MessageCircle } from "lucide-react";
import IconBox from "@/components/ui/IconBox";
import { getWhatsappHref } from "@/lib/whatsapp";
import styles from "./ContactSidebar.module.scss";

export default function ContactSidebar() {
  const whatsappNumber = process.env.WHATSAPP_NUMBER ?? "";
  const whatsappHref = getWhatsappHref();

  const chips = [
    { icon: <Mail size={18} />, label: "Email", value: "cs@medicalsia.com" },
    { icon: <MessageCircle size={18} />, label: "WhatsApp", value: `+${whatsappNumber}`, href: whatsappHref },
    { icon: <Clock size={18} />, label: "Jam Respons", value: "Senin–Sabtu, 08.00–04.00" },
  ];

  return (
    <div className={styles.contactSide}>
      {chips.map((chip) =>
        chip.href ? (
          <a key={chip.label} href={chip.href} target="_blank" rel="noopener noreferrer" className={styles.contactChip}>
            <IconBox>{chip.icon}</IconBox>
            <div>
              <div className={styles.lbl}>{chip.label}</div>
              <div className={styles.val}>{chip.value}</div>
            </div>
          </a>
        ) : (
          <div key={chip.label} className={styles.contactChip}>
            <IconBox>{chip.icon}</IconBox>
            <div>
              <div className={styles.lbl}>{chip.label}</div>
              <div className={styles.val}>{chip.value}</div>
            </div>
          </div>
        )
      )}
    </div>
  );
}
