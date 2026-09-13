import { ReactNode } from "react";
import styles from "./SectionHead.module.scss";

export default function SectionHead({
  title,
  children,
  center,
}: {
  title: ReactNode;
  children?: ReactNode;
  center?: boolean;
}) {
  return (
    <div className={center ? `${styles.head} ${styles.center}` : styles.head}>
      <h2>{title}</h2>
      {children ? <p>{children}</p> : null}
    </div>
  );
}
