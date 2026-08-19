import Link from "next/link";
import { AppSidebar } from "@/components/app-sidebar";

const archivKapseln = [
  {
    id: "schoener-moment",
    title: "Sommer 2019 in Lissabon",
    description:
      "Eine geöffnete Erinnerung an einen Sommer, den ich später noch einmal bewusst lesen wollte.",
    date: "01. Juli 2025",
    type: "Nachricht",
  },
];

export default function ArchivPage() {
  return (
    <main className="min-h-screen bg-[#070b1a] text-slate-100">
      <div className="flex">
        <AppSidebar />

        <section className="min-h-screen flex-1 bg-[radial-gradient(circle_at_top_left,_rgba(91,57,148,0.35),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(20,82,120,0.35),_transparent_35%)] px-8 py-10 lg:px-16">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#e4b957]">
            Rückblick
          </p>

          <h1 className="mt-4 font-serif text-5xl font-semibold text-white">
            Archiv
          </h1>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
            Im Archiv sehe ich Zeitkapseln, deren Öffnungsdatum erreicht wurde.
            Geöffnete Erinnerungen bleiben erhalten und können später erneut
            angesehen werden.
          </p>

          <div className="mt-12 grid gap-6 xl:grid-cols-2">
            {archivKapseln.map((kapsel) => (
              <Link
                key={kapsel.id}
                href={`/kapseln/${kapsel.id}`}
                className="rounded-3xl border border-violet-200/15 bg-[#171b35]/85 p-7 shadow-2xl shadow-black/25 transition hover:-translate-y-1 hover:border-[#e4b957]/35"
              >
                <div className="flex items-start justify-between gap-5">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-violet-400/20 text-[#e4b957]">
                    geöffnet
                  </div>

                  <span className="rounded-full border border-[#e4b957]/35 px-4 py-2 text-sm font-medium text-[#e4b957]">
                    {kapsel.type}
                  </span>
                </div>

                <h2 className="mt-8 font-serif text-2xl font-semibold text-white">
                  {kapsel.title}
                </h2>

                <p className="mt-4 leading-7 text-slate-400">
                  {kapsel.description}
                </p>

                <div className="mt-7 border-t border-white/10 pt-4 text-sm text-slate-400">
                  Geöffnet am {kapsel.date}
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}