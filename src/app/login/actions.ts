"use server";
import { prisma } from "@/lib/prisma";
import { createSession } from "@/lib/session";
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";

export async function loginUser(formData: FormData) {
    const email = formData.get("email");
    const password = formData.get("password");

    if (typeof email !== "string" || typeof password !== "string") {
        redirect("/login?error=ungueltige-eingaben");
    }

    const trimmedEmail = email.trim().toLowerCase();
    const trimmedPassword = password.trim();

    const user = await prisma.user.findUnique({
        where: {
            email: trimmedEmail,
        },
    });

    if (!user) {
        redirect("/login?error=falsche-zugangsdaten");
    }

    const passwordIsValid = await bcrypt.compare(
        trimmedPassword,
        user.passwordHash
    );

    if (!passwordIsValid) {
        redirect("/login?error=falsche-zugangsdaten");
    }

    await createSession(user.id);
    redirect("/dashboard");
}