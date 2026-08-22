import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  CalendarDays,
  FileText,
  Image as ImageIcon,
  LockKeyhole,
  ShieldCheck,
  Unlock,
  Users,
} from "lucide-react";
import { AppSidebar } from "@/components/app-sidebar";

const kapseln = {
  "brief-an-mich": {
    title: "Brief an mich selbst",
    message:
      "Wenn ich diese Nachricht lese, möchte ich mich daran erinnern, warum ich diese Kapsel erstellt habe. Manche Gedanken werden erst wertvoll, wenn Zeit vergangen ist.",
    openDate: "15. Januar 2030",
    kind: "Nachricht",
    status: "versiegelt",
    recipient: "Für mich selbst",
    material:
      "bg-[radial-gradient(circle_at_25%_20%,_rgba(240,208,138,0.34),_transparent_28%),linear-gradient(145deg,_#6b3f2d,_#2b1814)] border-[#d8aa5b]/30",
  },
  "ziele-2027": {
    title: "Ziele für mein zukünftiges Ich",
    message:
      "Hier halte ich fest, welche Ziele mir wichtig sind. Später kann ich sehen, was sich verändert hat und welche Entscheidungen mich weitergebracht haben.",
    openDate: "02. September 2027",
    kind: "Nachricht",
    status: "bald geöffnet",
    recipient: "Für mich selbst",
    material:
      "bg-[radial-gradient(circle_at_25%_20%,_rgba(255,255,255,0.45),_transparent_30%),linear-gradient(145deg,_#d8d2c2,_#5f6670)] border-white/35 text-slate-950",
  },
  "schoener-moment": {
    title: "Sommer 2019 in Lissabon",
    message:
      "Dieser Moment steht für Ruhe, Gespräche und Erinnerungen, die ich bewusst festhalten wollte. Die Kapsel zeigt, wie ein kleiner Ausschnitt aus der Vergangenheit später wieder Bedeutung bekommen kann.",
    openDate: "01. Juli 2025",
    kind: "Nachricht",
    status: "geöffnet",
    recipient: "Für mich selbst",
    material:
      "bg-[radial-gradient(circle_at_25%_20%,_rgba(255,235,166,0.48),_transparent_30%),linear-gradient(145deg,_#c79b49,_#4b2f16)] border-[#f0d08a]/35",
  },
};

type CapsuleId = keyof typeof kapseln;

function getStatusClasses(status: string) {
  if (status === "geöffnet") {
    return "border-emerald-300/40 bg-emerald-400/20 text-emerald-100";
  }

  if (status === "bald geöffnet") {
    return "border-[#f0d08a]/45 bg-[#f0d08a]/20 text-[#fff1b8]";
  }

  return "border-[#d8aa5b]/40 bg-black/25 text-[#f0d08a]";
}

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
  const isLight = kapsel.material.includes("text-slate-950");
  const KindIcon = kapsel.kind === "Fotos" ? ImageIcon : FileText;

  return (
    <main className="flex min-h-screen bg-[#070b1a] text-slate-100">
      <AppSidebar />

      <section className="min-h-screen min-w-0 flex-1 bg-[radial-gradient(circle_at_12%_10%,_rgba(216,170,91,0.16),_transparent_22%),radial-gradient(circle_at_88%_18%,_rgba(48,112,166,0.22),_transparent_30%),linear-gradient(135deg,_#141024_0%,_#081324_48%,_#050814_100%)] px-6 py-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/kapseln"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-[#f0d08a]"
          >
            <ArrowLeft size={17} />
            Zurück zu allen Zeitkapseln
          </Link>

          <article
            className={`relative mt-10 overflow-hidden rounded-3xl border p-7 shadow-2xl shadow-black/35 sm:p-10 ${kapsel.material}`}
          >
            <div className="pointer-events-none absolute inset-0 bg-[repeating-radial-gradient(circle_at_35%_20%,_rgba(255,255,255,0.14)_0,_rgba(255,255,255,0.14)_1px,_transparent_2px,_transparent_10px)] opacity-25" />

            <div className="relative flex flex-wrap items-start justify-between gap-5">
              <div className="grid h-16 w-16 place-items-center rounded-2xl border border-black/20 bg-black/20 text-[#f0d08a] shadow-lg shadow-black/25">
                <KindIcon size={30} strokeWidth={1.7} />
              </div>

              <span
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold shadow-md shadow-black/20 ${getStatusClasses(
                  kapsel.status,
                )}`}
              >
                {isOpened ? <Unlock size={16} /> : <LockKeyhole size={16} />}
                {kapsel.status}
              </span>
            </div>

            <div className="relative">
              <p
                className={`mt-10 text-xs font-semibold uppercase tracking-[0.22em] ${
                  isLight ? "text-slate-800" : "text-[#f0d08a]"
                }`}
              >
                Zeitkapsel
              </p>

              <h1
                className={`mt-3 font-serif text-4xl font-semibold tracking-tight sm:text-5xl ${
                  isLight ? "text-slate-950" : "text-white"
                }`}
              >
                {kapsel.title}
              </h1>

              <div className="mt-8 grid gap-4 border-y border-black/20 py-6 sm:grid-cols-2">
                <div className="flex items-center gap-3">
                  <CalendarDays
                    size={20}
                    className={isLight ? "text-slate-800" : "text-[#f0d08a]"}
                  />
                  <div>
                    <p
                      className={`text-xs uppercase tracking-[0.16em] ${
                        isLight ? "text-slate-700" : "text-slate-400"
                      }`}
                    >
                      Öffnungsdatum
                    </p>
                    <p
                      className={`mt-1 font-medium ${
                        isLight ? "text-slate-950" : "text-slate-100"
                      }`}
                    >
                      {kapsel.openDate}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Users
                    size={20}
                    className={isLight ? "text-slate-800" : "text-[#f0d08a]"}
                  />
                  <div>
                    <p
                      className={`text-xs uppercase tracking-[0.16em] ${
                        isLight ? "text-slate-700" : "text-slate-400"
                      }`}
                    >
                      Empfänger
                    </p>
                    <p
                      className={`mt-1 font-medium ${
                        isLight ? "text-slate-950" : "text-slate-100"
                      }`}
                    >
                      {kapsel.recipient}
                    </p>
                  </div>
                </div>
              </div>

              <section className="mt-8">
                <p
                  className={`text-xs font-semibold uppercase tracking-[0.22em] ${
                    isLight ? "text-slate-800" : "text-[#f0d08a]"
                  }`}
                >
                  Persönliche Nachricht
                </p>

                <div className="relative mt-4 overflow-hidden rounded-3xl border border-black/20 bg-black/20 p-6">
                  <p
                    className={`whitespace-pre-line text-lg leading-8 ${
                      isLight ? "text-slate-900" : "text-slate-200"
                    } ${!isOpened ? "select-none blur-sm" : ""}`}
                  >
                    {kapsel.message}
                  </p>

                  {!isOpened && (
                    <div className="absolute inset-0 grid place-items-center bg-black/55 p-6 text-center backdrop-blur-sm">
                      <div>
                        <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl border border-[#f0d08a]/30 bg-[#f0d08a]/10 text-[#f0d08a]">
                          <ShieldCheck size={26} />
                        </div>

                        <h2 className="mt-4 font-serif text-2xl font-semibold text-white">
                          Diese Kapsel ist noch versiegelt.
                        </h2>

                        <p className="mt-2 max-w-md text-sm leading-6 text-slate-300">
                          Der Inhalt wird erst am {kapsel.openDate} sichtbar.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </section>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}