import Link from "next/link";
import { Archive, CalendarDays } from "lucide-react";
import { AppSidebar } from "@/components/app-sidebar";

const archivKapseln = [
  {
    id: "schoener-moment",
    title: "Sommer 2019 in Lissabon",
    description:
      "Eine geöffnete Erinnerung an einen besonderen Moment, den ich bewusst festhalten wollte.",
    openDate: "01. Juli 2025",
    type: "Nachricht",
  },
];

export default function ArchivPage() {
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
            Hier finde ich Zeitkapseln, deren Öffnungsdatum bereits erreicht
            wurde. Geöffnete Erinnerungen bleiben erhalten und können erneut
            angesehen werden.
          </p>

          <section className="mt-12 grid gap-6 xl:grid-cols-2">
            {archivKapseln.map((kapsel) => (
              <Link
                key={kapsel.id}
                href={`/kapseln/${kapsel.id}`}
                className="group relative rounded-[0_2rem_2rem_2rem] border border-[#d8aa5b]/15 bg-[linear-gradient(145deg,_rgba(91,52,38,0.35),_rgba(15,23,42,0.72))] p-7 shadow-2xl shadow-black/30 backdrop-blur transition hover:-translate-y-1 hover:border-[#d8aa5b]/35"
              >
                <div className="flex items-start justify-between gap-5">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl border border-[#d8aa5b]/20 bg-[#d8aa5b]/10 text-[#d8aa5b]">
                    <Archive size={25} strokeWidth={1.8} />
                  </span>

                  <span className="rounded-full border border-violet-300/35 bg-violet-400/15 px-4 py-2 text-sm font-medium text-violet-100">
                    geöffnet
                  </span>
                </div>

                <h2 className="mt-8 font-serif text-2xl font-semibold text-white">
                  {kapsel.title}
                </h2>

                <p className="mt-4 leading-7 text-slate-400">
                  {kapsel.description}
                </p>

                <div className="mt-7 border-t border-[#d8aa5b]/10 pt-4">
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <CalendarDays size={17} strokeWidth={1.8} />
                    Geöffnet am {kapsel.openDate}
                  </div>

                  <p className="mt-3 text-sm font-medium text-[#d8aa5b]">
                    {kapsel.type}
                  </p>
                </div>
              </Link>
            ))}
          </section>
        </div>
      </section>
    </main>
  );
}
