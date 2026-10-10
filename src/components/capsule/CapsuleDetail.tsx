import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Archive,
  ArrowLeft,
  CalendarDays,
  FileText,
  LockKeyhole,
  Pencil,
  ShieldCheck,
  Unlock,
} from "lucide-react";

import { archiveCapsule } from "@/app/kapseln/[id]/actions";
import { AppSidebar } from "@/components/app-sidebar";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/session";

import { ArchiveTimeCapsule } from "./ArchiveTimeCapsule";

const dateFormatter = new Intl.DateTimeFormat("de-DE", {
  dateStyle: "long",
});

const dateTimeFormatter = new Intl.DateTimeFormat("de-DE", {
  dateStyle: "medium",
  timeStyle: "short",
});

export async function CapsuleDetail({ id }: { id: string }) {
  const user = await requireUser();

  const capsule = await prisma.capsule.findFirst({
    where: {
      id,
      userId: user.id,
      isArchived: false,
    },
  });

  if (!capsule) {
    notFound();
  }

  const now = new Date();
  const isOpened = capsule.openAt <= now;
  const canEdit = !isOpened && capsule.editUntil > now;

  const message =
    capsule.description ||
    "Diese Zeitkapsel enthält keine gespeicherte Nachricht.";

  const visibleMessage = isOpened
    ? message
    : "Diese Nachricht bleibt bis zum Öffnungsdatum versiegelt.";

  return (
    <main className="flex min-h-screen bg-[#070b1a] text-slate-100">
      <AppSidebar user={user} />

      <section className="min-h-screen min-w-0 flex-1 bg-[radial-gradient(circle_at_12%_10%,_rgba(216,170,91,0.16),_transparent_22%),radial-gradient(circle_at_88%_18%,_rgba(48,112,166,0.22),_transparent_30%),linear-gradient(135deg,_#141024_0%,_#081324_48%,_#050814_100%)] px-6 py-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/kapseln"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-[#f0d08a]"
          >
            <ArrowLeft size={17} />
            Zurück zu allen Zeitkapseln
          </Link>

          <article className="relative mt-10 overflow-hidden rounded-[0_2.2rem_2rem_2rem] border border-[#d8aa5b]/20 bg-[radial-gradient(circle_at_24%_12%,_rgba(240,208,138,0.2),_transparent_28%),linear-gradient(145deg,_rgba(91,52,38,0.55),_rgba(15,23,42,0.88))] p-7 shadow-2xl shadow-black/35 sm:p-10">
            <div className="relative flex flex-wrap items-start justify-between gap-5">
              <div className="grid h-16 w-16 place-items-center rounded-2xl border border-[#d8aa5b]/20 bg-black/20 text-[#f0d08a]">
                <FileText size={30} />
              </div>

              <span
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold ${isOpened
                    ? "border-emerald-300/40 bg-emerald-400/20 text-emerald-100"
                    : "border-[#d8aa5b]/40 bg-black/25 text-[#f0d08a]"
                  }`}
              >
                {isOpened ? (
                  <Unlock size={16} />
                ) : (
                  <LockKeyhole size={16} />
                )}

                {isOpened ? "geöffnet" : "versiegelt"}
              </span>
            </div>

            <p className="mt-10 text-xs font-semibold uppercase tracking-[0.22em] text-[#f0d08a]">
              Zeitkapsel
            </p>

            <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {capsule.title}
            </h1>

            <div className="mt-8 flex items-center gap-3 border-y border-[#d8aa5b]/10 py-6">
              <CalendarDays size={20} className="text-[#f0d08a]" />

              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-slate-400">
                  Öffnungsdatum
                </p>

                <p className="mt-1 font-medium text-slate-100">
                  {dateFormatter.format(capsule.openAt)}
                </p>
              </div>
            </div>

            <section className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f0d08a]">
                Persönliche Nachricht
              </p>

              <div className="relative mt-4 overflow-hidden rounded-[0_1.8rem_1.8rem_1.8rem] border border-black/20 bg-black/20 p-6">
                <p className="whitespace-pre-line text-lg leading-8 text-slate-200">
                  {visibleMessage}
                </p>

                {!isOpened && (
                  <div className="absolute inset-0 grid place-items-center bg-black/55 p-6 text-center backdrop-blur-sm">
                    <div>
                      <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl border border-[#f0d08a]/30 bg-[#f0d08a]/10 text-[#f0d08a]">
                        <ShieldCheck size={26} />
                      </div>

                      <h2 className="mt-4 font-serif text-2xl font-semibold text-white">
                        Diese Kapsel ist noch versiegelt.
                      </h2>

                      <p className="mt-2 max-w-md text-sm leading-6 text-slate-300">
                        Der Inhalt wird erst am{" "}
                        {dateFormatter.format(capsule.openAt)} sichtbar.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </section>

            <div className="mt-8 flex flex-wrap gap-3 border-t border-[#d8aa5b]/10 pt-6">
              {canEdit && (
                <div className="flex flex-col gap-1">
                  <Link
                    href={`/kapseln/${capsule.id}/bearbeiten`}
                    className="inline-flex items-center gap-2 rounded-full border border-[#d8aa5b]/30 px-4 py-2 text-sm text-[#f0d08a] transition hover:bg-[#d8aa5b]/10"
                  >
                    <Pencil size={16} />
                    Bearbeiten
                  </Link>
                  <span className="text-xs text-slate-400">
                    Korrektur möglich bis {dateTimeFormatter.format(capsule.editUntil)} Uhr
                  </span>
                </div>
              )}

              <form action={archiveCapsule}>
                <input type="hidden" name="id" value={capsule.id} />

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-500/40 px-4 py-2 text-sm text-slate-300 transition hover:border-slate-400 hover:bg-slate-950/30"
                >
                  <Archive size={16} />
                  Archivieren
                </button>
              </form>
            </div>
          </article>

          <section className="mt-10 rounded-[0_2.2rem_2rem_2rem] border border-[#d8aa5b]/15 bg-black/15 px-4 py-6 shadow-2xl shadow-black/20 sm:px-8">
            <ArchiveTimeCapsule
              memory={visibleMessage}
              locked={!isOpened}
              unlockAt={dateFormatter.format(capsule.openAt)}
            />
          </section>
        </div>
      </section>
    </main>
  );
}
