# NextRojgar

> A government recruitment, exam-information, study-resource, and
> online-tools portal designed to help people find reliable
> public-sector opportunities and complete common document tasks from
> one place.

**Project status:** Early development / Day 1\
**Working model:** Local-first development, with a separate frontend and
backend\
**Initial target audience:** People preparing for government recruitment
examinations in India\
**Repository layout:** `next-rojgar-frontend/` + `next-project-backend/`

------------------------------------------------------------------------

## 1. Project overview

NextRojgar is intended to be a clean, accessible, mobile-friendly portal
that brings together government job notifications and related
recruitment information. Instead of making visitors search across many
different pages and websites, the portal should make it easier to
discover opportunities, understand eligibility and important dates,
locate exam resources, and access useful online utilities.

The long-term product may include:

-   Latest government job and recruitment notifications
-   Recruitment details, eligibility, application dates, fees,
    vacancies, and official links
-   Admit-card notifications
-   Exam results and answer keys
-   Syllabus and exam-pattern information
-   Admissions and education-related notices
-   Current affairs and relevant news
-   Study materials and exam-preparation resources
-   Online tools for common document and image tasks
-   A backend/admin workflow to manage and publish content
-   Search, categories, filters, and SEO-friendly detail pages

The exact feature set will be delivered incrementally. This README
describes the intended direction and planned architecture; it does
**not** mean every feature is already implemented.

## 2. Problem we are solving

Information about recruitment and examinations is spread across official
notices, department websites, result pages, admit-card portals, and
educational resources. Users can spend unnecessary time locating the
latest update, distinguishing important dates, and finding useful tools
for document preparation.

NextRojgar aims to provide a single, organized discovery experience
with:

1.  **Clarity:** Present important information in a consistent format.
2.  **Discoverability:** Make jobs and notices searchable and browsable
    by category.
3.  **Timeliness:** Show publication dates, important dates, and update
    status clearly.
4.  **Trust:** Link to official notifications and application portals;
    distinguish verified source information from editorial summaries.
5.  **Usability:** Work well on phones, tablets, and desktop screens.
6.  **Utility:** Offer useful online tools alongside recruitment
    information.
7.  **Maintainability:** Keep the code modular so new sections can be
    added without rebuilding the whole application.

### Editorial and trust principles

-   Official department or recruiting-body sources should be the primary
    reference for recruitment facts.
-   Each notice should provide its official source/application link when
    available.
-   Never invent eligibility criteria, vacancy counts, dates, fees, or
    results.
-   Mark summaries and editorial explanations clearly; direct users to
    the official notice for authoritative details.
-   Show "last updated" information where it is useful and maintain an
    editorial process for corrections.
-   Do not imply that NextRojgar is a government website or an official
    recruiting authority unless that status is genuinely established.
    Use a clear independent-site disclaimer.

## 3. Intended users

-   Candidates searching for central and state government jobs
-   Railway, SSC, banking, defence, teaching, and other recruitment
    aspirants
-   Candidates checking admit cards, results, answer keys, and
    syllabuses
-   Students looking for admissions notices and study resources
-   Visitors who need simple document, image, or calculation utilities

The initial focus is India and government recruitment information.
Future categories should be added based on real user needs rather than
expanding the scope indiscriminately.

------------------------------------------------------------------------

## 4. Technology stack

The initial stack is chosen to be widely used, TypeScript-friendly, and
practical for local development with a low starting cost.

  -----------------------------------------------------------------------
  Layer                   Planned technology      Purpose
  ----------------------- ----------------------- -----------------------
  Frontend framework      Next.js with App Router Website routes,
                                                  layouts, rendering, and
                                                  metadata

  UI library              React                   Reusable interface
                                                  components

  Language                TypeScript              Safer code and shared
                                                  data contracts

  Styling                 Tailwind CSS            Responsive styling and
                                                  design consistency

  Backend runtime         Node.js                 Run server-side
                                                  JavaScript

  Backend framework       Express                 Build a dedicated HTTP
                                                  API

  Backend language        TypeScript              Typed API code and
                                                  models

  Input validation        Zod                     Validate request
                                                  payloads and
                                                  environment/config
                                                  values

  Database                PostgreSQL              Persist notices, jobs,
                                                  categories, users, and
                                                  applications

  Database access         To be selected          Choose an ORM/query
                                                  layer before
                                                  implementing
                                                  database-backed
                                                  features

  Authentication          To be selected          Use a maintained
                                                  solution and enforce
                                                  server-side permissions

  File storage            To be selected          Store uploaded images
                                                  and documents safely

  Version control         Git                     Track changes and
                                                  collaborate

  Package manager         npm                     Install and manage
                                                  JavaScript dependencies

  Local development       VS Code terminal        Run frontend and
                                                  backend independently
  -----------------------------------------------------------------------

