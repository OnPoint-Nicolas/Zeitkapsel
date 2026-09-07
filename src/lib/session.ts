import { cookies } from "next/headers";
import {
    createSessionToken,
    hashSessionToken,
} from "./auth";
import { prisma } from "./prisma";
import { redirect } from "next/navigation";




const SESSION_COOKIE_NAME = "session";

export async function createSession(userId: string) {
    const token = createSessionToken();
    const tokenHash = hashSessionToken(token);
    const expiresAt = new Date(Date.now() + 1000 * 60 * 10);

    await prisma.session.create({
        data: {
            userId,
            tokenHash,
            expiresAt,
        },
    });

    const cookieStore = await cookies();
    cookieStore.set(SESSION_COOKIE_NAME, token, {
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
        expires: expiresAt,
        path: "/",
    });
}

export async function getCurrentUser() {
    const cookieStore = await cookies();
    const token = cookieStore.get(SESSION_COOKIE_NAME)?.value;

    if (!token) {
        return null;
    }

    const tokenHash = hashSessionToken(token);

    const session = await prisma.session.findUnique({
        where: { tokenHash },
        include: { user: true },
    });

    if (!session || session.expiresAt < new Date()) {
        return null;
    }

    return session.user;
}

export async function requireUser() {

    const user = await getCurrentUser();

    if (!user) {
        redirect("/login");
    }

    return user;
}

export async function deleteSession() {
    const cookieStore = await cookies();
    const token = cookieStore.get(SESSION_COOKIE_NAME)?.value;

    if (token) {
        const tokenHash = hashSessionToken(token);

        await prisma.session.deleteMany({
            where: { tokenHash },
        });
    }

    cookieStore.delete(SESSION_COOKIE_NAME);
}