import { UserRound } from "lucide-react";
import { AppSidebar } from "@/components/app-sidebar";

const empfaenger = [
  {
    name: "Ich selbst",
    relation: "Eigene Zukunft",
    capsules: 3,
    items: ["Brief an mich selbst", "Ziele für mein zukünftiges Ich"],
  },
  {
    name: "Mila Bergmann",
    relation: "Familie",
    capsules: 1,
    items: ["Brief an Mila zum 18. Geburtstag"],
  },
  {
    name: "Jonas Bergmann",
    relation: "Vertrauensperson",
    capsules: 1,
    items: ["Projekt Nordlicht"],
  },
  {
    name: "Familie",
    relation: "Gruppe",
    capsules: 1,
    items: ["Sommer 2019 in Lissabon"],
  },
];

export default function EmpfaengerPage() {
  return (
    <main className="flex min-h-screen bg-[#070b1a] text-slate-100">
      <AppSidebar />

      <section className="min-h-screen min-w-0 flex-1 bg-[radial-gradient(circle_at_12%_10%,_rgba(216,170,91,0.16),_transparent_22%),radial-gradient(circle_at_88%_18%,_rgba(48,112,166,0.22),_transparent_30%),linear-gradient(135deg,_#141024_0%,_#081324_48%,_#050814_100%)] px-6 py-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d8aa5b]">
            Empfänger
          </p>

          <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Vertrauenskreis
          </h1>

          <p className="mt-3 max-w-3xl text-lg leading-8 text-slate-300">
            Hier verwalte ich, für wen meine Zeitkapseln gedacht sind. Eine
            Kapsel kann für mich selbst bestimmt sein oder einer bestimmten
            Person zugeordnet werden.
          </p>

          <section className="mt-12 grid gap-6 xl:grid-cols-2">
            {empfaenger.map((person) => (
              <article
                key={person.name}
                className="rounded-3xl border border-[#d8aa5b]/15 bg-[linear-gradient(145deg,_rgba(91,52,38,0.35),_rgba(15,23,42,0.72))] p-7 shadow-2xl shadow-black/30 backdrop-blur"
              >
                <div className="flex items-start justify-between gap-5">
                  <div className="flex items-center gap-4">
                    <div className="grid h-14 w-14 place-items-center rounded-2xl border border-[#d8aa5b]/20 bg-[#d8aa5b]/10 text-[#d8aa5b]">
                      <UserRound size={25} strokeWidth={1.8} />
                    </div>

                    <div>
                      <h2 className="font-serif text-2xl font-semibold text-white">
                        {person.name}
                      </h2>

                      <p className="text-slate-400">{person.relation}</p>
                    </div>
                  </div>

                  <span className="rounded-full border border-[#d8aa5b]/35 px-4 py-2 text-sm font-medium text-[#d8aa5b]">
                    {person.capsules} Kapsel{person.capsules === 1 ? "" : "n"}
                  </span>
                </div>

                <div className="mt-7 border-t border-[#d8aa5b]/10 pt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Zugeordnete Kapseln
                  </p>

                  <div className="mt-4 space-y-3">
                    {person.items.map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-white/5 bg-slate-950/25 px-4 py-3 text-slate-300"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </section>
        </div>
      </section>
    </main>
  );
}