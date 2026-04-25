# AGENTS.md — LearnFlow

Drop-in operating instructions for this repo. Read this file before every task.

**Working code only. Finish the job. Plausibility is not correctness.**

---

## 0. Non-negotiables

These rules override everything else when in conflict:

1. **No flattery, no filler.** Skip openers like "Great question", "Excellent idea". Start with the answer or the action.
2. **Disagree when you disagree.** If the premise is wrong, say so before doing the work.
3. **Never fabricate.** Not file paths, not API names, not test results. If you don't know, read the file, run the command, or say so.
4. **Stop when confused.** Two plausible interpretations → ask. Do not pick silently.
5. **Touch only what you must.** Every changed line must trace directly to the request. No drive-by cleanups.

---

## 1. Before writing code

- State your plan in one or two sentences before editing. For anything non-trivial, produce a numbered list of steps with a verification check for each.
- Read the files you will touch. Read the files that call the files you will touch.
- Read `DESIGN.md` before touching any UI component, page, or style. It is the source of truth for all visual decisions.
- Match existing patterns in the codebase. If the project uses pattern X, use pattern X.
- Surface assumptions out loud. Do not bury them in the implementation.

---

## 2. Writing code: simplicity first

- No features beyond what was asked.
- No abstractions for single-use code. No hooks, configurability, or flexibility that were not requested.
- If the solution runs 200 lines and could be 50, rewrite it before showing it.
- Bias toward deleting code over adding code.

The test: would a senior engineer call this overcomplicated? If yes, simplify.

---

## 3. Surgical changes

- Do not refactor adjacent code that works.
- Do not delete pre-existing dead code unless asked. If you notice it, mention it in the summary.
- Do clean up orphans your own changes create (unused imports, variables, functions).
- Match project style exactly: indentation, quotes, naming, file layout.

---

## 4. Code standards

- **Never typecast. Never use `as`.** If TypeScript can't infer the type, fix the type definition — don't paper over it with a cast.
- **No `any`.** Use `unknown` and narrow explicitly. If you find yourself typing `any`, stop and fix the types.
- All async functions must handle errors explicitly. No unhandled promise rejections.
- API responses are validated against a Zod schema at the boundary. Do not trust raw JSON anywhere past the service layer.
- Env variables are accessed only through `apps/api/src/config/env.ts`. Never read `process.env` directly in feature code.
- Video upload and streaming logic lives exclusively in `apps/api/src/modules/media/`. Do not scatter cloud SDK calls across modules.
- Payment logic (Stripe) lives exclusively in `apps/api/src/modules/payments/`. No Stripe calls outside that module.
- Certificate generation lives in `apps/api/src/modules/certificates/`. It is triggered by the enrollment service, never called directly from a route handler.

---

## 5. Goal-driven execution

Rewrite vague asks into verifiable goals before starting:

- "Add validation" → "Write tests for invalid inputs, then make them pass."
- "Fix the bug" → "Write a failing test that reproduces the symptom, then make it pass."
- "Refactor X" → "Ensure the existing test suite passes before and after, no public API changes."
- "Make the player remember position" → "Write a test that verifies progress is saved on pause and restored on reload, then implement it."

For every task: state success criteria → write verification → run it → read the output → report honestly.

---

## 6. Tool use and verification

- Run the code. If a test suite exists, run it. If a linter exists, run it.
- Never report "done" based on a plausible-looking diff alone.
- For UI changes, verify visually: screenshot before, screenshot after, describe what changed.
- For payment-related changes, run against Stripe test mode. Never use live keys locally.
- For video upload changes, verify with a real file, not a mock blob. Size and MIME type matter.
- When debugging, fix root causes, not symptoms. Suppressing the error is not fixing it.

---

## 7. Communication style

- Direct, not diplomatic. "This won't scale because X" beats "have you considered X".
- Concise by default. Two or three short paragraphs unless depth is requested.
- When a question has a clear answer, give it.

---

## 8. When to ask, when to proceed

**Ask before proceeding when:**
- The request has two plausible interpretations and the choice materially affects output.
- The change touches payments, video storage, certificate generation, or database migrations.
- The user's stated goal and the literal request appear to conflict.

**Proceed without asking when:**
- The task is trivial and reversible.
- The ambiguity resolves by reading the code.

