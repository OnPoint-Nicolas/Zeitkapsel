import { SubmitButton } from "@/components/submit-button";
import { Trash2, UserRound } from "lucide-react";
import { AppSidebar } from "@/components/app-sidebar";
import { requireUser } from "@/lib/session";
import { deleteAccount } from "./actions";

export default async function EinstellungenPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;
  const user = await requireUser();

  return (
    <main className="app-shell">
      <AppSidebar user={user} />

      <section className="min-h-screen min-w-0 flex-1 bg-[#131c16] px-6 py-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#dca277]">
            Konto
          </p>

          <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Einstellungen
          </h1>

          <p className="mt-3 max-w-3xl text-lg leading-8 text-stone-300">
            Hier sehe ich meine Kontodaten. Bei Bedarf kann ich mein Konto und
            die zugehörigen Zeitkapseln endgültig löschen.
          </p>

          <section className="mt-12 max-w-3xl gap-6 xl:grid-cols-2">
            <article className="relative rounded-lg border border-[#dca277]/15 bg-[#131c16] p-7 shadow-2xl shadow-black/30 backdrop-blur">
              <div className="flex items-center gap-4">
                <div className="grid h-14 w-14 place-items-center rounded-2xl border border-[#dca277]/20 bg-[#dca277]/10 text-[#dca277]">
                  <UserRound size={25} strokeWidth={1.8} />
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-semibold text-white">
                    Profil
                  </h2>

                  <p className="text-stone-400">
                    Angaben, die zu meinem Konto gehören.
                  </p>
                </div>
              </div>

              <div className="mt-7 space-y-4 border-t border-[#dca277]/10 pt-5">
                <div className="flex justify-between gap-6">
                  <span className="text-stone-400">Name</span>
                  <span className="text-right text-stone-100">
                    {user.name || "Kein Name angegeben"}
                  </span>
                </div>

                <div className="flex justify-between gap-6">
                  <span className="text-stone-400">E-Mail</span>
                  <span className="text-right text-stone-100">
                    {user.email}
                  </span>
                </div>

                <div className="flex justify-between gap-6">
                  <span className="text-stone-400">Sprache</span>
                  <span className="text-right text-stone-100">Deutsch</span>
                </div>
              </div>
            </article>
          </section>
          <section className="mt-10 rounded-lg border border-red-300/20 bg-red-950/10 p-7 shadow-2xl shadow-black/20">
            <div className="flex items-start gap-4">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-red-300/20 bg-red-400/10 text-red-200">
                <Trash2 size={25} strokeWidth={1.8} />
              </div>

              <div>
                <h2 className="font-serif text-2xl font-semibold text-white">
                  Konto endgültig löschen
                </h2>

                <p className="mt-2 max-w-2xl leading-7 text-stone-400">
                  Dabei werden das Konto, alle Sessions und sämtliche
                  Zeitkapseln dauerhaft gelöscht. Dieser Vorgang kann nicht
                  rückgängig gemacht werden.
                </p>
              </div>
            </div>

            {error === "ungueltige-bestaetigung" && (
              <p
                role="alert"
                className="mt-6 max-w-xl rounded-xl border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-200"
              >
                Gib zur Bestätigung genau LÖSCHEN ein.
              </p>
            )}

            <form action={deleteAccount} className="mt-7 max-w-xl">
              <label
                htmlFor="confirmation"
                className="block text-sm font-medium text-stone-200"
              >
                Gib zur Bestätigung LÖSCHEN ein
              </label>

              <input
                id="confirmation"
                name="confirmation"
                type="text"
                required
                autoComplete="off"
                className="mt-3 w-full rounded-2xl border border-red-300/20 bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-stone-600 focus:border-red-300/50"
                placeholder="LÖSCHEN"
              />

              <SubmitButton
                type="submit"
                className="mt-4 inline-flex items-center gap-2 rounded-full border border-red-300/30 bg-red-400/10 px-5 py-3 font-semibold text-red-200 transition hover:bg-red-400/20"
              >
                <Trash2 size={18} />
                Konto endgültig löschen
              </SubmitButton>
            </form>
          </section>
        </div>
      </section>
    </main>
  );
}
