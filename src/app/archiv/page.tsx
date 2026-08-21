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

      <section className="min-h-screen min-w-0 flex-1 bg-[linear-gradient(135deg,_rgba(38,29,78,0.95)_0%,_rgba(10,18,38,0.98)_45%,_rgba(9,31,55,0.95)_100%)] px-6 py-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#e4b957]">
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
                className="group rounded-3xl border border-[#e4b957]/15 bg-[linear-gradient(145deg,_rgba(28,34,67,0.94),_rgba(45,37,82,0.88))] p-7 shadow-2xl shadow-black/30 backdrop-blur transition hover:-translate-y-1 hover:border-[#e4b957]/35"
              >
                <div className="flex items-start justify-between gap-5">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl border border-[#e4b957]/20 bg-[#e4b957]/10 text-[#e4b957]">
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

                <div className="mt-7 border-t border-[#e4b957]/10 pt-4">
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <CalendarDays size={17} strokeWidth={1.8} />
                    Geöffnet am {kapsel.openDate}
                  </div>

                  <p className="mt-3 text-sm font-medium text-[#e4b957]">
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