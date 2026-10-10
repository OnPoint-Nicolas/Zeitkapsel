import Link from "next/link";
import { ArrowLeft, CalendarDays, Save } from "lucide-react";
import { notFound } from "next/navigation";
import { AppSidebar } from "@/components/app-sidebar";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/session";
import { updateCapsule } from "../actions";

export default async function BearbeitenPage({ params }: { params: Promise<{ id: string }> }) {
  const user = await requireUser();
  const { id } = await params;
  const now = new Date();
  const capsule = await prisma.capsule.findFirst({
    where: {
      id,
      userId: user.id,
      isArchived: false,
      openAt: { gt: now },
      editUntil: { gt: now },
    },
  });
  
  if (!capsule) notFound();

  const updateAction = updateCapsule.bind(null, capsule.id);
  const openDate = capsule.openAt.toISOString().slice(0, 10);

  return (
    <main className="flex min-h-screen bg-[#070b1a] text-slate-100">
      <AppSidebar />
      <section className="min-h-screen min-w-0 flex-1 bg-[radial-gradient(circle_at_12%_10%,_rgba(216,170,91,0.16),_transparent_22%),radial-gradient(circle_at_88%_18%,_rgba(48,112,166,0.22),_transparent_30%),linear-gradient(135deg,_#141024_0%,_#081324_48%,_#050814_100%)] px-6 py-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <Link href={`/kapseln/${capsule.id}`} className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-[#f0d08a]"><ArrowLeft size={17} /> Zurück zur Zeitkapsel</Link>
          <p className="mt-10 text-xs font-semibold uppercase tracking-[0.22em] text-[#d8aa5b]">Zeitkapsel bearbeiten</p>
          <h1 className="mt-4 font-serif text-4xl font-semibold text-white sm:text-5xl">Erinnerung anpassen</h1>
          <p className="mt-3 text-sm text-slate-400">
            Die Korrekturfrist endet am {new Intl.DateTimeFormat("de-DE", {
              dateStyle: "medium",
              timeStyle: "short",
            }).format(capsule.editUntil)} Uhr. Änderungen verlängern diese Frist nicht.
          </p>
          <form action={updateAction} className="mt-10 rounded-[0_2.4rem_2rem_2rem] border border-[#d8aa5b]/20 bg-[linear-gradient(145deg,_rgba(91,52,38,0.42),_rgba(15,23,42,0.78))] p-6 shadow-2xl shadow-black/35 sm:p-8">
            <div className="grid gap-6"><div><label htmlFor="title" className="mb-2 block text-sm font-medium text-slate-200">Titel</label><input id="title" name="title" defaultValue={capsule.title} required className="w-full rounded-[0.9rem_1.4rem_1.4rem_1.4rem] border border-[#d8aa5b]/15 bg-slate-950/40 px-4 py-3 text-slate-100 outline-none focus:border-[#d8aa5b]/60" /></div><div><label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-200">Nachricht</label><textarea id="message" name="message" defaultValue={capsule.description ?? ""} rows={8} className="w-full resize-none rounded-[0.9rem_1.4rem_1.4rem_1.4rem] border border-[#d8aa5b]/15 bg-slate-950/40 px-4 py-3 text-slate-100 outline-none focus:border-[#d8aa5b]/60" /></div><div><label htmlFor="openDate" className="mb-2 block text-sm font-medium text-slate-200">Öffnungsdatum</label><div className="relative"><CalendarDays className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#d8aa5b]" size={18} /><input id="openDate" name="openDate" type="date" defaultValue={openDate} required className="w-full rounded-[0.9rem_1.4rem_1.4rem_1.4rem] border border-[#d8aa5b]/15 bg-slate-950/40 py-3 pl-12 pr-4 text-slate-100 outline-none focus:border-[#d8aa5b]/60" /></div></div></div>
            <div className="mt-8 flex flex-wrap gap-4 border-t border-[#d8aa5b]/10 pt-6"><button type="submit" className="inline-flex items-center gap-2 rounded-[1rem_1.7rem_1.7rem_1.7rem] bg-[#d8aa5b] px-5 py-3 font-semibold text-slate-950 transition hover:bg-[#f0d08a]"><Save size={18} /> Änderungen speichern</button><Link href={`/kapseln/${capsule.id}`} className="rounded-[1rem_1.7rem_1.7rem_1.7rem] border border-[#d8aa5b]/20 px-5 py-3 font-semibold text-slate-200">Abbrechen</Link></div>
          </form>
        </div>
      </section>
    </main>
  );
}
