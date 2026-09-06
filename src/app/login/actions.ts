"use server";
import { prisma } from "@/lib/prisma";
import { createSession } from "@/lib/session";
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";

export async function loginUser(formData: FormData) {
    const email = formData.get("email");
    const password = formData.get("password");

    if (typeof email !== "string" || typeof password !== "string") {
        throw new Error("Ungültige Eingaben.");
    }

    const trimmedEmail = email.trim().toLowerCase();
    const trimmedPassword = password.trim();

    const user = await prisma.user.findUnique({
        where: {
            email: trimmedEmail,
        },
    });

    if (!user) {
        throw new Error("E-Mail oder Passwort ist falsch.");
    }

    const passwordIsValid = await bcrypt.compare(
        trimmedPassword,
        user.passwordHash
    );

    if (!passwordIsValid) {
        throw new Error("E-Mail oder Passwort ist falsch.");
    }

    await createSession(user.id);
    redirect("/dashboard");
}