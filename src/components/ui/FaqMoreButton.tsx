import { ArrowRight } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";
import styles from "./FaqMoreButton.module.scss";

export default function FaqMoreButton() {
  return (
    <div className={styles.wrap}>
      <LinkButton href="/faq" variant="ghost">
        Lihat Semua Pertanyaan
        <ArrowRight size={16} />
      </LinkButton>
    </div>
  );
}
