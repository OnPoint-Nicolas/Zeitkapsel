import { CapsuleDetail } from "@/components/capsule/CapsuleDetail";

export default async function KapselDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <CapsuleDetail id={id} />;
}
