import type { ReactNode } from "react";
import styles from "./capsule-components.module.css";

type MetalTone = "copper" | "silver" | "gold" | "bronze";
type MetalFinish = "orbital" | "overlap" | "sunburst";
type StatusVariant = "sealed" | "soon" | "open";

type CapsuleStatusProps = {
  variant: StatusVariant;
  children: ReactNode;
};

export function CapsuleStatus({ variant, children }: CapsuleStatusProps) {
  return (
    <span className={`${styles.status} ${styles[`status_${variant}`]}`}>
      {children}
    </span>
  );
}

type MetalCardProps = {
  tone?: MetalTone;
  finish?: MetalFinish;
  icon?: ReactNode;
  status?: ReactNode;
  title?: string;
  description?: string;
  meta?: string;
  kind?: string;
};

export function MetalCard({
  tone = "silver",
  finish = "orbital",
  icon,
  status,
  title,
  description,
  meta,
  kind,
}: MetalCardProps) {
  return (
    <article className={`${styles.metalCard} ${styles[`metal_${tone}`]} ${styles[`finish_${finish}`]}`}>
      <div className={styles.metalTopline}>
        <span className={styles.metalIcon}>{icon}</span>
        {status}
      </div>

      {(title || description) && (
        <div className={styles.metalBody}>
          {title && <h2>{title}</h2>}
          {description && <p>{description}</p>}
        </div>
      )}

      {(meta || kind) && (
        <footer className={styles.metalFooter}>
          {meta && <span>{meta}</span>}
          {kind && <strong>{kind}</strong>}
        </footer>
      )}
    </article>
  );
}
