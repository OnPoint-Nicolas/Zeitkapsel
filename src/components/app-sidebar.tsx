"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { logoutUser } from "@/app/logout/actions";
import { SubmitButton } from "./submit-button";

const navigation = [
  { href: "/dashboard", label: "Übersicht" },
  { href: "/kapseln", label: "Meine Kapseln" },
  { href: "/timeline", label: "Zeitlinie" },
  { href: "/archiv", label: "Archiv" },
];

export function AppSidebar({
  user,
}: {
  user: { name: string | null; email: string };
}) {
  const pathname = usePathname();
  return (
    <header className="app-header">
      <Link
        href="/dashboard"
        className="brand"
        aria-label="Aevum – zur Übersicht"
      >
        aevum<span>ZEIT BEWAHREN</span>
      </Link>
      <nav aria-label="Hauptnavigation">
        {navigation.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            aria-current={
              pathname === href ||
              (href === "/kapseln" && pathname.startsWith("/kapseln/"))
                ? "page"
                : undefined
            }
          >
            {label}
          </Link>
        ))}
      </nav>
      <details className="account-menu">
        <summary>{user.name?.trim() || "Mein Konto"}</summary>
        <div>
          <p className="break-all text-sm text-stone-400">{user.email}</p>
          <Link href="/einstellungen">Konto & Einstellungen</Link>
          <form action={logoutUser}>
            <SubmitButton pendingLabel="Abmelden …">Abmelden</SubmitButton>
          </form>
        </div>
      </details>
    </header>
  );
}
