# Quest Academy

A visual, game-style summer prep app for two students — Cheikh (rising 7th grade) and Seydina (5th grade). No build step or external dependencies required.

## Stack

- Pure HTML / CSS / JavaScript (static site)
- Browser speech synthesis for audio narration
- `localStorage` for progress, XP, badges, and streaks
- Served with `npx serve` via Node.js 20

## How to run

The **Start application** workflow serves the app from the `Cheikh7/` folder on port 5000.

```
npx --yes serve Cheikh7 -p 5000 -s
```

Open the preview — use the grade-switcher at the top to toggle between Cheikh (7th grade) and Seydina (5th grade).

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
