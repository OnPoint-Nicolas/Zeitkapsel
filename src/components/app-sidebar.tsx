"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Archive,
  Clock3,
  Compass,
  Hourglass,
  Settings,
  TimerReset,
  Users,
} from "lucide-react";

const navigation = [
  { href: "/dashboard", label: "Übersicht", icon: Compass },
  { href: "/kapseln", label: "Zeitkapseln", icon: Hourglass },
  { href: "/timeline", label: "Timeline", icon: Clock3 },
  { href: "/empfaenger", label: "Empfänger", icon: Users },
  { href: "/archiv", label: "Archiv", icon: Archive },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 hidden h-screen w-72 shrink-0 flex-col overflow-y-auto border-r border-[#d8aa5b]/15 bg-[radial-gradient(circle_at_20%_10%,_rgba(216,170,91,0.18),_transparent_22%),radial-gradient(circle_at_80%_35%,_rgba(124,92,255,0.16),_transparent_28%),linear-gradient(180deg,_#141024_0%,_#0b1020_48%,_#070b1a_100%)] px-6 py-8 shadow-2xl shadow-black/30 lg:flex">
      <Link href="/dashboard" className="flex items-center gap-3">
        <div className="rounded-2xl border border-[#d8aa5b]/40 bg-[linear-gradient(145deg,_#5b3426,_#2b1814)] p-1 shadow-lg shadow-black/30">
          <div className="grid h-12 w-12 place-items-center rounded-xl border border-[#f0d08a]/35 bg-[radial-gradient(circle_at_35%_25%,_rgba(240,208,138,0.35),_rgba(91,52,38,0.25)_38%,_rgba(18,12,10,0.8)_100%)] text-[#f0d08a]">
            <TimerReset size={25} strokeWidth={1.7} />
          </div>
        </div>

        <div>
          <p className="font-serif text-2xl font-semibold text-slate-100">
            Aevum
          </p>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#d8aa5b]">
            Zeitkapsel
          </p>
        </div>
      </Link>

      <nav className="mt-14 grid gap-2">
        {navigation.map((item) => {
          const Icon = item.icon;
          const isActive =
            pathname === item.href ||
            (item.href === "/kapseln" && pathname.startsWith("/kapseln/"));

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`relative flex items-center gap-3 border px-4 py-3 text-base transition ${
                isActive
                  ? "rounded-[0.9rem_1.6rem_1.6rem_1.6rem] border-[#d8aa5b]/25 bg-[#d8aa5b]/12 font-semibold text-white shadow-lg shadow-black/20"
                  : "rounded-[0.9rem_1.6rem_1.6rem_1.6rem] border-transparent text-slate-400 hover:border-[#d8aa5b]/15 hover:bg-slate-950/25 hover:text-[#f0d08a]"
              }`}
            >
              <Icon size={21} strokeWidth={1.8} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <section className="relative mt-10 overflow-hidden rounded-[0_2rem_2rem_2rem] border border-[#d8aa5b]/15 bg-[linear-gradient(145deg,_rgba(91,52,38,0.42),_rgba(15,23,42,0.55))] p-5 shadow-lg shadow-black/20">
        <h2 className="font-serif text-lg font-semibold text-slate-100">
          Persönlich bewahrt
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-400">
          Jede Kapsel bekommt ein Öffnungsdatum und bleibt bis dahin Teil meiner
          privaten Sammlung.
        </p>
      </section>

      <div className="mt-auto pt-8">
        <Link
          href="/einstellungen"
          aria-label="Konto und Einstellungen öffnen"
          className={`flex items-center gap-3 rounded-[0_2rem_2rem_2rem] border p-4 shadow-lg shadow-black/25 transition ${
            pathname === "/einstellungen"
              ? "border-[#d8aa5b]/45 bg-[linear-gradient(145deg,_rgba(91,52,38,0.72),_rgba(15,23,42,0.78))]"
              : "border-[#d8aa5b]/20 bg-[linear-gradient(145deg,_rgba(91,52,38,0.5),_rgba(15,23,42,0.75))] hover:border-[#d8aa5b]/40"
          }`}
        >
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#d8aa5b]/25 bg-[#d8aa5b]/10 text-sm font-bold text-[#f0d08a]">
            DU
          </div>

          <div className="min-w-0 flex-1">
            <p className="font-medium text-slate-100">Dein Konto</p>
            <p className="text-sm text-slate-400">Nicht angemeldet</p>
          </div>

          <Settings
            className="shrink-0 text-slate-400"
            size={20}
            strokeWidth={1.8}
          />
        </Link>
      </div>
    </aside>
  );
}
