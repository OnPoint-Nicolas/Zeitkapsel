import "dotenv/config";
import { prisma } from "../src/lib/prisma";

const demoEmail = process.env.SEED_USER_EMAIL?.trim().toLowerCase();

if (!demoEmail) {
  throw new Error("SEED_USER_EMAIL fehlt.");
}

const day = 24 * 60 * 60 * 1000;

const examples = [
  {
    key: "geoeffnet",
    title: "Ein Brief an mein früheres Ich",
    description: "Was hat sich seit damals verändert? Was ist geblieben?",
    daysFromNow: -7,
  },
  {
    key: "bald",
    title: "Ein Moment in zwei Wochen",
    description: "Was möchte ich meinem zukünftigen Ich mitgeben?",
    daysFromNow: 14,
  },
  {
    key: "spaeter",
    title: "Ein Blick ins nächste Jahr",
    description: "Welche Wünsche und Ziele begleiten mich bis dahin?",
    daysFromNow: 365,
  },
] as const;

async function main() {
  const user = await prisma.user.findUnique({
    where: { email: demoEmail },
  });

  if (!user) {
    throw new Error("Demo-Konto nicht gefunden. Bitte zuerst registrieren.");
  }

  for (const example of examples) {
    const id = `demo-${user.id}-${example.key}`;
    const data = {
      title: example.title,
      description: example.description,
      openAt: new Date(Date.now() + example.daysFromNow * day),
      kind: "Nachricht",
      isArchived: false,
      userId: user.id,
    };

    await prisma.capsule.upsert({
      where: { id },
      update: data,
      create: { id, ...data },
    });
  }

  console.log("Drei Demo-Zeitkapseln wurden angelegt oder aktualisiert.");
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
