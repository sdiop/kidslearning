# Diop Yaba Academy — Product and Technical Design

---

**Version:** 1.0  
**Last updated:** 2026-09-15  
**Status:** Ready for review  
**Related documents:** [Consolidated PRD](PRD.md), [Implementation plan](IMPLEMENTATION_PLAN.md)

> This design predates the consolidated PRD's 2026-09-26 review. Use the PRD
> for current behavior and proposed account/grade/flash-card requirements;
> validate this design against those requirements before implementation.

---

## 1. Design Intent

Diop Yaba Academy should feel like a focused learning game rather than a school portal. The visual system uses the existing deep navy background, cyan interaction accents, yellow progress highlights, green success states, and orange action emphasis. The design must remain energetic without overwhelming students who are already prone to distraction.

The primary interaction principle is **progressive disclosure**: show the smallest useful decision first, and reveal instructions, resources, quizzes, and reports only when needed.

## 2. Information Architecture

### Student application

1. Header navigation
   - Grade selection
   - Progress report
   - Parent dashboard
   - Leaderboard
   - Sync status
2. Grade-specific hero
3. XP, quests, streak, and badge summary
4. Focus timer and narration controls
5. Subject tabs
6. Subject module
7. Collapsible quest cards
8. Weekly homework
   - Week selector
   - Day/subject tabs
   - Collapsible day cards
9. Collapsible parent coaching and source information

### Parent surfaces

- Parent dashboard
- Leaderboard
- Printable worksheet and answer key
- Presentation deck

## 3. Responsive Layout

### Desktop

- Two-column hero.
- Four-column summary statistics.
- Side-by-side grade buttons.
- Multi-column quest and weekly-card grids.
- Subject tabs remain horizontally available.
- Accordions reduce vertical length but can display several summaries in one row.

### Tablet

- Single-column hero.
- Two-column summary statistics.
- Quest cards use available columns based on width.
- Subject navigation remains horizontally scrollable.

### Mobile

- Compact grade dropdown replaces grade buttons.
- Menu actions become icon-first.
- Nearly full-width content with approximately 2–6px module gutters and 6–12px internal padding.
- Two-by-two summary statistics.
- One quest/day card per row.
- Cards are closed by default.
- Touch targets are at least 44px high.
- Progress opens as a viewport-width bottom sheet.

## 4. Component Design

### 4.1 Grade selector

**Desktop:** two segmented buttons.  
**Mobile:** labeled native select.

Grade switching must:

- Update the hero and curriculum.
- Load the correct local state key.
- Fetch the matching server profile.
- Update active navigation.
- Preserve grade-specific week and subject selections.

### 4.2 Subject navigation

The subject tab bar contains an All option and one option per subject module. On small screens, the first subject is the preferred default to prevent a long initial page.

The weekly area uses a separate subject/day tab state so changing the main course subject does not unexpectedly hide weekly content.

### 4.3 Quest accordion

Collapsed summary:

- Quest title
- Duration
- XP value
- Audio status
- Current composite score
- Expand/collapse indicator

Expanded body:

- Mission description
- Mission artifact reveal
- Narration transcript reveal
- Narration, resource, and completion actions
- Interactive quiz reveal

The collapsed summary must remain meaningful after completion by showing the score and completed outline state.

### 4.4 Weekly day accordion

Collapsed summary:

- Day and subject
- Concept
- Ohio standard code
- Current score
- Completion state

Expanded body:

- Sprint mission
- Instructional link
- Quick-check
- Completion requirement

### 4.5 Progress report sheet

The progress report is a bottom sheet on mobile and a centered floating sheet on larger screens.

It includes:

- Global completion bar
- Subject progress cards
- Completion dots
- Download action
- Reset action
- Close action

Behavior:

- Opens from the progress icon.
- Opens after successful weekly completion.
- Closes through the Close button or Escape key.
- Locks background scrolling while open.

### 4.6 Parent dashboard

The parent dashboard presents both students in parallel, including:

- Grade
- XP
- Quest count
- Streak
- Quiz average
- Awards
- Weekly activity
- Last active time

The dashboard is informational and must not expose student controls.

### 4.7 Leaderboard

The leaderboard presents:

- Overall XP standings
- Current-week XP standings
- Per-student progress and quiz averages

Ties should use stable profile ordering rather than random ranking.

## 5. Quiz State Machine

### States

1. **Ready**
   - No answer submitted for current attempt.
   - Inputs are enabled.
2. **Attempt locked**
   - Student submitted.
   - Inputs are disabled.
   - Correct and incorrect answers are visible.
   - Attempt is logged.
3. **Retry available**
   - Fewer than three attempts recorded.
   - No attempt has reached 100%.
   - Retry creates a fresh UI and preserves attempt history.
4. **Final**
   - Three attempts recorded or a perfect attempt was submitted.
   - Composite score is stored and shown.
   - No retry is available.
