import Link from "next/link";
import { CalendarDays } from "lucide-react";
import { AppSidebar } from "@/components/app-sidebar";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/session";

const dateFormatter = new Intl.DateTimeFormat("de-DE", { dateStyle: "long" });
const yearFormatter = new Intl.DateTimeFormat("de-DE", { year: "numeric" });

function getStatus(openAt: Date) { return openAt <= new Date() ? "geöffnet" : "versiegelt"; }

export async function TimelineCollection() {
  const user = await requireUser();
  const capsules = await prisma.capsule.findMany({ where: { userId: user.id, isArchived: false }, orderBy: { openAt: "asc" } });
  return <main className="flex min-h-screen bg-[#070b1a] text-slate-100"><AppSidebar /><section className="min-h-screen min-w-0 flex-1 bg-[radial-gradient(circle_at_12%_10%,_rgba(216,170,91,0.16),_transparent_22%),radial-gradient(circle_at_88%_18%,_rgba(48,112,166,0.22),_transparent_30%),linear-gradient(135deg,_#141024_0%,_#081324_48%,_#050814_100%)] px-6 py-10 lg:px-12"><div className="mx-auto max-w-6xl"><p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d8aa5b]">Chronologie</p><h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-white sm:text-5xl">Timeline</h1><p className="mt-3 max-w-3xl text-lg leading-8 text-slate-300">Deine Zeitkapseln nach ihrem Öffnungsdatum.</p><section className="mt-12 space-y-10">{capsules.length === 0 ? <p className="rounded-[0_2rem_2rem_2rem] border border-[#d8aa5b]/15 bg-black/15 p-8 text-slate-400">Erstelle eine Zeitkapsel, damit sie in deiner Timeline erscheint.</p> : capsules.map((capsule) => { const status = getStatus(capsule.openAt); return <article key={capsule.id} className="grid gap-4 lg:grid-cols-[120px_1fr]"><p className="font-serif text-3xl font-semibold text-[#d8aa5b]">{yearFormatter.format(capsule.openAt)}</p><Link href={`/kapseln/${capsule.id}`} className="relative rounded-[0_2rem_2rem_2rem] border border-[#d8aa5b]/15 bg-[linear-gradient(145deg,_rgba(91,52,38,0.35),_rgba(15,23,42,0.72))] p-7 shadow-2xl shadow-black/30 transition hover:border-[#d8aa5b]/35"><div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between"><div><h2 className="font-serif text-2xl text-white">{capsule.title}</h2><p className="mt-2 leading-7 text-slate-400">{capsule.description || "Keine Vorschau vorhanden."}</p></div><span className={`w-fit rounded-full border px-3 py-1 text-xs font-semibold ${status === "geöffnet" ? "border-emerald-300/35 bg-emerald-400/15 text-emerald-100" : "border-slate-500/35 bg-slate-400/10 text-slate-300"}`}>{status}</span></div><div className="mt-6 flex items-center gap-2 border-t border-[#d8aa5b]/10 pt-4 text-sm text-slate-400"><CalendarDays size={17} />Öffnet am {dateFormatter.format(capsule.openAt)}</div></Link></article>; })}</section></div></section></main>;
}
