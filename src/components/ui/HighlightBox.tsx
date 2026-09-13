import { ReactNode } from "react";
import IconBox from "./IconBox";
import styles from "./HighlightBox.module.scss";

export default function HighlightBox({
  icon,
  title,
  children,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className={styles.highlightBox}>
      <IconBox size="lg" dark>
        {icon}
      </IconBox>
      <div>
        <h3>{title}</h3>
        <p>{children}</p>
      </div>
    </div>
  );
}
