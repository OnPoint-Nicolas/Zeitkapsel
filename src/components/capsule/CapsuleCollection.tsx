import Link from "next/link";
import { FileText, Plus } from "lucide-react";
import { AppSidebar } from "@/components/app-sidebar";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/session";
import { CapsuleCard } from "./CapsuleCard";

export async function CapsuleCollection() {
  const user = await requireUser();
  const capsules = await prisma.capsule.findMany({
    where: { userId: user.id, isArchived: false },
    orderBy: { openAt: "asc" },
  });

  return (
    <main className="app-shell">
      <AppSidebar user={user} />
      <section className="min-h-screen min-w-0 flex-1 bg-[#131c16] px-6 py-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#dca277]">
                Sammlung
              </p>
              <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Alle Zeitkapseln
              </h1>
              <p className="mt-3 max-w-2xl text-lg leading-8 text-stone-300">
                Deine gespeicherten Erinnerungen. Jede Kapsel bleibt bis zu
                ihrem Öffnungsdatum versiegelt.
              </p>
            </div>
            <Link
              href="/kapseln/neu"
              className="inline-flex items-center gap-2 rounded-lg bg-[#dca277] px-5 py-3 font-semibold text-stone-950 shadow-lg shadow-[#dca277]/10 transition hover:bg-[#ecc09b]"
            >
              <Plus size={19} /> Neue Zeitkapsel
            </Link>
          </div>

          {capsules.length === 0 ? (
            <section className="mt-10 rounded-lg border border-[#dca277]/15 bg-black/15 p-10 text-center shadow-xl shadow-black/25">
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl border border-[#dca277]/25 bg-[#dca277]/10 text-[#ecc09b]">
                <FileText size={30} />
              </div>
              <h2 className="mt-5 font-serif text-2xl text-white">
                Noch keine Zeitkapsel
              </h2>
              <p className="mx-auto mt-3 max-w-md leading-7 text-stone-400">
                Erstelle deine erste Erinnerung und lege fest, wann sie wieder
                sichtbar werden darf.
              </p>
              <Link
                href="/kapseln/neu"
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#dca277]/35 px-5 py-3 text-sm font-medium text-[#ecc09b] transition hover:bg-[#dca277]/10"
              >
                <Plus size={16} /> Erste Kapsel erstellen
              </Link>
            </section>
          ) : (
            <section className="mt-10 grid gap-6 xl:grid-cols-3">
              {capsules.map((capsule) => (
                <CapsuleCard
                  key={capsule.id}
                  capsule={capsule}
                  now={new Date().getTime()}
                />
              ))}
            </section>
          )}
        </div>
      </section>
    </main>
  );
}
