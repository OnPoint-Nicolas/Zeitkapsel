import { Bell, UserRound } from "lucide-react";
import { AppSidebar } from "@/components/app-sidebar";

export default function EinstellungenPage() {
  return (
    <main className="flex min-h-screen bg-[#070b1a] text-slate-100">
      <AppSidebar />

      <section className="min-h-screen min-w-0 flex-1 bg-[radial-gradient(circle_at_12%_10%,_rgba(216,170,91,0.16),_transparent_22%),radial-gradient(circle_at_88%_18%,_rgba(48,112,166,0.22),_transparent_30%),linear-gradient(135deg,_#141024_0%,_#081324_48%,_#050814_100%)] px-6 py-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d8aa5b]">
            Konto
          </p>

          <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Einstellungen
          </h1>

          <p className="mt-3 max-w-3xl text-lg leading-8 text-slate-300">
            Hier verwalte ich grundlegende Angaben zu meinem Konto und lege
            fest, wie ich über kommende Öffnungsdaten informiert werden möchte.
          </p>

          <section className="mt-12 grid gap-6 xl:grid-cols-2">
            <article className="relative rounded-[0_2rem_2rem_2rem] border border-[#d8aa5b]/15 bg-[linear-gradient(145deg,_rgba(91,52,38,0.35),_rgba(15,23,42,0.72))] p-7 shadow-2xl shadow-black/30 backdrop-blur">
              <div className="flex items-center gap-4">
                <div className="grid h-14 w-14 place-items-center rounded-2xl border border-[#d8aa5b]/20 bg-[#d8aa5b]/10 text-[#d8aa5b]">
                  <UserRound size={25} strokeWidth={1.8} />
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-semibold text-white">
                    Profil
                  </h2>

                  <p className="text-slate-400">
                    Angaben, die zu meinem Konto gehören.
                  </p>
                </div>
              </div>

              <div className="mt-7 space-y-4 border-t border-[#d8aa5b]/10 pt-5">
                <div className="flex justify-between gap-6">
                  <span className="text-slate-400">Name</span>
                  <span className="text-right text-slate-100">Dein Konto</span>
                </div>

                <div className="flex justify-between gap-6">
                  <span className="text-slate-400">E-Mail</span>
                  <span className="text-right text-slate-100">
                    -
                  </span>
                </div>

                <div className="flex justify-between gap-6">
                  <span className="text-slate-400">Sprache</span>
                  <span className="text-right text-slate-100">Deutsch</span>
                </div>
              </div>
            </article>

            <article className="relative rounded-[0_2rem_2rem_2rem] border border-[#d8aa5b]/15 bg-[linear-gradient(145deg,_rgba(91,52,38,0.35),_rgba(15,23,42,0.72))] p-7 shadow-2xl shadow-black/30 backdrop-blur">
              <div className="flex items-center gap-4">
                <div className="grid h-14 w-14 place-items-center rounded-2xl border border-[#d8aa5b]/20 bg-[#d8aa5b]/10 text-[#d8aa5b]">
                  <Bell size={25} strokeWidth={1.8} />
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-semibold text-white">
                    Erinnerungen
                  </h2>

                  <p className="text-slate-400">
                    Hinweise rund um kommende Öffnungsdaten.
                  </p>
                </div>
              </div>

              <div className="mt-7 space-y-4 border-t border-[#d8aa5b]/10 pt-5">
                <div className="flex justify-between gap-6">
                  <span className="text-slate-400">Vor dem Öffnungsdatum</span>
                  <span className="text-right text-slate-100">-</span>
                </div>

                <div className="flex justify-between gap-6">
                  <span className="text-slate-400">Am Öffnungstag</span>
                  <span className="text-right text-slate-100">-</span>
                </div>

                <div className="flex justify-between gap-6">
                  <span className="text-slate-400">Kapsel-Übersicht</span>
                  <span className="text-right text-slate-100">sichtbar</span>
                </div>
              </div>
            </article>
          </section>
        </div>
      </section>
    </main>
  );
}