---

## 9. Project context

### Stack

- **Language:** TypeScript 5.x (strict mode, no `any`, no `as`)
- **Frontend:** Next.js 14 (App Router), React 18, Tailwind CSS
- **Backend:** Node.js + Express, Prisma ORM
- **Database:** PostgreSQL
- **Auth:** JWT (access + refresh tokens) in httpOnly cookies
- **Payments:** Stripe (Checkout Sessions + Webhooks)
- **Media:** Cloudinary (video upload, adaptive streaming) or AWS S3 + CloudFront
- **PDF generation:** Puppeteer (certificate rendering from HTML template)
- **Email:** Resend
- **Testing:** Vitest (unit + integration), Playwright (e2e)
- **Package manager:** pnpm

### Commands

```bash
pnpm install            # install all deps
pnpm dev                # run frontend + backend concurrently
pnpm build              # production build
pnpm test               # all unit/integration tests
pnpm test src/path/...  # single test file
pnpm test:e2e           # Playwright suite
pnpm lint               # ESLint
pnpm typecheck          # tsc --noEmit across all packages
pnpm db:migrate         # apply pending Prisma migrations
pnpm db:seed            # seed development database
pnpm stripe:listen      # forward Stripe webhooks to localhost
```

Prefer single-file test runs during iteration. Full suite for final verification only.
Run `pnpm stripe:listen` whenever working on checkout or enrollment flows.

### Repository layout

```
learnflow/
├── apps/
│   ├── web/                            # Next.js frontend
│   │   ├── app/
│   │   │   ├── (auth)/                 # Login, register — unauthenticated
│   │   │   ├── (student)/              # Student-facing pages
│   │   │   │   ├── catalog/            # Course catalog + search
│   │   │   │   ├── course/[slug]/      # Course landing page (buy/enroll CTA)
│   │   │   │   ├── learn/[slug]/       # Video player + lesson navigation
│   │   │   │   │   └── [lessonId]/
│   │   │   │   ├── quiz/[quizId]/      # Quiz attempt page
│   │   │   │   ├── my-courses/         # Enrolled courses + progress
│   │   │   │   └── certificate/[id]/   # Certificate view + download
│   │   │   ├── (author)/               # Author-facing pages
│   │   │   │   ├── dashboard/          # Revenue, enrollments overview
│   │   │   │   └── courses/            # Course builder (lessons, quizzes)
│   │   │   ├── cart/                   # Cart + promo code + Stripe checkout
│   │   │   └── api/                    # Next.js route handlers (thin — delegate to API)
│   │   ├── components/
│   │   │   ├── ui/                     # Primitives: Button, Input, Badge, Modal…
│   │   │   ├── player/                 # VideoPlayer, ProgressBar, NotesSidebar
│   │   │   ├── course/                 # CourseCard, CurriculumAccordion, RatingStars
│   │   │   ├── quiz/                   # QuizQuestion, Timer, ResultScreen
│   │   │   ├── author/                 # LessonEditor, UploadZone, CourseSettingsForm
│   │   │   └── shared/                 # Layout, Nav, Footer, Breadcrumbs
│   │   ├── hooks/                      # Custom React hooks
│   │   ├── lib/
│   │   │   ├── api.ts                  # Typed API client — all fetch calls go here
│   │   │   ├── player.ts               # Video player state helpers
│   │   │   └── utils.ts
│   │   └── types/                      # Frontend-only TypeScript types
│   │
│   └── api/                            # Express backend
│       └── src/
│           ├── config/
│           │   └── env.ts              # Single env access point — nowhere else reads process.env
│           ├── modules/
│           │   ├── auth/               # JWT issue/refresh/revoke
│           │   ├── users/              # Profile CRUD, roles
│           │   ├── courses/            # Course and lesson CRUD, publish flow
│           │   ├── enrollments/        # Purchase → enroll → completion logic
│           │   ├── progress/           # Lesson progress, last-watched position
│           │   ├── quizzes/            # Quiz definitions and attempt scoring
│           │   ├── payments/           # Stripe Checkout, webhook handler, promo codes
│           │   ├── media/              # Video upload, Cloudinary/S3 integration
│           │   ├── certificates/       # PDF generation via Puppeteer, verify endpoint
│           │   ├── reviews/            # Course ratings and review moderation
│           │   └── notifications/      # Email triggers (enrollment, cert ready, etc.)
│           ├── middleware/             # Auth guard, role check, error handler, rate limiter
│           ├── prisma/
│           │   ├── schema.prisma
│           │   └── seed.ts
│           └── server.ts
│
├── packages/
│   └── shared/                         # Zod schemas and inferred types shared across apps
│       └── src/
│           ├── schemas/                # Course, Lesson, Quiz, Enrollment, Certificate…
│           └── types/                  # Generated from schemas — never hand-edit
│
├── AGENTS.md                           # This file
├── DESIGN.md                           # Visual and UX source of truth — read before touching UI
├── .env.example
└── pnpm-workspace.yaml
```

