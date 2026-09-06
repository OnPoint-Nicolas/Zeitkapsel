import type { ReactNode } from "react";
import styles from "./capsule-components.module.css";

type LeatherBadgeProps = {
  label?: string;
  size?: number;
  variant?: "classic" | "walnut" | "oxblood" | "saddle" | "aged";
  children: ReactNode;
};

export function LeatherBadge({
  label = "Aevum",
  size = 220,
  variant = "walnut",
  children,
}: LeatherBadgeProps) {
  return (
    <figure
      className={`${styles.leatherBadge} ${styles[`leather_${variant}`]}`}
      style={{ width: size, minHeight: size * 1.22 }}
    >
      <div className={styles.leatherInner}>
        <div className={styles.badgeContent}>{children}</div>
        <figcaption className={styles.leatherLabel}>{label}</figcaption>
      </div>
    </figure>
  );
}
