# Yaaba Academy — Solution Review

An honest, end-to-end review of the built solution. This review feeds the "Known
Limitations" section of `docs/PRD.md`.

## Scope reviewed

- Quest modules and gamification (`Cheikh7/app.js`, `data/course_data.json`,
  `data/grade5_data.js`)
- Weekly Homework, 8 weeks × 2 grades (`Cheikh7/weekly.js`,
  `data/weekly_grade7.js`, `data/weekly_grade5.js`)
- Printable worksheet + answer key (`Cheikh7/worksheet.html`)
- Server persistence, sync, awards, dashboard (`server.js`, `Cheikh7/parent.html`)

## What works well

- **The core loop is genuinely motivating.** Short 20-minute missions, XP, streaks,
  badges, and confetti create a game feel that fits distractible, visual learners.
- **Standards alignment is concrete.** Every weekly subject carries an Ohio standard
  code, a concept, a sprint, a problem set, and a quick-check — not vague "practice."
- **Merge-on-write sync is robust.** State is union-merged inside a `FOR UPDATE`
  transaction (XP/streak take the max; completions and best quiz scores merge), so
  out-of-order or multi-device writes never erase progress. A `replace` flag supports
  authoritative overwrites.
- **Input is sanitized at the boundary.** `normalizeState()` clamps numbers and
  whitelists keys/lengths, preventing malformed or injected state from being stored.
- **Local-first resilience.** `localStorage` mirroring means an offline/server outage
  degrades gracefully instead of blocking the child.
- **Printable worksheet is well-designed.** Clean print CSS, page-breaks, and a
  separate parent answer-key page make offline reinforcement practical.
- **Parent dashboard is glance-able.** Both kids, XP, quests, streaks, quiz average,
  awards, and weekly rollups on one page.
- **No build step.** Vanilla HTML/CSS/JS + a single Express server is easy to deploy,
  audit, and reason about.

## Limitations found

- **No authentication / authorization.** Profiles are hard-coded (`cheikh`,
  `seydina`); anyone with the URL can read and write state. Fine for a private family
  deployment, blocking for anyone else.
- **Fixed profile set.** No self-service account creation.
- **Content is hand-curated and capped at 8 weeks / 2 grades.** Scaling is a content
  effort, not a code change.
- **Quick-checks are static (2 fixed items each).** No adaptivity or item rotation.
- **Events are fire-and-forget.** `logEvent()` posts without retry; a dropped POST
  silently under-counts dashboard rollups.
- **Curated external links can rot** and are not health-checked.
- **Open-ended answer keys are sample answers** and need parent judgment.

## Suggested next steps

1. Add authentication and per-family accounts; remove hard-coded profile IDs.
2. Add a privacy policy and verifiable parental consent before onboarding non-family
   students (COPPA).
3. Make event delivery reliable (retry/queue) for accurate analytics.
4. Introduce adaptive quick-checks with an item bank.
5. Build a content-authoring pipeline to add grades and weeks.
6. Ship a PWA (installable, offline-first) and a monitored production deployment.
7. Add a link-health check for curated videos.

## Verdict

The MVP successfully validates the core learning loop with real users and is
architecturally clean. The primary gap between "family MVP" and "product for every
scholar" is **multi-tenancy (auth + accounts + privacy)**, followed by **content scale**
and **adaptivity** — all captured in the PRD roadmap.
