# Quest Academy — Product Requirements Document

**Version:** 1.0 (Family MVP → multi-student roadmap)
**Status:** Living document
**Owners:** Parent-coach / product lead
**Last updated:** 2025

---

## 1. Executive Summary

Quest Academy is a visual, game-style summer-prep learning app built first for two
students — **Cheikh** (rising 7th grade) and **Seydina** (5th grade) — who learn best
with strong visual cues, short bursts of focus, and immediate feedback. The product
turns "screen time" into structured learning time by wrapping standards-aligned
practice in the language of games: quests, XP, badges, streaks, confetti, and boss
battles.

The MVP already ships two complementary modes:

1. **Quest modules** — anime-styled, subject-based quests (ELA, Math, Reading,
   Science, Social Studies) with a focus timer, browser narration, and interactive
   quizzes.
2. **Weekly Homework** — an 8-week program aligned to **Ohio Learning Standards**,
   with four 20-minute daily sprint missions per week (Math, ELA, Science, Social
   Studies), curated Khan Academy / YouTube video links, in-app quick-checks that earn
   XP, and a printable weekly worksheet that includes a parent answer key.

Progress is persisted server-side (Express + PostgreSQL) using a merge-on-write sync
model, feeding an **awards engine** and a **parent dashboard** that gives caregivers
at-a-glance visibility into both children.

This document positions the family MVP as the foundation for a product that can be
offered to other students and scholars, and defines the requirements, learning-science
rationale, architecture, privacy posture, honest limitations, and roadmap needed to get
there.

---

## 2. Problem Statement

Many capable kids struggle not because of ability but because of **attention,
motivation, and format mismatch**:

- **Screen-drawn, easily distracted learners.** Traditional worksheets and static
  packets compete poorly against games and video. Sitting still through long,
  text-heavy tasks is a losing battle for scattered learners.
- **Visual learning bias.** These learners absorb ideas faster through images,
  color-coding, short video, and interactive manipulation than through dense prose.
- **The summer slide.** Over a long break, students lose a meaningful fraction of the
  prior year's gains. Without light, consistent practice, the next grade starts from
  behind.
- **Parents lack visibility.** Caregivers want their kids to keep learning but have no
  simple, honest picture of *what* was practiced, *how much*, and *how well* — without
  hovering.
- **Curriculum sprawl.** Free practice content is scattered across many sites; paid
  worksheet mills have restrictive licensing and can't be embedded into a
  self-contained product.

Quest Academy addresses all five: it makes practice feel like play, leans visual and
short-sprint, keeps a steady weekly rhythm across the summer, and surfaces progress to
parents automatically.

---

## 3. Target Users & Personas

**Cheikh — the visual 12-year-old (rising 7th grade).**
Bright, competitive, motivated by leveling up and streaks. Loses focus on long tasks;
thrives on 20-minute missions, a visible timer, and a clear "artifact" to produce each
session. Wants the app to feel like a game, not homework.

**Seydina — the 10-year-old (5th grade).**
Younger, benefits from narration, simpler quick-checks, and celebratory feedback
(confetti, badges). Needs an even lower barrier to start and more encouragement per
step.

**Parent-coach — the caregiver.**
Not a teacher, time-constrained, wants confidence that summer learning is happening.
Needs a glance-able dashboard, printable worksheets with an answer key so they can
support offline work, and reassurance that content is grade-appropriate and aligned to
standards.

**Future: educators / tutors.**
Teachers or tutors who could assign weeks, review a roster of scholars, and print
worksheets for a small group. Not served by the MVP but central to the multi-student
roadmap.

---

## 4. Goals & Success Metrics

**Product goals**

- Keep both children doing light, consistent, standards-aligned practice across an
  8-week summer.
- Make practice intrinsically motivating enough that kids return without nagging.
- Give the parent honest, low-effort visibility.
- Build a foundation that generalizes to more students, grades, and eventually
  classrooms.

**Success metrics (family MVP)**

| Metric | Target signal |
| --- | --- |
| Weekly engagement | Each child completes ≥ 3 of 4 daily sprints most weeks |
| Streak health | Multi-day streaks sustained through the summer |
| Quick-check quality | Rising quiz average per subject over the 8 weeks |
| Coverage | All 8 weeks × 4 subjects attempted by end of summer |
| Parent visibility | Dashboard checked without prompting the kids |

**Success metrics (product ambition)**

- Retention of new students across a multi-week program.
- Worksheet prints per active student (offline reinforcement).
- Educator adoption once classroom features ship.

---

## 5. Curriculum & Standards Alignment Approach

