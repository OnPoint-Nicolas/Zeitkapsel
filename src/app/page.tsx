import Link from "next/link";
import { CapsuleArtwork } from "@/components/capsule/CapsuleArtwork";

export default function Home() {
  return (
    <main className="app-shell">
      <header className="app-header">
        <Link href="/" className="brand">
          aevum<span>ZEIT BEWAHREN</span>
        </Link>
        <div className="ml-auto flex items-center gap-5 text-sm">
          <Link href="/login">Anmelden</Link>
          <Link href="/register" className="secondary-button">
            Konto erstellen
          </Link>
        </div>
      </header>
      <section className="capsule-hero">
        <div className="hero-copy">
          <p className="eyebrow">Ein Brief an dein zukünftiges Ich</p>
          <h1>
            Heute bewahren.
            <br />
            Später wiederfinden.
          </h1>
          <p>
            Es gibt Gedanken, die bleiben sollten. Lege deine Nachricht in eine
            Zeitkapsel und bestimme, wann du sie wieder lesen möchtest.
          </p>
          <Link href="/register" className="primary-button">
            Meine erste Kapsel erstellen
          </Link>
        </div>
        <div className="hero-art">
          <CapsuleArtwork />
        </div>
      </section>
      <section
        className="app-content grid gap-8 md:grid-cols-3"
        aria-label="So funktioniert Aevum"
      >
        {[
          [
            "01",
            "Einen Moment festhalten",
            "Schreibe eine persönliche Nachricht in deinem eigenen Konto.",
          ],
          [
            "02",
            "Der Zeit überlassen",
            "Wähle ein Öffnungsdatum. Für kurze Korrekturen bleiben zehn Prozent der Wartezeit, höchstens sieben Tage.",
          ],
          [
            "03",
            "Eine Erinnerung wiederfinden",
            "Nach dem Öffnungsdatum ist deine Nachricht lesbar und nicht mehr veränderbar. Du kannst sie archivieren oder löschen.",
          ],
        ].map(([n, title, text]) => (
          <div key={n}>
            <p className="eyebrow">{n}</p>
            <h2 className="my-3 font-serif text-2xl">{title}</h2>
            <p className="text-sm leading-7 text-stone-400">{text}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