### Why use a separate frontend and backend?

The frontend and backend live in separate folders so that their
responsibilities remain clear:

-   **Frontend:** renders pages, handles user interaction, and requests
    data from the API.
-   **Backend:** validates requests, applies business rules, checks
    permissions, and reads/writes data.
-   **Database:** stores persistent records.
-   **File storage:** may store uploaded media and documents separately
    from database records.

A separate API also makes it easier to support future clients---such as
a mobile app or another frontend---without duplicating the core business
logic.

### Important stack decisions still open

These should be decided deliberately when the relevant feature is
implemented:

-   ORM or query builder for PostgreSQL
-   Authentication and session strategy
-   Admin interface approach
-   Email/SMS provider, if notifications are required
-   File/object-storage provider
-   Deployment and hosting providers
-   Automated testing framework and CI workflow

Avoid adding services merely because they are popular. Choose them when
a concrete requirement justifies them.

------------------------------------------------------------------------

## 5. High-level architecture

``` text
Visitor / Content Administrator
              |
              v
     NextRojgar Frontend
       Next.js + React
       TypeScript + Tailwind
              |
        HTTP requests
              |
              v
       NextRojgar API
      Node.js + Express
           TypeScript
              |
       Validation and
      business permissions
              |
       +------+------+
       |             |
       v             v
 PostgreSQL     File storage
 structured     media/documents
 records        (planned)
```

### Local development ports

The intended local setup is:

-   Frontend: `http://localhost:3000`
-   Backend API: `http://localhost:4000`
-   PostgreSQL: local installation or a development database, once
    configured

These are planned defaults. The backend port and database configuration
must be set in code and environment variables.

### Architecture principles

-   Keep route/page files focused on composition and page-level
    behavior.
-   Put reusable UI in components.
-   Put API communication and shared helpers in `lib/`.
-   Define shared frontend data shapes in TypeScript types.
-   Keep request validation and authorization on the backend.
-   Keep credentials and secrets out of source control.
-   Use database migrations and backups once persistent data is
    introduced.
-   Do not trust data simply because it came from the frontend.
-   Keep recruitment-content workflows separate from unrelated
    online-tool processing.

------------------------------------------------------------------------

## 6. Repository structure

The project root currently contains two directories:

``` text
NextRojgar/
├── next-rojgar-frontend/
└── next-project-backend/
```

The following is the **target structure**, to be created gradually. Do
not create every file before it is needed.

### 6.1 Frontend structure

``` text
next-rojgar-frontend/
├── public/
│   ├── images/
│   │   ├── logo.svg
│   │   └── banners/
│   ├── icons/
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   ├── loading.tsx
│   │   ├── error.tsx
│   │   ├── not-found.tsx
│   │   ├── jobs/
│   │   │   ├── page.tsx
│   │   │   ├── [slug]/page.tsx
│   │   │   └── category/[slug]/page.tsx
│   │   ├── admit-card/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── results/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── answer-key/page.tsx
│   │   ├── syllabus/page.tsx
│   │   ├── admissions/page.tsx
│   │   ├── current-affairs/page.tsx
│   │   ├── study-material/page.tsx
│   │   ├── tools/
│   │   │   ├── page.tsx
│   │   │   ├── pdf-to-image/page.tsx
│   │   │   ├── image-resizer/page.tsx
│   │   │   └── age-calculator/page.tsx
│   │   ├── about/page.tsx
│   │   └── contact/page.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── MobileMenu.tsx
│   │   ├── home/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── QuickLinks.tsx
│   │   │   ├── LatestJobs.tsx
│   │   │   ├── LatestResults.tsx
│   │   │   └── LatestUpdates.tsx
│   │   ├── jobs/
│   │   │   ├── JobCard.tsx
│   │   │   ├── JobFilters.tsx
│   │   │   └── JobSearch.tsx
│   │   ├── tools/
│   │   │   └── ToolCard.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Input.tsx
│   │       ├── Badge.tsx
│   │       ├── Card.tsx
│   │       └── SectionHeading.tsx
│   ├── lib/
│   │   ├── api.ts
│   │   ├── constants.ts
│   │   ├── utils.ts
│   │   └── metadata.ts
│   ├── types/
│   │   ├── job.ts
│   │   ├── result.ts
│   │   └── api.ts
│   ├── hooks/
│   │   └── use-debounce.ts
│   └── config/
│       └── site.ts
├── .env.local
├── .env.example
├── .gitignore
├── next.config.ts
├── package.json
├── tsconfig.json
├── eslint.config.mjs
└── README.md
```

