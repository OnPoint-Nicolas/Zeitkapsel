import assert from "node:assert/strict";
import test from "node:test";
import { calculateEditUntil } from "../src/lib/capsule-edit-window.ts";

const day = 24 * 60 * 60 * 1000;
const createdAt = new Date("2026-10-10T12:00:00.000Z");

test("30 days until opening allow three days of corrections", () => {
  const openAt = new Date(createdAt.getTime() + 30 * day);
  assert.equal(
    calculateEditUntil(createdAt, openAt).getTime(),
    createdAt.getTime() + 3 * day,
  );
});

test("long waits are capped at seven days", () => {
  const openAt = new Date(createdAt.getTime() + 365 * day);
  assert.equal(
    calculateEditUntil(createdAt, openAt).getTime(),
    createdAt.getTime() + 7 * day,
  );
});

test("short waits get a proportional correction window", () => {
  const openAt = new Date(createdAt.getTime() + 2 * 60 * 60 * 1000);
  assert.equal(
    calculateEditUntil(createdAt, openAt).getTime(),
    createdAt.getTime() + 12 * 60 * 1000,
  );
});

test("already opened capsules receive no correction window", () => {
  const openAt = new Date(createdAt.getTime() - day);
  assert.equal(calculateEditUntil(createdAt, openAt).getTime(), createdAt.getTime());
});
