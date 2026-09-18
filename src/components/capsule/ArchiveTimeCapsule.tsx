"use client";

import { useEffect, useId, useState } from "react";
import { LockKeyhole, RotateCcw } from "lucide-react";
import styles from "./archive-time-capsule.module.css";

type Phase = "closed" | "opening" | "open" | "closing";

type ArchiveTimeCapsuleProps = {
  memory?: string;
  locked?: boolean;
  unlockAt?: string;
};

const phaseLabels: Record<Phase, string> = {
  closed: "Versiegelt",
  opening: "Die Kapsel öffnet sich …",
  open: "Eine Erinnerung ist zurück.",
  closing: "Die Erinnerung wird verstaut …",
};

// The animation presents content; it does not grant access to a stored capsule.
export function ArchiveTimeCapsule({
  memory = "Manche Augenblicke sind zu schön, um sie zu vergessen.",
  locked = false,
  unlockAt,
}: ArchiveTimeCapsuleProps) {
  const [phase, setPhase] = useState<Phase>("closed");
  const id = useId().replaceAll(":", "");
  const contentId = `${id}-memory`;
  const isOpen = phase === "open" || phase === "opening";
  const isMoving = phase === "opening" || phase === "closing";
  const paint = (name: string) => `url(#${id}-${name})`;

  useEffect(() => {
    if (phase !== "opening" && phase !== "closing") return;

    const timer = window.setTimeout(() => {
      setPhase(phase === "opening" ? "open" : "closed");
    }, 1900);

    return () => window.clearTimeout(timer);
  }, [phase]);

  function toggleCapsule() {
    if (isMoving || locked) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setPhase(reduceMotion ? (isOpen ? "closed" : "open") : (isOpen ? "closing" : "opening"));
  }

  return (
    <section className={styles.component} aria-label="Zeitkapsel – zweite Variante" data-open={isOpen} data-phase={phase}>
      <div className={styles.scene}>
        <span className={styles.edition} aria-hidden="true">II</span>
        <svg className={styles.artwork} viewBox="0 0 800 660" fill="none" aria-hidden="true">
          <defs>
            <linearGradient id={`${id}-titanium`} x1="250" y1="0" x2="550" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#383d40" /><stop offset=".08" stopColor="#747b7c" /><stop offset=".18" stopColor="#bec4bf" />
              <stop offset=".3" stopColor="#e2e4d9" /><stop offset=".44" stopColor="#9ba4a0" /><stop offset=".66" stopColor="#626c6b" />
              <stop offset=".82" stopColor="#9ba39e" /><stop offset=".95" stopColor="#444e4e" /><stop offset="1" stopColor="#252d30" />
            </linearGradient>
            <linearGradient id={`${id}-brass`} x1="244" y1="0" x2="556" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#473a29" /><stop offset=".16" stopColor="#b49861" /><stop offset=".29" stopColor="#e5d3a0" />
              <stop offset=".48" stopColor="#9c8557" /><stop offset=".7" stopColor="#716045" /><stop offset=".85" stopColor="#c4ae77" /><stop offset="1" stopColor="#53452e" />
            </linearGradient>
            <radialGradient id={`${id}-cap`} cx=".34" cy=".23" r=".87">
              <stop stopColor="#d7d9c8" /><stop offset=".37" stopColor="#a4aea5" /><stop offset=".66" stopColor="#596866" /><stop offset="1" stopColor="#293736" />
            </radialGradient>
            <radialGradient id={`${id}-velvet`} cx=".48" cy=".32" r=".75"><stop stopColor="#413038" /><stop offset=".55" stopColor="#201c23" /><stop offset="1" stopColor="#0b1015" /></radialGradient>
            <radialGradient id={`${id}-light`}><stop stopColor="#ddc28f" stopOpacity=".36" /><stop offset="1" stopColor="#ddc28f" stopOpacity="0" /></radialGradient>
            <linearGradient id={`${id}-leather`} x1="270" y1="0" x2="530" y2="0" gradientUnits="userSpaceOnUse"><stop stopColor="#201b18" /><stop offset=".24" stopColor="#634739" /><stop offset=".52" stopColor="#453329" /><stop offset=".83" stopColor="#392a23" /><stop offset="1" stopColor="#171717" /></linearGradient>
            <linearGradient id={`${id}-paper`} x1="0" y1="0" x2="1" y2="1"><stop stopColor="#f2e6cc" /><stop offset="1" stopColor="#bca785" /></linearGradient>
            <linearGradient id={`${id}-sky`} x1="0" y1="0" x2="0" y2="1"><stop stopColor="#9caeb0" /><stop offset=".5" stopColor="#edd0a2" /><stop offset="1" stopColor="#827c68" /></linearGradient>
            <filter id={`${id}-grain`} x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency=".62 .87" numOctaves="3" seed="8" /><feColorMatrix type="saturate" values="0" /><feComponentTransfer><feFuncA type="linear" slope=".16" /></feComponentTransfer><feBlend in="SourceGraphic" mode="soft-light" /></filter>
            <filter id={`${id}-metalGrain`} x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency=".06 .85" numOctaves="2" seed="3" /><feColorMatrix type="saturate" values="0" /><feComponentTransfer><feFuncA type="linear" slope=".09" /></feComponentTransfer><feBlend in="SourceGraphic" mode="soft-light" /></filter>
            <filter id={`${id}-shadow`} x="-50%" y="-100%" width="200%" height="300%"><feGaussianBlur stdDeviation="12" /></filter>
            <pattern id={`${id}-brushing`} width="7" height="4" patternUnits="userSpaceOnUse"><path d="M0 .5H7M2 2.5H5" stroke="#f5e8ca" strokeOpacity=".065" strokeWidth=".5" /></pattern>
          </defs>

          <ellipse cx="400" cy="567" rx="165" ry="27" fill="#000" opacity=".55" filter={paint("shadow")} />
          <ellipse className={styles.ambientLight} cx="400" cy="349" rx="260" ry="235" fill={paint("light")} />

          {/* Back rim, contents and front shell are separate layers. */}
          <path d="M250 305C250 247 550 247 550 305V515C550 572 250 572 250 515Z" fill={paint("titanium")} />
          <ellipse cx="400" cy="305" rx="150" ry="45" fill={paint("brass")} stroke="#cfbd8e" strokeWidth="1.5" />
          <ellipse cx="400" cy="305" rx="136" ry="35" fill={paint("velvet")} stroke="#282b28" strokeWidth="4" />
          <ellipse cx="400" cy="309" rx="123" ry="25" fill="#111419" />
          <ellipse className={styles.innerLight} cx="400" cy="310" rx="117" ry="28" fill={paint("light")} />

          <g className={styles.keepsakes}>
            <g className={styles.photograph}>
              <path d="M398 286L507 299L490 440L382 428Z" fill="#171c20" opacity=".25" transform="translate(4 7)" />
              <path d="M398 286L507 299L490 440L382 428Z" fill={paint("paper")} />
              <g transform="translate(406 297) rotate(7)">
                <path d="M0 0H88V104H0Z" fill={paint("sky")} />
                <circle cx="63" cy="35" r="14" fill="#f9d8a6" opacity=".78" />
                <path d="M0 63Q24 51 49 65T88 65V104H0Z" fill="#657d7b" />
                <path d="M0 81L16 56L35 72L58 63L88 82V104H0Z" fill="#343f40" />
                <path d="M49 76L59 72L70 75M38 84L52 81L67 84" stroke="#bca982" strokeOpacity=".65" />
              </g>
            </g>
            <g className={styles.letter}>
              <rect x="311" y="302" width="138" height="175" rx="3" fill="#000" opacity=".16" transform="rotate(-9 380 390) translate(3 5)" />
              <g transform="rotate(-9 380 390)">
                <rect x="311" y="302" width="138" height="175" rx="3" fill={paint("paper")} />
                <path d="M311 345L380 394L449 345" stroke="#978566" strokeOpacity=".4" />
                <path d="M311 477L367 389M449 477L394 389" stroke="#aa9673" strokeOpacity=".5" />
                <path d="M311 345L380 384L449 345Z" fill="#e9d8b8" />
                <circle cx="380" cy="389" r="16" fill="#664339" stroke="#9d7050" strokeWidth="2" />
                <path d="M375 381H385M375 397H385M377 382C377 386 383 391 383 396M383 382C383 386 377 391 377 396" stroke="#c39a72" strokeWidth="1.4" />
              </g>
            </g>
          </g>

          {/* The opaque front keeps packed objects inside the capsule. */}
          <path d="M250 305C250 365 550 365 550 305V515C550 575 250 575 250 515Z" fill={paint("titanium")} filter={paint("metalGrain")} />
          <path d="M250 305C250 365 550 365 550 305V515C550 575 250 575 250 515Z" fill={paint("brushing")} />
          <path d="M253 314C266 365 536 365 547 314" stroke="#eef0d8" strokeOpacity=".5" strokeWidth="1.5" />
          <path d="M252 323C277 376 529 376 548 323" stroke="#0c181c" strokeOpacity=".47" strokeWidth="3" />
          <path d="M252 506C261 562 540 562 548 506V520C535 577 265 577 252 520Z" fill={paint("brass")} />
          <path d="M256 522C284 568 524 568 546 522" stroke="#eddbad" strokeOpacity=".42" />
          <path d="M262 364C289 405 516 405 538 364V458C515 506 287 506 262 458Z" fill={paint("leather")} filter={paint("grain")} />
          <path d="M268 374C310 414 504 414 532 374M268 454C303 495 503 495 532 454" stroke="#be9570" strokeOpacity=".38" strokeWidth="1.5" strokeDasharray="3 5" strokeLinecap="round" />
          <path d="M261 365C286 409 520 409 539 365" stroke="#201a18" strokeWidth="3" />
          <path d="M262 458C289 506 515 506 538 458" stroke="#a37e54" strokeOpacity=".35" />

          <g transform="translate(400 444)">
            <circle r="40" fill="#131c1e" opacity=".55" transform="translate(0 3)" />
            <circle r="38" fill="#97835c" stroke="#ddc797" strokeWidth="1.5" />
            <circle r="33" fill="#252b29" stroke="#3f382b" strokeWidth="3" />
            {Array.from({ length: 12 }, (_, index) => <path key={index} d="M0-29V-25" stroke="#b59d70" transform={`rotate(${index * 30})`} />)}
            <circle r="21" fill="#47392a" stroke="#ad9264" />
            <path d="M-10-13H10M-10 13H10M-7-11C-7-5 7 5 7 11M7-11C7-5-7 5-7 11" stroke="#e3c792" strokeWidth="2.1" strokeLinecap="round" />
            <path d="M-5 9H5L0 4Z" fill="#d4b579" />
          </g>
          <text x="400" y="534" textAnchor="middle" fill="#353c37" fontFamily="Georgia, serif" fontSize="12" letterSpacing="5">AEVUM</text>

          <g className={styles.cap}>
            <ellipse cx="400" cy="299" rx="154" ry="36" fill="#080e13" opacity=".55" className={styles.capShadow} />
            <path d="M244 254C244 198 556 198 556 254V298C556 357 244 357 244 298Z" fill={paint("titanium")} filter={paint("metalGrain")} />
            <path d="M244 288C256 344 544 344 556 288V299C542 354 258 354 244 299Z" fill={paint("brass")} />
            <path d="M250 298C279 345 527 345 551 298" stroke="#e7d3a0" strokeOpacity=".55" />
            <ellipse cx="400" cy="254" rx="156" ry="46" fill={paint("cap")} stroke="#ddd9bb" strokeWidth="1.5" />
            {Array.from({ length: 15 }, (_, index) => <ellipse key={index} cx="400" cy="254" rx={146 - index * 7.5} ry={41 - index * 2} stroke={index % 3 === 0 ? "#f6ead3" : "#1d292a"} strokeOpacity={index % 3 === 0 ? ".085" : ".13"} strokeWidth=".6" />)}
            <ellipse cx="400" cy="254" rx="132" ry="33" stroke="#0e1c1c" strokeOpacity=".6" />
            <ellipse cx="400" cy="253" rx="130" ry="32" stroke="#e0d1ac" strokeOpacity=".25" />
            <g className={styles.dial}>
              <ellipse cx="400" cy="253" rx="45" ry="13" fill="#4a5148" stroke="#b4a57c" />
              <ellipse cx="400" cy="250" rx="34" ry="9" fill="#9b9f89" stroke="#d1c5a1" strokeOpacity=".55" />
              <path d="M374 250H426" stroke="#38433e" strokeWidth="3" strokeLinecap="round" />
              <path d="M375 248.5H425" stroke="#e1d9b8" strokeOpacity=".6" />
            </g>
          </g>

          <g className={styles.leftLatch}>
            <path d="M272 315L290 323V360L282 369L272 361Z" fill="#3b3830" stroke="#b6a079" />
            <path d="M275 321L286 326V355L280 359L275 355Z" fill={paint("brass")} />
            <circle cx="280" cy="350" r="2.5" fill="#252824" />
          </g>
          <g className={styles.rightLatch}>
            <path d="M528 315L510 323V360L518 369L528 361Z" fill="#3b3830" stroke="#b6a079" />
            <path d="M525 321L514 326V355L520 359L525 355Z" fill={paint("brass")} />
            <circle cx="520" cy="350" r="2.5" fill="#252824" />
          </g>
        </svg>
      </div>

      <div className={styles.controls}>
        <button type="button" className={styles.button} aria-expanded={isOpen} aria-controls={contentId} disabled={locked || isMoving} onClick={toggleCapsule}>
          {isOpen ? <RotateCcw size={16} aria-hidden="true" /> : <LockKeyhole size={16} aria-hidden="true" />}
          {locked ? `Versiegelt bis ${unlockAt}` : phase === "opening" ? "Wird geöffnet …" : phase === "closing" ? "Wird verstaut …" : isOpen ? "Wieder einpacken" : "Zeitkapsel öffnen"}
        </button>
        <p className={styles.status} role="status">{locked ? "Diese Erinnerung ist noch nicht freigegeben." : phaseLabels[phase]}</p>
        <div id={contentId} className={styles.memory} aria-hidden={phase !== "open"} inert={phase !== "open"}>
          <p>{memory}</p>
        </div>
      </div>
    </section>
  );
}
