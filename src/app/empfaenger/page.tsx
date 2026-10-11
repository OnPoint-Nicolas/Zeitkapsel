import { redirect } from "next/navigation";
import { requireUser } from "@/lib/session";

// Teilen mit anderen Konten gehört nicht zum aktuellen Funktionsumfang.
export default async function EmpfaengerPage() {
  await requireUser();
  redirect("/kapseln");
}
