const MAX_EDIT_WINDOW_MS = 7 * 24 * 60 * 60 * 1000;

export function calculateEditUntil(createdAt: Date, openAt: Date): Date {
  const waitMs = Math.max(0, openAt.getTime() - createdAt.getTime());
  return new Date(
    createdAt.getTime() + Math.min(waitMs * 0.1, MAX_EDIT_WINDOW_MS),
  );
}
