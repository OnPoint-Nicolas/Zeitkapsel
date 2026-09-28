"use server";

import { prisma } from "@/lib/prisma";
import { deleteSession, requireUser } from "@/lib/session";
import { redirect } from "next/navigation";

export async function deleteAccount(formData: FormData) {
  const user = await requireUser();
  const confirmation = formData.get("confirmation");

  if (
    typeof confirmation !== "string" ||
    confirmation.trim().toUpperCase() !== "LÖSCHEN"
  ) {
    redirect("/einstellungen?error=ungueltige-bestaetigung");
  }

  await prisma.user.delete({
    where: {
      id: user.id,
    },
  });

  await deleteSession();

  redirect("/register?status=konto-geloescht");
}