Next.js can generate some configuration files differently depending on
the version and setup choices. Preserve generated configuration unless
there is a clear reason to change it.

#### Frontend folder responsibilities

  -----------------------------------------------------------------------
  Location                            Responsibility
  ----------------------------------- -----------------------------------
  `src/app/`                          URL routes, page layouts,
                                      loading/error states, and metadata

  `src/components/layout/`            Shared header, navigation, footer,
                                      and mobile menu

  `src/components/home/`              Homepage sections

  `src/components/jobs/`              Reusable job-listing UI

  `src/components/tools/`             Online-tool cards and related UI

  `src/components/ui/`                Generic UI building blocks

  `src/lib/api.ts`                    Shared API request functions

  `src/lib/constants.ts`              Shared constants and categories

  `src/lib/utils.ts`                  Small reusable helpers

  `src/lib/metadata.ts`               Metadata helpers, if useful

  `src/types/`                        TypeScript interfaces and API data
                                      contracts

  `src/hooks/`                        Reusable React hooks

  `src/config/`                       Public site configuration

  `public/`                           Static assets served directly
  -----------------------------------------------------------------------

#### Frontend conventions

-   Use PascalCase for React component files, such as `JobCard.tsx`.
-   Use lowercase route-folder names, such as `admit-card/`.
-   Use descriptive, consistent names for functions and variables.
-   Prefer small components with one clear responsibility.
-   Keep content, UI, and API access separate where practical.
-   Use server components by default; add client components only where
    interactivity requires them.
-   Make layouts responsive and keyboard-accessible.
-   Use page metadata and meaningful headings for SEO and accessibility.
-   Do not place private server credentials in variables prefixed with
    `NEXT_PUBLIC_`.

### 6.2 Backend structure

The backend will use Express and TypeScript. This is a proposed
structure, not a claim that these files already exist.

