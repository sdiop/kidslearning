# Diop Yaba Academy — Product Requirements Document

**Version:** 2.0 (consolidated product and build requirements)
**Status:** Living document; proposed additions are not implemented
**Owner:** Parent-coach / product lead
**Last reviewed against app:** 2026-09-26

This is the **single requirements source**. It consolidates the former
`BUILD_PRD.md` with the product requirements. [Design](DESIGN.md) and
[implementation plan](IMPLEMENTATION_PLAN.md) are supporting documents; their
older status labels and checklists must be revalidated before implementation.
“Shipped” below describes code present in this workspace, not a security
certification or a guarantee about a published deployment.

---

## 1. Executive Summary

Diop Yaba Academy is a visual, game-style school-year learning app built first for two
students — **Cheikh** (rising 7th grade) and **Seydina** (5th grade) — who learn best
with strong visual cues, short bursts of focus, and immediate feedback. The product
turns "screen time" into structured learning time by wrapping standards-aligned
practice in the language of games: quests, XP, badges, streaks, confetti, and boss
battles.

The MVP already ships two complementary modes:

1. **Quest modules** — anime-styled, subject-based quests (ELA, Math, Reading,
   Science, Social Studies) with a focus timer, browser narration, and interactive
   quizzes.
2. **Weekly Homework** — a 36-week school-year program aligned to **Ohio Learning Standards**,
   with four 20-minute daily sprint missions per week (Math, ELA, Science, Social
   Studies), curated Khan Academy / YouTube video links, in-app quick-checks that earn
   XP, and a printable weekly worksheet with an answer key. The answer-key PIN
   is optional and stored in the browser; it is not an account login.

Progress is persisted server-side (Express + PostgreSQL) using merge-on-write
sync, feeding an **awards engine** and a **parent dashboard**. Today the
fixed profiles and APIs are **not access-controlled**; anyone who can reach the
app can read or alter their data. Parent-owned accounts and authorization are
required before onboarding other families.

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

Diop Yaba Academy addresses all five: it makes practice feel like play, leans visual and
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

- Keep both children doing light, consistent, standards-aligned practice across a
  36-week school year.
- Make practice intrinsically motivating enough that kids return without nagging.
- Give the parent honest, low-effort visibility.
- Build a foundation that generalizes to more students, grades, and eventually
  classrooms.

**Success metrics (family MVP)**

| Metric | Target signal |
| --- | --- |
| Weekly engagement | Each child completes ≥ 3 of 4 daily sprints most weeks |
| Streak health | Multi-day streaks sustained across the school year |
| Quick-check quality | Rising quiz average per subject over the 36 weeks |
| Coverage | All 36 weeks × 4 subjects attempted by the end of the school year |
| Parent visibility | Dashboard checked without prompting the kids |

**Success metrics (product ambition)**

- Retention of new students across a multi-week program.
- Worksheet prints per active student (offline reinforcement).
- Educator adoption once classroom features ship.
- Completed weekly days require a composite score of at least 90%; fewer
  quiz attempts over time is a useful mastery signal.
- Monitor state-sync and event-delivery success rates, server errors and
  deployment health checks; do not present untracked event delivery as exact.
- For expansion, measure family activation, four-week retention, parent
  dashboard usage and flash-card deck use separately from graded mastery.

**Non-goals for this expansion:** formal school transcripts, clinical
recommendations, copying paid worksheets, public student messaging,
child self-registration, educator rosters in the first account release,
and treating flash-card review as a graded assessment.

---

## 5. Curriculum & Standards Alignment Approach

Diop Yaba Academy's Weekly Homework is authored **against Ohio Learning Standards**, using
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

Status is based on the current app code, not the older implementation plan.
“Proposed” means **no implementation has begun** for that capability.

