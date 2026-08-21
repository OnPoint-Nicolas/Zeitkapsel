import { CalendarDays } from "lucide-react";
import { AppSidebar } from "@/components/app-sidebar";

const timelineItems = [
  {
    year: "2025",
    title: "Sommer 2019 in Lissabon",
    status: "geöffnet",
    date: "01. Juli 2025",
    info: "Diese Erinnerung ist bereits geöffnet und bleibt im Archiv sichtbar.",
  },
  {
    year: "2026",
    title: "Projekt Nordlicht",
    status: "bald geöffnet",
    date: "30. November 2026",
    info: "Diese Kapsel erreicht als Nächstes ihr Öffnungsdatum.",
  },
  {
    year: "2027",
    title: "Ziele für mein zukünftiges Ich",
    status: "versiegelt",
    date: "02. September 2027",
    info: "Diese Kapsel bleibt bis zum gewählten Datum geschlossen.",
  },
  {
    year: "2030",
    title: "Brief an mich selbst",
    status: "versiegelt",
    date: "15. Januar 2030",
    info: "Eine persönliche Nachricht, die erst in der Zukunft sichtbar wird.",
  },
];

function getStatusClasses(status: string) {
  if (status === "geöffnet") {
    return "border-violet-300/35 bg-violet-400/15 text-violet-100";
  }

  if (status === "bald geöffnet") {
    return "border-[#e4b957]/45 bg-[#e4b957]/10 text-[#e4b957]";
  }

  return "border-slate-500/35 bg-slate-400/10 text-slate-300";
}

export default function TimelinePage() {
  return (
    <main className="flex min-h-screen bg-[#070b1a] text-slate-100">
      <AppSidebar />

      <section className="min-h-screen min-w-0 flex-1 bg-[linear-gradient(135deg,_rgba(38,29,78,0.95)_0%,_rgba(10,18,38,0.98)_45%,_rgba(9,31,55,0.95)_100%)] px-6 py-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#e4b957]">
            Chronologie
          </p>

          <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Timeline
          </h1>

          <p className="mt-3 max-w-3xl text-lg leading-8 text-slate-300">
            Hier sehe ich meine Zeitkapseln nach Öffnungsdatum sortiert. So
            erkenne ich, welche Erinnerungen bereits geöffnet sind und welche
            noch in der Zukunft liegen.
          </p>

          <section className="mt-12 space-y-10">
            {timelineItems.map((item) => (
              <article
                key={item.title}
                className="grid gap-4 lg:grid-cols-[120px_1fr]"
              >
                <div>
                  <p className="font-serif text-3xl font-semibold text-[#e4b957]">
                    {item.year}
                  </p>
                </div>

                <div className="relative rounded-3xl border border-[#e4b957]/15 bg-[linear-gradient(145deg,_rgba(28,34,67,0.94),_rgba(45,37,82,0.88))] p-7 shadow-2xl shadow-black/30 backdrop-blur">
                  <div className="absolute -left-7 top-9 hidden h-3 w-3 rounded-full bg-[#e4b957] shadow-lg shadow-[#e4b957]/30 lg:block" />

                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h2 className="font-serif text-2xl font-semibold text-white">
                        {item.title}
                      </h2>

                      <p className="mt-2 leading-7 text-slate-400">
                        {item.info}
                      </p>
                    </div>

                    <span
                      className={`w-fit rounded-full border px-3 py-1 text-xs font-semibold ${getStatusClasses(
                        item.status,
                      )}`}
                    >
                      {item.status}
                    </span>
                  </div>

                  <div className="mt-6 flex items-center gap-2 border-t border-[#e4b957]/10 pt-4 text-sm text-slate-400">
                    <CalendarDays size={17} strokeWidth={1.8} />
                    Öffnet am {item.date}
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