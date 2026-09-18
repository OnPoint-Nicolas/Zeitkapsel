import Link from "next/link";
import { CalendarDays, FileText, Plus, ShieldCheck } from "lucide-react";
import { AppSidebar } from "@/components/app-sidebar";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/session";

const dateFormatter = new Intl.DateTimeFormat("de-DE", { dateStyle: "long" });

function getStatus(openAt: Date) {
  const timeUntilOpen = openAt.getTime() - Date.now();
  if (timeUntilOpen <= 0) return "geöffnet";
  if (timeUntilOpen <= 1000 * 60 * 60 * 24 * 30) return "bald geöffnet";
  return "versiegelt";
}

function getStatusClasses(status: string) {
  if (status === "geöffnet") return "border-emerald-300/40 bg-emerald-400/20 text-emerald-100";
  if (status === "bald geöffnet") return "border-[#f0d08a]/45 bg-[#f0d08a]/20 text-[#fff1b8]";
  return "border-[#d8aa5b]/40 bg-black/25 text-[#f0d08a]";
}

export async function CapsuleCollection() {
  const user = await requireUser();
  const capsules = await prisma.capsule.findMany({
    where: { userId: user.id, isArchived: false },
    orderBy: { openAt: "asc" },
  });

  return (
    <main className="flex min-h-screen bg-[#070b1a] text-slate-100">
      <AppSidebar />
      <section className="min-h-screen min-w-0 flex-1 bg-[radial-gradient(circle_at_12%_10%,_rgba(216,170,91,0.16),_transparent_22%),radial-gradient(circle_at_88%_18%,_rgba(48,112,166,0.22),_transparent_30%),linear-gradient(135deg,_#141024_0%,_#081324_48%,_#050814_100%)] px-6 py-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d8aa5b]">Sammlung</p>
              <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-white sm:text-5xl">Alle Zeitkapseln</h1>
              <p className="mt-3 max-w-2xl text-lg leading-8 text-slate-300">Deine gespeicherten Erinnerungen. Jede Kapsel bleibt bis zu ihrem Öffnungsdatum versiegelt.</p>
            </div>
            <Link href="/kapseln/neu" className="inline-flex items-center gap-2 rounded-[1rem_1.7rem_1.7rem_1.7rem] bg-[#d8aa5b] px-5 py-3 font-semibold text-slate-950 shadow-lg shadow-[#d8aa5b]/10 transition hover:bg-[#f0d08a]">
              <Plus size={19} /> Neue Zeitkapsel
            </Link>
          </div>

          {capsules.length === 0 ? (
            <section className="mt-10 rounded-[0_2rem_2rem_2rem] border border-[#d8aa5b]/15 bg-black/15 p-10 text-center shadow-xl shadow-black/25">
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl border border-[#d8aa5b]/25 bg-[#d8aa5b]/10 text-[#f0d08a]"><FileText size={30} /></div>
              <h2 className="mt-5 font-serif text-2xl text-white">Noch keine Zeitkapsel</h2>
              <p className="mx-auto mt-3 max-w-md leading-7 text-slate-400">Erstelle deine erste Erinnerung und lege fest, wann sie wieder sichtbar werden darf.</p>
              <Link href="/kapseln/neu" className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#d8aa5b]/35 px-5 py-3 text-sm font-medium text-[#f0d08a] transition hover:bg-[#d8aa5b]/10"><Plus size={16} /> Erste Kapsel erstellen</Link>
            </section>
          ) : (
            <section className="mt-10 grid gap-6 xl:grid-cols-3">
              {capsules.map((capsule) => {
                const status = getStatus(capsule.openAt);
                return (
                  <Link key={capsule.id} href={`/kapseln/${capsule.id}`} className="group relative overflow-hidden rounded-[0_2rem_2rem_2rem] border border-[#d8aa5b]/20 bg-[radial-gradient(circle_at_24%_12%,_rgba(240,208,138,0.2),_transparent_28%),linear-gradient(145deg,_rgba(91,52,38,0.55),_rgba(15,23,42,0.88))] p-7 shadow-2xl shadow-black/35 transition hover:-translate-y-1 hover:border-[#d8aa5b]/45">
                    <div className="relative flex items-start justify-between gap-4">
                      <span className="grid h-12 w-12 place-items-center rounded-2xl border border-[#d8aa5b]/20 bg-black/20 text-[#f0d08a]"><FileText size={22} /></span>
                      <span className={`inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-semibold ${getStatusClasses(status)}`}><ShieldCheck size={13} />{status}</span>
                    </div>
                    <h2 className="mt-8 font-serif text-2xl font-semibold leading-tight text-white">{capsule.title}</h2>
                    <p className="mt-4 min-h-24 leading-7 text-slate-300">{capsule.description || "Keine Vorschau vorhanden."}</p>
                    <div className="mt-7 border-t border-[#d8aa5b]/10 pt-4"><div className="flex items-center gap-2 text-sm text-slate-300"><CalendarDays size={17} />Öffnet am {dateFormatter.format(capsule.openAt)}</div><p className="mt-3 text-sm font-medium text-[#f0d08a]">{capsule.kind}</p></div>
                  </Link>
                );
              })}
            </section>
          )}
        </div>
      </section>
    </main>
  );
}
