import Link from "next/link";
import { CalendarDays, FileText, Plus, Search, ShieldCheck } from "lucide-react";
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
    material:
      "bg-[radial-gradient(circle_at_25%_20%,_rgba(240,208,138,0.34),_transparent_28%),linear-gradient(145deg,_#6b3f2d,_#2b1814)] border-[#d8aa5b]/30",
  },
  {
    id: "ziele-2027",
    title: "Ziele für mein zukünftiges Ich",
    description:
      "Gedanken und Ziele, die ich später mit meinem echten Leben vergleichen möchte.",
    openDate: "02. September 2027",
    status: "bald geöffnet",
    type: "Nachricht",
    material:
      "bg-[radial-gradient(circle_at_25%_20%,_rgba(255,255,255,0.45),_transparent_30%),linear-gradient(145deg,_#d8d2c2,_#5f6670)] border-white/35 text-slate-950",
  },
  {
    id: "schoener-moment",
    title: "Sommer 2019 in Lissabon",
    description:
      "Eine geöffnete Erinnerung an einen besonderen Moment, den ich bewusst festhalten wollte.",
    openDate: "01. Juli 2025",
    status: "geöffnet",
    type: "Nachricht",
    material:
      "bg-[radial-gradient(circle_at_25%_20%,_rgba(255,235,166,0.48),_transparent_30%),linear-gradient(145deg,_#c79b49,_#4b2f16)] border-[#f0d08a]/35",
  },
];

function getStatusClasses(status: string) {
  if (status === "geöffnet") {
    return "border-emerald-300/40 bg-emerald-400/20 text-emerald-100";
  }

  if (status === "bald geöffnet") {
    return "border-[#f0d08a]/45 bg-[#f0d08a]/20 text-[#fff1b8]";
  }

  return "border-[#d8aa5b]/40 bg-black/25 text-[#f0d08a]";
}

export default function KapselnPage() {
  return (
    <main className="flex min-h-screen bg-[#070b1a] text-slate-100">
      <AppSidebar />

      <section className="min-h-screen min-w-0 flex-1 bg-[radial-gradient(circle_at_12%_10%,_rgba(216,170,91,0.16),_transparent_22%),radial-gradient(circle_at_88%_18%,_rgba(48,112,166,0.22),_transparent_30%),linear-gradient(135deg,_#141024_0%,_#081324_48%,_#050814_100%)] px-6 py-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d8aa5b]">
                Sammlung
              </p>

              <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Alle Zeitkapseln
              </h1>

              <p className="mt-3 max-w-2xl text-lg leading-8 text-slate-300">
                Hier sammle ich Erinnerungen, Nachrichten und Gedanken, die erst
                zu einem bestimmten Zeitpunkt wieder geöffnet werden.
              </p>
            </div>

            <Link
              href="/kapseln/neu"
              className="inline-flex items-center gap-2 rounded-2xl bg-[#d8aa5b] px-5 py-3 font-semibold text-slate-950 shadow-lg shadow-[#d8aa5b]/10 transition hover:bg-[#f0d08a]"
            >
              <Plus size={19} strokeWidth={2} />
              Neue Zeitkapsel
            </Link>
          </div>

          <section className="mt-10 rounded-3xl border border-[#d8aa5b]/15 bg-[linear-gradient(145deg,_rgba(91,52,38,0.35),_rgba(15,23,42,0.72))] p-5 shadow-xl shadow-black/25">
            <div className="relative">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                size={20}
                strokeWidth={1.8}
              />

              <input
                type="search"
                placeholder="Kapseln durchsuchen"
                className="w-full rounded-2xl border border-[#d8aa5b]/15 bg-slate-950/40 py-3 pl-12 pr-4 text-slate-100 outline-none placeholder:text-slate-500 focus:border-[#d8aa5b]/60"
              />
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              {["Alle", "Versiegelt", "Bald geöffnet", "Geöffnet"].map(
                (filter) => (
                  <button
                    key={filter}
                    className="rounded-full border border-[#d8aa5b]/20 bg-slate-950/20 px-4 py-2 text-sm text-slate-300 transition hover:border-[#d8aa5b]/50 hover:text-[#f0d08a]"
                    type="button"
                  >
                    {filter}
                  </button>
                ),
              )}
            </div>
          </section>

          <section className="mt-8 grid gap-6 xl:grid-cols-3">
            {kapseln.map((kapsel) => {
              const isLight = kapsel.material.includes("text-slate-950");

              return (
                <Link
                  key={kapsel.id}
                  href={`/kapseln/${kapsel.id}`}
                  className={`group relative overflow-hidden rounded-3xl border p-7 shadow-2xl shadow-black/35 transition hover:-translate-y-1 ${kapsel.material}`}
                >
                  <div className="pointer-events-none absolute inset-0 bg-[repeating-radial-gradient(circle_at_35%_20%,_rgba(255,255,255,0.14)_0,_rgba(255,255,255,0.14)_1px,_transparent_2px,_transparent_10px)] opacity-25" />

                  <div className="relative flex items-start justify-between gap-4">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl border border-black/20 bg-black/20 text-[#f0d08a] shadow-lg shadow-black/25">
                      <FileText size={22} strokeWidth={1.8} />
                    </span>

                    <span
                      className={`inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-semibold shadow-md shadow-black/20 ${getStatusClasses(
                        kapsel.status,
                      )}`}
                    >
                      <ShieldCheck size={13} strokeWidth={2} />
                      {kapsel.status}
                    </span>
                  </div>

                  <div className="relative">
                    <h2
                      className={`mt-8 font-serif text-2xl font-semibold leading-tight ${
                        isLight ? "text-slate-950" : "text-white"
                      }`}
                    >
                      {kapsel.title}
                    </h2>

                    <p
                      className={`mt-4 min-h-24 leading-7 ${
                        isLight ? "text-slate-800" : "text-slate-200"
                      }`}
                    >
                      {kapsel.description}
                    </p>

                    <div className="mt-7 border-t border-black/20 pt-4">
                      <div
                        className={`flex items-center gap-2 text-sm ${
                          isLight ? "text-slate-800" : "text-slate-300"
                        }`}
                      >
                        <CalendarDays size={17} strokeWidth={1.8} />
                        Öffnet am {kapsel.openDate}
                      </div>

                      <p
                        className={`mt-3 text-sm font-medium ${
                          isLight ? "text-slate-900" : "text-[#f0d08a]"
                        }`}
                      >
                        {kapsel.type}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </section>
        </div>
      </section>
    </main>
  );
}