``` text
next-project-backend/
├── src/
│   ├── server.ts
│   ├── app.ts
│   ├── config/
│   │   ├── env.ts
│   │   └── database.ts
│   ├── routes/
│   │   ├── health.routes.ts
│   │   ├── jobs.routes.ts
│   │   ├── results.routes.ts
│   │   ├── admit-cards.routes.ts
│   │   ├── answer-keys.routes.ts
│   │   ├── categories.routes.ts
│   │   ├── tools.routes.ts
│   │   └── admin.routes.ts
│   ├── controllers/
│   │   ├── jobs.controller.ts
│   │   ├── results.controller.ts
│   │   └── admit-cards.controller.ts
│   ├── services/
│   │   ├── jobs.service.ts
│   │   ├── results.service.ts
│   │   └── notifications.service.ts
│   ├── repositories/
│   │   └── jobs.repository.ts
│   ├── schemas/
│   │   ├── job.schema.ts
│   │   └── pagination.schema.ts
│   ├── middleware/
│   │   ├── error-handler.ts
│   │   ├── not-found.ts
│   │   ├── authenticate.ts
│   │   └── authorize.ts
│   ├── types/
│   │   └── express.d.ts
│   └── utils/
│       ├── async-handler.ts
│       └── api-response.ts
├── tests/
├── migrations/
├── .env
├── .env.example
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

Not every module needs to exist on Day 1. Start with `app.ts`,
`server.ts`, a health route, and the required configuration. Add the
rest as features are implemented.

#### Backend responsibilities

  -----------------------------------------------------------------------
  Layer                               Responsibility
  ----------------------------------- -----------------------------------
  `server.ts`                         Start the HTTP server

  `app.ts`                            Configure Express middleware and
                                      routes

  `config/`                           Read configuration and initialize
                                      infrastructure

  `routes/`                           Define endpoints and connect them
                                      to handlers

  `controllers/`                      Translate HTTP requests into
                                      service calls and responses

  `services/`                         Implement business rules

  `repositories/`                     Encapsulate database queries

  `schemas/`                          Validate request parameters and
                                      payloads

  `middleware/`                       Authentication, authorization,
                                      error handling, and shared request
                                      behavior

  `migrations/`                       Track database schema changes

  `tests/`                            Automated checks for important
                                      behavior
  -----------------------------------------------------------------------

Do not add a repository layer or separate service for every tiny
function automatically. Use layers where they make the code easier to
test, reason about, and maintain.

------------------------------------------------------------------------

## 7. Planned website sections and their purpose

### 7.1 Homepage

The homepage should provide a quick overview and help visitors reach the
most important information without scrolling through a confusing wall of
text.

Planned sections:

-   Header with logo and primary navigation
-   Search area for recruitment and notices
-   Quick links to Jobs, Admit Cards, Results, Answer Keys, Syllabus,
    and Tools
-   Latest government job notifications
-   Latest results and admit-card updates
-   Featured recruitment notices or important announcements
-   Current affairs or study resources, if they provide genuine value
-   Footer with About, Contact, Privacy Policy, Terms, and disclaimer
    links

### 7.2 Government jobs

Purpose: help visitors browse active and archived recruitment notices.

Potential filters:

-   Recruiting organization
-   Central or state government
-   Job category
-   Qualification
-   Location
-   Recruitment status
-   Application deadline

A job detail page may contain:

-   Recruitment title and organization
-   Publication and last-updated dates
-   Important dates
-   Application fee, where applicable
-   Vacancy information, where officially available
-   Eligibility and age criteria
-   Qualification requirements
-   Selection process
-   Application instructions
-   Important links and official notification
-   A clear source attribution

The data model and page should distinguish a summarized explanation from
the official notice.

### 7.3 Admit cards, results, and answer keys

Each section should have a searchable listing and, where useful, a
detail page.

Records should link to the official result, admit-card, or answer-key
portal. Avoid storing sensitive candidate credentials or asking users to
provide them unless a separately reviewed feature genuinely requires it.

### 7.4 Syllabus and study material

Potential features include:

-   Exam-wise syllabus
-   Exam pattern and marking scheme
-   Study notes and reference resources
-   Topic-wise preparation material
-   Links to official syllabus documents where available

Respect copyright and licensing when publishing educational material.

### 7.5 Current affairs and news

Purpose: organize relevant current-affairs and education/recruitment
updates.

Planned content should include publication dates, sources, category
labels, and editorial review. Do not automatically publish unverified
scraped content.

### 7.6 Admissions

A future section for education-related admission notices, application
deadlines, eligibility information, and official application links.

### 7.7 Online tools

The tools section is intended to provide convenient utilities in the
browser.

Potential initial tools:

-   PDF-to-image conversion
-   Image resizing
-   Age calculator
-   Additional PDF utilities, based on demand

Before implementing a tool, decide whether processing can happen
entirely in the browser or needs a backend. Prefer local/browser
processing for suitable tasks to reduce server costs and avoid
unnecessary uploads of users' documents.

For server-side file processing, set file-size and type limits, validate
content rather than trusting filenames, clean up temporary files, and
prevent malicious uploads. Never promise that a file is deleted unless
the implementation guarantees it.

------------------------------------------------------------------------

## 8. UI and visual design direction

The product should feel like a modern, trustworthy information
portal---not a cluttered directory of links.

### Design goals

-   Minimal, clean, information-first interface
-   Strong visual hierarchy for titles, dates, status, and actions
-   Readable typography and comfortable spacing
-   Responsive layouts for mobile, tablet, and desktop
-   Consistent components, colors, border radii, and spacing
-   Accessible contrast, focus indicators, keyboard navigation, and
    semantic HTML
-   Clear distinction between current, upcoming, and expired notices
-   Lightweight pages and fast navigation
-   Avoid excessive pop-ups, intrusive ads, and unnecessary animations

### Suggested layout system

-   **Header:** brand, primary navigation, and mobile menu
-   **Search:** prominent, simple search field with clear action
-   **Quick links:** compact cards for major sections
-   **Content sections:** headings, concise summaries, and consistent
    cards
-   **Listing pages:** filters, result count, sorting, pagination, and
    empty states
-   **Detail pages:** clear sections for important dates, eligibility,
    instructions, and official links
-   **Footer:** informational and legal pages

The exact brand palette, typography, logo, and homepage mockup can be
refined before the UI is finalized. Keep design tokens centralized
instead of scattering hardcoded colors through components.

------------------------------------------------------------------------

## 9. Data model: initial concepts

The following are conceptual entities for planning. The final schema
should be designed when PostgreSQL and the chosen data-access layer are
introduced.

### Recruitment notice / job

Potential fields:

-   `id`
-   `title`
-   `slug`
-   `organization`
-   `categoryId`
-   `summary`
-   `description`
-   `eligibility`
-   `vacancyDetails`
-   `applicationFee`
-   `importantDates`
-   `officialNotificationUrl`
-   `applicationUrl`
-   `sourceUrl`
-   `status`
-   `publishedAt`
-   `lastUpdatedAt`
-   `createdAt`
-   `updatedAt`

Use proper date/time types and validate date logic. Some notices may not
publish every field, so the schema should represent unavailable values
honestly rather than inventing them.

### Other possible entities

-   `Category`
-   `AdmitCard`
-   `Result`
-   `AnswerKey`
-   `Syllabus`
-   `Article` or `CurrentAffair`
-   `StudyResource`
-   `User`
-   `Role` or permission records
-   `Application` or saved-item records, if user accounts are introduced
-   `MediaAsset`
-   `AuditLog` for sensitive administrative actions

Avoid duplicating the same organization and category data across
unrelated records when a shared relationship is more appropriate.

### Content status workflow

A proposed publishing workflow:

`Draft → Review → Published → Archived`

Only authorized administrators should publish or modify records. Store
the original source URL and track important edits so that errors can be
investigated and corrected.

------------------------------------------------------------------------

## 10. API conventions

The API prefix can begin at `/api/v1` to make future API evolution
easier.

Example planned endpoints:

  Method   Endpoint                Purpose
  -------- ----------------------- ----------------------------
  `GET`    `/api/v1/health`        Confirm the API is running
  `GET`    `/api/v1/jobs`          List and filter jobs
  `GET`    `/api/v1/jobs/:slug`    Retrieve one job
  `GET`    `/api/v1/categories`    List categories
  `GET`    `/api/v1/results`       List results
  `GET`    `/api/v1/admit-cards`   List admit-card updates
  `GET`    `/api/v1/answer-keys`   List answer keys

These are proposed endpoints. They do not exist until implemented.

### API guidelines

-   Validate query parameters and request bodies.
-   Use consistent response and error formats.
-   Support pagination for listing endpoints.
-   Set sensible limits on page size.
-   Return correct HTTP status codes.
-   Do not leak stack traces, secrets, or internal database details in
    production.
-   Apply authentication and authorization to private/admin routes.
-   Rate-limit sensitive or abuse-prone endpoints.
-   Configure CORS for the intended frontend origin rather than allowing
    every origin by default.
-   Add tests for critical permissions and business rules.

Example list response shape:

``` json
{
  "data": [],
  "pagination": {
    "page": 1,
    "pageSize": 20,
    "total": 0,
    "totalPages": 0
  }
}
```

The exact response format can be finalized before implementing the first
data-backed listing.

------------------------------------------------------------------------

## 11. Environment variables and secrets

The frontend and backend should each have their own environment
configuration.

### Frontend `.env.local`

Example:

``` dotenv
NEXT_PUBLIC_API_BASE_URL=http://localhost:4000/api/v1
```

Only put values here that are safe to expose to the browser.
`NEXT_PUBLIC_` variables are public.

### Backend `.env`

Example placeholder configuration:

``` dotenv
NODE_ENV=development
PORT=4000
FRONTEND_ORIGIN=http://localhost:3000
DATABASE_URL=postgresql://USER:PASSWORD@localhost:5432/nextrojgar
```

The database URL is an example format, not a working credential. Replace
placeholders with the local database configuration.

Maintain `.env.example` files containing variable names and safe
placeholders, never real secrets. Ensure `.env`, `.env.local`,
credentials, database dumps containing personal data, and private
uploads are excluded from Git.

Validate required environment variables at startup so configuration
mistakes fail clearly.

------------------------------------------------------------------------

## 12. Security, privacy, and reliability

Security is part of the design from the beginning. Using popular
frameworks does not remove the need to secure the application.

### Baseline controls

-   Keep Node.js, Next.js, Express, and dependencies patched.
-   Review dependency advisories and update carefully.
-   Validate and normalize untrusted input.
-   Enforce authorization on the backend, not just by hiding UI
    controls.
-   Use secure session/cookie settings if cookie-based authentication is
    adopted.
-   Protect administrative accounts with strong authentication.
-   Apply rate limits and brute-force protections where appropriate.
-   Use HTTPS in production.
-   Keep secrets in environment variables or a secret manager.
-   Use parameterized database operations through a suitable
    library/ORM.
-   Restrict database permissions to the minimum needed.
-   Back up production data and test restoration.
-   Log relevant security and administrative events without logging
    passwords, tokens, or unnecessary personal information.
-   Establish a process to report, assess, and fix vulnerabilities.
-   Keep error messages useful to developers without exposing internals
    to visitors.

### Personal documents and user data

If tools accept files, minimize uploads and retention. Explain what is
processed and where. Avoid collecting identity documents or sensitive
personal information unless essential to a clearly defined feature.
Apply appropriate deletion, access-control, and retention practices.

### Legal and editorial considerations

-   Publish privacy, terms, contact, and disclaimer pages before public
    launch.
-   Respect third-party content, logos, and document copyrights.
-   Do not misrepresent the site as an official government portal.
-   Review applicable Indian laws and regulations before launching
    features that collect personal information or handle user accounts.

------------------------------------------------------------------------

## 13. SEO, accessibility, and performance

### SEO

-   Give each public page a meaningful title and description.
-   Generate canonical URLs and sitemap entries where appropriate.
-   Use semantic headings and descriptive links.
-   Use readable, stable slugs for job detail pages.
-   Add structured data only when the page content meets the relevant
    requirements.
-   Avoid duplicate or thin pages created solely for search traffic.
-   Keep publication and modification dates accurate.
-   Link to authoritative official sources.

### Accessibility

-   Use semantic HTML elements.
-   Provide labels for form controls.
-   Support keyboard navigation and visible focus.
-   Use sufficient text/background contrast.
-   Give meaningful images alternative text.
-   Announce relevant loading, error, and validation states to assistive
    technology.

### Performance

-   Use optimized images and avoid unnecessarily large media.
-   Prefer server rendering for content pages when appropriate.
-   Paginate large lists.
-   Avoid shipping large JavaScript bundles for simple content.
-   Measure performance before adding caching or complex infrastructure.
-   Cache public content only when invalidation and freshness rules are
    understood.

------------------------------------------------------------------------

## 14. Testing and quality standards

Testing should grow alongside the application.

Planned layers:

1.  **Linting and type checks:** catch common code issues.
2.  **Unit tests:** validate utilities and business rules.
3.  **API tests:** validate routes, status codes, input validation, and
    permissions.
4.  **Component tests:** verify important UI behavior.
5.  **End-to-end tests:** cover critical user journeys such as finding a
    job and opening its official notice.
6.  **Manual responsive checks:** test common mobile and desktop
    layouts.
7.  **Security checks:** review dependencies, access controls, file
    uploads, and authentication.

Before a change is considered complete:

-   The app builds successfully.
-   Linting and relevant tests pass.
-   Loading, empty, and error states are considered.
-   No secrets are committed.
-   The interface remains responsive and accessible.
-   Recruitment facts link to an appropriate source.

------------------------------------------------------------------------

## 15. Local development workflow

### Prerequisites

-   Node.js LTS compatible with the selected Next.js version
-   npm
-   Git
-   VS Code or another editor
-   PostgreSQL when database work begins

### Frontend setup

From the project root:

``` powershell
cd next-rojgar-frontend
npm install
npm run dev
```

Open `http://localhost:3000`.

