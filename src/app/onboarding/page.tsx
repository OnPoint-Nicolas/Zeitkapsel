import Link from "next/link";
import { Clock3, LockKeyhole, PenLine } from "lucide-react";
import { requireUser } from "@/lib/session";

export default async function OnboardingPage() {
  const user = await requireUser();

  const steps = [
    {
      icon: PenLine,
      title: "Erinnerung festhalten",
      description:
        "Gib deiner Zeitkapsel einen Titel, schreibe eine persönliche Nachricht und wähle ein Öffnungsdatum.",
    },
    {
      icon: LockKeyhole,
      title: "Zeitkapsel versiegeln",
      description:
        "Der Inhalt bleibt bis zum gewählten Datum geschützt und wartet sicher in deiner Sammlung.",
    },
    {
      icon: Clock3,
      title: "Den Moment wieder öffnen",
      description:
        "Am Öffnungstag wird deine Nachricht lesbar und der gespeicherte Moment kehrt zurück.",
    },
  ];

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_12%_10%,_rgba(216,170,91,0.16),_transparent_22%),radial-gradient(circle_at_88%_18%,_rgba(48,112,166,0.22),_transparent_30%),linear-gradient(135deg,_#141024_0%,_#081324_48%,_#050814_100%)] px-6 py-12 text-slate-100">
      <section className="mx-auto max-w-5xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d8aa5b]">
          Willkommen bei Aevum
        </p>

        <h1 className="mt-4 max-w-3xl font-serif text-4xl font-semibold tracking-tight text-white sm:text-6xl">
          Hallo {user.name || "Zeitreisender"}.
        </h1>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
          In drei Schritten entsteht deine erste persönliche Zeitkapsel.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <article
                key={step.title}
                className="rounded-[0_2rem_2rem_2rem] border border-[#d8aa5b]/20 bg-black/20 p-7 shadow-2xl shadow-black/25"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl border border-[#d8aa5b]/25 bg-[#d8aa5b]/10 text-[#f0d08a]">
                    <Icon size={23} />
                  </span>

                  <span className="font-serif text-2xl text-[#d8aa5b]/60">
                    0{index + 1}
                  </span>
                </div>

                <h2 className="mt-7 font-serif text-2xl font-semibold text-white">
                  {step.title}
                </h2>

                <p className="mt-4 leading-7 text-slate-400">
                  {step.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/kapseln/neu"
            className="rounded-full bg-[#d8aa5b] px-6 py-3 font-semibold text-slate-950 transition hover:bg-[#f0d08a]"
          >
            Erste Zeitkapsel erstellen
          </Link>

          <Link
            href="/dashboard"
            className="rounded-full border border-[#d8aa5b]/30 px-6 py-3 font-semibold text-slate-200 transition hover:border-[#d8aa5b] hover:text-[#f0d08a]"
          >
            Später zum Dashboard
          </Link>
        </div>
      </section>
    </main>
  );
}