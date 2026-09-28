import Link from "next/link";
import { UserRound } from "lucide-react";
import { AppSidebar } from "@/components/app-sidebar";
import { requireUser } from "@/lib/session";
import { prisma } from "@/lib/prisma";



export default async function EmpfaengerPage() {
  const user = await requireUser();

  const capsules = await prisma.capsule.findMany({
    where: {
      userId: user.id,
      isArchived: false,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="flex min-h-screen bg-[#070b1a] text-slate-100">
      <AppSidebar />

      <section className="min-h-screen min-w-0 flex-1 bg-[radial-gradient(circle_at_12%_10%,_rgba(216,170,91,0.16),_transparent_22%),radial-gradient(circle_at_88%_18%,_rgba(48,112,166,0.22),_transparent_30%),linear-gradient(135deg,_#141024_0%,_#081324_48%,_#050814_100%)] px-6 py-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d8aa5b]">
            Empfänger
          </p>

          <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Vertrauenskreis
          </h1>

          <p className="mt-3 max-w-3xl text-lg leading-8 text-slate-300">
            Hier sehe ich, für wen meine aktiven Zeitkapseln bestimmt sind. In der
            aktuellen Version sind sie meinem eigenen Konto zugeordnet.
          </p>
          
          <section className="mt-12">
            <article className="relative rounded-[0_2rem_2rem_2rem] border border-[#d8aa5b]/15 bg-[linear-gradient(145deg,_rgba(91,52,38,0.35),_rgba(15,23,42,0.72))] p-7 shadow-2xl shadow-black/30 backdrop-blur">
              <div className="flex flex-wrap items-start justify-between gap-5">
                <div className="flex items-center gap-4">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl border border-[#d8aa5b]/20 bg-[#d8aa5b]/10 text-[#d8aa5b]">
                    <UserRound size={25} strokeWidth={1.8} />
                  </div>

                  <div>
                    <h2 className="font-serif text-2xl font-semibold text-white">
                      {user.name || "Ich selbst"}
                    </h2>

                    <p className="text-slate-400">
                      {user.email}
                    </p>
                  </div>
                </div>

                <span className="rounded-full border border-[#d8aa5b]/35 px-4 py-2 text-sm font-medium text-[#d8aa5b]">
                  {capsules.length} Kapsel{capsules.length === 1 ? "" : "n"}
                </span>
              </div>

              <div className="mt-7 border-t border-[#d8aa5b]/10 pt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Für mich gespeicherte Kapseln
                </p>

                {capsules.length === 0 ? (
                  <p className="mt-4 text-slate-400">
                    Noch keine Zeitkapseln vorhanden.
                  </p>
                ) : (
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {capsules.map((capsule) => (
                      <Link
                        key={capsule.id}
                        href={`/kapseln/${capsule.id}`}
                        className="rounded-[0.9rem_1.4rem_1.4rem_1.4rem] border border-white/5 bg-slate-950/25 px-4 py-3 text-slate-300 transition hover:border-[#d8aa5b]/30 hover:text-[#f0d08a]"
                      >
                        {capsule.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </article>
          </section>
        </div>
      </section>
    </main>
  );
}