If the Next.js project has not been initialized yet, create it inside
the existing frontend folder using the official Next.js project creation
command and follow the setup prompts.

### Backend setup

From a second terminal:

``` powershell
cd next-project-backend
npm init -y
npm install express cors dotenv zod
npm install -D typescript tsx @types/node @types/express @types/cors
npx tsc --init
```

These commands install the initial Express/TypeScript dependencies. The
backend still needs its `tsconfig`, `package.json` scripts, app/server
files, health route, environment loading, and CORS configuration before
it is ready to run. Add scripts such as `dev` and `build` once the
source structure is established.

### Run both applications

Use two terminal sessions:

-   Terminal 1: Next.js development server
-   Terminal 2: Express API server

Keep logs visible while developing. Do not assume the API works merely
because the frontend loads; test the health endpoint separately.

### Git workflow

-   Commit small, understandable changes.
-   Use descriptive commit messages.
-   Keep generated dependencies out of version control.
-   Never commit secrets.
-   Consider feature branches when working on substantial modules.

------------------------------------------------------------------------

## 16. Development roadmap

The project should be delivered in small milestones rather than
attempting every feature at once.

### Phase 1 --- Project foundation

-   [ ] Initialize the Next.js frontend
-   [ ] Initialize the Express/TypeScript backend
-   [ ] Add basic linting and type checking
-   [ ] Create a health endpoint
-   [ ] Configure frontend-to-backend communication
-   [ ] Add `.env.example` and verify `.gitignore`
-   [ ] Confirm both applications run locally

