import { Check } from "lucide-react";
import { LinkButton } from "./Button";
import styles from "./PriceCard.module.scss";

export type PriceCardData = {
  name: string;
  fromLabel: string;
  price: string;
  priceAmount: number;
  priceSuffix?: string;
  setupNote?: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  highlighted?: boolean;
  tag?: string;
  primaryCta?: boolean;
};

export default function PriceCard({ data }: { data: PriceCardData }) {
  return (
    <div className={data.highlighted ? `${styles.priceStub} ${styles.pop}` : styles.priceStub}>
      {data.tag ? <span className={styles.tag}>{data.tag}</span> : null}
      <h3>{data.name}</h3>
      <div className={styles.from}>{data.fromLabel}</div>
      <div className={styles.price}>
        {data.price}
        {data.priceSuffix ? <span>{data.priceSuffix}</span> : null}
      </div>
      {data.setupNote ? <div className={styles.setup}>{data.setupNote}</div> : null}
      <ul>
        {data.features.map((feature) => (
          <li key={feature}>
            <Check size={15} />
            {feature}
          </li>
        ))}
      </ul>
      <LinkButton href={data.ctaHref} variant={data.primaryCta ? "primary" : "ghost"} block>
        {data.ctaLabel}
      </LinkButton>
    </div>
  );
}
