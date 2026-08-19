import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  CalendarDays,
  FileText,
  Image as ImageIcon,
  LockKeyhole,
  Unlock,
  Users,
} from "lucide-react";
import { AppSidebar } from "@/components/app-sidebar";

const kapseln = {
  "brief-an-mila": {
    title: "Brief an mein Zukunfts-Ich",
    message:
      "Wenn du diese Nachricht liest, hoffe ich, dass du stolz darauf bist, wie weit du gekommen bist. Denk daran, dass kleine Schritte genauso wichtig sind wie große Entscheidungen.",
    openDate: "14. Mai 2032",
    kind: "Nachricht",
    status: "versiegelt",
    recipient: "Nur für dich",
  },
  "ziele-2027": {
    title: "Meine Ziele für 2027",
    message:
      "Hier stehen meine Ziele für das kommende Jahr. Ich möchte später vergleichen können, was ich erreicht habe und was sich verändert hat.",
    openDate: "01. Januar 2027",
    kind: "Nachricht",
    status: "bald geöffnet",
    recipient: "Nur für dich",
  },
  "schoener-moment": {
    title: "Ein schöner Moment",
    message:
      "Dieser Tag war voller Ruhe, guter Gespräche und kleiner Momente, die ich bewusst festhalten wollte. Es ist schön, diese Erinnerung später noch einmal lesen zu können.",
    openDate: "10. August 2025",
    kind: "Fotos",
    status: "geöffnet",
    recipient: "Nur für dich",
  },
};

type CapsuleId = keyof typeof kapseln;

export default async function KapselDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const kapsel = kapseln[id as CapsuleId];

  if (!kapsel) {
    notFound();
  }

  const isOpened = kapsel.status === "geöffnet";
  const KindIcon = kapsel.kind === "Fotos" ? ImageIcon : FileText;

  return (
    <main className="flex min-h-screen bg-[#0b1020] text-slate-100">
      <AppSidebar />

      <section className="min-w-0 flex-1 px-6 py-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/kapseln"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-[#e4b957]"
          >
            <ArrowLeft size={17} />
            Zurück zu allen Zeitkapseln
          </Link>

          <div className="mt-10 rounded-3xl border border-violet-200/15 bg-[#191b38]/90 p-7 shadow-xl shadow-black/10 sm:p-10">
            <div className="flex flex-wrap items-start justify-between gap-5">
              <div className="grid h-16 w-16 place-items-center rounded-2xl border border-violet-300/25 bg-violet-400/10 text-[#e4b957]">
                <KindIcon size={30} strokeWidth={1.7} />
              </div>

              <span
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold ${
                  isOpened
                    ? "border-violet-300/50 bg-violet-400/15 text-violet-200"
                    : "border-slate-500/40 bg-slate-500/10 text-slate-300"
                }`}
              >
                {isOpened ? <Unlock size={16} /> : <LockKeyhole size={16} />}
                {kapsel.status}
              </span>
            </div>

            <p className="mt-10 text-xs font-semibold uppercase tracking-[0.22em] text-[#e4b957]">
              Zeitkapsel
            </p>

            <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
              {kapsel.title}
            </h1>

            <div className="mt-8 grid gap-4 border-y border-violet-200/10 py-6 sm:grid-cols-2">
              <div className="flex items-center gap-3">
                <CalendarDays size={20} className="text-[#e4b957]" />
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
                    Öffnungsdatum
                  </p>
                  <p className="mt-1 font-medium">{kapsel.openDate}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Users size={20} className="text-[#e4b957]" />
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
                    Empfänger
                  </p>
                  <p className="mt-1 font-medium">{kapsel.recipient}</p>
                </div>
              </div>
            </div>

            <section className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#e4b957]">
                Persönliche Nachricht
              </p>

              <div className="relative mt-4 overflow-hidden rounded-3xl border border-violet-200/15 bg-slate-950/25 p-6">
                <p
                  className={`whitespace-pre-line text-lg leading-8 text-slate-300 ${
                    !isOpened ? "select-none blur-sm" : ""
                  }`}
                >
                  {kapsel.message}
                </p>

                {!isOpened && (
                  <div className="absolute inset-0 grid place-items-center bg-[#10142b]/75 p-6 text-center backdrop-blur-sm">
                    <div>
                      <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl border border-[#e4b957]/30 bg-[#e4b957]/10 text-[#e4b957]">
                        <LockKeyhole size={26} />
                      </div>

                      <h2 className="mt-4 font-serif text-2xl font-semibold">
                        Diese Kapsel ist noch versiegelt.
                      </h2>

                      <p className="mt-2 max-w-md text-sm leading-6 text-slate-400">
                        Der Inhalt wird erst am {kapsel.openDate} sichtbar.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </section>

            
          </div>
        </div>
      </section>
    </main>
  );
}