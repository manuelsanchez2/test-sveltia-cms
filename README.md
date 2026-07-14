# Praxis Hamburg — Website

Website für eine hausärztliche Praxis in Hamburg. Statisch generiert mit **SvelteKit**,
**Tailwind CSS v4** und **TypeScript**, redaktionell gepflegt über **Sveltia CMS** und
ausgeliefert über **Netlify**. Alle Seiten werden vollständig vorgerendert (`prerender = true`).

## Entwicklung

```bash
pnpm install
pnpm dev            # Entwicklungsserver
pnpm build          # Produktions-Build (statisch, Ordner: build/)
pnpm preview        # Build lokal ansehen
pnpm check          # Typprüfung (svelte-check)
pnpm test           # End-to-End-Tests (Playwright)
```

## Struktur

```
content/            # Alle Inhalte (vom CMS bearbeitet)
  settings/         #   general.json, social.json
  pages/            #   startseite / leistungen / praxis / team / kontakt (.json)
  legal/            #   impressum.md, datenschutz.md
src/lib/
  content.ts        # lädt Inhalte typisiert zur Build-Zeit
  components/       # Header, Footer, Hero, SectionTitle, Cards, Sprechzeiten, SocialIcons, Seo
  reveal.ts         # dezenter Scroll-Effekt (respektiert prefers-reduced-motion)
src/routes/         # eine Route pro Seite + sitemap.xml
static/
  admin/            # Sveltia CMS: index.html + config.yml
  uploads/          # über das CMS hochgeladene Medien
```

## Design

„Hanseatisch ruhig“ — kühle, präzise Töne (Elbe, Nordsee, Speicherstadt-Klinker),
ein einziger Akzent (petrol), Tiefe durch 1px-Linien statt Schatten. Display-Schrift
*Marcellus*, Fließtext *Mulish* (beide selbst gehostet über `@fontsource`, DSGVO-konform).

## Inhalte pflegen (CMS)

Die Praxis bearbeitet Inhalte unter `/admin`. Details in **ANLEITUNG.md**.

Lokal ohne GitHub-Login testen (Sveltias lokales Backend spricht das Decap-Proxy-Protokoll):

```bash
pnpm cms:proxy      # in einem Terminal → decap-server auf Port 8081
pnpm dev            # in einem zweiten Terminal, dann http://localhost:5173/admin
```

(`local_backend: true` in `static/admin/config.yml` ist aktiviert; der Proxy schreibt
direkt in die Dateien unter `content/`.)

## Deployment

Netlify ist mit dem Repository verbunden:

- `main` → Produktion
- `preview` → Branch-Deploy mit fester Vorschau-URL (hier bearbeitet die Praxis)

Freigeben = Pull Request `preview → main` mergen.

### Vor dem Livegang anzupassen

- `static/admin/config.yml`: `backend.repo` auf das echte Repository setzen; Auth
  (sveltia-cms-auth Worker oder GitHub OAuth App) hinterlegen.
- Domain in `src/lib/components/Seo.svelte` und `src/routes/sitemap.xml/+server.ts`.
- **Impressum/Datenschutz mit der Praxis verifizieren** (Ärztekammer, KV, DSGVO).
