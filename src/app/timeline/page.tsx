import { AppSidebar } from "@/components/app-sidebar";

const timelineItems = [
  {
    year: "2025",
    title: "Sommer 2019 in Lissabon",
    status: "geöffnet",
    date: "01. Juli 2025",
    info: "Diese Kapsel ist bereits geöffnet.",
  },
  {
    year: "2026",
    title: "Projekt Nordlicht",
    status: "bald geöffnet",
    date: "30. November 2026",
    info: "Diese Kapsel steht kurz vor dem Öffnungsdatum.",
  },
  {
    year: "2027",
    title: "Ziele für mein zukünftiges Ich",
    status: "versiegelt",
    date: "02. September 2027",
    info: "Diese Kapsel bleibt bis zum Öffnungsdatum gesperrt.",
  },
  {
    year: "2030",
    title: "Brief an mich selbst",
    status: "versiegelt",
    date: "15. Januar 2030",
    info: "Eine persönliche Nachricht für die Zukunft.",
  },
];

export default function TimelinePage() {
  return (
    <main className="min-h-screen bg-[#070b1a] text-slate-100">
      <div className="flex">
        <AppSidebar />

        <section className="min-h-screen flex-1 bg-[radial-gradient(circle_at_top_left,_rgba(91,57,148,0.35),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(20,82,120,0.35),_transparent_35%)] px-8 py-10 lg:px-16">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#e4b957]">
            Chronologie
          </p>

          <h1 className="mt-4 font-serif text-5xl font-semibold text-white">
            Timeline
          </h1>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
            Hier sehe ich meine Zeitkapseln nach Öffnungsdatum sortiert. So
            erkenne ich, welche Erinnerungen bereits geöffnet sind und welche
            noch in der Zukunft liegen.
          </p>

          <div className="mt-12 space-y-10">
            {timelineItems.map((item) => (
              <article key={item.title} className="grid gap-4 lg:grid-cols-[120px_1fr]">
                <div>
                  <p className="font-serif text-3xl font-semibold text-[#e4b957]">
                    {item.year}
                  </p>
                </div>

                <div className="rounded-3xl border border-violet-200/15 bg-[#171b35]/85 p-7 shadow-2xl shadow-black/25">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h2 className="font-serif text-2xl font-semibold text-white">
                        {item.title}
                      </h2>
                      <p className="mt-2 text-slate-400">{item.info}</p>
                    </div>

                    <span className="rounded-full border border-[#e4b957]/35 px-4 py-2 text-sm font-medium text-[#e4b957]">
                      {item.status}
                    </span>
                  </div>

                  <div className="mt-6 border-t border-white/10 pt-4 text-sm text-slate-400">
                    Öffnet am {item.date}
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