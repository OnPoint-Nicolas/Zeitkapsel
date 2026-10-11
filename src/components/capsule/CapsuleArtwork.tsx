import { useId } from "react";

/** Fotografische Ebenen; die Darstellung verändert keine gespeicherten Daten. */
export function CapsuleArtwork({
  open = false,
  dateLabel = "AEVUM",
}: {
  open?: boolean;
  dateLabel?: string;
}) {
  const id = useId().replaceAll(":", "");
  const asset = "/capsule/kapsel-bauteile.webp";
  return (
    <svg
      className="capsule-artwork"
      data-open={open}
      viewBox="0 0 1600 650"
      aria-hidden="true"
    >
      <defs>
        <clipPath id={id + "-exit"}>
          <rect x="1120" y="170" width="480" height="440" />
        </clipPath>
      </defs>
      <ellipse cx="780" cy="525" rx="590" ry="35" fill="black" opacity=".35" />
      <svg
        x="100"
        y="168"
        width="1100"
        height="385"
        viewBox="20 60 1490 522"
        preserveAspectRatio="none"
      >
        <image href={asset} width="1536" height="1024" />
      </svg>
      <text
        x="729"
        y="367"
        transform="rotate(-5 729 367)"
        textAnchor="middle"
        fill="#e9d3af"
        fontSize="24"
        fontFamily="Georgia, serif"
        letterSpacing="4"
      >
        {dateLabel}
      </text>
      <g clipPath={"url(#" + id + "-exit)"}>
        <g className="capsule-paper">
          <svg
            x="727"
            y="310"
            width="365"
            height="168"
            viewBox="535 620 715 330"
            preserveAspectRatio="none"
          >
            <image href={asset} width="1536" height="1024" />
          </svg>
        </g>
      </g>
      <g className="capsule-lid">
        <g transform="translate(2341 0) scale(-1 1)">
          <svg
            x="1078"
            y="174"
            width="185"
            height="323"
            viewBox="45 580 425 397"
            preserveAspectRatio="none"
          >
            <image href={asset} width="1536" height="1024" />
          </svg>
        </g>
      </g>
      <g className="capsule-seal">
        <svg
          x="1047"
          y="347"
          width="83"
          height="116"
          viewBox="1270 636 224 309"
          preserveAspectRatio="none"
        >
          <image href={asset} width="1536" height="1024" />
        </svg>
      </g>
    </svg>
  );
}
