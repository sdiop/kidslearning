# Quest Academy

A visual, game-style summer prep app for two students — Cheikh (rising 7th grade) and Seydina (5th grade). No build step or external dependencies required.

## Stack

- Vanilla HTML / CSS / JavaScript frontend (no build step) in `Cheikh7/`
- Node.js 20 + Express (`server.js`) serving static files and a JSON API
- PostgreSQL (Replit built-in) for persistent progress, event history, awards
- Browser speech synthesis for audio narration; `localStorage` as offline fallback

## How to run

The **Start application** workflow runs `node server.js` on port 5000.

Key pages: `/` (app with grade switcher), `/parent.html` (parent dashboard),
`/worksheet.html?grade=7&week=1` (printable weekly worksheet + answer key),
`/deck.html` (parent/educator presentation).

## Key features

- Quest modules with XP, badges, streaks, quizzes, narration (original MVP)
- 8-week Ohio Learning Standards-aligned weekly homework per grade
  (`Cheikh7/data/weekly_grade5.js`, `weekly_grade7.js`, UI in `Cheikh7/weekly.js`)
- Printable weekly worksheet with parent answer key (browser Print → Save as PDF)
- Server-side persistence: sanitized merge-on-write state sync (`PUT /api/state/:id`,
  union-merge prevents multi-device overwrites; `replace:true` only for explicit reset)
- Parent dashboard + awards computed server-side from state and event history
- PRD in `docs/PRD.md`, solution review in `docs/solution_review.md`

## Project structure

```
Cheikh7/          Main app (grade switcher covers both students)
  index.html      Entry point
  styles.css      Visual design and responsive layout
  app.js          XP, badges, timer, quizzes, progress tracker
  data/
    course_data.json   7th grade course content
    grade5_data.js     5th grade course content
  assets/         Anime-style subject images
  docs/           Parent guide, 30-day plan, source map

Seydina5/         Standalone 5th grade version (separate copy)
```

## User preferences

- Keep the existing structure and stack — no migration or restructuring needed.
