"use server";
import { prisma } from "@/lib/prisma";
import { createSession } from "@/lib/session";
import bcrypt from "bcryptjs";
import {redirect} from "next/navigation";

export async function registerUser(formData: FormData) {
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    if (
        typeof name !== "string" ||
        typeof email !== "string" ||
        typeof password !== "string"
    ) {
        throw new Error("Ungültige Eingaben.");
    }

    const trimmedName = name.trim();
    const trimmedEmail = email.trim().toLowerCase();
    const trimmedPassword = password.trim();

    if (!trimmedName || !trimmedEmail || trimmedPassword.length < 8) {
        throw new Error("Name, E-Mail und Passwort mit mindestens 8 Zeichen sind erforderlich.");
    }

    const passwordHash = await bcrypt.hash(trimmedPassword, 12);
    const user = await prisma.user.create({
        data: {
            name: trimmedName,
            email: trimmedEmail,
            passwordHash,
        },

    });
    await createSession(user.id);
    redirect("/dashboard");

}