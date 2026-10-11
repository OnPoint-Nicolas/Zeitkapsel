# Aevum – Zeitkapseln

Eine persönliche Full-Stack-Anwendung: Nachrichten heute verfassen und erst zu einem selbst gewählten Zeitpunkt wieder lesen.

## Funktionsumfang

- Registrierung, Anmeldung und Abmeldung mit serverseitigen Sessions.
- Eigene Zeitkapseln erstellen, lesen, im Korrekturfenster bearbeiten, archivieren, wiederherstellen und endgültig löschen.
- Korrekturfenster: 10 % der ursprünglichen Wartezeit, maximal sieben Tage. Beim Erstellen gespeichert; Änderungen verlängern es nicht. Nach dem Öffnungsdatum ist Bearbeiten ausgeschlossen.
- Versiegelte Nachrichten werden auf Übersichts- und Detailseiten nicht an den Browser übertragen. Innerhalb der Korrekturfrist darf der Eigentümer sie im Bearbeitungsformular lesen und korrigieren.
- Animierte Kapsel aus fotografischen Ebenen; die Animation ist Darstellung, keine Verschlüsselung und keine zusätzliche Berechtigungsprüfung.
- Responsive Navigation und reduzierte Animation bei entsprechender Systemeinstellung.

Kapseln gehören ausschließlich zum eigenen Konto. Empfängerfreigaben, Benachrichtigungen und Dateianhänge sind nicht Teil dieser Version.

## Technik

Next.js App Router, React, TypeScript, Tailwind CSS; Prisma mit PostgreSQL/Neon. Server Components laden Daten, Server Actions prüfen Anmeldung und Eigentümer und führen Änderungen aus. Client Components übernehmen Navigation, Ladezustände und die Öffnungsanimation. Passwörter werden mit bcrypt gehasht. Session-Tokens werden nur gehasht in der Datenbank gespeichert; Cookies sind HttpOnly und in Produktion Secure.

## Lokal starten

Node.js 22 oder neuer verwenden.

```bash
npm ci
npx prisma generate
npx prisma migrate deploy
npm run dev
```

Vorher eine lokale, nicht eingecheckte `.env` mit `DATABASE_URL` zur eigenen PostgreSQL-Datenbank anlegen. Keine Zugangsdaten ins Repository kopieren.

## Beispieldaten

Zuerst ein Konto über die Registrierung anlegen. Anschließend dessen E-Mail lokal als `SEED_USER_EMAIL` setzen:

```bash
SEED_USER_EMAIL="demo@example.com" npx prisma db seed
```

Der Seed legt drei Beispielkapseln an. Bereits vorhandene Seed-Kapseln werden anhand stabiler IDs erkannt und nicht überschrieben. Er legt kein Konto oder Passwort an.

## Prüfen

```bash
npm run lint
node --import tsx --test tests/capsule-edit-window.test.mjs
npm run build
```

Der Build erzeugt auch den Prisma-Client. Die Tests prüfen die Berechnung der Korrekturfrist; sie ersetzen keine vollständigen Browser- und Berechtigungstests.

## Bereitstellung

Vercel-Projekt mit diesem Repository verbinden, `DATABASE_URL` für Production setzen und vorhandene Migrationen mit `prisma migrate deploy` auf die vorgesehene Datenbank anwenden. Build-Befehl: `npm run build`. Keine Demo-Seeds automatisch beim Build ausführen. Die Entwicklungsroute `/komponenten` ist in Produktion deaktiviert.

## Präsentation

Vor der Demonstration neu anmelden: Sessions laufen nach zehn Minuten ab. Eine versiegelte und eine bereits geöffnete Kapsel bereithalten. Lesen und Öffnungsanimation sind getrennt vom Bearbeiten. Endgültiges Löschen ist nur aus dem Archiv möglich und benötigt eine Bestätigung.

Gestaltungsprozess, Bilder und Lernmaterial werden separat außerhalb dieses Repositories aufbewahrt.
