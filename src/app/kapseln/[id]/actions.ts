"use server";

import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/session";
import { redirect } from "next/navigation";

function readCapsuleInput(formData: FormData) {
  const title = formData.get("title");
  const message = formData.get("message");
  const openDate = formData.get("openDate");

  if (typeof title !== "string" || typeof message !== "string" || typeof openDate !== "string") {
    return null;
  }

  const openAt = new Date(openDate);
  const cleanTitle = title.trim();

  if (!cleanTitle || Number.isNaN(openAt.getTime()) || openAt <= new Date()) {
    return null;
  }

  return { title: cleanTitle, description: message.trim() || null, openAt };
}

export async function updateCapsule(id: string, formData: FormData) {
  const user = await requireUser();
  const input = readCapsuleInput(formData);

  if (!input) redirect(`/kapseln/${id}/bearbeiten?error=ungueltige-eingaben`);

  const now = new Date();
  const result = await prisma.capsule.updateMany({
    where: {
      id,
      userId: user.id,
      isArchived: false,
      openAt: { gt: now },
      editUntil: { gt: now },
    },

    data: input,
  });

  if (result.count === 0) redirect("/kapseln");
  redirect(`/kapseln/${id}`);
}

export async function archiveCapsule(formData: FormData) {
  const user = await requireUser();
  const id = formData.get("id");
  if (typeof id !== "string") redirect("/kapseln");

  await prisma.capsule.updateMany({
    where: { id, userId: user.id, isArchived: false },
    data: { isArchived: true },
  });
  redirect("/archiv");
}

export async function restoreCapsule(formData: FormData) {
  const user = await requireUser();
  const id = formData.get("id");
  if (typeof id !== "string") redirect("/archiv");

  await prisma.capsule.updateMany({
    where: { id, userId: user.id, isArchived: true },
    data: { isArchived: false },
  });
  redirect("/kapseln");
}

export async function deleteCapsule(formData: FormData) {
  const user = await requireUser();
  const id = formData.get("id");

  if (typeof id !== "string") {
    redirect("/archiv");
  }

  await prisma.capsule.deleteMany({
    where: {
      id,
      userId: user.id,
      isArchived: true,
    },
  });

  redirect("/archiv");
}
