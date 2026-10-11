import { SubmitButton } from "@/components/submit-button";
import Link from "next/link";
import { ArrowLeft, UserPlus, TimerReset } from "lucide-react";
import { registerUser } from "./actions";

export default async function RegisterPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; status?: string }>;
}) {
  const { error, status } = await searchParams;
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
            Registrierung
          </p>
          <h1 className="mt-3 font-serif text-3xl font-semibold text-white">
            Neues Konto erstellen
          </h1>
          <p className="mt-3 text-sm leading-6 text-stone-400">
            Erstelle dein Konto, um eigene Zeitkapseln anzulegen und später
            wiederzufinden.
          </p>
        </div>

        {status === "konto-geloescht" && (
          <p
            role="status"
            className="mt-6 rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-200"
          >
            Dein Konto und alle zugehörigen Daten wurden gelöscht.
          </p>
        )}

        {error === "email-vergeben" && (
          <p
            role="alert"
            className="mt-6 rounded-xl border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-200"
          >
            Für diese E-Mail-Adresse gibt es bereits ein Konto.
          </p>
        )}

        {error === "ungueltige-eingaben" && (
          <p
            role="alert"
            className="mt-6 rounded-xl border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-200"
          >
            Bitte gib einen Namen, eine gültige E-Mail-Adresse und ein Passwort
            mit mindestens 8 Zeichen ein.
          </p>
        )}

        <form action={registerUser} className="mt-8 grid gap-4">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-stone-200"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Dein Name"
              className="w-full rounded-lg border border-[#dca277]/15 bg-stone-950/40 px-4 py-3 text-stone-100 outline-none placeholder:text-stone-500 focus:border-[#dca277]/60"
            />
          </div>

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
              placeholder="du@beispiel.de"
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
              minLength={8}
              placeholder="Mindestens 8 Zeichen"
              className="w-full rounded-lg border border-[#dca277]/15 bg-stone-950/40 px-4 py-3 text-stone-100 outline-none placeholder:text-stone-500 focus:border-[#dca277]/60"
            />
          </div>

          <SubmitButton
            type="submit"
            className="mt-3 inline-flex items-center justify-center gap-2 rounded-lg bg-[#dca277] px-4 py-3 text-center font-semibold text-stone-950 transition hover:bg-[#ecc09b]"
          >
            <UserPlus size={18} strokeWidth={2} />
            Konto erstellen
          </SubmitButton>
        </form>

        <Link
          href="/login"
          className="mt-6 inline-flex items-center gap-2 text-sm text-stone-400 transition hover:text-[#ecc09b]"
        >
          <ArrowLeft size={16} />
          Zur Anmeldung
        </Link>
      </section>
    </main>
  );
}
