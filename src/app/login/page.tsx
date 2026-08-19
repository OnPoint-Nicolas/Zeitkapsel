import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-[linear-gradient(135deg,#131a35,#0b1020_55%,#12343b)] px-6 text-slate-100">
      <section className="w-full max-w-md rounded-3xl border border-slate-700 bg-slate-950/60 p-8 shadow-2xl shadow-black/30 backdrop-blur">
        <Link href="/" className="text-3xl font-bold tracking-tight">
          Zeit<span className="text-teal-300">kapsel</span>
        </Link>

        <p className="mt-4 text-xl font-semibold">Willkommen zurück</p>

        <p className="mt-2 text-sm leading-6 text-slate-400">
          Melde dich an, um deine persönlichen Zeitkapseln zu verwalten.
        </p>

        <form className="mt-8 grid gap-4">
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-slate-200"
            >
              E-Mail-Adresse
            </label>

            <input
              id="email"
              type="email"
              placeholder="du@beispiel.de"
              className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 outline-none placeholder:text-slate-500 focus:border-teal-300"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-slate-200"
            >
              Passwort
            </label>

            <input
              id="password"
              type="password"
              placeholder="Mindestens 6 Zeichen"
              className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 outline-none placeholder:text-slate-500 focus:border-teal-300"
            />
          </div>

          <Link
            href="/dashboard"
            className="mt-3 rounded-xl bg-teal-300 px-4 py-3 text-center font-semibold text-slate-950 transition hover:bg-teal-200"
          >
            Anmelden
          </Link>
        </form>

      </section>
    </main>
  );
}
