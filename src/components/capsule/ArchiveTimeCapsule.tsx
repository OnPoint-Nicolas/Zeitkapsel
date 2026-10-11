"use client";

import { useEffect, useId, useState } from "react";
import { CapsuleArtwork } from "./CapsuleArtwork";

type Phase = "closed" | "opening" | "open" | "closing";

export function ArchiveTimeCapsule({
  memory = "Eine Erinnerung für später.",
  locked = false,
  unlockAt,
}: {
  memory?: string;
  locked?: boolean;
  unlockAt?: string;
}) {
  const [phase, setPhase] = useState<Phase>("closed");
  const id = useId();
  const moving = phase === "opening" || phase === "closing";
  const open = !locked && (phase === "open" || phase === "opening");

  useEffect(() => {
    if (!moving) return;
    const timer = window.setTimeout(
      () => setPhase(phase === "opening" ? "open" : "closed"),
      2100,
    );
    return () => window.clearTimeout(timer);
  }, [phase, moving]);

  function toggle() {
    if (locked || moving) return;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    setPhase(
      reduced ? (open ? "closed" : "open") : open ? "closing" : "opening",
    );
  }

  return (
    <section className="capsule-experience" aria-label="Deine Zeitkapsel">
      <div className="capsule-scene">
        <CapsuleArtwork open={open} />
      </div>
      <div className="capsule-controls">
        <p className="eyebrow" aria-live="polite">
          {locked
            ? "Versiegelt · bis " + unlockAt
            : moving
              ? "Die Kapsel bewegt sich …"
              : open
                ? "Eine Erinnerung ist zurück."
                : "Deine Erinnerung wartet."}
        </p>
        <button
          type="button"
          className="primary-button"
          onClick={toggle}
          disabled={locked || moving}
          aria-expanded={open}
          aria-controls={id}
        >
          {locked
            ? "Noch versiegelt"
            : moving
              ? "Einen Augenblick …"
              : open
                ? "Darstellung schließen"
                : "Kapsel öffnen"}
        </button>
        {!locked && (
          <p className="mt-3 text-xs text-stone-400">
            Die Animation verändert weder Nachricht noch Öffnungsdatum.
          </p>
        )}
      </div>
      <div id={id}>
        {!locked && phase === "open" && (
          <article className="memory-letter">
            <p className="eyebrow">Persönliche Nachricht</p>
            <p className="mt-5 whitespace-pre-wrap break-words">{memory}</p>
          </article>
        )}
      </div>
    </section>
  );
}
