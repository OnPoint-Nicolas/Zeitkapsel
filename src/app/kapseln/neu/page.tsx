import Link from "next/link";

export default function NeueKapselPage() {
  return (
    <main className="min-h-screen bg-[#0b1020] text-slate-100">
      <header className="border-b border-slate-800 bg-slate-950/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-2xl font-bold tracking-tight">
            Zeit<span className="text-teal-300">kapsel</span>
          </Link>

          <nav className="flex items-center gap-2 text-sm">
            <Link
              href="/dashboard"
              className="rounded-lg px-4 py-2 text-slate-400 transition hover:bg-slate-900 hover:text-white"
            >
              Dashboard
            </Link>

            <Link
              href="/kapseln/neu"
              className="rounded-lg bg-slate-800 px-4 py-2 font-medium text-white"
            >
              Neue Kapsel
            </Link>
          </nav>

          <Link
            href="/"
            className="hidden rounded-lg border border-slate-700 px-4 py-2 text-sm text-slate-300 transition hover:border-teal-300 sm:block"
          >
            Abmelden
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-6 py-12">
        <Link
          href="/dashboard"
          className="text-sm text-slate-400 transition hover:text-teal-200"
        >
          ← Zurück zum Dashboard
        </Link>

        <p className="mt-10 text-sm font-semibold uppercase tracking-[0.22em] text-teal-300">
          Neue Erinnerung
        </p>

        <h1 className="mt-3 text-4xl font-bold">Zeitkapsel erstellen</h1>

        <p className="mt-3 text-slate-400">
          Schreibe eine Nachricht für dein zukünftiges Ich und entscheide, wann
          sie wieder geöffnet werden darf.
        </p>

        <form className="mt-10 rounded-3xl border border-slate-700 bg-slate-950/40 p-6 sm:p-8">
          <div>
            <label
              htmlFor="title"
              className="mb-2 block text-sm font-medium text-slate-200"
            >
              Titel
            </label>

            <input
              id="title"
              type="text"
              placeholder="Zum Beispiel: Nachricht an mein Ich in einem Jahr"
              className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 outline-none placeholder:text-slate-500 focus:border-teal-300"
            />
          </div>

          <div className="mt-6">
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-slate-200"
            >
              Deine Nachricht
            </label>

            <textarea
              id="message"
              rows={8}
              placeholder="Was möchtest du deinem zukünftigen Ich sagen?"
              className="w-full resize-none rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 outline-none placeholder:text-slate-500 focus:border-teal-300"
            />
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="openDate"
                className="mb-2 block text-sm font-medium text-slate-200"
              >
                Öffnungsdatum
              </label>

              <input
                id="openDate"
                type="date"
                className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 outline-none focus:border-teal-300"
              />
            </div>

            <div>
              <label
                htmlFor="mood"
                className="mb-2 block text-sm font-medium text-slate-200"
              >
                Stimmung
              </label>

              <select
                id="mood"
                defaultValue=""
                className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 outline-none focus:border-teal-300"
              >
                <option value="" disabled>
                  Optional auswählen
                </option>
                <option>Hoffnungsvoll</option>
                <option>Dankbar</option>
                <option>Nachdenklich</option>
                <option>Motiviert</option>
                <option>Glücklich</option>
              </select>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/dashboard"
              className="rounded-xl bg-teal-300 px-5 py-3 font-semibold text-slate-950 transition hover:bg-teal-200"
            >
              Kapsel speichern
            </Link>

            <Link
              href="/dashboard"
              className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-200 transition hover:border-slate-500"
            >
              Abbrechen
            </Link>
          </div>

        </form>
      </div>
    </main>
  );
}
