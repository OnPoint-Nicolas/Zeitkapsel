import Link from "next/link";

const features = [
  {
    number: "01",
    title: "Gedanken festhalten",
    text: "Schreibe eine Nachricht, die nur für dein zukünftiges Ich bestimmt ist.",
  },
  {
    number: "02",
    title: "Zeit bestimmen",
    text: "Lege fest, wann deine Kapsel wieder geöffnet werden darf.",
  },
  {
    number: "03",
    title: "Später wiederfinden",
    text: "Öffne deine Nachricht zum richtigen Zeitpunkt und sieh zurück.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0b1020] text-slate-100">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(91,71,190,0.42),_transparent_34%),radial-gradient(circle_at_90%_20%,_rgba(35,185,162,0.2),_transparent_28%),linear-gradient(160deg,#0b1020_0%,#12142c_55%,#11182c_100%)]" />

      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          Zeit<span className="text-teal-300">kapsel</span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-slate-400 md:flex">
          <a href="#idee" className="transition hover:text-white">
            Die Idee
          </a>
          <a href="#deine-zeit" className="transition hover:text-white">
            Deine Zeit
          </a>
        </nav>

        <Link
          href="/login"
          className="rounded-xl border border-slate-600 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-teal-300 hover:text-teal-200"
        >
          Anmelden
        </Link>
      </header>

      <section className="mx-auto grid w-full max-w-6xl gap-14 px-6 pb-20 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pt-24">
        <div>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-teal-300">
            Nachrichten für später
          </p>

          <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
            Schreib heute.
            <br />
            <span className="text-teal-300">Öffne morgen.</span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
            Zeitkapsel ist dein persönlicher Ort für Gedanken, Erinnerungen und
            Wünsche. Erstelle Nachrichten für dein zukünftiges Ich und öffne sie
            erst dann, wenn die Zeit gekommen ist.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#idee"
              className="rounded-xl bg-teal-300 px-6 py-3 font-semibold text-slate-950 transition hover:bg-teal-200"
            >
              Mehr entdecken
            </a>

            <Link
              href="/login"
              className="rounded-xl border border-slate-600 px-6 py-3 font-semibold text-slate-100 transition hover:border-slate-400"
            >
              Zur Anmeldung
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-5 text-sm text-slate-400">
            <span>✦ Private Nachrichten</span>
            <span>✦ Öffnungsdatum festlegen</span>
            <span>✦ Eigene Erinnerungen</span>
          </div>
        </div>

        <section className="rounded-[2rem] border border-slate-700/80 bg-slate-950/40 p-6 shadow-2xl shadow-black/30 backdrop-blur">
          <div className="flex items-center justify-between border-b border-slate-700/70 pb-5">
            <div>
              <p className="text-sm text-slate-400">Deine nächste Zeitkapsel</p>
              <h2 className="mt-1 text-xl font-bold">Für mein Zukunfts-Ich</h2>
            </div>

            <span className="rounded-full border border-teal-300/30 bg-teal-300/10 px-3 py-1 text-xs font-semibold text-teal-200">
              Verschlossen
            </span>
          </div>

          <div className="mt-6 rounded-2xl border border-slate-700/80 bg-slate-900/70 p-6">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-teal-300">
              Öffnet am
            </p>

            <p className="mt-3 text-3xl font-bold">17. August 2027</p>

            <div className="mt-6 h-2 overflow-hidden rounded-full bg-slate-700">
              <div className="h-full w-1/4 rounded-full bg-teal-300" />
            </div>

            <div className="mt-5 flex items-center justify-between text-sm">
              <span className="text-slate-400">Erstellt heute</span>
              <span className="font-medium text-teal-200">Noch 365 Tage</span>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-3 gap-3 text-center">
            <div className="rounded-xl bg-slate-900/80 p-3">
              <p className="text-xl font-bold text-teal-300">3</p>
              <p className="mt-1 text-xs text-slate-400">Kapseln</p>
            </div>

            <div className="rounded-xl bg-slate-900/80 p-3">
              <p className="text-xl font-bold text-teal-300">2</p>
              <p className="mt-1 text-xs text-slate-400">Verschlossen</p>
            </div>

            <div className="rounded-xl bg-slate-900/80 p-3">
              <p className="text-xl font-bold text-teal-300">1</p>
              <p className="mt-1 text-xs text-slate-400">Geöffnet</p>
            </div>
          </div>
        </section>
      </section>

      <section id="idee" className="border-y border-slate-800 bg-slate-950/30 py-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-300">
            Deine Erinnerungen, deine Zeit
          </p>

          <h2 className="mt-3 max-w-2xl text-3xl font-bold">
            Nicht alles muss sofort gelesen werden.
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-slate-400">
            Manche Gedanken ergeben erst später Sinn. Mit Zeitkapsel bewahrst du
            sie auf, ohne sie zu verlieren.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.number}
                className="rounded-2xl border border-slate-700/80 bg-[#151a31] p-6"
              >
                <p className="text-2xl font-bold text-teal-300">
                  {feature.number}
                </p>

                <h3 className="mt-5 text-xl font-semibold">{feature.title}</h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {feature.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="deine-zeit" className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-3xl border border-slate-700 bg-gradient-to-r from-[#17203c] to-[#152d37] p-8 sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-300">
            Deine Zeitkapsel
          </p>

          <h2 className="mt-3 max-w-2xl text-3xl font-bold">
            Ein kleiner Moment heute kann später viel bedeuten.
          </h2>

          <p className="mt-4 max-w-xl text-slate-300">
            Halte besondere Gedanken und Erinnerungen für einen späteren Moment
            fest.
          </p>

          <Link
            href="/login"
            className="mt-8 inline-block rounded-xl bg-teal-300 px-6 py-3 font-semibold text-slate-950 transition hover:bg-teal-200"
          >
            Erste Kapsel vorbereiten
          </Link>
        </div>
      </section>

      <footer className="border-t border-slate-800 px-6 py-7 text-center text-sm text-slate-500">
        Zeitkapsel · Abschlussprojekt
      </footer>
    </main>
  );
}
