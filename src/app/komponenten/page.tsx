import { FileText, Lock, Mail, Unlock } from "lucide-react";
import {
  AevumLogo,
  AevumMark,
  AevumSeal,
  BRAND_NAME,
} from "@/components/capsule/AevumLogo";
import { LeatherBadge } from "@/components/capsule/LeatherBadge";
import {
  CapsuleStatus,
  MetalCard,
} from "@/components/capsule/MetalCard";

const metalSamples = [
  {
    id: "copper-orbital",
    tone: "copper" as const,
    finish: "orbital" as const,
    icon: <Mail size={20} />,
    status: (
      <CapsuleStatus variant="sealed">
        <Lock size={13} />
      </CapsuleStatus>
    ),
    meta: "versiegelt",
  },
  {
    id: "silver-orbital",
    tone: "silver" as const,
    finish: "orbital" as const,
    icon: <Lock size={20} />,
    status: (
      <CapsuleStatus variant="soon">
        <Unlock size={13} />
      </CapsuleStatus>
    ),
    meta: "bald geöffnet",
  },
  {
    id: "bronze-overlap",
    tone: "bronze" as const,
    finish: "overlap" as const,
    icon: <Unlock size={20} />,
    status: (
      <CapsuleStatus variant="open">
        <Unlock size={13} />
      </CapsuleStatus>
    ),
    meta: "geöffnet",
  },
  {
    id: "gold-overlap",
    tone: "gold" as const,
    finish: "overlap" as const,
    icon: <FileText size={20} />,
    status: (
      <CapsuleStatus variant="sealed">
        <Lock size={13} />
      </CapsuleStatus>
    ),
    meta: "versiegelt",
  },
  {
    id: "copper-sunburst",
    tone: "copper" as const,
    finish: "sunburst" as const,
    icon: <Lock size={20} />,
    status: (
      <CapsuleStatus variant="open">
        <Unlock size={13} />
      </CapsuleStatus>
    ),
    meta: "geöffnet",
  },
  {
    id: "silver-overlap",
    tone: "silver" as const,
    finish: "overlap" as const,
    icon: <FileText size={20} />,
    status: (
      <CapsuleStatus variant="sealed">
        <Lock size={13} />
      </CapsuleStatus>
    ),
    meta: "versiegelt",
  },
  {
    id: "bronze-sunburst",
    tone: "bronze" as const,
    finish: "sunburst" as const,
    icon: <Mail size={20} />,
    status: (
      <CapsuleStatus variant="soon">
        <Unlock size={13} />
      </CapsuleStatus>
    ),
    meta: "bald geöffnet",
  },
  {
    id: "gold-orbital",
    tone: "gold" as const,
    finish: "orbital" as const,
    icon: <Unlock size={20} />,
    status: (
      <CapsuleStatus variant="open">
        <Unlock size={13} />
      </CapsuleStatus>
    ),
    meta: "geöffnet",
  },
];

export default function KomponentenPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_17%_15%,_rgba(92,44,125,0.25),_transparent_30%),radial-gradient(circle_at_84%_10%,_rgba(24,83,137,0.27),_transparent_32%),linear-gradient(135deg,_#070914,_#130f28_48%,_#061426)] px-6 py-12 text-slate-100 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-16">
        <section className="flex flex-wrap items-center justify-center gap-12 py-4">
          <AevumMark size={78} />
          <AevumLogo />
          <AevumSeal size={118} />
          <AevumSeal size={154} />
        </section>

        <section className="grid place-items-center gap-9 sm:grid-cols-2 xl:grid-cols-5">
          <LeatherBadge label={BRAND_NAME} size={210} variant="classic">
            <AevumSeal size={120} />
          </LeatherBadge>

          <LeatherBadge label={BRAND_NAME} size={210} variant="walnut">
            <AevumMark size={118} />
          </LeatherBadge>

          <LeatherBadge label={BRAND_NAME} size={210} variant="oxblood">
            <AevumSeal size={120} />
          </LeatherBadge>

          <LeatherBadge label={BRAND_NAME} size={210} variant="saddle">
            <AevumMark size={118} />
          </LeatherBadge>

          <LeatherBadge label={BRAND_NAME} size={210} variant="aged">
            <AevumSeal size={120} />
          </LeatherBadge>
        </section>

        <section className="grid gap-7 md:grid-cols-2 xl:grid-cols-4">
          {metalSamples.map((sample) => (
            <MetalCard key={sample.id} {...sample} />
          ))}
        </section>
      </div>
    </main>
  );
}
