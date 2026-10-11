import { SubmitButton } from "@/components/submit-button";
import Link from "next/link";
import { ArrowLeft, CalendarDays, Save } from "lucide-react";
import { notFound } from "next/navigation";
import { AppSidebar } from "@/components/app-sidebar";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/session";
import { updateCapsule } from "../actions";

export default async function BearbeitenPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ error?: string }>;
}) {
  const user = await requireUser();
  const { error } = await searchParams;
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
    <main className="app-shell">
      <AppSidebar user={user} />
      <section className="min-h-screen min-w-0 flex-1 bg-[#131c16] px-6 py-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <Link
            href={`/kapseln/${capsule.id}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-stone-400 transition hover:text-[#ecc09b]"
          >
            <ArrowLeft size={17} /> Zurück zur Zeitkapsel
          </Link>
          <p className="mt-10 text-xs font-semibold uppercase tracking-[0.22em] text-[#dca277]">
            Zeitkapsel bearbeiten
          </p>
          <h1 className="mt-4 font-serif text-4xl font-semibold text-white sm:text-5xl">
            Erinnerung anpassen
          </h1>
          <p className="mt-3 text-sm text-stone-400">
            Die Korrekturfrist endet am{" "}
            {new Intl.DateTimeFormat("de-DE", {
              dateStyle: "medium",
              timeStyle: "short",
            }).format(capsule.editUntil)}{" "}
            Uhr. Änderungen verlängern diese Frist nicht.
          </p>
          {error && (
            <p role="alert" className="mt-6 text-red-200">
              Bitte prüfe Titel und Öffnungsdatum. Das Datum muss in der Zukunft
              liegen.
            </p>
          )}
          <form
            action={updateAction}
            className="mt-10 rounded-lg border border-[#dca277]/20 bg-[#131c16] p-6 shadow-2xl shadow-black/35 sm:p-8"
          >
            <div className="grid gap-6">
              <div>
                <label
                  htmlFor="title"
                  className="mb-2 block text-sm font-medium text-stone-200"
                >
                  Titel
                </label>
                <input
                  id="title"
                  name="title"
                  defaultValue={capsule.title}
                  required
                  className="w-full rounded-lg border border-[#dca277]/15 bg-stone-950/40 px-4 py-3 text-stone-100 outline-none focus:border-[#dca277]/60"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-stone-200"
                >
                  Nachricht
                </label>
                <textarea
                  id="message"
                  name="message"
                  defaultValue={capsule.description ?? ""}
                  rows={8}
                  className="w-full resize-none rounded-lg border border-[#dca277]/15 bg-stone-950/40 px-4 py-3 text-stone-100 outline-none focus:border-[#dca277]/60"
                />
              </div>
              <div>
                <label
                  htmlFor="openDate"
                  className="mb-2 block text-sm font-medium text-stone-200"
                >
                  Öffnungsdatum
                </label>
                <div className="relative">
                  <CalendarDays
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#dca277]"
                    size={18}
                  />
                  <input
                    id="openDate"
                    name="openDate"
                    type="date"
                    defaultValue={openDate}
                    required
                    className="w-full rounded-lg border border-[#dca277]/15 bg-stone-950/40 py-3 pl-12 pr-4 text-stone-100 outline-none focus:border-[#dca277]/60"
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-4 border-t border-[#dca277]/10 pt-6">
              <SubmitButton
                type="submit"
                className="inline-flex items-center gap-2 rounded-lg bg-[#dca277] px-5 py-3 font-semibold text-stone-950 transition hover:bg-[#ecc09b]"
              >
                <Save size={18} /> Änderungen speichern
              </SubmitButton>
              <Link
                href={`/kapseln/${capsule.id}`}
                className="rounded-lg border border-[#dca277]/20 px-5 py-3 font-semibold text-stone-200"
              >
                Abbrechen
              </Link>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