### Do not modify

- `apps/api/src/prisma/migrations/` — generated by Prisma, never hand-edit
- `packages/shared/src/types/` — generated from Zod schemas via `pnpm generate:types`, never hand-edit
- `apps/web/.next/` — build output
- Certificate HTML templates in `apps/api/src/modules/certificates/templates/` — design changes go through `DESIGN.md` first

### Conventions

- **Naming:** `kebab-case` for files and folders, `PascalCase` for components and classes, `camelCase` for everything else.
- **Imports:** Absolute imports via `@/` alias inside each app. Cross-app imports only through `packages/shared`.
- **Schemas:** Defined in `packages/shared/src/schemas/`. A Zod schema must exist before a feature is wired up. Both apps import from there.
- **Error handling:** Backend throws typed `AppError` (see `middleware/error.ts`). Frontend catches errors via the API client (`lib/api.ts`), never from raw `fetch`.
- **Auth guards:** Route protection in Next.js middleware (`apps/web/middleware.ts`). Never add auth checks inside page components.
- **Roles:** Three roles — `STUDENT`, `AUTHOR`, `ADMIN`. Checked server-side in every protected route. Never trust role data from the client.
- **Progress tracking:** Lesson position is saved on the `timeupdate` event, debounced to 5 s. Do not save on every tick.
- **Stripe webhooks:** Enrollment is created only inside the `payment_intent.succeeded` webhook handler, never optimistically on the frontend.
- **Video upload:** Files go to Cloudinary/S3 via a signed URL obtained from `POST /media/upload-url`. The frontend uploads directly to the storage provider; the API never proxies video bytes.

### Forbidden

- `as SomeType` — fix the types instead.
- `any` — use `unknown` and narrow, or fix the upstream type.
- Reading `process.env` outside `apps/api/src/config/env.ts`.
- Stripe SDK calls outside `apps/api/src/modules/payments/`.
- Cloudinary / S3 SDK calls outside `apps/api/src/modules/media/`.
- Puppeteer calls outside `apps/api/src/modules/certificates/`.
- Direct Prisma calls from route handlers — all DB access goes through the service layer.
- Triggering certificate generation from anywhere other than the enrollment completion event.
- Committing with `TODO` or `FIXME` without a linked issue number.
- Mutations in GET handlers.
- Using live Stripe keys in local development.

---

## 10. DESIGN.md — how to use it

`DESIGN.md` lives at the repo root and is the single source of truth for all visual and UX decisions.

**Read it before you:**
- Create or modify any component in `components/`
- Add or change a page layout
- Pick a color, font size, spacing value, or animation
- Add a new UI pattern (modal, drawer, toast, skeleton, progress bar…)
- Change the video player UI or lesson sidebar layout
- Modify the certificate template

**What it contains:**
- Color tokens and their semantic meaning (including course-category color coding)
- Typography scale
- Spacing and layout grid rules
- Component-level decisions (which variants exist, when to use each)
- Player UI conventions (controls, progress, notes panel)
- Quiz UI conventions (question layout, timer display, result screen)
- Motion and animation guidelines
- Responsive breakpoint conventions

**Rules:**
- If the decision is in `DESIGN.md`, follow it. Do not improvise.
- If you need something not covered, add it to `DESIGN.md` first, then implement it. Do not ship undocumented design patterns.
- If you disagree with a decision, say so in the PR description. Do not silently deviate.

---

## 11. Project learnings

Accumulated corrections. Append one-line concrete rules when the user corrects an approach.

- (empty)
