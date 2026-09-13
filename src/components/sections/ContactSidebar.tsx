import { Clock, Mail, MessageCircle } from "lucide-react";
import IconBox from "@/components/ui/IconBox";
import styles from "./ContactSidebar.module.scss";

const CONTACT_CHIPS = [
  { icon: <Mail size={18} />, label: "Email", value: "halo@medicalsia.id" },
  { icon: <MessageCircle size={18} />, label: "WhatsApp", value: "0812-xxxx-xxxx" },
  { icon: <Clock size={18} />, label: "Jam Respons", value: "Senin–Sabtu, 09.00–17.00" },
];

export default function ContactSidebar() {
  return (
    <div className={styles.contactSide}>
      {CONTACT_CHIPS.map((chip) => (
        <div key={chip.label} className={styles.contactChip}>
          <IconBox>{chip.icon}</IconBox>
          <div>
            <div className={styles.lbl}>{chip.label}</div>
            <div className={styles.val}>{chip.value}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
