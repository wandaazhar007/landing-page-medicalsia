import { ReactNode } from "react";
import Section from "./Section";
import { LinkButton } from "./Button";
import styles from "./CtaBand.module.scss";

export default function CtaBand({
  title,
  children,
  ctaLabel,
  ctaHref,
}: {
  title: ReactNode;
  children: ReactNode;
  ctaLabel: string;
  ctaHref: string;
}) {
  return (
    <Section>
      <div className={styles.ctaBand}>
        <div className={styles.inner}>
          <h2>{title}</h2>
          <p>{children}</p>
          <LinkButton href={ctaHref} className={styles.ctaBtn}>
            {ctaLabel}
          </LinkButton>
        </div>
      </div>
    </Section>
  );
}
