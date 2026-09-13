import styles from "./StepList.module.scss";

export type Step = {
  title: string;
  description: string;
};

export default function StepList({ steps }: { steps: Step[] }) {
  return (
    <div className={styles.steps}>
      {steps.map((step, index) => (
        <div key={step.title} className={styles.step}>
          <div className={index === 0 ? `${styles.n} ${styles.first}` : styles.n}>{index + 1}</div>
          <h3>{step.title}</h3>
          <p>{step.description}</p>
        </div>
      ))}
    </div>
  );
}
