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

      <section className="min-h-screen min-w-0 flex-1 bg-[linear-gradient(135deg,_rgba(38,29,78,0.95)_0%,_rgba(10,18,38,0.98)_45%,_rgba(9,31,55,0.95)_100%)] px-6 py-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#e4b957]">
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
                className="rounded-3xl border border-[#e4b957]/15 bg-[linear-gradient(145deg,_rgba(28,34,67,0.94),_rgba(45,37,82,0.88))] p-7 shadow-2xl shadow-black/30 backdrop-blur"
              >
                <div className="flex items-start justify-between gap-5">
                  <div className="flex items-center gap-4">
                    <div className="grid h-14 w-14 place-items-center rounded-2xl border border-[#e4b957]/20 bg-[#e4b957]/10 text-[#e4b957]">
                      <UserRound size={25} strokeWidth={1.8} />
                    </div>

                    <div>
                      <h2 className="font-serif text-2xl font-semibold text-white">
                        {person.name}
                      </h2>

                      <p className="text-slate-400">{person.relation}</p>
                    </div>
                  </div>

                  <span className="rounded-full border border-[#e4b957]/35 px-4 py-2 text-sm font-medium text-[#e4b957]">
                    {person.capsules} Kapsel{person.capsules === 1 ? "" : "n"}
                  </span>
                </div>

                <div className="mt-7 border-t border-[#e4b957]/10 pt-5">
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