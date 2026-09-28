"use server";
import { prisma } from "@/lib/prisma";
import { createSession } from "@/lib/session";
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";

export async function registerUser(formData: FormData) {
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    if (
        typeof name !== "string" ||
        typeof email !== "string" ||
        typeof password !== "string"
    ) {
        redirect("/register?error=ungueltige-eingaben");
    }

    const trimmedName = name.trim();
    const trimmedEmail = email.trim().toLowerCase();
    const passwordValue = password;

    if (!trimmedName || !trimmedEmail || passwordValue.length < 8) {
        redirect("/register?error=ungueltige-eingaben");
    }

    const existingUser = await prisma.user.findUnique({
        where: { email: trimmedEmail },
    });

    if (existingUser) {
        redirect("/register?error=email-vergeben");
    }
    const passwordHash = await bcrypt.hash(passwordValue, 12);
    const user = await prisma.user.create({
        data: {
            name: trimmedName,
            email: trimmedEmail,
            passwordHash,
        },

    });
    await createSession(user.id);
    redirect("/onboarding");

}