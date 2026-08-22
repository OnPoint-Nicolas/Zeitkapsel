import Link from "next/link";
import {
  ArrowRight,
  CalendarClock,
  LockKeyhole,
  Sparkles,
  TimerReset,
} from "lucide-react";

const features = [
  {
    title: "Moment festhalten",
    text: "Ich speichere Gedanken, Nachrichten oder Erinnerungen, bevor sie im Alltag verloren gehen.",
    icon: Sparkles,
  },
  {
    title: "Zeitpunkt wählen",
    text: "Jede Kapsel bekommt ein Öffnungsdatum und bleibt bis dahin bewusst verschlossen.",
    icon: CalendarClock,
  },
  {
    title: "Für mich oder andere",
    text: "Eine Kapsel kann für mein zukünftiges Ich oder für eine bestimmte Person gedacht sein.",
    icon: LockKeyhole,
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#070b1a] text-slate-100">
      <section className="min-h-screen bg-[radial-gradient(circle_at_12%_10%,_rgba(216,170,91,0.16),_transparent_22%),radial-gradient(circle_at_88%_18%,_rgba(48,112,166,0.22),_transparent_30%),linear-gradient(135deg,_#141024_0%,_#081324_48%,_#050814_100%)] px-6 py-8">
        <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl flex-col">
          <header className="flex items-center justify-between gap-6">
            <Link href="/" className="flex items-center gap-3">
              <span className="rounded-2xl border border-[#d8aa5b]/40 bg-[linear-gradient(145deg,_#5b3426,_#2b1814)] p-1 shadow-lg shadow-black/30">
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-[#f0d08a]/35 bg-[radial-gradient(circle_at_35%_25%,_rgba(240,208,138,0.35),_rgba(91,52,38,0.25)_38%,_rgba(18,12,10,0.8)_100%)] text-[#f0d08a]">
                  <TimerReset size={23} strokeWidth={1.7} />
                </span>
              </span>

              <div>
                <p className="font-serif text-2xl font-semibold text-white">
                  Aevum
                </p>
                <p className="text-xs uppercase tracking-[0.22em] text-[#d8aa5b]">
                  Zeitkapsel
                </p>
              </div>
            </Link>

            <nav className="flex items-center gap-3">
              <Link
                href="/login"
                className="rounded-2xl border border-[#d8aa5b]/20 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-[#d8aa5b]/50 hover:text-[#f0d08a]"
              >
                Anmelden
              </Link>

              <Link
                href="/dashboard"
                className="rounded-2xl bg-[#d8aa5b] px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-[#f0d08a]"
              >
                Zur App
              </Link>
            </nav>
          </header>

          <div className="grid flex-1 items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr]">
            <section>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d8aa5b]">
                Digitale Zeitkapseln
              </p>

              <h1 className="mt-5 max-w-4xl font-serif text-5xl font-semibold leading-tight text-white sm:text-6xl">
                Ein Moment kann mit der Zeit größer werden.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Aevum ist eine persönliche Zeitkapsel-App. Ich kann Gedanken,
                Erinnerungen oder Nachrichten festhalten und sie für einen
                späteren Zeitpunkt bewahren.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/kapseln/neu"
                  className="inline-flex items-center gap-2 rounded-2xl bg-[#d8aa5b] px-5 py-3 font-semibold text-slate-950 shadow-lg shadow-[#d8aa5b]/10 transition hover:bg-[#f0d08a]"
                >
                  Zeitkapsel erstellen
                  <ArrowRight size={18} strokeWidth={2} />
                </Link>

                <Link
                  href="/dashboard"
                  className="inline-flex items-center gap-2 rounded-2xl border border-[#d8aa5b]/25 px-5 py-3 font-semibold text-slate-100 transition hover:border-[#d8aa5b] hover:text-[#f0d08a]"
                >
                  Dashboard ansehen
                </Link>
              </div>
            </section>

            <section className="relative overflow-hidden rounded-3xl border border-[#d8aa5b]/25 bg-[radial-gradient(circle_at_25%_20%,_rgba(240,208,138,0.34),_transparent_28%),linear-gradient(145deg,_#6b3f2d,_#2b1814)] p-7 shadow-2xl shadow-black/35">
              <div className="pointer-events-none absolute inset-0 bg-[repeating-radial-gradient(circle_at_35%_20%,_rgba(255,255,255,0.14)_0,_rgba(255,255,255,0.14)_1px,_transparent_2px,_transparent_10px)] opacity-25" />

              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f0d08a]">
                  Beispiel-Kapsel
                </p>

                <h2 className="mt-4 font-serif text-3xl font-semibold text-white">
                  Brief an mein zukünftiges Ich
                </h2>

                <p className="mt-4 leading-7 text-slate-200">
                  Eine Nachricht mit Gedanken, Zielen und Erinnerungen, die erst
                  zu einem späteren Zeitpunkt wieder geöffnet wird.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-black/20 bg-black/20 p-4">
                    <p className="text-sm text-slate-400">Status</p>
                    <p className="mt-2 font-semibold text-[#f0d08a]">
                      versiegelt
                    </p>
                  </div>

                  <div className="rounded-2xl border border-black/20 bg-black/20 p-4">
                    <p className="text-sm text-slate-400">Öffnet am</p>
                    <p className="mt-2 font-semibold text-slate-100">
                      15. Januar 2030
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <section className="grid gap-4 pb-8 md:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.title}
                  className="rounded-3xl border border-[#d8aa5b]/15 bg-[linear-gradient(145deg,_rgba(91,52,38,0.35),_rgba(15,23,42,0.72))] p-6 shadow-xl shadow-black/25"
                >
                  <div className="grid h-12 w-12 place-items-center rounded-2xl border border-[#d8aa5b]/20 bg-[#d8aa5b]/10 text-[#f0d08a]">
                    <Icon size={23} strokeWidth={1.8} />
                  </div>

                  <h2 className="mt-5 font-serif text-xl font-semibold text-white">
                    {feature.title}
                  </h2>

                  <p className="mt-3 leading-7 text-slate-400">
                    {feature.text}
                  </p>
                </article>
              );
            })}
          </section>
        </div>
      </section>
    </main>
  );
}
