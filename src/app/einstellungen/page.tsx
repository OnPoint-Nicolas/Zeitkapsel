import { Bell, UserRound } from "lucide-react";
import { AppSidebar } from "@/components/app-sidebar";

export default function EinstellungenPage() {
  return (
    <main className="flex min-h-screen bg-[#070b1a] text-slate-100">
      <AppSidebar />

      <section className="min-h-screen min-w-0 flex-1 bg-[linear-gradient(135deg,_rgba(38,29,78,0.95)_0%,_rgba(10,18,38,0.98)_45%,_rgba(9,31,55,0.95)_100%)] px-6 py-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#e4b957]">
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
            <article className="rounded-3xl border border-[#e4b957]/15 bg-[linear-gradient(145deg,_rgba(28,34,67,0.94),_rgba(45,37,82,0.88))] p-7 shadow-2xl shadow-black/30 backdrop-blur">
              <div className="flex items-center gap-4">
                <div className="grid h-14 w-14 place-items-center rounded-2xl border border-[#e4b957]/20 bg-[#e4b957]/10 text-[#e4b957]">
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

              <div className="mt-7 space-y-4 border-t border-[#e4b957]/10 pt-5">
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

            <article className="rounded-3xl border border-[#e4b957]/15 bg-[linear-gradient(145deg,_rgba(28,34,67,0.94),_rgba(45,37,82,0.88))] p-7 shadow-2xl shadow-black/30 backdrop-blur">
              <div className="flex items-center gap-4">
                <div className="grid h-14 w-14 place-items-center rounded-2xl border border-[#e4b957]/20 bg-[#e4b957]/10 text-[#e4b957]">
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

              <div className="mt-7 space-y-4 border-t border-[#e4b957]/10 pt-5">
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