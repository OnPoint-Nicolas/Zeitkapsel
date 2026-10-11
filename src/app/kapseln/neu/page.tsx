import { SubmitButton } from "@/components/submit-button";
import Link from "next/link";
import { CalendarDays, FileText, Save } from "lucide-react";
import { AppSidebar } from "@/components/app-sidebar";
import { requireUser } from "@/lib/session";
import { createCapsule } from "./actions";

export default async function NeueKapselPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const user = await requireUser();
  const { error } = await searchParams;
  return (
    <main className="app-shell">
      <AppSidebar user={user} />

      <section className="min-h-screen min-w-0 flex-1 bg-[#131c16] px-6 py-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="mt-10 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#dca277]">
                Neue Erinnerung
              </p>

              <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Zeitkapsel erstellen
              </h1>

              <p className="mt-3 max-w-2xl text-lg leading-8 text-stone-300">
                Hier halte ich einen Gedanken, eine Erinnerung oder eine
                Nachricht fest und lege fest, wann sie wieder geöffnet werden
                darf.
              </p>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-stone-400">
                Nach dem Erstellen sind Korrekturen für 10 % der Wartezeit
                möglich, höchstens jedoch sieben Tage. Danach und nach dem
                Öffnen bleibt die Kapsel unveränderlich.
              </p>
            </div>

            <div className="rounded-lg border border-[#dca277]/25 bg-[#131c16] p-1 shadow-lg shadow-black/30">
              <div className="grid h-14 w-14 place-items-center rounded-xl border border-[#ecc09b]/35 bg-[#131c16] text-[#ecc09b]">
                <FileText size={27} strokeWidth={1.7} />
              </div>
            </div>
          </div>

          <form
            action={createCapsule}
            className="relative mt-10 overflow-hidden rounded-lg border border-[#dca277]/20 bg-[#131c16] p-6 shadow-2xl shadow-black/35 sm:p-8"
          >
            {error === "ungueltige-eingaben" && (
              <p
                role="alert"
                className="mb-6 rounded-xl border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-200"
              >
                Bitte gib einen Titel und ein gültiges Öffnungsdatum in der
                Zukunft ein.
              </p>
            )}
            <div className="grid gap-6">
              <div>
                <label
                  htmlFor="title"
                  className="mb-2 block text-sm font-medium text-stone-200"
                >
                  Titel
                </label>

                <input
                  id="title"
                  name="title"
                  required
                  type="text"
                  placeholder="Zum Beispiel: Brief an mein zukünftiges Ich"
                  className="w-full rounded-lg border border-[#dca277]/15 bg-stone-950/40 px-4 py-3 text-stone-100 outline-none placeholder:text-stone-500 focus:border-[#dca277]/60"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-stone-200"
                >
                  Nachricht
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={8}
                  placeholder="Was möchte ich für später festhalten?"
                  className="w-full resize-none rounded-lg border border-[#dca277]/15 bg-stone-950/40 px-4 py-3 text-stone-100 outline-none placeholder:text-stone-500 focus:border-[#dca277]/60"
                />
              </div>

              <div>
                <div>
                  <label
                    htmlFor="openDate"
                    className="mb-2 block text-sm font-medium text-stone-200"
                  >
                    Öffnungsdatum
                  </label>

                  <div className="relative">
                    <CalendarDays
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#dca277]"
                      size={18}
                      strokeWidth={1.8}
                    />

                    <input
                      id="openDate"
                      name="openDate"
                      required
                      type="date"
                      className="w-full rounded-lg border border-[#dca277]/15 bg-stone-950/40 py-3 pl-12 pr-4 text-stone-100 outline-none focus:border-[#dca277]/60"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 border-t border-[#dca277]/10 pt-6">
              <SubmitButton
                type="submit"
                className="inline-flex items-center gap-2 rounded-lg bg-[#dca277] px-5 py-3 font-semibold text-stone-950 shadow-lg shadow-[#dca277]/10 transition hover:bg-[#ecc09b]"
              >
                <Save size={18} strokeWidth={2} />
                Kapsel speichern
              </SubmitButton>

              <Link
                href="/kapseln"
                className="rounded-lg border border-[#dca277]/20 px-5 py-3 font-semibold text-stone-200 transition hover:border-[#dca277]/50 hover:text-[#ecc09b]"
              >
                Abbrechen
              </Link>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
