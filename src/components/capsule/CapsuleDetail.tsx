import Link from "next/link";
import { notFound } from "next/navigation";
import { archiveCapsule } from "@/app/kapseln/[id]/actions";
import { AppSidebar } from "@/components/app-sidebar";
import { SubmitButton } from "@/components/submit-button";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/session";
import { ArchiveTimeCapsule } from "./ArchiveTimeCapsule";

const dateFormatter = new Intl.DateTimeFormat("de-DE", {
  dateStyle: "long",
  timeZone: "Europe/Berlin",
});
const dateTimeFormatter = new Intl.DateTimeFormat("de-DE", {
  dateStyle: "medium",
  timeStyle: "short",
  timeZone: "Europe/Berlin",
});

export async function CapsuleDetail({ id }: { id: string }) {
  const user = await requireUser();
  const capsule = await prisma.capsule.findFirst({
    where: { id, userId: user.id, isArchived: false },
  });
  if (!capsule) notFound();
  const now = new Date();
  const isOpened = capsule.openAt <= now;
  const canEdit = !isOpened && capsule.editUntil > now;

  return (
    <main className="app-shell">
      <AppSidebar user={user} />
      <div className="app-content detail-content">
        <Link href="/kapseln" className="quiet-link">
          ← Meine Zeitkapseln
        </Link>
        <header className="detail-heading">
          <p className="eyebrow">
            {isOpened ? "Zum Wiederfinden" : "Für dein zukünftiges Ich"}
          </p>
          <h1>{capsule.title}</h1>
          <p className="text-stone-300">
            {isOpened ? "Geöffnet seit" : "Öffnet am"}{" "}
            {dateFormatter.format(capsule.openAt)}
          </p>
        </header>
        <ArchiveTimeCapsule
          locked={!isOpened}
          unlockAt={dateFormatter.format(capsule.openAt)}
          memory={
            isOpened
              ? capsule.description || "Diese Kapsel enthält keine Nachricht."
              : undefined
          }
        />
        <div className="detail-actions">
          {canEdit ? (
            <div>
              <Link
                className="secondary-button"
                href={"/kapseln/" + capsule.id + "/bearbeiten"}
              >
                Bearbeiten
              </Link>
              <p className="mt-2 text-xs text-stone-400">
                Korrektur möglich bis{" "}
                {dateTimeFormatter.format(capsule.editUntil)} Uhr
              </p>
            </div>
          ) : (
            <p className="text-sm text-stone-400">
              {isOpened
                ? "Diese Erinnerung bleibt unverändert."
                : "Die Korrekturfrist ist abgelaufen."}
            </p>
          )}
          <form action={archiveCapsule}>
            <input type="hidden" name="id" value={capsule.id} />
            <SubmitButton
              className="secondary-button"
              pendingLabel="Wird archiviert …"
            >
              Archivieren
            </SubmitButton>
          </form>
        </div>
      </div>
    </main>
  );
}
