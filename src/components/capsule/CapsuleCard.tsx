import Link from "next/link";
import type { Capsule } from "@/generated/prisma/client";
import { CapsuleArtwork } from "./CapsuleArtwork";

export function CapsuleCard({
  capsule,
  now,
}: {
  capsule: Capsule;
  now: number;
}) {
  const remaining = capsule.openAt.getTime() - now;
  const opened = remaining <= 0;
  const status = opened
    ? "Geöffnet"
    : remaining <= 30 * 86400000
      ? "Bald geöffnet"
      : "Versiegelt";
  const date = new Intl.DateTimeFormat("de-DE", {
    dateStyle: "medium",
    timeZone: "Europe/Berlin",
  }).format(capsule.openAt);
  return (
    <Link href={"/kapseln/" + capsule.id} className="capsule-card">
      <div className="flex items-center justify-between gap-3 text-xs">
        <span className="text-[#dca277]">{status}</span>
        <time
          dateTime={capsule.openAt.toISOString()}
          className="text-stone-400"
        >
          {date}
        </time>
      </div>
      <CapsuleArtwork open={opened} dateLabel={date} />
      <h2>{capsule.title}</h2>
      <p className="preview">
        {opened
          ? capsule.description || "Eine Erinnerung ohne Nachricht."
          : "Deine Nachricht wartet auf ihren Moment."}
      </p>
      <p className="text-xs text-[#dca277]">
        {opened ? "Erinnerung ansehen" : "Zeitkapsel ansehen"} →
      </p>
    </Link>
  );
}
