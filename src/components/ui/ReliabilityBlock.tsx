import { ReactNode } from "react";
import styles from "./ReliabilityBlock.module.scss";

export default function ReliabilityBlock({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className={styles.reliabBlock}>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <div className={styles.statBadge}>
        <div className={styles.num}>99,99%</div>
        <div className={styles.cap}>SLA uptime infrastruktur</div>
      </div>
    </div>
  );
}
