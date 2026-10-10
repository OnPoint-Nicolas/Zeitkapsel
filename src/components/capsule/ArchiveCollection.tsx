import { Archive, CalendarDays, RotateCcw, Trash2 } from "lucide-react";
import { AppSidebar } from "@/components/app-sidebar";
import {
  deleteCapsule,
  restoreCapsule,
} from "@/app/kapseln/[id]/actions";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/session";

const dateFormatter = new Intl.DateTimeFormat("de-DE", { dateStyle: "long" });

export async function ArchiveCollection() {
  const user = await requireUser();

  const capsules = await prisma.capsule.findMany({
    where: {
      userId: user.id,
      isArchived: true,
    },
    orderBy: {
      updatedAt: "desc",
    },
  });

  return (
    <main className="flex min-h-screen bg-[#070b1a] text-slate-100">
      <AppSidebar />

      <section className="min-h-screen min-w-0 flex-1 bg-[radial-gradient(circle_at_12%_10%,_rgba(216,170,91,0.16),_transparent_22%),radial-gradient(circle_at_88%_18%,_rgba(48,112,166,0.22),_transparent_30%),linear-gradient(135deg,_#141024_0%,_#081324_48%,_#050814_100%)] px-6 py-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d8aa5b]">
            Rückblick
          </p>

          <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Archiv
          </h1>

          <p className="mt-3 max-w-3xl text-lg leading-8 text-slate-300">
            Hier liegen Zeitkapseln, die du aus deiner aktiven Sammlung
            entfernt hast.
          </p>

          {capsules.length === 0 ? (
            <section className="mt-12 rounded-[0_2rem_2rem_2rem] border border-[#d8aa5b]/15 bg-black/15 p-10 text-center">
              <Archive className="mx-auto text-[#d8aa5b]" size={34} />

              <h2 className="mt-4 font-serif text-2xl text-white">
                Dein Archiv ist leer
              </h2>

              <p className="mt-3 text-slate-400">
                Archivierte Kapseln kannst du später hier wiederherstellen.
              </p>
            </section>
          ) : (
            <section className="mt-12 grid gap-6 xl:grid-cols-2">
              {capsules.map((capsule) => (
                <article
                  key={capsule.id}
                  className="rounded-[0_2rem_2rem_2rem] border border-[#d8aa5b]/15 bg-[linear-gradient(145deg,_rgba(91,52,38,0.35),_rgba(15,23,42,0.72))] p-7 shadow-2xl shadow-black/30"
                >
                  <div className="flex items-start justify-between gap-5">
                    <span className="grid h-14 w-14 place-items-center rounded-2xl border border-[#d8aa5b]/20 bg-[#d8aa5b]/10 text-[#d8aa5b]">
                      <Archive size={25} />
                    </span>

                    <span className="rounded-full border border-slate-500/35 bg-slate-400/10 px-4 py-2 text-sm text-slate-200">
                      archiviert
                    </span>
                  </div>

                  <h2 className="mt-8 font-serif text-2xl text-white">
                    {capsule.title}
                  </h2>

                  <p className="mt-4 leading-7 text-slate-400">
                    {capsule.openAt <= new Date()
                      ? capsule.description || "Keine Vorschau vorhanden."
                      : "Diese Nachricht bleibt bis zum Öffnungsdatum versiegelt."}
                  </p>

                  <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-[#d8aa5b]/10 pt-4">
                    <span className="inline-flex items-center gap-2 text-sm text-slate-400">
                      <CalendarDays size={17} />
                      Öffnet am {dateFormatter.format(capsule.openAt)}
                    </span>

                    <div className="flex flex-wrap items-center gap-3">
                      <form action={restoreCapsule}>
                        <input
                          type="hidden"
                          name="id"
                          value={capsule.id}
                        />

                        <button
                          type="submit"
                          className="inline-flex items-center gap-2 text-sm font-medium text-[#f0d08a]"
                        >
                          <RotateCcw size={16} />
                          Wiederherstellen
                        </button>
                      </form>

                      <details className="relative">
                        <summary className="inline-flex cursor-pointer list-none items-center gap-2 text-sm font-medium text-red-300">
                          <Trash2 size={16} />
                          Löschen
                        </summary>

                        <div className="absolute right-0 z-10 mt-3 w-64 rounded-2xl border border-red-300/20 bg-slate-950 p-4 shadow-2xl">
                          <p className="text-sm leading-6 text-slate-300">
                            Diese Zeitkapsel endgültig löschen?
                          </p>

                          <form action={deleteCapsule} className="mt-3">
                            <input
                              type="hidden"
                              name="id"
                              value={capsule.id}
                            />

                            <button
                              type="submit"
                              className="rounded-full bg-red-400/15 px-4 py-2 text-sm font-semibold text-red-200"
                            >
                              Endgültig löschen
                            </button>
                          </form>
                        </div>
                      </details>
                    </div>
                  </div>
                </article>
              ))}
            </section>
          )}
        </div>
      </section>
    </main>
  );
}