| ID | Capability | Requirement / current behavior | Status |
| --- | --- | --- | --- |
| FR-01 | Grade navigation | Desktop buttons and mobile selector switch independent 5th/7th grade content and local progress. | Shipped |
| FR-02 | Quests | Subject tabs, accordion quest cards, missions, artifacts, optional outside links, narration and transcripts. | Shipped for grades 5 and 7 |
| FR-03 | Practice and rewards | Multiple-choice, true/false and matching quizzes; at most three attempts, rounded composite score, weekly 90% completion gate, one-time XP bonuses, streaks, badges and celebration. | Shipped |
| FR-04 | Focus timer | Twenty-minute timer with start and reset, and movement-break guidance. | Shipped |
| FR-05 | Weekly curriculum | 36 weeks × four days/subjects (Math, ELA, Science, Social Studies), with quick-checks for each supported grade. | Shipped for grades 5 and 7 |
| FR-06 | Worksheets | Printable weekly student sheet and optional answer-key reveal/printing. A browser-local parent PIN can restrict answers **on that browser only**. | Shipped; PIN is not account protection |
| FR-07 | State and events | Normalized per-profile PostgreSQL state and event history; browser-local fallback; merge-on-write by default and explicit replace on reset. Event POSTs have no retry guarantee. | Shipped for fixed profiles |
| FR-08 | Parent reporting | Parent dashboard, downloadable progress report, awards and leaderboard using the fixed profiles. | Shipped; currently unauthenticated |
| FR-09 | User guide | First-visit and reopenable narrated, captioned chapter guide to current controls. | Shipped |
| FR-10 | Installation and offline | Manifest, service worker and home-screen installation; cached app shell and previously loaded content remain useful offline, but APIs and outside lesson links require internet. Guide video is cached after successful request, not during initial installation. | Shipped with limits; device/browser verification still needed |
| FR-11 | Presentation | Self-contained parent/educator slide deck. | Shipped |
| FR-12 | Parent-owned accounts | Adult signup/sign-in, account recovery and family-owned child profiles; no child self-registration. | Proposed — §12 |
| FR-13 | Family authorization | Restrict student state, events, reports, answer access and parent views to the owning adult/family. | Proposed — §12 |
| FR-14 | Grades 6 and 8 | Full grade-specific quest and 36-week curriculum coverage, worksheets, narration and progress integration. | Proposed — §13 |
| FR-15 | Course flash cards | Grade/course-specific ungraded retrieval practice with flip, self-check and next/review actions. | Proposed — §14 |
| FR-16 | Educator roster | Assign weeks and review a roster of students. | Later, separate scope |
| FR-17 | Adaptive practice | Vary difficulty or question variants based on performance. | Later, separate scope |

---

## 7. Learning-Science Rationale

Diop Yaba Academy's design choices map directly to established learning principles:

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

Diop Yaba Academy is intentionally simple and **build-step-free**.

- **Frontend:** vanilla HTML / CSS / JavaScript static site in `Cheikh7/`. No
  framework or bundler. The app loads grade 5 and grade 7 course/annual/weekly
  data files, while `app.js` also contains grade 7 quest data. Local progress is
  mirrored to `localStorage`; the service worker caches the app shell and
  fetched same-origin GET resources, but not API responses.
- **Backend:** a single Express server (`server.js`) serving the static app and a small
  JSON API (`/api/profiles`, `/api/state/:id`, `/api/event/:id`,
  `/api/dashboard`, `/api/leaderboard`). There is **no session or route
  authorization** today.
- **Persistence:** PostgreSQL tables for `profiles`, `progress_state`, and
  `progress_events`.
- **Sync model — merge-on-write.** `PUT /api/state/:id` uses a transaction with
  `SELECT … FOR UPDATE`. XP/streak maxima, completion maps and scores merge;
  equal-length attempt histories preserve the server sequence. This reduces
  accidental stale-write loss, but is not a guarantee that offline devices
  automatically reconcile: event delivery is fire-and-forget and a `replace`
  flag permits an explicit reset.
- **Safety at the boundary.** `normalizeState()` clamps numbers and whitelists keys/
  lengths, so stored state can't carry malformed or injected values.
- **Awards** are computed server-side from stored state plus event rollups, keeping the
  logic in one place.

No client build step means the app is trivially deployable and easy to reason about.

