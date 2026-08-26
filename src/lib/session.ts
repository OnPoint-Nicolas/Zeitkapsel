import { cookies } from "next/headers";
import {
    createSessionToken,
    hashSessionToken,
} from "./auth";
import { prisma } from "./prisma";

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