**Exit criterion:** the frontend loads and can successfully request the
backend health endpoint.

### Phase 2 --- Visual foundation and homepage

-   [ ] Define design tokens and typography
-   [ ] Build the shared header, navigation, and footer
-   [ ] Create the responsive homepage layout
-   [ ] Add quick-link cards and reusable content cards
-   [ ] Add loading, empty, and error states
-   [ ] Add About, Contact, Privacy, Terms, and disclaimer page
    placeholders as appropriate

**Exit criterion:** the homepage has a consistent responsive layout and
navigates to the main sections.

### Phase 3 --- Recruitment content model

-   [ ] Select a PostgreSQL access library/ORM
-   [ ] Configure the development database
-   [ ] Define migrations and core entities
-   [ ] Add validated read endpoints for jobs and categories
-   [ ] Add job listing and detail pages
-   [ ] Add search, filters, and pagination
-   [ ] Display official source links and update dates

**Exit criterion:** job data can be stored, retrieved, and rendered
without hardcoding the listing into each page.

### Phase 4 --- Editorial/admin workflow

-   [ ] Choose the admin-interface approach
-   [ ] Implement secure authentication
-   [ ] Define roles and permissions
-   [ ] Create and edit draft notices
-   [ ] Review and publish notices
-   [ ] Track updates and administrative actions
-   [ ] Validate official source links and required fields

