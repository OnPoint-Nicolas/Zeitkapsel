import Link from "next/link";
import {
  Clock3,
  FileText,
  Image as ImageIcon,
  LockKeyhole,
  Search,
  Unlock,
} from "lucide-react";
import { AppSidebar } from "@/components/app-sidebar";

const kapseln = [
  {
    id: "brief-an-mila",
    title: "Brief an mein Zukunfts-Ich",
    excerpt: "Ein Brief über meine Ziele, Wünsche und Gedanken für die kommende Zeit.",
    openDate: "14. Mai 2032",
    kind: "Nachricht",
    status: "versiegelt",
  },
  {
    id: "ziele-2027",
    title: "Meine Ziele für 2027",
    excerpt: "Was ich in diesem Jahr lernen, verändern und erleben möchte.",
    openDate: "01. Januar 2027",
    kind: "Nachricht",
    status: "bald geöffnet",
  },
  {
    id: "schoener-moment",
    title: "Ein schöner Moment",
    excerpt: "Eine Erinnerung an einen Tag, den ich nicht vergessen möchte.",
    openDate: "10. August 2025",
    kind: "Fotos",
    status: "geöffnet",
  },
];

function StatusBadge({ status }: { status: string }) {
  const styles = {
    versiegelt: "border-slate-500/40 bg-slate-500/10 text-slate-300",
    "bald geöffnet": "border-[#e4b957]/50 bg-[#e4b957]/10 text-[#e4b957]",
    geöffnet: "border-violet-300/50 bg-violet-400/15 text-violet-200",
  };

  const Icon =
    status === "versiegelt"
      ? LockKeyhole
      : status === "geöffnet"
        ? Unlock
        : Clock3;

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold ${styles[status as keyof typeof styles]}`}
    >
      <Icon size={14} />
      {status}
    </span>
  );
}

export default function KapselnPage() {
  return (
    <main className="flex min-h-screen bg-[#0b1020] text-slate-100">
      <AppSidebar />

      <section className="min-w-0 flex-1 px-6 py-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#e4b957]">
            Sammlung
          </p>

          <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
            <div>
              <h1 className="font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
                Alle Zeitkapseln
              </h1>

              <p className="mt-3 text-lg text-slate-400">
                3 Kapseln, 2 davon noch versiegelt.
              </p>
            </div>

            <Link
              href="/kapseln/neu"
              className="rounded-2xl bg-[#e4b957] px-5 py-3 font-semibold text-slate-950 transition hover:bg-[#f0ca70]"
            >
              Neue Zeitkapsel
            </Link>
          </div>

          <div className="mt-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative w-full lg:max-w-md">
              <Search
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
              />

              <input
                type="search"
                placeholder="Kapseln durchsuchen"
                className="w-full rounded-2xl border border-violet-200/15 bg-[#151a31]/80 py-3 pl-12 pr-4 text-slate-100 outline-none placeholder:text-slate-500 focus:border-[#e4b957]/60"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              <button className="rounded-full border border-[#e4b957]/60 bg-[#e4b957]/10 px-4 py-2 text-sm font-semibold text-[#e4b957]">
                Alle Inhalte
              </button>

              <button className="rounded-full border border-violet-200/15 px-4 py-2 text-sm text-slate-400 transition hover:border-violet-200/40 hover:text-white">
                Nachricht
              </button>

              <button className="rounded-full border border-violet-200/15 px-4 py-2 text-sm text-slate-400 transition hover:border-violet-200/40 hover:text-white">
                Fotos
              </button>

              <button className="rounded-full border border-violet-200/15 px-4 py-2 text-sm text-slate-400 transition hover:border-violet-200/40 hover:text-white">
                Dokumente
              </button>
            </div>
          </div>

          <section className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {kapseln.map((kapsel) => {
              const KindIcon =
                kapsel.kind === "Fotos" ? ImageIcon : FileText;

              return (
                <Link
                  key={kapsel.id}
                  href={`/kapseln/${kapsel.id}`}
                  className="group rounded-3xl border border-violet-200/15 bg-[#191b38]/90 p-6 shadow-xl shadow-black/10 transition duration-200 hover:-translate-y-1 hover:border-violet-300/35 hover:shadow-2xl hover:shadow-black/20"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="grid h-14 w-14 place-items-center rounded-2xl border border-violet-300/25 bg-violet-400/10 text-[#e4b957]">
                      <KindIcon size={26} strokeWidth={1.7} />
                    </div>

                    <StatusBadge status={kapsel.status} />
                  </div>

                  <h2 className="mt-8 font-serif text-2xl font-semibold leading-tight">
                    {kapsel.title}
                  </h2>

                  <p className="mt-4 line-clamp-2 leading-7 text-slate-400">
                    {kapsel.excerpt}
                  </p>

                  <div className="mt-7 flex items-center justify-between border-t border-violet-200/10 pt-5 text-sm">
                    <span className="text-slate-400">
                      Öffnet am {kapsel.openDate}
                    </span>

                    <span className="font-medium text-[#e4b957]">
                      {kapsel.kind}
                    </span>
                  </div>
                </Link>
              );
            })}
          </section>

        </div>
      </section>
    </main>
  );
}
