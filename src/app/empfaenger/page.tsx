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
    <main className="min-h-screen bg-[#070b1a] text-slate-100">
      <div className="flex">
        <AppSidebar />

        <section className="min-h-screen flex-1 bg-[radial-gradient(circle_at_top_left,_rgba(91,57,148,0.35),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(20,82,120,0.35),_transparent_35%)] px-8 py-10 lg:px-16">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#e4b957]">
            Empfänger
          </p>

          <h1 className="mt-4 font-serif text-5xl font-semibold text-white">
            Vertrauenskreis
          </h1>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
            Hier verwalte ich, für wen meine Zeitkapseln gedacht sind. Eine
            Kapsel kann nur für mich selbst bestimmt sein oder einer bestimmten
            Person zugeordnet werden.
          </p>

          <div className="mt-12 grid gap-6 xl:grid-cols-2">
            {empfaenger.map((person) => (
              <article
                key={person.name}
                className="rounded-3xl border border-violet-200/15 bg-[#171b35]/85 p-7 shadow-2xl shadow-black/25"
              >
                <div className="flex items-start justify-between gap-5">
                  <div className="flex items-center gap-4">
                    <div className="grid h-14 w-14 place-items-center rounded-full bg-violet-400/25 font-semibold text-violet-100">
                      {person.name
                        .split(" ")
                        .map((part) => part[0])
                        .join("")
                        .slice(0, 2)}
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

                <div className="mt-7 border-t border-white/10 pt-5">
                  <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
                    Zugeordnete Kapseln
                  </p>

                  <div className="mt-4 space-y-3">
                    {person.items.map((item) => (
                      <div
                        key={item}
                        className="flex items-center justify-between rounded-2xl bg-slate-950/25 px-4 py-3 text-slate-300"
                      >
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}