Quest Academy's Weekly Homework is authored **against Ohio Learning Standards**, using
CCSS-style codes for Math and ELA (e.g. `7.NS.1`, `RL.7.4`) and plausible Ohio-style
codes for Science and Social Studies (e.g. `7.LS.1`, `7.GEO.1`). Each week covers the
four core subjects with a concept, a standard code, a 20-minute sprint mission, a small
problem set with answers, and a two-question quick-check.

**Why generated worksheets instead of scraping paid sites (e.g. mathworksheets.com):**

- **Licensing.** Paid worksheet sites restrict redistribution. Embedding or scraping
  their content into a product would violate their terms and create legal exposure.
- **Self-contained product.** Authoring our own problems and answer keys means the
  entire experience — on-screen and printable — ships as part of the app with no
  external dependency, no broken links, and no per-seat content licensing.
- **Alignment control.** Owning the content lets us map every item to a specific
  standard and tune difficulty for the exact learners we serve.
- **Fair use of instruction, not practice.** For *concept acquisition* we link out to
  reputable free explainers (Khan Academy, CK-12, National Geographic, curated YouTube
  searches) rather than copying them — the student watches on the source site, and we
  own the practice around it.

This keeps the product legally clean, portable, and fully aligned.

---

## 6. Feature Requirements

| Feature | Description | Status |
| --- | --- | --- |
| Quest modules (per subject) | Anime-styled ELA / Math / Reading / Science / Social quests with a mission, an artifact-to-produce, and a focus timer. | Shipped |
| XP, badges & streaks | XP awarded for quests and quick-checks; badge tiers; day streaks to reward consistency. | Shipped |
| Confetti & celebration | Visual reward moments on success to reinforce motivation. | Shipped |
| Focus timer | On-screen sprint timer supporting short, bounded work sessions. | Shipped |
| Browser speech narration | Web Speech narration of mission briefings for lower-friction starts and accessibility. | Shipped |
| Interactive quizzes | Multiple-choice, true/false, and drag-match items with immediate feedback. | Shipped |
| Grade switcher | Toggle between Cheikh (7th) and Seydina (5th) content and progress. | Shipped |
| Weekly Homework (8 weeks) | Ohio-aligned program: 4 subjects/week, one 20-min daily sprint each, curated video, quick-check, XP. | Shipped |
| Curated concept videos | Per-mission links to Khan Academy / CK-12 / Nat Geo / YouTube for concept acquisition. | Shipped |
| Printable weekly worksheet | Per-week, per-grade printable sheet (`worksheet.html`) with a separate **parent answer key** page. | Shipped |
| Server persistence & profiles | PostgreSQL-backed profiles (`cheikh`, `seydina`) with saved state. | Shipped |
| Merge-on-write sync | Union-merge of state so multi-device / out-of-order writes never erase progress. | Shipped |
| Input sanitization | Server normalizes/clamps incoming state to a strict schema (guards against bad/malicious data). | Shipped |
| Event history | Per-profile event log (`progress_events`) with XP deltas for weekly rollups. | Shipped |
| Awards engine | Server-computed awards (First Quest, Quest Knight, streak badges, Quiz Master, Weekly Warrior, etc.). | Shipped |
| Parent dashboard | `/parent.html` showing both kids' XP, quests, streaks, quiz average, awards, and weekly activity. | Shipped |
| Presentation deck | Self-contained parent/educator slide deck (`deck.html`). | Shipped |
| User authentication | Login / per-family accounts. | Planned |
| Classrooms / roster | Educator view assigning weeks to many scholars. | Planned |
| Adaptive difficulty | Quick-checks that adjust based on performance. | Planned |
| PWA / installable | Offline-capable, home-screen installable app. | Planned |
| More grades / weeks | Beyond 5th & 7th and beyond 8 weeks. | Planned |

---

## 7. Learning-Science Rationale

Quest Academy's design choices map directly to established learning principles:

- **Short sprints (20 minutes).** Bounded work aligns with limited attention spans and
  reduces avoidance; the visible timer externalizes time management.
- **Gamification (XP, badges, streaks, confetti).** Points and streaks provide clear
  goals and a sense of progress; celebratory feedback reinforces the behavior loop and
  raises intrinsic motivation.
- **Dual coding.** Pairing words with images, color-coding (e.g. highlight topic
  sentence vs. evidence), and short video engages both verbal and visual channels,
  improving retention for visual learners.
- **Immediate feedback.** Quick-checks mark answers right/wrong on the spot, which is
  far more effective for learning than delayed grading.
- **Retrieval practice.** Quizzes force recall rather than re-reading, strengthening
  memory.
