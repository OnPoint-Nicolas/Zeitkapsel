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

      <section className="min-h-screen min-w-0 flex-1 bg-[radial-gradient(circle_at_12%_10%,_rgba(216,170,91,0.16),_transparent_22%),radial-gradient(circle_at_88%_18%,_rgba(48,112,166,0.22),_transparent_30%),linear-gradient(135deg,_#141024_0%,_#081324_48%,_#050814_100%)] px-6 py-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d8aa5b]">
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
              className="inline-flex items-center gap-2 rounded-2xl bg-[#d8aa5b] px-5 py-3 font-semibold text-slate-950 shadow-lg shadow-[#d8aa5b]/10 transition hover:bg-[#f0d08a]"
            >
              <Plus size={19} strokeWidth={2} />
              Neue Zeitkapsel
            </Link>
          </div>

          <section className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map(([number, label]) => (
              <article
                key={label}
                className="rounded-3xl border border-[#d8aa5b]/15 bg-[linear-gradient(145deg,_rgba(91,52,38,0.35),_rgba(15,23,42,0.72))] p-6 shadow-xl shadow-black/20 backdrop-blur"
              >
                <p className="font-serif text-3xl font-semibold text-[#d8aa5b]">
                  {number}
                </p>
                <p className="mt-2 text-sm text-slate-400">{label}</p>
              </article>
            ))}
          </section>

          <section className="mt-10 grid gap-6 xl:grid-cols-[1.35fr_0.65fr]">
            <article className="rounded-3xl border border-[#d8aa5b]/15 bg-[linear-gradient(145deg,_rgba(91,52,38,0.35),_rgba(15,23,42,0.72))] p-7 shadow-2xl shadow-black/30 backdrop-blur">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d8aa5b]">
                    Nächster Moment
                  </p>
                  <h2 className="mt-3 font-serif text-2xl font-semibold text-white">
                    Noch keine Kapsel geplant
                  </h2>
                </div>

                <span className="grid h-12 w-12 place-items-center rounded-2xl border border-[#d8aa5b]/20 bg-[#d8aa5b]/10 text-[#d8aa5b]">
                  <Clock3 size={23} strokeWidth={1.8} />
                </span>
              </div>

              <p className="mt-4 max-w-xl leading-7 text-slate-400">
                Sobald ich eine Zeitkapsel erstelle, erscheint hier der nächste
                wichtige Öffnungstermin.
              </p>

              <Link
                href="/kapseln/neu"
                className="mt-7 inline-flex items-center gap-2 rounded-2xl border border-[#d8aa5b]/25 px-5 py-3 font-semibold text-slate-100 transition hover:border-[#d8aa5b] hover:text-[#d8aa5b]"
              >
                <Plus size={18} strokeWidth={2} />
                Erste Kapsel erstellen
              </Link>
            </article>

            <article className="rounded-3xl border border-[#d8aa5b]/15 bg-[linear-gradient(145deg,_rgba(91,52,38,0.35),_rgba(15,23,42,0.72))] p-7 shadow-2xl shadow-black/30 backdrop-blur">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-2xl border border-[#d8aa5b]/20 bg-[#d8aa5b]/10 text-[#d8aa5b]">
                  <Vault size={22} strokeWidth={1.8} />
                </span>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d8aa5b]">
                    Status
                  </p>
                  <h2 className="font-serif text-2xl font-semibold text-white">
                    Sammlung
                  </h2>
                </div>
              </div>

              <div className="mt-6 space-y-4 border-t border-[#d8aa5b]/10 pt-5 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Versiegelt</span>
                  <span className="font-semibold text-slate-100">0</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Bald geöffnet</span>
                  <span className="font-semibold text-[#d8aa5b]">0</span>
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
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d8aa5b]">
                  Zuletzt erstellt
                </p>
                <h2 className="mt-3 font-serif text-2xl font-semibold text-white">
                  Meine Zeitkapseln
                </h2>
              </div>

              <Link
                href="/kapseln"
                className="text-sm font-semibold text-[#d8aa5b] transition hover:text-[#f0d08a]"
              >
                Alle ansehen
              </Link>
            </div>

            <div className="mt-5 rounded-3xl border border-dashed border-[#d8aa5b]/20 bg-[linear-gradient(145deg,_rgba(15,23,42,0.58),_rgba(39,34,73,0.48))] p-10 text-center shadow-xl shadow-black/20 backdrop-blur">
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