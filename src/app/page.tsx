import Link from "next/link";
import { ArrowRight, CalendarClock, LockKeyhole, Sparkles } from "lucide-react";

const features = [
  {
    title: "Gedanken festhalten",
    text: "Ich speichere Nachrichten, Ziele oder Erinnerungen für einen späteren Zeitpunkt.",
    icon: Sparkles,
  },
  {
    title: "Öffnungsdatum wählen",
    text: "Jede Zeitkapsel bekommt ein Datum, ab dem sie wieder sichtbar wird.",
    icon: CalendarClock,
  },
  {
    title: "Privat verwahren",
    text: "Meine Kapseln bleiben Teil meiner persönlichen Sammlung und sind nur für mich bestimmt.",
    icon: LockKeyhole,
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#070b1a] text-slate-100">
      <section className="min-h-screen bg-[linear-gradient(135deg,_rgba(38,29,78,0.95)_0%,_rgba(10,18,38,0.98)_45%,_rgba(9,31,55,0.95)_100%)] px-6 py-8">
        <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl flex-col">
          <header className="flex items-center justify-between gap-6">
            <Link href="/" className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl border border-[#e4b957]/20 bg-[#e4b957]/10 text-[#e4b957]">
                <Sparkles size={22} strokeWidth={1.8} />
              </span>

              <div>
                <p className="font-serif text-2xl font-semibold text-white">
                  Zeitkapsel
                </p>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  Erinnerungen für später
                </p>
              </div>
            </Link>

            <nav className="flex items-center gap-3">
              <Link
                href="/login"
                className="rounded-2xl border border-[#e4b957]/20 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-[#e4b957]/50 hover:text-[#e4b957]"
              >
                Anmelden
              </Link>

              <Link
                href="/dashboard"
                className="rounded-2xl bg-[#e4b957] px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-[#f0ca70]"
              >
                Zur App
              </Link>
            </nav>
          </header>

          <div className="grid flex-1 items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr]">
            <section>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#e4b957]">
                Digitale Zeitkapseln
              </p>

              <h1 className="mt-5 max-w-4xl font-serif text-5xl font-semibold leading-tight text-white sm:text-6xl">
                Erinnerungen bewahren, bis der richtige Moment gekommen ist.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Mit Zeitkapsel halte ich persönliche Nachrichten, Gedanken und
                Ziele fest. Jede Kapsel bekommt ein Öffnungsdatum und bleibt bis
                dahin in meiner Sammlung sichtbar als versiegelter Eintrag.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/kapseln/neu"
                  className="inline-flex items-center gap-2 rounded-2xl bg-[#e4b957] px-5 py-3 font-semibold text-slate-950 shadow-lg shadow-[#e4b957]/10 transition hover:bg-[#f0ca70]"
                >
                  Zeitkapsel erstellen
                  <ArrowRight size={18} strokeWidth={2} />
                </Link>

                <Link
                  href="/dashboard"
                  className="inline-flex items-center gap-2 rounded-2xl border border-[#e4b957]/25 px-5 py-3 font-semibold text-slate-100 transition hover:border-[#e4b957] hover:text-[#e4b957]"
                >
                  Dashboard ansehen
                </Link>
              </div>
            </section>

            <section className="rounded-3xl border border-[#e4b957]/15 bg-[linear-gradient(145deg,_rgba(28,34,67,0.94),_rgba(45,37,82,0.88))] p-7 shadow-2xl shadow-black/30 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#e4b957]">
                Beispiel-Kapsel
              </p>

              <h2 className="mt-4 font-serif text-3xl font-semibold text-white">
                Brief an mein zukünftiges Ich
              </h2>

              <p className="mt-4 leading-7 text-slate-400">
                Eine Nachricht mit Gedanken, Zielen und Erinnerungen, die erst
                zu einem späteren Zeitpunkt wieder geöffnet wird.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/5 bg-slate-950/25 p-4">
                  <p className="text-sm text-slate-500">Status</p>
                  <p className="mt-2 font-semibold text-[#e4b957]">
                    versiegelt
                  </p>
                </div>

                <div className="rounded-2xl border border-white/5 bg-slate-950/25 p-4">
                  <p className="text-sm text-slate-500">Öffnet am</p>
                  <p className="mt-2 font-semibold text-slate-100">
                    15. Januar 2030
                  </p>
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
                  className="rounded-3xl border border-[#e4b957]/15 bg-[linear-gradient(145deg,_rgba(28,34,67,0.84),_rgba(45,37,82,0.76))] p-6 shadow-xl shadow-black/20 backdrop-blur"
                >
                  <div className="grid h-12 w-12 place-items-center rounded-2xl border border-[#e4b957]/20 bg-[#e4b957]/10 text-[#e4b957]">
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