**Exit criterion:** authorized editors can manage content safely, with
public pages showing published records only.

### Phase 5 --- Additional recruitment sections

-   [ ] Admit cards
-   [ ] Results
-   [ ] Answer keys
-   [ ] Syllabus
-   [ ] Admissions
-   [ ] Current affairs
-   [ ] Study resources

Reuse listing patterns and data contracts where they genuinely fit, but
preserve the differences between each type of notice.

### Phase 6 --- Online tools

-   [ ] Create the tools directory page
-   [ ] Build the first small browser-side tool
-   [ ] Validate inputs and show helpful errors
-   [ ] Add file-processing limits where needed
-   [ ] Review privacy and accessibility
-   [ ] Test on mobile and desktop

Start with a small tool and validate its usefulness before building a
large collection.

### Phase 7 --- Production readiness

-   [ ] Configure production hosting and environment variables
-   [ ] Set up PostgreSQL backups and restoration checks
-   [ ] Configure HTTPS and appropriate security headers
-   [ ] Add monitoring and error reporting
-   [ ] Add automated tests and CI checks
-   [ ] Review SEO, accessibility, and performance
-   [ ] Complete privacy, legal, and editorial reviews
-   [ ] Test the production deployment before announcing launch

------------------------------------------------------------------------

## 17. Scope control: what not to build immediately

