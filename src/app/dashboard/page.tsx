import Link from "next/link";
import { AppSidebar } from "@/components/app-sidebar";

const stats = [
  ["0", "Zeitkapseln"],
  ["0", "Versiegelt"],
  ["0", "Geöffnet"],
  ["–", "Nächste Öffnung"],
];

export default function DashboardPage() {
  return (
    <main className="flex min-h-screen bg-[#0b1020] text-slate-100">
      <AppSidebar />

      <section className="min-w-0 flex-1 px-6 py-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#e4b957]">
            Übersicht
          </p>

          <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
            <div>
              <h1 className="font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
                Guten Abend.
              </h1>

              <p className="mt-3 text-lg text-slate-400">
                Hier ist dein Überblick über alle Erinnerungen, die noch vor dir
                liegen.
              </p>
            </div>

            <Link
              href="/kapseln/neu"
              className="rounded-2xl bg-[#e4b957] px-5 py-3 font-semibold text-slate-950 transition hover:bg-[#f0ca70]"
            >
              Neue Zeitkapsel
            </Link>
          </div>

          <section className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map(([number, label]) => (
              <article
                key={label}
                className="rounded-3xl border border-violet-200/15 bg-[#191b38] p-6"
              >
                <p className="font-serif text-3xl font-semibold text-[#e4b957]">
                  {number}
                </p>
                <p className="mt-2 text-sm text-slate-400">{label}</p>
              </article>
            ))}
          </section>

          <section className="mt-10 grid gap-6 xl:grid-cols-[1.35fr_0.65fr]">
            <article className="rounded-3xl border border-violet-200/15 bg-[#191b38] p-7">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#e4b957]">
                    Nächster Moment
                  </p>
                  <h2 className="mt-3 font-serif text-2xl font-semibold">
                    Noch keine Kapsel geplant
                  </h2>
                </div>

                <span className="grid h-12 w-12 place-items-center rounded-2xl border border-violet-300/25 bg-violet-400/10 text-xl text-[#e4b957]">
                  ◷
                </span>
              </div>

              <p className="mt-4 max-w-xl leading-7 text-slate-400">
                Erstelle deine erste Zeitkapsel und lege fest, wann du sie
                wieder öffnen möchtest.
              </p>

              <Link
                href="/kapseln/neu"
                className="mt-7 inline-block rounded-2xl border border-violet-200/20 px-5 py-3 font-semibold text-slate-100 transition hover:border-[#e4b957] hover:text-[#e4b957]"
              >
                Erste Kapsel erstellen
              </Link>
            </article>

            <article className="rounded-3xl border border-violet-200/15 bg-[#191b38] p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#e4b957]">
                Status
              </p>

              <h2 className="mt-3 font-serif text-2xl font-semibold">
                Deine Sammlung
              </h2>

              <div className="mt-6 space-y-4 border-t border-violet-200/10 pt-5 text-sm">
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
                <h2 className="mt-3 font-serif text-2xl font-semibold">
                  Deine Zeitkapseln
                </h2>
              </div>

              <Link
                href="/kapseln"
                className="text-sm font-semibold text-[#e4b957] transition hover:text-[#f0ca70]"
              >
                Alle ansehen →
              </Link>
            </div>

            <div className="mt-5 rounded-3xl border border-dashed border-violet-200/20 bg-slate-950/20 p-10 text-center">
              <p className="font-serif text-xl font-semibold">
                Deine Liste ist noch leer.
              </p>

              <p className="mt-2 text-sm text-slate-400">
                Gespeicherte Zeitkapseln erscheinen später hier.
              </p>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}