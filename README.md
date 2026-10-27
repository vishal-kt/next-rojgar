# NextRojgar frontend

The Next.js App Router frontend for an independent India-focused recruitment and exam-information project. It is a UI foundation only: there is no live API, database, authentication, admin workflow, scraping, or deployment configuration.

## Run locally

```powershell
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Existing dependencies and generated Next.js configuration are kept in place.

## Verify

```powershell
npm run lint
npm run build
```

## Routes

- `/` — Homepage, local demo search, category links, sample jobs, results, admit cards, and updates.
- `/jobs`, `/admit-card`, `/results` — Fictional sample listing cards.
- `/answer-key`, `/syllabus`, `/admissions`, `/current-affairs`, `/study-material`, `/tools` — Section shells and honest coming-soon states.
- `/about`, `/contact` — Project context and preview limitations.

## Demo content and data integrity

All preview notices are fictional placeholders in `lib/mock-data.ts`. They are not current, verified, official, or linked to real recruiting bodies. No dates, eligibility rules, vacancy counts, or official links are fabricated. The site-wide preview notice and individual sample labels make this clear. Search only matches local sample entries.

Before any real recruitment content is published, add a reviewed content source and include official-source attribution. Do not treat this preview as a source of recruitment advice.

## Project structure

- `app/` — Route pages, root layout, metadata, and global styles.
- `components/layout/` — Shared header, mobile navigation, and footer.
- `components/home/` — Homepage sections.
- `components/ui/` — Reusable cards, badges, buttons, and empty states.
- `config/site.ts` — Public site identity, disclaimer, and navigation.
- `lib/mock-data.ts` — Fictional data used while no backend is connected.
- `lib/api.ts` — Central API client foundation; no route currently calls it.
- `types/index.ts` — Shared domain and response types.

The API is a separate planned application. Database, authentication, editorial tools, scraping, file processing, and production deployment are intentionally out of scope for this frontend milestone.