---

## 9. Data & Child-Privacy Considerations

- **Minimal child data today.** The app stores fixed first names, grades, and
  learning progress (XP, completions, quiz scores, event timestamps). Future
  parent accounts will require adult contact/account data, kept separate from
  student progress.
- **No ads, no third-party trackers.** The product does not run advertising or sell
  data. External links (Khan Academy, YouTube, etc.) open on their own sites for
  instruction only.
- **Child-privacy gate.** Before external families can register, review
  applicable child-privacy obligations with qualified counsel and implement
  appropriate parental notice/consent, a privacy policy, retention/deletion
  controls, and a review of third-party instructional links.
- **Local-first resilience.** Progress persists in `localStorage` as well as the server,
  allowing loaded lessons to remain useful during an outage. Unsent events
  and offline edits are not yet guaranteed to sync.

---

## 10. Known Limitations (Honest Review)

- **No authentication.** Profiles are hard-coded to `cheikh` / `seydina`;
  accessible APIs permit reading/writing state and viewing dashboards. An
  obscure or privately shared URL is **not** an access control.
- **Family-only profiles.** The profile set is fixed in code; there's no self-service
  account creation.
- **Parent PIN is device-local and optional.** The worksheet answer key is
  visible without a PIN unless a parent enables it on that browser; the PIN is
  stored in browser storage and must not be treated as secure authorization.
- **Maintaining 36 weeks.** Weekly content covers a full school year for two grades.
  Adding grades or richer question variants remains a content-authoring effort.
- **Quick-checks are not adaptive.** Each subject/day has two fixed questions; there's
  no difficulty adjustment or item bank rotation.
- **Events are fire-and-forget.** The client posts events without retry; a failed POST
  is silently dropped, so dashboard rollups can slightly under-count.
- **Curated links can rot.** YouTube search links and third-party lessons may change or
  go stale over time and are not health-checked.
- **Answer keys are sample answers** for open-ended items, requiring parent judgment.
- **Install/offline scope varies.** Home-screen installation is supported in the
  app shell, but browser/device behavior needs verification; external lessons,
  API-backed views, and uncached media require connectivity.

These feed directly into the roadmap below and into `docs/solution_review.md`.

---

## 11. Roadmap to a Multi-Student Product

**Phase 1 — Protect family data (unblockers).**
- Parent-owned accounts, account recovery, family-owned child profiles, and
  authorization on every profile/report/answer route (§12).
- Safe migration of the two existing profiles without exposing them to new
  accounts; privacy/consent, retention and deletion review before onboarding.

**Phase 2 — Expand grade coverage and practice.**
- Add complete 6th and 8th grade experiences (§13), with reviewed content and
  automated curriculum validation.
- Add course flash cards (§14) as ungraded, accessible retrieval practice.

**Phase 3 — Educator and smarter practice.**
- Classroom/roster view and assignments, subject to separate educator privacy
  and authorization design.
- Adaptive difficulty and item banks for quick-checks.
- Reliable event delivery (retry/queue) for accurate analytics.
- Link health-checking for curated videos.

**Phase 4 — Distribution and reliability improvements.**
- Verify iPad/Android installation and offline access across app updates;
  account-aware offline storage and safe sign-out handling.
- Backups, monitoring and production smoke checks.
- Accessibility pass (keyboard, contrast, narration coverage) and localization.

The family MVP validates a learning loop; it is not yet safe to expose as a
multi-family product.

---

## 12. Proposed: Parent-owned accounts and student profiles (FR-12–13)

**Decision:** Adults sign up and sign in; they create and manage child
profiles. Children do **not** self-register, provide their own email
addresses, or gain independent account credentials in this phase. Educator
accounts and classroom sharing are separate future work. A parent can select
one of their students for study on a shared device, but parent-only views and
settings require an adult-authenticated action rather than relying on the
selected grade or the existing worksheet PIN.

### Functional requirements

1. An adult can register, verify ownership of their sign-in method, sign in,
   sign out, recover access, and manage their own account. Sign-in failures
   must not disclose whether another family's account exists.
