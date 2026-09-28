import Link from "next/link";
import { CalendarDays, FileText, ShieldCheck } from "lucide-react";
import type { Capsule } from "@/generated/prisma/client";

const dateFormatter = new Intl.DateTimeFormat("de-DE", {
    dateStyle: "long",
});

function getStatus(openAt: Date) {
    const timeUntilOpen = openAt.getTime() - Date.now();

    if (timeUntilOpen <= 0) return "geöffnet";

    if (timeUntilOpen <= 1000 * 60 * 60 * 24 * 30) {
        return "bald geöffnet";
    }

    return "versiegelt";
}
function getStatusClasses(status: string) {
    if (status === "geöffnet") {
        return "border-emerald-300/40 bg-emerald-400/20 text-emerald-100";
    }

    if (status === "bald geöffnet") {
        return "border-[#f0d08a]/45 bg-[#f0d08a]/20 text-[#fff1b8]";
    }

    return "border-[#d8aa5b]/40 bg-black/25 text-[#f0d08a]";
}

export function CapsuleCard({ capsule }: { capsule: Capsule }) {
    const status = getStatus(capsule.openAt);

    return (
        <Link
            href={`/kapseln/${capsule.id}`}
            className="group relative overflow-hidden rounded-[0_2rem_2rem_2rem] border border-[#d8aa5b]/20 bg-[radial-gradient(circle_at_24%_12%,_rgba(240,208,138,0.2),_transparent_28%),linear-gradient(145deg,_rgba(91,52,38,0.55),_rgba(15,23,42,0.88))] p-7 shadow-2xl shadow-black/35 transition hover:-translate-y-1 hover:border-[#d8aa5b]/45"
        >
            <div className="relative flex items-start justify-between gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-2xl border border-[#d8aa5b]/20 bg-black/20 text-[#f0d08a]">
                    <FileText size={22} />
                </span>

                <span
                    className={`inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-semibold ${getStatusClasses(status)}`}
                >
                    <ShieldCheck size={13} />
                    {status}
                </span>
            </div>

            <h2 className="mt-8 font-serif text-2xl font-semibold leading-tight text-white">
                {capsule.title}
            </h2>

            <p className="mt-4 min-h-24 leading-7 text-slate-300">
                {capsule.description || "Keine Vorschau vorhanden."}
            </p>

            <div className="mt-7 border-t border-[#d8aa5b]/10 pt-4">
                <div className="flex items-center gap-2 text-sm text-slate-300">
                    <CalendarDays size={17} />
                    Öffnet am {dateFormatter.format(capsule.openAt)}
                </div>

                <p className="mt-3 text-sm font-medium text-[#f0d08a]">
                    {capsule.kind}
                </p>
            </div>
        </Link>
    );
}