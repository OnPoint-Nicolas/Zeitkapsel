"use server";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/session";
import { redirect } from "next/navigation";

export async function createCapsule(formData: FormData) {
    const user = await requireUser();
    const title = formData.get("title");
    const description = formData.get("message");
    const openDate = formData.get("openDate");

    if (
        typeof title !== "string" ||
        typeof description !== "string" ||
        typeof openDate !== "string"
    ) {
        redirect("/kapseln/neu?error=ungueltige-eingaben");
    }

    const cleanTitle = title.trim();
    const cleanDescription = description.trim();
    const openAt = new Date(openDate);

    if (
        !cleanTitle ||
        Number.isNaN(openAt.getTime()) ||
        openAt <= new Date()
    ) {
        redirect("/kapseln/neu?error=ungueltige-eingaben");
    }

    await prisma.capsule.create({
        data: {
            title: cleanTitle,
            description: cleanDescription || null,
            openAt,
            kind: "Nachricht",
            userId: user.id,
        },
    });
    
    redirect("/kapseln");
}