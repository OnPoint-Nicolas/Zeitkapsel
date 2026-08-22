import Link from "next/link";
import { ArrowLeft, LockKeyhole, TimerReset } from "lucide-react";

export default function LoginPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-[radial-gradient(circle_at_12%_10%,_rgba(216,170,91,0.16),_transparent_22%),radial-gradient(circle_at_88%_18%,_rgba(48,112,166,0.22),_transparent_30%),linear-gradient(135deg,_#141024_0%,_#081324_48%,_#050814_100%)] px-6 py-10 text-slate-100">
      <section className="w-full max-w-md overflow-hidden rounded-3xl border border-[#d8aa5b]/20 bg-[linear-gradient(145deg,_rgba(91,52,38,0.36),_rgba(15,23,42,0.78))] p-8 shadow-2xl shadow-black/35">
        <Link href="/" className="inline-flex items-center gap-3">
          <span className="rounded-2xl border border-[#d8aa5b]/40 bg-[linear-gradient(145deg,_#5b3426,_#2b1814)] p-1 shadow-lg shadow-black/30">
            <span className="grid h-11 w-11 place-items-center rounded-xl border border-[#f0d08a]/35 bg-[radial-gradient(circle_at_35%_25%,_rgba(240,208,138,0.35),_rgba(91,52,38,0.25)_38%,_rgba(18,12,10,0.8)_100%)] text-[#f0d08a]">
              <TimerReset size={23} strokeWidth={1.7} />
            </span>
          </span>

          <span>
            <span className="block font-serif text-2xl font-semibold text-white">
              Aevum
            </span>
            <span className="block text-xs font-medium uppercase tracking-[0.22em] text-[#d8aa5b]">
              Zeitkapsel
            </span>
          </span>
        </Link>

        <div className="mt-10">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d8aa5b]">
            Anmeldung
          </p>
          <h1 className="mt-3 font-serif text-3xl font-semibold text-white">
            Zurück zur Sammlung
          </h1>
          <p className="mt-3 text-sm leading-6 text-slate-400">
            Melde dich an, um deine persönlichen Zeitkapseln zu verwalten.
          </p>
        </div>

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
              className="w-full rounded-2xl border border-[#d8aa5b]/15 bg-slate-950/40 px-4 py-3 text-slate-100 outline-none placeholder:text-slate-500 focus:border-[#d8aa5b]/60"
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
              placeholder="Passwort eingeben"
              className="w-full rounded-2xl border border-[#d8aa5b]/15 bg-slate-950/40 px-4 py-3 text-slate-100 outline-none placeholder:text-slate-500 focus:border-[#d8aa5b]/60"
            />
          </div>

          <Link
            href="/dashboard"
            className="mt-3 inline-flex items-center justify-center gap-2 rounded-2xl bg-[#d8aa5b] px-4 py-3 text-center font-semibold text-slate-950 transition hover:bg-[#f0d08a]"
          >
            <LockKeyhole size={18} strokeWidth={2} />
            Anmelden
          </Link>
        </form>

        <Link
          href="/"
          className="mt-6 inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-[#f0d08a]"
        >
          <ArrowLeft size={16} />
          Zur Startseite
        </Link>
      </section>
    </main>
  );
}
