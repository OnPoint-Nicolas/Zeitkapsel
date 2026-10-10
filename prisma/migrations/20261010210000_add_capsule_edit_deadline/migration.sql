ALTER TABLE "Capsule" ADD COLUMN "editUntil" TIMESTAMP(3);

-- For existing capsules, the original opening date is no longer available if it
-- was edited. Use the currently stored date as the best available baseline.
UPDATE "Capsule"
SET "editUntil" = "createdAt" + (
  LEAST(
    GREATEST(EXTRACT(EPOCH FROM ("openAt" - "createdAt")), 0) * 0.1,
    604800
  ) * INTERVAL '1 second'
);

ALTER TABLE "Capsule" ALTER COLUMN "editUntil" SET NOT NULL;
