import Link from "next/link";
import { AppSidebar } from "@/components/app-sidebar";
import { CapsuleArtwork } from "@/components/capsule/CapsuleArtwork";
import { CapsuleCard } from "@/components/capsule/CapsuleCard";
import { requireUser } from "@/lib/session";
import { prisma } from "@/lib/prisma";

export default async function DashboardPage() {
  const user = await requireUser();
  const capsules = await prisma.capsule.findMany({
    where: { userId: user.id, isArchived: false },
    orderBy: { createdAt: "desc" },
  });
  const now = new Date();
  const future = capsules
    .filter((c) => c.openAt > now)
    .sort((a, b) => a.openAt.getTime() - b.openAt.getTime());
  const next = future[0];
  const days = next
    ? Math.ceil((next.openAt.getTime() - now.getTime()) / 86400000)
    : 0;
  return (
    <main className="app-shell">
      <AppSidebar user={user} />
      <section className="capsule-hero">
        <div className="hero-copy">
          <p className="eyebrow">Deine persönliche Zeitkapselsammlung</p>
          <h1>
            Heute bewahren.
            <br />
            Später wiederfinden.
          </h1>
          <p>
            {next
              ? "Ein Gedanke von heute. Ein Wiedersehen, wenn seine Zeit gekommen ist."
              : "Was möchtest du deinem zukünftigen Ich mitgeben? Bewahre es in deiner ersten Zeitkapsel."}
          </p>
          <Link href="/kapseln/neu" className="primary-button">
            + Neue Zeitkapsel
          </Link>
          {next && (
            <div className="mt-8 border-l border-[#dca27766] pl-4">
              <p className="eyebrow">
                Als Nächstes · in {days} {days === 1 ? "Tag" : "Tagen"}
              </p>
              <Link
                href={"/kapseln/" + next.id}
                className="mt-2 block font-serif text-xl"
              >
                {next.title} →
              </Link>
              <p className="mt-1 text-xs text-stone-400">
                {new Intl.DateTimeFormat("de-DE", {
                  dateStyle: "long",
                  timeZone: "Europe/Berlin",
                }).format(next.openAt)}
              </p>
            </div>
          )}
        </div>
        <div className="hero-art">
          <CapsuleArtwork />
        </div>
      </section>
      <section className="app-content">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Persönlich bewahrt</p>
            <h2 className="mt-2 font-serif text-3xl">
              Meine letzten Erinnerungen
            </h2>
          </div>
          <Link href="/kapseln" className="quiet-link">
            Alle {capsules.length} Kapseln →
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {capsules.slice(0, 3).map((c) => (
            <CapsuleCard key={c.id} capsule={c} now={now.getTime()} />
          ))}
        </div>
        {!capsules.length && (
          <p className="py-8 text-stone-400">
            Deine Sammlung beginnt mit einem Gedanken. Erstelle deine erste
            Kapsel oben.
          </p>
        )}
        <p className="mt-7 text-xs text-stone-400">
          {future.length} versiegelt · {capsules.length - future.length}{" "}
          geöffnet
        </p>
      </section>
    </main>
  );
}
