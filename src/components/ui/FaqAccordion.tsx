"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import styles from "./FaqAccordion.module.scss";

export type FaqItem = {
  question: string;
  answer: string;
  pending?: boolean;
};

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={styles.faqList}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.question}
            className={[styles.faqItem, isOpen ? styles.open : "", item.pending ? styles.pending : ""]
              .filter(Boolean)
              .join(" ")}
          >
            <button
              type="button"
              className={styles.faqQ}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
            >
              {item.question}
              <ChevronDown size={18} className={styles.chevron} />
            </button>
            <div className={styles.faqA} style={{ maxHeight: isOpen ? "40rem" : 0 }}>
              <p>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
