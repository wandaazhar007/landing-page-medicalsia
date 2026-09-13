import { ReactNode } from "react";
import styles from "./IconBox.module.scss";

export default function IconBox({
  children,
  size = "md",
  dark,
}: {
  children: ReactNode;
  size?: "md" | "lg";
  dark?: boolean;
}) {
  const classes = [styles.iconBox, size === "lg" ? styles.lg : "", dark ? styles.dark : ""].filter(Boolean).join(" ");
  return <div className={classes}>{children}</div>;
}
