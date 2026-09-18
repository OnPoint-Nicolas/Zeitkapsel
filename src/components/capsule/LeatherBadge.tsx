import type { ReactNode } from "react";
import styles from "./capsule-components.module.css";

type LeatherBadgeProps = {
  label?: string;
  size?: number;
  variant?: "classic" | "walnut" | "oxblood" | "saddle" | "aged";
  children: ReactNode;
};

function createStitchPath(width: number, height: number) {
  const inset = 10;
  const radius = 16;
  const right = width - inset;
  const bottom = height - inset;
  const horizontalLength = width - 2 * (inset + radius);
  const verticalLength = height - 2 * (inset + radius);

  const straight = (startX: number, startY: number, angle: number, length: number) => ({
    length,
    point: (distance: number) => ({
      x: startX + Math.cos(angle) * distance,
      y: startY + Math.sin(angle) * distance,
      angle,
    }),
  });

  const corner = (centerX: number, centerY: number, startAngle: number) => ({
    length: (Math.PI * radius) / 2,
    point: (distance: number) => {
      const angle = startAngle + distance / radius;
      return {
        x: centerX + Math.cos(angle) * radius,
        y: centerY + Math.sin(angle) * radius,
        angle: angle + Math.PI / 2,
      };
    },
  });

  const sections = [
    straight(inset + radius, inset, 0, horizontalLength),
    corner(right - radius, inset + radius, -Math.PI / 2),
    straight(right, inset + radius, Math.PI / 2, verticalLength),
    corner(right - radius, bottom - radius, 0),
    straight(right - radius, bottom, Math.PI, horizontalLength),
    corner(inset + radius, bottom - radius, Math.PI / 2),
    straight(inset, bottom - radius, -Math.PI / 2, verticalLength),
    corner(inset + radius, inset + radius, Math.PI),
  ];

  const perimeter = sections.reduce((total, section) => total + section.length, 0);
  const stitchCount = Math.round(perimeter / 7.4);
  const spacing = perimeter / stitchCount;

  return Array.from({ length: stitchCount }, (_, index) => {
    let distance = (index + 0.5) * spacing + Math.sin(index * 1.71) * 0.2;
    let section = sections[0];
    for (const candidate of sections) {
      section = candidate;
      if (distance <= candidate.length) break;
      distance -= candidate.length;
    }

    const point = section.point(distance);
    const halfLength = 2.15 + Math.sin(index * 2.39) * 0.23;
    const slant = 0.4 + Math.sin(index * 1.13) * 0.12;
    const lift = -0.55 + Math.cos(index * 1.87) * 0.13;
    const coordinates = (along: number, across: number) => {
      const x = point.x + Math.cos(point.angle) * along - Math.sin(point.angle) * across;
      const y = point.y + Math.sin(point.angle) * along + Math.cos(point.angle) * across;
      return `${x.toFixed(2)} ${y.toFixed(2)}`;
    };

    return `M ${coordinates(-halfLength, -slant)} Q ${coordinates(0, lift)} ${coordinates(halfLength, slant)}`;
  }).join(" ");
}

export function LeatherBadge({
  label = "Aevum",
  size = 220,
  variant = "walnut",
  children,
}: LeatherBadgeProps) {
  const badgeHeight = size * 1.22;
  const stitches = createStitchPath(size, badgeHeight);

  return (
    <figure
      className={`${styles.leatherBadge} ${styles[`leather_${variant}`]}`}
      style={{ width: size, minHeight: badgeHeight }}
    >
      <svg
        className={styles.leatherStitching}
        viewBox={`0 0 ${size} ${badgeHeight}`}
        preserveAspectRatio="none"
        fill="none"
        strokeLinecap="round"
        aria-hidden="true"
        focusable="false"
      >
        <path d={stitches} className={styles.stitchShadow} transform="translate(0.25 0.65)" />
        <path d={stitches} className={styles.stitchThread} />
        <path
          d={stitches}
          className={styles.stitchHighlight}
          transform="translate(-0.2 -0.4)"
        />
      </svg>
      <div className={styles.leatherInner}>
        <div className={styles.badgeContent}>{children}</div>
        <figcaption className={styles.leatherLabel}>{label}</figcaption>
      </div>
    </figure>
  );
}
