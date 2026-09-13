import styles from "./CompareTable.module.scss";

export type CompareRow = {
  old: string;
  next: string;
};

export default function CompareTable({ rows }: { rows: CompareRow[] }) {
  return (
    <div className={styles.compare}>
      <div className={`${styles.col} ${styles.old}`}>
        <h4>Sistem Klinik Lama (Umumnya)</h4>
        {rows.map((row) => (
          <div key={row.old} className={styles.row}>
            {row.old}
          </div>
        ))}
      </div>
      <div className={`${styles.col} ${styles.next}`}>
        <h4>Di Medicalsia</h4>
        {rows.map((row) => (
          <div key={row.next} className={styles.row}>
            {row.next}
          </div>
        ))}
      </div>
    </div>
  );
}
