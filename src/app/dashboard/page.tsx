import Link from "next/link";
import { Clock3, Plus, Vault } from "lucide-react";
import { AppSidebar } from "@/components/app-sidebar";

const stats = [
  ["0", "Zeitkapseln"],
  ["0", "Versiegelt"],
  ["0", "Geöffnet"],
  ["–", "Nächste Öffnung"],
];

export default function DashboardPage() {
  return (
    <main className="flex min-h-screen bg-[#070b1a] text-slate-100">
      <AppSidebar />

      <section className="min-h-screen min-w-0 flex-1 bg-[linear-gradient(135deg,_rgba(38,29,78,0.95)_0%,_rgba(10,18,38,0.98)_45%,_rgba(9,31,55,0.95)_100%)] px-6 py-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#e4b957]">
            Übersicht
          </p>

          <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
            <div>
              <h1 className="font-serif text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Guten Abend.
              </h1>

              <p className="mt-3 max-w-2xl text-lg leading-8 text-slate-300">
                Hier sehe ich meine wichtigsten Zeitkapseln, kommende
                Öffnungsdaten und den aktuellen Stand meiner Sammlung.
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

          <section className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map(([number, label]) => (
              <article
                key={label}
                className="rounded-3xl border border-[#e4b957]/15 bg-[linear-gradient(145deg,_rgba(28,34,67,0.92),_rgba(47,38,83,0.86))] p-6 shadow-xl shadow-black/20 backdrop-blur"
              >
                <p className="font-serif text-3xl font-semibold text-[#e4b957]">
                  {number}
                </p>
                <p className="mt-2 text-sm text-slate-400">{label}</p>
              </article>
            ))}
          </section>

          <section className="mt-10 grid gap-6 xl:grid-cols-[1.35fr_0.65fr]">
            <article className="rounded-3xl border border-[#e4b957]/15 bg-[linear-gradient(145deg,_rgba(28,34,67,0.94),_rgba(45,37,82,0.88))] p-7 shadow-2xl shadow-black/30 backdrop-blur">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#e4b957]">
                    Nächster Moment
                  </p>
                  <h2 className="mt-3 font-serif text-2xl font-semibold text-white">
                    Noch keine Kapsel geplant
                  </h2>
                </div>

                <span className="grid h-12 w-12 place-items-center rounded-2xl border border-[#e4b957]/20 bg-[#e4b957]/10 text-[#e4b957]">
                  <Clock3 size={23} strokeWidth={1.8} />
                </span>
              </div>

              <p className="mt-4 max-w-xl leading-7 text-slate-400">
                Sobald ich eine Zeitkapsel erstelle, erscheint hier der nächste
                wichtige Öffnungstermin.
              </p>

              <Link
                href="/kapseln/neu"
                className="mt-7 inline-flex items-center gap-2 rounded-2xl border border-[#e4b957]/25 px-5 py-3 font-semibold text-slate-100 transition hover:border-[#e4b957] hover:text-[#e4b957]"
              >
                <Plus size={18} strokeWidth={2} />
                Erste Kapsel erstellen
              </Link>
            </article>

            <article className="rounded-3xl border border-[#e4b957]/15 bg-[linear-gradient(145deg,_rgba(25,31,61,0.94),_rgba(42,36,76,0.88))] p-7 shadow-2xl shadow-black/30 backdrop-blur">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-2xl border border-[#e4b957]/20 bg-[#e4b957]/10 text-[#e4b957]">
                  <Vault size={22} strokeWidth={1.8} />
                </span>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#e4b957]">
                    Status
                  </p>
                  <h2 className="font-serif text-2xl font-semibold text-white">
                    Sammlung
                  </h2>
                </div>
              </div>

              <div className="mt-6 space-y-4 border-t border-[#e4b957]/10 pt-5 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Versiegelt</span>
                  <span className="font-semibold text-slate-100">0</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Bald geöffnet</span>
                  <span className="font-semibold text-[#e4b957]">0</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Geöffnet</span>
                  <span className="font-semibold text-violet-200">0</span>
                </div>
              </div>
            </article>
          </section>

          <section className="mt-10">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#e4b957]">
                  Zuletzt erstellt
                </p>
                <h2 className="mt-3 font-serif text-2xl font-semibold text-white">
                  Meine Zeitkapseln
                </h2>
              </div>

              <Link
                href="/kapseln"
                className="text-sm font-semibold text-[#e4b957] transition hover:text-[#f0ca70]"
              >
                Alle ansehen
              </Link>
            </div>

            <div className="mt-5 rounded-3xl border border-dashed border-[#e4b957]/20 bg-[linear-gradient(145deg,_rgba(15,23,42,0.58),_rgba(39,34,73,0.48))] p-10 text-center shadow-xl shadow-black/20 backdrop-blur">
              <p className="font-serif text-xl font-semibold text-white">
                Meine Sammlung ist noch leer.
              </p>

              <p className="mt-2 text-sm text-slate-400">
                Neue Zeitkapseln erscheinen nach dem Speichern in dieser
                Übersicht.
              </p>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}