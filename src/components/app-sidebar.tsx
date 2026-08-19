"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Archive,
  Clock3,
  Compass,
  Hourglass,
  Settings,
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
    <aside className="hidden min-h-screen w-72 shrink-0 flex-col border-r border-violet-200/10 bg-[#13142d] px-6 py-8 lg:flex">
      <Link href="/dashboard" className="flex items-center gap-3">
        <div className="grid h-12 w-12 place-items-center rounded-2xl border border-violet-300/30 bg-violet-400/15 text-xl text-[#e4b957]">
          ✦
        </div>

        <div>
          <p className="font-serif text-2xl font-semibold text-slate-100">
            Zeitkapsel
          </p>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
            Persönliche Erinnerungen
          </p>
        </div>
      </Link>

      <nav className="mt-14 grid gap-2">
        {navigation.map((item) => {
          const Icon = item.icon;
          const isActive =
            pathname === item.href ||
            (item.href === "/kapseln" &&
              pathname.startsWith("/kapseln/"));

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-base transition ${
                isActive
                  ? "bg-violet-400/20 font-semibold text-white"
                  : "text-slate-400 hover:bg-slate-800/70 hover:text-white"
              }`}
            >
              <Icon size={21} strokeWidth={1.8} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <section className="mt-10 rounded-3xl border border-violet-200/15 bg-slate-950/25 p-5">
        <h2 className="font-serif text-lg font-semibold text-slate-100">
          Sicher verwahrt
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-400">
          Deine Kapseln bleiben privat und werden erst an deinem gewählten
          Öffnungsdatum sichtbar.
        </p>
      </section>

      <div className="mt-auto">
        <Link
          href="/einstellungen"
          className="flex items-center gap-3 rounded-2xl px-4 py-3 text-slate-400 transition hover:bg-slate-800/70 hover:text-white"
        >
          <Settings size={21} strokeWidth={1.8} />
          Einstellungen
        </Link>

        <div className="mt-5 flex items-center gap-3 rounded-3xl border border-violet-200/15 bg-slate-950/25 p-4">
          <div className="grid h-10 w-10 place-items-center rounded-full bg-violet-400/25 text-sm font-bold text-violet-100">
            DU
          </div>

          <div>
            <p className="font-medium text-slate-100">Dein Konto</p>
            <p className="text-sm text-slate-400">Noch nicht angemeldet</p>
          </div>
        </div>
      </div>
    </aside>
  );
}