import { SubmitButton } from "@/components/submit-button";
import { Archive, CalendarDays, RotateCcw, Trash2 } from "lucide-react";
import { AppSidebar } from "@/components/app-sidebar";
import { deleteCapsule, restoreCapsule } from "@/app/kapseln/[id]/actions";
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
    <main className="app-shell">
      <AppSidebar user={user} />

      <section className="min-h-screen min-w-0 flex-1 bg-[#131c16] px-6 py-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#dca277]">
            Rückblick
          </p>

          <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Archiv
          </h1>

          <p className="mt-3 max-w-3xl text-lg leading-8 text-stone-300">
            Hier liegen Zeitkapseln, die du aus deiner aktiven Sammlung entfernt
            hast.
          </p>

          {capsules.length === 0 ? (
            <section className="mt-12 rounded-lg border border-[#dca277]/15 bg-black/15 p-10 text-center">
              <Archive className="mx-auto text-[#dca277]" size={34} />

              <h2 className="mt-4 font-serif text-2xl text-white">
                Dein Archiv ist leer
              </h2>

              <p className="mt-3 text-stone-400">
                Archivierte Kapseln kannst du später hier wiederherstellen.
              </p>
            </section>
          ) : (
            <section className="mt-12 grid gap-6 xl:grid-cols-2">
              {capsules.map((capsule) => (
                <article
                  key={capsule.id}
                  className="rounded-lg border border-[#dca277]/15 bg-[#131c16] p-7 shadow-2xl shadow-black/30"
                >
                  <div className="flex items-start justify-between gap-5">
                    <span className="grid h-14 w-14 place-items-center rounded-2xl border border-[#dca277]/20 bg-[#dca277]/10 text-[#dca277]">
                      <Archive size={25} />
                    </span>

                    <span className="rounded-full border border-stone-500/35 bg-stone-400/10 px-4 py-2 text-sm text-stone-200">
                      archiviert
                    </span>
                  </div>

                  <h2 className="mt-8 font-serif text-2xl text-white">
                    {capsule.title}
                  </h2>

                  <p className="mt-4 leading-7 text-stone-400">
                    {capsule.openAt <= new Date()
                      ? capsule.description || "Keine Vorschau vorhanden."
                      : "Diese Nachricht bleibt bis zum Öffnungsdatum versiegelt."}
                  </p>

                  <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-[#dca277]/10 pt-4">
                    <span className="inline-flex items-center gap-2 text-sm text-stone-400">
                      <CalendarDays size={17} />
                      Öffnet am {dateFormatter.format(capsule.openAt)}
                    </span>

                    <div className="flex flex-wrap items-center gap-3">
                      <form action={restoreCapsule}>
                        <input type="hidden" name="id" value={capsule.id} />

                        <SubmitButton
                          type="submit"
                          className="inline-flex items-center gap-2 text-sm font-medium text-[#ecc09b]"
                        >
                          <RotateCcw size={16} />
                          Wiederherstellen
                        </SubmitButton>
                      </form>

                      <details className="relative">
                        <summary className="inline-flex cursor-pointer list-none items-center gap-2 text-sm font-medium text-red-300">
                          <Trash2 size={16} />
                          Löschen
                        </summary>

                        <div className="absolute right-0 z-10 mt-3 w-64 rounded-2xl border border-red-300/20 bg-stone-950 p-4 shadow-2xl">
                          <p className="text-sm leading-6 text-stone-300">
                            Diese Zeitkapsel endgültig löschen?
                          </p>

                          <form action={deleteCapsule} className="mt-3">
                            <input type="hidden" name="id" value={capsule.id} />

                            <SubmitButton
                              type="submit"
                              className="rounded-full bg-red-400/15 px-4 py-2 text-sm font-semibold text-red-200"
                            >
                              Endgültig löschen
                            </SubmitButton>
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