2. An authenticated adult can create, view, rename, change grade (5–8 when
   supported), and archive/delete only their own child profiles. Profile
   names need not be unique across families. Deletion requires confirmation
   and follows the published retention/deletion policy.
3. Student progress, quiz attempts, events, awards, flash-card history (if
   stored), worksheets, parent dashboard, downloads, and leaderboard data
   are scoped to the owning family. No request may trust a client-supplied
   profile ID or family ID without a server-side ownership check. Parent-only
   exports, answer keys and reset controls must be restricted; the current
   browser-local PIN is not an authorization mechanism.
4. Profile switching preserves independent progress on the same device.
   Signing out or switching families must prevent cached/local student data
   from the previous family appearing to the next user, including offline.
   Offline activity may be queued only with a documented conflict and
   ownership policy; failed sync must be visible rather than silently
   reported as saved.
5. Existing Cheikh/Seydina state must not be automatically claimed by a new
   registrant. Migration to a verified parent account requires an explicit,
   auditable owner-confirmation process; until then, keep legacy data isolated
   and plan a controlled cutover of the unauthenticated endpoints.
6. Before external-family registration, review child-privacy requirements
   with qualified counsel; provide parental notice/consent where applicable,
   a privacy policy, export/deletion and retention controls. Do not collect
   student email, birth date, or other unnecessary child data for this flow.
   Provide rate limits and abuse protections on sign-in and write APIs.

### Acceptance criteria

- Two different parent accounts can create children with the same first
  name; neither can list, read, change, export, or delete the other's data.
- Requests to protected APIs without a valid adult session fail closed;
  forging a student/profile identifier or switching the UI grade cannot
  bypass ownership. Parent views and answer access do not rely on a local
  four-digit PIN.
- A signed-out or newly signed-in family on a shared iPad cannot see another
  family's cached progress, even when offline; reconnection does not upload
  one family's edits into another's account.
- Existing family progress remains intact through a verified migration;
  incorrect ownership claims do not expose or overwrite it.
- Recovery, explicit reset, export and deletion flows are tested. No public
  signup is enabled before privacy review and the above access tests pass.

## 13. Proposed: Complete 6th and 8th grade experiences (FR-14)

**Scope:** Add both grades to the same grade-aware product, not new copies of
the site. Each grade receives its own subject quests **and** a full
36-week school-year Weekly Homework program. Preserve the existing 5th/7th
grade material, scores, and mastery rules. Ohio standards references must
be checked against authoritative sources; do not invent codes or reuse
another grade's questions as filler.

### Functional requirements

1. Adult-managed student profiles select a grade from 5, 6, 7 or 8.
   Grade selection determines course quests, weekly work, worksheets,
   narration/transcripts, flash-card decks, progress and reporting.
2. Grade 6 and grade 8 each have 36 weeks × four subject/day entries
   (Math, ELA, Science, Social Studies). Each entry has a reviewed
   concept, standard mapping, short mission, answerable original practice
   problems with a matching answer key, quick-check, and an optional
   age-appropriate instructional link. Quest modules retain the existing
   mission/artifact, narration, quiz and focus-sprint pattern.
3. Existing three-attempt/composite-score and 90% weekly mastery rules,
   one-time XP awards, independent progress, parent reporting and printable
   student/parent worksheets work for all four grades.
4. Unsupported or missing grade content must produce an explicit error or
   unavailable state; it must never silently show another grade's lessons
   or answer key. Grade changes must not merge or erase earlier progress.
5. Add new grade assets to the install/offline policy and update the in-app
   user guide so its spoken grade choices and live visuals remain accurate.

### Acceptance criteria

- For each new grade, automated curriculum checks verify 36 unique weeks,
  four subject/day entries per week, complete standards metadata, answerable
  questions and matching worksheet/answer-key content.
- Browser tests cover grade selection, one quest, a weekly quiz below and
  above the mastery threshold, progress, parent reporting, and printable
  worksheet/answer controls for grades 6 and 8.