- **Consistency over intensity.** A steady weekly rhythm across the summer counters the
  summer slide better than occasional long sessions.
- **Movement & artifacts.** Missions ask for a produced artifact (a comic, a T-chart, a
  labeled paragraph), encouraging active, sometimes physical, engagement rather than
  passive consumption.

---

## 8. Architecture Overview

Quest Academy is intentionally simple and **build-step-free**.

- **Frontend:** vanilla HTML / CSS / JavaScript static site in `Cheikh7/`. No
  framework, no bundler. Content lives in `data/course_data.json`,
  `data/grade5_data.js`, and the weekly data files (`data/weekly_grade7.js`,
  `data/weekly_grade5.js`). Local progress is mirrored to `localStorage` so the app
  works even when offline.
- **Backend:** a single Express server (`server.js`) serving the static app and a small
  JSON API (`/api/profiles`, `/api/state/:id`, `/api/event/:id`, `/api/dashboard`).
- **Persistence:** PostgreSQL tables for `profiles`, `progress_state`, and
  `progress_events`.
- **Sync model — merge-on-write.** `PUT /api/state/:id` runs inside a transaction with
  `SELECT … FOR UPDATE`, then **union-merges** the incoming state with what's stored:
  XP and streaks take the max, completion maps and quiz scores merge (best score wins).
  This guarantees that a stale or multi-device write never erases earned progress. A
  `replace` flag exists for authoritative overwrites.
- **Safety at the boundary.** `normalizeState()` clamps numbers and whitelists keys/
  lengths, so stored state can't carry malformed or injected values.
- **Awards** are computed server-side from stored state plus event rollups, keeping the
  logic in one place.

No client build step means the app is trivially deployable and easy to reason about.

---

## 9. Data & Child-Privacy Considerations

- **Minimal data.** The app stores only first names (`Cheikh`, `Seydina`), a grade, and
  learning progress (XP, completions, quiz scores, event timestamps). No email, no
  address, no photos, no free-text PII fields.
- **No ads, no third-party trackers.** The product does not run advertising or sell
  data. External links (Khan Academy, YouTube, etc.) open on their own sites for
  instruction only.
- **COPPA-mindful roadmap.** Because the users are children, any move beyond the family
  MVP must add verifiable parental consent, a clear privacy policy, data-retention and
  deletion controls, and a review of any third-party embeds before onboarding students
  outside the family.
- **Local-first resilience.** Progress persists in `localStorage` as well as the server,
  so an outage never loses a child's session and the child never sees an error wall.

---

## 10. Known Limitations (Honest Review)

- **No authentication.** Profiles are hard-coded to `cheikh` / `seydina`; anyone with
  the URL can read/write state and view the dashboard. Acceptable for a private family
  deployment, blocking for multi-tenant use.
- **Family-only profiles.** The profile set is fixed in code; there's no self-service
  account creation.
- **Hand-curated 8 weeks.** Weekly content is authored by hand for two grades and caps
  at 8 weeks. Scaling grades/weeks is a content-authoring effort.
- **Quick-checks are not adaptive.** Each subject/day has two fixed questions; there's
  no difficulty adjustment or item bank rotation.
- **Events are fire-and-forget.** The client posts events without retry; a failed POST
  is silently dropped, so dashboard rollups can slightly under-count.
- **Curated links can rot.** YouTube search links and third-party lessons may change or
  go stale over time and are not health-checked.
- **Answer keys are sample answers** for open-ended items, requiring parent judgment.

These feed directly into the roadmap below and into `docs/solution_review.md`.

---

## 11. Roadmap to a Multi-Student Product

**Phase 1 — Make it multi-tenant (unblockers).**
- User authentication and per-family accounts.
- Self-service profile creation; remove hard-coded profile IDs.
- Privacy policy + verifiable parental consent (COPPA).

**Phase 2 — Educator & scale.**
- Classroom / roster view: assign weeks to many scholars, review progress, bulk-print
  worksheets.
- More grades (K–8) and more than 8 weeks of content; a content-authoring pipeline.

**Phase 3 — Smarter practice.**
- Adaptive difficulty and item banks for quick-checks.
- Reliable event delivery (retry/queue) for accurate analytics.
- Link health-checking for curated videos.

**Phase 4 — Distribution & polish.**
- PWA: installable, offline-first.
- Production deployment with backups and monitoring.
- Accessibility pass (keyboard, contrast, narration coverage) and localization.

The MVP already validates the core loop with real learners. The roadmap converts that
validated loop into a product that any student or scholar can use.