To keep development fast and maintainable, defer these until there is a
real requirement:

-   Microservices
-   A complex multi-tenant SaaS platform
-   A large custom authentication system
-   Real-time notifications
-   Mobile applications
-   Payment processing
-   User-uploaded identity documents
-   Automated scraping and publishing without editorial verification
-   Every possible online tool
-   Premature caching and infrastructure optimization

The initial goal is a reliable public information portal with a
maintainable codebase. More advanced features should follow demonstrated
need.

------------------------------------------------------------------------

## 18. Definition of a successful first release

The first useful release should let a visitor:

1.  Open the homepage on a phone or desktop.
2.  Navigate to the latest jobs section.
3.  Search or browse published recruitment notices.
4.  Open a recruitment detail page.
5.  Understand the key information and find the official source.
6.  Navigate to relevant admit-card, result, or resource sections as
    those features become available.
7.  Use the first implemented online utility.
8.  Find the site's contact, privacy, terms, and disclaimer information.

For administrators, the initial content workflow should provide a safe
way to create, review, update, and publish notices. Public data must not
be editable by anonymous visitors.

------------------------------------------------------------------------

## 19. Working rules for AI-assisted / vibe coding

AI tools can accelerate development, but generated code must be reviewed
and tested.

For each task:

1.  State the specific feature and acceptance criteria.
2.  Inspect the existing files before changing architecture.
3.  Make a small, coherent change.
4.  Explain which files are being created or modified.
5.  Keep secrets, credentials, and personal data out of prompts.
6.  Run linting, type checks, tests, and the app where applicable.
7.  Review the diff before committing.
8.  Update this README when a major architectural decision changes.

Do not allow an AI coding tool to replace project configuration or
rewrite unrelated modules without a clear reason. Prefer incremental
changes that can be understood and reverted.

------------------------------------------------------------------------

## 20. Current status and immediate next steps

At the start of development, the project root has been created with:

``` text
NextRojgar/
├── next-rojgar-frontend/
└── next-project-backend/
```

The frontend architecture and backend direction have been planned. The
full route structure, data model, API endpoints, admin workflow, and
online tools described in this document are largely **planned work**,
not confirmed completed functionality.

### Immediate checklist

-   [ ] Verify Node.js, npm, and Git are installed
-   [ ] Initialize Next.js in `next-rojgar-frontend/`
-   [ ] Run the frontend locally
-   [ ] Initialize Express and TypeScript in `next-project-backend/`
-   [ ] Configure backend scripts and source files
-   [ ] Implement `GET /api/v1/health`
-   [ ] Verify frontend and backend run independently
-   [ ] Create the first homepage layout
-   [ ] Initialize Git and verify secret files are ignored

**First milestone:** a working local frontend, a working local API, and
a basic NextRojgar homepage.

------------------------------------------------------------------------

## 21. Useful references

Use official documentation as the primary source for installation
instructions, version requirements, and security guidance:

-   Next.js: <https://nextjs.org/docs>
-   React: <https://react.dev/learn>
-   TypeScript: <https://www.typescriptlang.org/docs/>
-   Tailwind CSS: <https://tailwindcss.com/docs>
-   Node.js: <https://nodejs.org/en/docs>
-   Express: <https://expressjs.com/>
-   PostgreSQL: <https://www.postgresql.org/docs/>
-   Zod: <https://zod.dev/>
-   Git: <https://git-scm.com/doc>

------------------------------------------------------------------------

## 22. Final product principle

**Build a trustworthy recruitment-information product first; expand it
with tools and additional services only when they improve the user
experience.**

Keep the frontend modular, keep backend rules and permissions on the
server, use official sources for recruitment facts, protect user data,
and deliver the project in small tested milestones.
