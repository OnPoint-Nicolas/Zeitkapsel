import { SubmitButton } from "@/components/submit-button";
import Link from "next/link";
import { ArrowLeft, LockKeyhole, TimerReset } from "lucide-react";
import { loginUser } from "./actions";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;
  return (
    <main className="grid min-h-screen place-items-center bg-[#131c16] px-6 py-10 text-stone-100">
      <section className="relative w-full max-w-md overflow-hidden rounded-lg border border-[#dca277]/20 bg-[#131c16] p-8 shadow-2xl shadow-black/35">
        <Link href="/" className="inline-flex items-center gap-3">
          <span className="rounded-2xl border border-[#dca277]/40 bg-[#131c16] p-1 shadow-lg shadow-black/30">
            <span className="grid h-11 w-11 place-items-center rounded-xl border border-[#ecc09b]/35 bg-[#131c16] text-[#ecc09b]">
              <TimerReset size={23} strokeWidth={1.7} />
            </span>
          </span>

          <span>
            <span className="block font-serif text-2xl font-semibold text-white">
              Aevum
            </span>
            <span className="block text-xs font-medium uppercase tracking-[0.22em] text-[#dca277]">
              Zeitkapsel
            </span>
          </span>
        </Link>

        <div className="mt-10">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#dca277]">
            Anmeldung
          </p>
          <h1 className="mt-3 font-serif text-3xl font-semibold text-white">
            Zurück zur Sammlung
          </h1>
          <p className="mt-3 text-sm leading-6 text-stone-400">
            Melde dich an, um deine persönlichen Zeitkapseln zu verwalten.
          </p>
        </div>

        {error === "falsche-zugangsdaten" && (
          <p
            role="alert"
            className="mt-6 rounded-xl border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-200"
          >
            E-Mail-Adresse oder Passwort ist falsch.
          </p>
        )}

        {error === "ungueltige-eingaben" && (
          <p
            role="alert"
            className="mt-6 rounded-xl border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-200"
          >
            Bitte gib eine gültige E-Mail-Adresse und ein Passwort ein.
          </p>
        )}

        <form action={loginUser} className="mt-8 grid gap-4">
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-stone-200"
            >
              E-Mail-Adresse
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="E-Mail-Adresse eingeben"
              className="w-full rounded-lg border border-[#dca277]/15 bg-stone-950/40 px-4 py-3 text-stone-100 outline-none placeholder:text-stone-500 focus:border-[#dca277]/60"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-stone-200"
            >
              Passwort
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              placeholder="Passwort eingeben"
              className="w-full rounded-lg border border-[#dca277]/15 bg-stone-950/40 px-4 py-3 text-stone-100 outline-none placeholder:text-stone-500 focus:border-[#dca277]/60"
            />
          </div>

          <SubmitButton
            type="submit"
            className="mt-3 inline-flex items-center justify-center gap-2 rounded-lg bg-[#dca277] px-4 py-3 text-center font-semibold text-stone-950 transition hover:bg-[#ecc09b]"
          >
            <LockKeyhole size={18} strokeWidth={2} />
            Anmelden
          </SubmitButton>
        </form>

        <p className="mt-6 text-sm text-stone-400">
          Noch kein Konto?{" "}
          <Link
            href="/register"
            className="font-semibold text-[#ecc09b] transition hover:text-white"
          >
            Jetzt registrieren
          </Link>
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center gap-2 text-sm text-stone-400 transition hover:text-[#ecc09b]"
        >
          <ArrowLeft size={16} />
          Zur Startseite
        </Link>
      </section>
    </main>
  );
}
