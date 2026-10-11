import Link from "next/link";
import { CalendarDays } from "lucide-react";
import { AppSidebar } from "@/components/app-sidebar";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/session";

const dateFormatter = new Intl.DateTimeFormat("de-DE", {
  dateStyle: "long",
});

const yearFormatter = new Intl.DateTimeFormat("de-DE", {
  year: "numeric",
});

function getStatus(openAt: Date) {
  return openAt <= new Date() ? "geöffnet" : "versiegelt";
}

export async function TimelineCollection() {
  const user = await requireUser();

  const capsules = await prisma.capsule.findMany({
    where: {
      userId: user.id,
      isArchived: false,
    },
    orderBy: {
      openAt: "asc",
    },
  });

  return (
    <main className="app-shell">
      <AppSidebar user={user} />

      <section className="min-h-screen min-w-0 flex-1 bg-[#131c16] px-6 py-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#dca277]">
            Chronologie
          </p>

          <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Timeline
          </h1>

          <p className="mt-3 max-w-3xl text-lg leading-8 text-stone-300">
            Deine Zeitkapseln nach ihrem Öffnungsdatum.
          </p>

          <section className="mt-12 space-y-10">
            {capsules.length === 0 ? (
              <p className="rounded-lg border border-[#dca277]/15 bg-black/15 p-8 text-stone-400">
                Erstelle eine Zeitkapsel, damit sie in deiner Timeline
                erscheint.
              </p>
            ) : (
              capsules.map((capsule) => {
                const status = getStatus(capsule.openAt);

                return (
                  <article
                    key={capsule.id}
                    className="grid gap-4 lg:grid-cols-[120px_1fr]"
                  >
                    <p className="font-serif text-3xl font-semibold text-[#dca277]">
                      {yearFormatter.format(capsule.openAt)}
                    </p>

                    <Link
                      href={`/kapseln/${capsule.id}`}
                      className="relative rounded-lg border border-[#dca277]/15 bg-[#131c16] p-7 shadow-2xl shadow-black/30 transition hover:border-[#dca277]/35"
                    >
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <h2 className="font-serif text-2xl text-white">
                            {capsule.title}
                          </h2>

                          <p className="mt-2 leading-7 text-stone-400">
                            {status === "geöffnet"
                              ? capsule.description ||
                                "Keine Vorschau vorhanden."
                              : "Diese Nachricht bleibt bis zum Öffnungsdatum versiegelt."}
                          </p>
                        </div>

                        <span
                          className={`w-fit rounded-full border px-3 py-1 text-xs font-semibold ${
                            status === "geöffnet"
                              ? "border-emerald-300/35 bg-emerald-400/15 text-emerald-100"
                              : "border-stone-500/35 bg-stone-400/10 text-stone-300"
                          }`}
                        >
                          {status}
                        </span>
                      </div>

                      <div className="mt-6 flex items-center gap-2 border-t border-[#dca277]/10 pt-4 text-sm text-stone-400">
                        <CalendarDays size={17} />
                        Öffnet am {dateFormatter.format(capsule.openAt)}
                      </div>
                    </Link>
                  </article>
                );
              })
            )}
          </section>
        </div>
      </section>
    </main>
  );
}
