export const BRAND_NAME = "Aevum";

type AevumMarkProps = {
  size?: number;
  className?: string;
};

export function AevumMark({ size = 48, className = "" }: AevumMarkProps) {
  const teeth = Array.from({ length: 12 }, (_, index) => index * 30);

  return (
    <span
      aria-label="Aevum-Zeitkapsel-Symbol"
      className={`relative inline-grid shrink-0 place-items-center rounded-full border border-[#f3d69b]/70 bg-[#131c16] shadow-[inset_0_0_0_3px_rgba(31,17,14,0.68),inset_0_0_0_5px_rgba(240,208,138,0.24),0_8px_18px_rgba(0,0,0,0.45)] ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        aria-hidden="true"
        className="h-[88%] w-[88%] drop-shadow-[0_3px_2px_rgba(0,0,0,0.7)]"
        viewBox="0 0 100 100"
      >
        <g fill="#b98750" stroke="#2a1712" strokeWidth="1.6">
          {teeth.map((angle) => (
            <rect
              key={angle}
              height="14"
              rx="1.2"
              transform={`rotate(${angle} 50 50)`}
              width="7"
              x="46.5"
              y="3"
            />
          ))}
        </g>
        <circle
          cx="50"
          cy="50"
          fill="#6e4934"
          r="39"
          stroke="#edcf92"
          strokeWidth="2"
        />
        <circle
          cx="50"
          cy="50"
          fill="none"
          r="33"
          stroke="#2a1712"
          strokeWidth="5"
        />
        <circle
          cx="50"
          cy="50"
          fill="#201514"
          r="28.5"
          stroke="#c59458"
          strokeWidth="2"
        />
        <path
          d="M50 20v7M50 73v7M20 50h7M73 50h7"
          stroke="#eed29a"
          strokeLinecap="round"
          strokeWidth="2"
        />
        <text
          fill="#efd5a2"
          fontFamily="Georgia, serif"
          fontSize="7"
          textAnchor="middle"
          x="50"
          y="32"
        >
          XII
        </text>
        <g
          fill="none"
          stroke="#e0b977"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M38 36h24M38 64h24" strokeWidth="3.2" />
          <path
            d="M41 39c0 8 8 9 9 11-1 2-9 3-9 11M59 39c0 8-8 9-9 11 1 2 9 3 9 11"
            strokeWidth="2.5"
          />
          <path d="M42 40h16M43 60h14" stroke="#8d5d3d" strokeWidth="1.4" />
          <path
            d="M32 39l-5 11 5 11M68 39l5 11-5 11"
            stroke="#9b6b45"
            strokeWidth="1.8"
          />
        </g>
        <path d="M45 57h10l-5-4z" fill="#d7a95f" />
      </svg>
    </span>
  );
}

export function AevumLogo() {
  return (
    <span className="inline-flex items-center gap-3">
      <AevumMark size={48} />
      <span>
        <span className="block font-serif text-2xl font-semibold leading-none tracking-wide text-[#f5e5c7]">
          {BRAND_NAME}
        </span>
      </span>
    </span>
  );
}

export function AevumSeal({ size = 120, className = "" }: AevumMarkProps) {
  const teeth = Array.from({ length: 16 }, (_, index) => index * 22.5);

  return (
    <span
      aria-label="Alternative Aevum-Medaille"
      className={`relative inline-grid shrink-0 place-items-center rounded-full bg-[#131c16] shadow-[inset_0_0_0_2px_#e1be7c,inset_0_0_0_6px_rgba(20,18,20,0.72),0_12px_25px_rgba(0,0,0,0.55)] ${className}`}
      style={{ width: size, height: size }}
    >
      <svg aria-hidden="true" className="h-[92%] w-[92%]" viewBox="0 0 120 120">
        <g fill="#725036" stroke="#171116" strokeWidth="1.5">
          {teeth.map((angle) => (
            <path
              d="M56 4h8l2 10H54z"
              key={angle}
              transform={`rotate(${angle} 60 60)`}
            />
          ))}
        </g>
        <circle
          cx="60"
          cy="60"
          fill="#777982"
          r="46"
          stroke="#e0bd78"
          strokeWidth="2.4"
        />
        <circle
          cx="60"
          cy="60"
          fill="none"
          r="40"
          stroke="#2b2020"
          strokeWidth="7"
        />
        <circle
          cx="60"
          cy="60"
          fill="#241818"
          r="34"
          stroke="#c99554"
          strokeWidth="3"
        />
        <path
          d="M33 44l-8 16 8 16M87 44l8 16-8 16"
          fill="none"
          stroke="#9f7148"
          strokeWidth="3"
        />
        <text
          fill="#f0d59a"
          fontFamily="Georgia, serif"
          fontSize="8"
          textAnchor="middle"
          x="60"
          y="38"
        >
          XII
        </text>
        <g fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M45 43h30M45 78h30" stroke="#e7c37f" strokeWidth="4" />
          <path
            d="M49 47c0 10 9 11 11 14-2 3-11 4-11 13M71 47c0 10-9 11-11 14 2 3 11 4 11 13"
            stroke="#d5aa67"
            strokeWidth="3"
          />
          <path d="M50 48h20M51 73h18" stroke="#6f4930" strokeWidth="2" />
        </g>
        <path d="M54 69h12l-6-5z" fill="#e1b56c" />
        <circle
          cx="60"
          cy="60"
          fill="none"
          r="29"
          stroke="rgba(255,255,255,0.18)"
          strokeDasharray="2 4"
        />
      </svg>
    </span>
  );
}
