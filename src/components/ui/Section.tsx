import { ReactNode } from "react";
import Container from "./Container";
import styles from "./Section.module.scss";

export default function Section({
  children,
  className,
  bordered,
  id,
}: {
  children: ReactNode;
  className?: string;
  bordered?: boolean;
  id?: string;
}) {
  const classes = [styles.section, bordered ? styles.bordered : "", className ?? ""].filter(Boolean).join(" ");
  return (
    <section id={id} className={classes}>
      <Container>{children}</Container>
    </section>
  );
}
