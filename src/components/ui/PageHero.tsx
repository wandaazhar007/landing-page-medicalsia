import { ReactNode } from "react";
import Container from "./Container";
import styles from "./PageHero.module.scss";

export default function PageHero({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
}) {
  return (
    <section className={styles.pageHero}>
      <Container>
        <span className={styles.eyebrow}>{eyebrow}</span>
        <h1>{title}</h1>
        {lede ? <p className={styles.lede}>{lede}</p> : null}
      </Container>
    </section>
  );
}