- Switching among grades 5–8 and between children never substitutes content
  or progress from another grade/student. Existing 5th/7th grade tests pass.
- A curriculum reviewer signs off standards mappings and answer keys before
  either new grade is marked shipped.

## 14. Proposed: Course flash cards (FR-15)

**Purpose:** Give students quick retrieval practice before a quest or after
feedback without making flash cards a second graded quiz. A deck belongs to
a specific grade, subject and course/quest concept; cards must use reviewed,
original curriculum content, not copied third-party lessons.

### Functional requirements

1. From a supported course or quest, a student can open its deck, read or
   listen to a clear prompt, reveal the answer/explanation, and move forward
   or backward. A student can mark a card “Review again” or “I know this”
   for the current profile; keep an obvious way to revisit all cards.
2. The front and back are concise and age-appropriate. Each card stores a
   stable ID and source concept/standard reference; editorial checks prevent
   empty answers, duplicate IDs and misleading facts. Decks are grade
   specific and never fall back to a different grade without disclosure.
3. A review marker may persist per student/profile across sessions and
   devices once accounts exist. Flash-card review does **not** alter quiz
   attempts, composite scores, weekly completion, streaks or XP; it is not a
   shortcut around the 90% mastery gate.
4. Cards work with keyboard and touch, expose reveal state to assistive
   technology, respect reduced motion, and keep the answer hidden until
   requested. Previously loaded decks remain available offline under the
   same family-isolation rules as other progress.

### Acceptance criteria

- Grade/course navigation shows only the matching reviewed deck; empty
  decks have a clear “no cards yet” state rather than unrelated content.
- Reveal, back/next, review markers and repeat-session behavior work on
  desktop and iPad-sized touch screens and are keyboard/screen-reader usable.
- Two students reviewing the same deck see independent review state; a
  different family cannot fetch their stored markers.
- Reviewing any number of cards leaves quiz attempts, scores, XP and
  completion unchanged.

## 15. Consolidated build constraints, release checks and risks

These carry forward the build-specific requirements from the former Build
PRD; proposed features must meet them before their status changes.

- **Experience:** Keep the current navy/cyan/yellow visual language, compact
  accordion quest layout, desktop grade controls, mobile compact selector,
  subject tabs and 20-minute focus flow. Keep touch targets at least 44 × 44
  CSS pixels and avoid horizontal overflow at a 390px viewport. Maintain
  narration transcripts and keyboard access; browser `en-GB` voice quality
  varies by device.
- **Quiz integrity:** Lock submitted choices; show correct/incorrect feedback;
  record at most three attempts; use the rounded composite of attempts;
  require ≥90% for weekly completion; award each bonus only once.
- **State boundary:** Clamp numbers, bound keys and attempt histories, merge
  completion/score state without replacing it accidentally, and reserve
  replacement for a deliberate reset. Test concurrent/out-of-order writes
  and verify that account ownership is enforced **before** state/event
  operations. Do not count fire-and-forget events as guaranteed delivery.
- **Verification:** Run JavaScript syntax checks, unit and curriculum tests,
  browser tests for grade isolation, quiz locks and mastery, worksheets,
  account isolation, flash cards and mobile layout. Smoke-test `/`,
  `/parent.html`, `/leaderboard.html`, `/deck.html`, worksheet URLs, and
  their authenticated behavior where applicable. Validate installation and
  offline behavior on target devices, not just the presence of a manifest.
  Do not infer production readiness solely from passing local checks.
- **Main risks:** Unauthenticated legacy APIs expose fixed family progress;
  migration can misassign it; offline device state can leak across accounts;
  hand-authored answers or standards may be wrong; third-party links can
  break; event failures can undercount activity. Resolve security and
  privacy blockers before admitting outside families.

**Build order:** (1) parent ownership, migration, privacy and access gates;
(2) grade-aware content model and reviewed 6th/8th grade coverage; (3)
course flash cards with independent profile state; (4) device/offline
regression and guide refresh. Educator rosters, adaptive difficulty and
broader grade expansion are explicitly outside these three additions.
