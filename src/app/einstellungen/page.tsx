import { Bell, UserRound } from "lucide-react";
import { AppSidebar } from "@/components/app-sidebar";

export default function EinstellungenPage() {
  return (
    <main className="min-h-screen bg-[#070b1a] text-slate-100">
      <div className="flex">
        <AppSidebar />

        <section className="min-h-screen flex-1 bg-[radial-gradient(circle_at_top_left,_rgba(91,57,148,0.35),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(20,82,120,0.35),_transparent_35%)] px-8 py-10 lg:px-16">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#e4b957]">
            Konto
          </p>

          <h1 className="mt-4 font-serif text-5xl font-semibold text-white">
            Einstellungen
          </h1>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
            Hier werden später Kontoangaben und persönliche Einstellungen
            verwaltet. Für den aktuellen Stand zeigt die Seite die geplante
            Struktur der Anwendung.
          </p>

          <div className="mt-12 grid gap-6 xl:grid-cols-2">
            <section className="rounded-3xl border border-violet-200/15 bg-[#171b35]/85 p-7 shadow-2xl shadow-black/25">
              <div className="flex items-center gap-4">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-violet-400/20 text-[#e4b957]">
                  <UserRound size={26} strokeWidth={1.7} />
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

              <div className="mt-7 space-y-4 border-t border-white/10 pt-5">
                <div className="flex justify-between gap-6">
                  <span className="text-slate-400">Name</span>
                  <span className="text-right text-slate-100">Dein Konto</span>
                </div>

                <div className="flex justify-between gap-6">
                  <span className="text-slate-400">E-Mail</span>
                  <span className="text-right text-slate-100">
                    Noch nicht verbunden
                  </span>
                </div>

                <div className="flex justify-between gap-6">
                  <span className="text-slate-400">Sprache</span>
                  <span className="text-right text-slate-100">Deutsch</span>
                </div>
              </div>
            </section>

            <section className="rounded-3xl border border-violet-200/15 bg-[#171b35]/85 p-7 shadow-2xl shadow-black/25">
              <div className="flex items-center gap-4">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-violet-400/20 text-[#e4b957]">
                  <Bell size={26} strokeWidth={1.7} />
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

              <div className="mt-7 space-y-4 border-t border-white/10 pt-5">
                <div className="flex justify-between gap-6">
                  <span className="text-slate-400">Vor dem Öffnungsdatum</span>
                  <span className="text-right text-slate-100">geplant</span>
                </div>

                <div className="flex justify-between gap-6">
                  <span className="text-slate-400">Am Öffnungstag</span>
                  <span className="text-right text-slate-100">geplant</span>
                </div>

                <div className="flex justify-between gap-6">
                  <span className="text-slate-400">Kapsel-Übersicht</span>
                  <span className="text-right text-slate-100">sichtbar</span>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}