import Link from "next/link";
import { CalendarDays, FileText, Plus, Search } from "lucide-react";
import { AppSidebar } from "@/components/app-sidebar";

const kapseln = [
  {
    id: "brief-an-mich",
    title: "Brief an mich selbst",
    description:
      "Eine persönliche Nachricht an mein zukünftiges Ich mit Gedanken, Zielen und Erinnerungen.",
    openDate: "15. Januar 2030",
    status: "versiegelt",
    type: "Nachricht",
  },
  {
    id: "ziele-2027",
    title: "Ziele für mein zukünftiges Ich",
    description:
      "Gedanken und Ziele, die ich später mit meinem echten Leben vergleichen möchte.",
    openDate: "02. September 2027",
    status: "bald geöffnet",
    type: "Nachricht",
  },
  {
    id: "schoener-moment",
    title: "Sommer 2019 in Lissabon",
    description:
      "Eine geöffnete Erinnerung an einen besonderen Moment, den ich bewusst festhalten wollte.",
    openDate: "01. Juli 2025",
    status: "geöffnet",
    type: "Nachricht",
  },
];

function getStatusClasses(status: string) {
  if (status === "geöffnet") {
    return "border-violet-300/35 bg-violet-400/15 text-violet-100";
  }

  if (status === "bald geöffnet") {
    return "border-[#e4b957]/45 bg-[#e4b957]/10 text-[#e4b957]";
  }

  return "border-slate-500/35 bg-slate-400/10 text-slate-300";
}

export default function KapselnPage() {
  return (
    <main className="flex min-h-screen bg-[#070b1a] text-slate-100">
      <AppSidebar />

      <section className="min-h-screen min-w-0 flex-1 bg-[linear-gradient(135deg,_rgba(38,29,78,0.95)_0%,_rgba(10,18,38,0.98)_45%,_rgba(9,31,55,0.95)_100%)] px-6 py-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#e4b957]">
                Sammlung
              </p>

              <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Meine Zeitkapseln
              </h1>

              <p className="mt-3 max-w-2xl text-lg leading-8 text-slate-300">
                Hier sammle ich alle Nachrichten, Erinnerungen und Gedanken, die
                ich für einen späteren Zeitpunkt festhalte.
              </p>
            </div>

            <Link
              href="/kapseln/neu"
              className="inline-flex items-center gap-2 rounded-2xl bg-[#e4b957] px-5 py-3 font-semibold text-slate-950 shadow-lg shadow-[#e4b957]/10 transition hover:bg-[#f0ca70]"
            >
              <Plus size={19} strokeWidth={2} />
              Neue Zeitkapsel
            </Link>
          </div>

          <section className="mt-10 rounded-3xl border border-[#e4b957]/15 bg-[linear-gradient(145deg,_rgba(28,34,67,0.92),_rgba(47,38,83,0.82))] p-5 shadow-xl shadow-black/20 backdrop-blur">
            <div className="relative">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                size={20}
                strokeWidth={1.8}
              />

              <input
                type="search"
                placeholder="Zeitkapseln durchsuchen"
                className="w-full rounded-2xl border border-[#e4b957]/15 bg-slate-950/35 py-3 pl-12 pr-4 text-slate-100 outline-none placeholder:text-slate-500 focus:border-[#e4b957]/60"
              />
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              {["Alle", "Versiegelt", "Bald geöffnet", "Geöffnet"].map(
                (filter) => (
                  <button
                    key={filter}
                    className="rounded-full border border-[#e4b957]/15 px-4 py-2 text-sm text-slate-300 transition hover:border-[#e4b957]/50 hover:text-[#e4b957]"
                    type="button"
                  >
                    {filter}
                  </button>
                ),
              )}
            </div>
          </section>

          <section className="mt-8 grid gap-6 xl:grid-cols-3">
            {kapseln.map((kapsel) => (
              <Link
                key={kapsel.id}
                href={`/kapseln/${kapsel.id}`}
                className="group rounded-3xl border border-[#e4b957]/15 bg-[linear-gradient(145deg,_rgba(28,34,67,0.94),_rgba(45,37,82,0.88))] p-7 shadow-2xl shadow-black/30 backdrop-blur transition hover:-translate-y-1 hover:border-[#e4b957]/35"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl border border-[#e4b957]/20 bg-[#e4b957]/10 text-[#e4b957]">
                    <FileText size={22} strokeWidth={1.8} />
                  </span>

                  <span
                    className={`rounded-full border px-3 py-1 text-xs font-semibold ${getStatusClasses(
                      kapsel.status,
                    )}`}
                  >
                    {kapsel.status}
                  </span>
                </div>

                <h2 className="mt-8 font-serif text-2xl font-semibold leading-tight text-white">
                  {kapsel.title}
                </h2>

                <p className="mt-4 min-h-24 leading-7 text-slate-400">
                  {kapsel.description}
                </p>

                <div className="mt-7 border-t border-[#e4b957]/10 pt-4">
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <CalendarDays size={17} strokeWidth={1.8} />
                    Öffnet am {kapsel.openDate}
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