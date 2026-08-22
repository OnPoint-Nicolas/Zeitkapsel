import Link from "next/link";
import { ArrowLeft, CalendarDays, FileText, Save } from "lucide-react";
import { AppSidebar } from "@/components/app-sidebar";

export default function NeueKapselPage() {
  return (
     <main className="flex min-h-screen bg-[#070b1a] text-slate-100">
      <AppSidebar />

      <section className="min-h-screen min-w-0 flex-1 bg-[radial-gradient(circle_at_12%_10%,_rgba(216,170,91,0.16),_transparent_22%),radial-gradient(circle_at_88%_18%,_rgba(48,112,166,0.22),_transparent_30%),linear-gradient(135deg,_#141024_0%,_#081324_48%,_#050814_100%)] px-6 py-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/kapseln"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-[#f0d08a]"
          >
            <ArrowLeft size={17} />
            Zurück zu allen Zeitkapseln
          </Link>

          <div className="mt-10 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d8aa5b]">
                Neue Erinnerung
              </p>

              <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Zeitkapsel erstellen
              </h1>

              <p className="mt-3 max-w-2xl text-lg leading-8 text-slate-300">
                Hier halte ich einen Gedanken, eine Erinnerung oder eine
                Nachricht fest und lege fest, wann sie wieder geöffnet werden
                darf.
              </p>
            </div>

            <div className="rounded-[1rem_1.7rem_1.7rem_1.7rem] border border-[#d8aa5b]/25 bg-[linear-gradient(145deg,_#5b3426,_#2b1814)] p-1 shadow-lg shadow-black/30">
              <div className="grid h-14 w-14 place-items-center rounded-xl border border-[#f0d08a]/35 bg-[radial-gradient(circle_at_35%_25%,_rgba(240,208,138,0.35),_rgba(91,52,38,0.25)_38%,_rgba(18,12,10,0.8)_100%)] text-[#f0d08a]">
                <FileText size={27} strokeWidth={1.7} />
              </div>
            </div>
          </div>

          <form className="relative mt-10 overflow-hidden rounded-[0_2.4rem_2rem_2rem] border border-[#d8aa5b]/20 bg-[radial-gradient(circle_at_20%_10%,_rgba(240,208,138,0.18),_transparent_25%),linear-gradient(145deg,_rgba(91,52,38,0.42),_rgba(15,23,42,0.78))] p-6 shadow-2xl shadow-black/35 sm:p-8">
            <div className="grid gap-6">
              <div>
                <label
                  htmlFor="title"
                  className="mb-2 block text-sm font-medium text-slate-200"
                >
                  Titel
                </label>

                <input
                  id="title"
                  type="text"
                  placeholder="Zum Beispiel: Brief an mein zukünftiges Ich"
                  className="w-full rounded-[0.9rem_1.4rem_1.4rem_1.4rem] border border-[#d8aa5b]/15 bg-slate-950/40 px-4 py-3 text-slate-100 outline-none placeholder:text-slate-500 focus:border-[#d8aa5b]/60"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-200"
                >
                  Nachricht
                </label>

                <textarea
                  id="message"
                  rows={8}
                  placeholder="Was möchte ich für später festhalten?"
                  className="w-full resize-none rounded-[0.9rem_1.4rem_1.4rem_1.4rem] border border-[#d8aa5b]/15 bg-slate-950/40 px-4 py-3 text-slate-100 outline-none placeholder:text-slate-500 focus:border-[#d8aa5b]/60"
                />
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="openDate"
                    className="mb-2 block text-sm font-medium text-slate-200"
                  >
                    Öffnungsdatum
                  </label>

                  <div className="relative">
                    <CalendarDays
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#d8aa5b]"
                      size={18}
                      strokeWidth={1.8}
                    />

                    <input
                      id="openDate"
                      type="date"
                      className="w-full rounded-[0.9rem_1.4rem_1.4rem_1.4rem] border border-[#d8aa5b]/15 bg-slate-950/40 py-3 pl-12 pr-4 text-slate-100 outline-none focus:border-[#d8aa5b]/60"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="recipient"
                    className="mb-2 block text-sm font-medium text-slate-200"
                  >
                    Empfänger
                  </label>

                  <select
                    id="recipient"
                    defaultValue="self"
                    className="w-full rounded-[0.9rem_1.4rem_1.4rem_1.4rem] border border-[#d8aa5b]/15 bg-slate-950/40 px-4 py-3 text-slate-100 outline-none focus:border-[#d8aa5b]/60"
                  >
                    <option value="self">Für mich selbst</option>
                    <option value="person">Für eine bestimmte Person</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 border-t border-[#d8aa5b]/10 pt-6">
              <Link
                href="/kapseln"
                className="inline-flex items-center gap-2 rounded-[1rem_1.7rem_1.7rem_1.7rem] bg-[#d8aa5b] px-5 py-3 font-semibold text-slate-950 shadow-lg shadow-[#d8aa5b]/10 transition hover:bg-[#f0d08a]"
              >
                <Save size={18} strokeWidth={2} />
                Kapsel speichern
              </Link>

              <Link
                href="/kapseln"
                className="rounded-[1rem_1.7rem_1.7rem_1.7rem] border border-[#d8aa5b]/20 px-5 py-3 font-semibold text-slate-200 transition hover:border-[#d8aa5b]/50 hover:text-[#f0d08a]"
              >
                Abbrechen
              </Link>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
