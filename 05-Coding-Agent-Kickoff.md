# NextRojgar — Coding Agent Kickoff Prompt

You are working in the existing NextRojgar repository. Your task today is FRONTEND-FIRST.

## Before coding
1. Inspect the root, `next-rojgar-frontend/`, `next-project-backend/`, package files, source files, README, and Git status.
2. Do not assume files are absent until inspected.
3. Preserve working generated configuration. Avoid unnecessary dependencies and broad rewrites.
4. If the frontend is not initialized, create Next.js App Router + TypeScript + Tailwind inside the existing `next-rojgar-frontend/` directory, not a nested new folder.
5. Use the four accompanying SOW, BRD, SRS, and Technical Architecture documents as requirements.

## Product
NextRojgar is an independent India-focused government recruitment and exam-information portal. Planned areas: Jobs, Admit Cards, Results, Answer Keys, Syllabus, Admissions, Current Affairs, Study Material, and Online Tools. Do not imply official government status.

## Today's goal
Build a polished responsive frontend foundation:
- Shared header, desktop navigation, accessible mobile navigation, and footer.
- Homepage hero/search affordance.
- Quick links to main sections.
- Latest Jobs, Latest Results, Admit Cards, and Latest Updates sections.
- Reusable cards, badges, buttons, and section headings where useful.
- Route shells for `/jobs`, `/admit-card`, `/results`, `/answer-key`, `/syllabus`, `/admissions`, `/current-affairs`, `/study-material`, `/tools`, `/about`, and `/contact`.
- Meaningful page metadata and responsive layouts.
- Useful empty/“coming soon” states where there is no real data.

## Data integrity
Use a dedicated mock-data module. Clearly mark demo content where it might be mistaken for current notices. Do not invent real vacancies, deadlines, eligibility, official URLs, or claim that data is live/verified. No scraping or automated publishing.

## Stack and code quality
- Next.js App Router, React, TypeScript, Tailwind CSS.
- Backend direction is separate Express + TypeScript; PostgreSQL is later.
- Do not require backend/database availability today.
- Keep route files thin and components reusable.
- Prefer server components unless interactivity needs a client component.
- Use semantic HTML, accessible labels, visible focus, sensible heading order.
- Centralize future API access; do not hardcode API URLs throughout components.
- No authentication, database, admin CRUD, payments, or file uploads today.
- Avoid large UI libraries unless clearly necessary.

## Verification
Run available lint/type checks and production build. Fix errors introduced by your changes. If a check fails due to a pre-existing issue, report it clearly. Verify navigation links and mobile layout where possible.

## Final report
Include: existing repo state; implementation summary; files created/modified; commands run and actual results; frontend start command; known limitations; and the single best next task. Never claim a check passed unless you ran it.