5. **Completion eligible**
   - Weekly final composite is at least 90%.
6. **Day complete**
   - Completion flag is stored.
   - XP is awarded once.
   - Progress report opens.

### Composite calculation

```text
composite = round(sum(attempt percentages) / number of attempts)
```

Examples:

- `[100]` → 100%
- `[50, 100]` → 75%
- `[75, 100, 100]` → 92%

The third example unlocks weekly completion; the second does not.

### Persistence

Client state stores:

```text
quizAttempts[quizKey] = [attempt1, attempt2, attempt3]
quizScores[quizKey] = composite
quizBonuses[quizKey] = true when XP bonus has been awarded
weeklyDone[weeklyKey] = true when the day is complete
```

Each attempt also emits a progress event for reporting.

## 6. Data Design

### Profiles

Current profiles are fixed family records:

- `cheikh`, grade 7
- `seydina`, grade 5

Future profile records should include an owning account or family ID.

### Progress state

One normalized JSON state object per profile. This model is appropriate for the small family MVP because it minimizes schema overhead and supports offline mirroring.

### Progress events

Append-only events support:

- Quiz-attempt history
- Quest completion
- Weekly completion
- XP rollups
- Weekly leaderboard calculations

Future events should include a client-generated idempotency key so retries do not create duplicates.

## 7. API Design

| Method | Route | Purpose |
| --- | --- | --- |
| GET | `/api/profiles` | List available family profiles. |
| GET | `/api/state/:id` | Load normalized student state. |
| PUT | `/api/state/:id` | Merge or explicitly replace state. |
| POST | `/api/event/:id` | Record progress activity. |
| GET | `/api/dashboard` | Return parent-facing progress summaries. |
| GET | `/api/leaderboard` | Return overall and weekly rankings. |

### Error behavior

- Invalid profile IDs return 404.
- Invalid payloads return 400.
- Database failures return 500 without exposing credentials or raw connection data.
- The student app falls back to local state and displays offline status.

## 8. Curriculum Design

Weekly curriculum data is structured by:

- Grade
- Week
- Subject
- Concept
- Standard
- Video
- Sprint
- Worksheet problems and answers
- Quick-check questions, choices, and correct answer

Curriculum content must pass structural validation:

- Thirty-six school-year weeks per supported grade.
- Four required subjects per week.
- Every question has an answer.
- Every multiple-choice answer exists in its choice list.
- Every video uses an approved HTTPS destination.
- Every printable problem includes an answer.

## 9. Accessibility

- Use semantic buttons, labels, selects, headings, details, and summaries.
- Ensure accordion summaries are keyboard-operable.
- Preserve visible focus states.
- Provide meaningful image alt text.
- Keep narration transcripts available.
- Do not rely on color alone for correctness or completion.
- Respect reduced-motion settings in a future animation pass.
- Test at 200% browser zoom and 390px viewport width.

## 10. Security and Privacy Design

### Current family MVP

- Minimal first-name and learning-progress data.
- Strict state normalization.
- Bounded quiz attempt arrays.
- No ads or embedded analytics.

### Required before broader release

- Authentication.
- Family-level authorization.
- CSRF-safe authenticated writes.
- Rate limiting.
- Parental consent.
- Data export/deletion.
- Retention policy.
- Audit records for parent/educator actions.

## 11. Reliability Design

- Mirror state to local storage before syncing.
- Debounce state writes.
- Reject stale state responses after local mutation or grade switching.
- Use row locking during server merges.
- Preserve union-style completion progress.
- Keep explicit replacement limited to reset.
- Add a future event retry queue.

## 12. Deployment Design

- Target: Replit Autoscale.
- Run command: `node server.js`.
- Bind host: `0.0.0.0`.
- Port: environment `PORT` or 5000 default.
- Health check: `GET /` must return HTTP 200.
- PostgreSQL environment must be available in production.

Release checks cover all student and parent routes plus API JSON validity.

## 13. Design Decisions

| Decision | Reason |
| --- | --- |
| Keep vanilla JavaScript | Small product surface, no build step, easy deployment. |
| Use accordions | Reduces scrolling and cognitive load without removing content. |
| Keep native mobile select | Compact, accessible, and familiar on phones. |
| Use browser speech synthesis | No audio hosting or generation dependency. |
| Use composite attempts | Discourages guessing while recognizing improvement. |
| Require 90% for daily completion | Defines mastery rather than participation as done. |
| Author worksheets internally | Avoids redistribution restrictions and preserves alignment control. |
| Keep local storage fallback | Student can continue during temporary connectivity problems. |

## 14. Open Decisions

- Whether three attempts means three total attempts or one initial attempt plus three retries.
- Whether the mastery gate should remain 90% for every grade and subject.
- Whether a parent can manually override daily completion.
- Whether weekly leaderboard scores reset by calendar week or assigned curriculum week.
- Which authentication provider and consent workflow will be used for external families.
