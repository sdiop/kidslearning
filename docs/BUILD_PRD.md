# Diop Yaba Academy — Build Product Requirements Document

---

**Version:** 1.0  
**Last updated:** 2026-09-15  
**Status:** Ready for review  
**Owner:** Product owner / parent-coach  
**Audience:** Product, design, engineering, curriculum, and QA  
**Related documents:** [Product PRD](PRD.md), [Design document](DESIGN.md), [Implementation plan](IMPLEMENTATION_PLAN.md)

---

## 1. Purpose

This document defines what Diop Yaba Academy must do, how the current family MVP is structured, which capabilities are already shipped, and which build tasks are required to turn it into a reliable multi-student learning product.

Diop Yaba Academy is a visual, game-style learning application created for two students:

- **Cheikh:** rising 7th grade
- **Seydina:** 5th grade

The product combines short learning missions, Ohio Learning Standards-aligned weekly work, controlled quiz retries, printable worksheets, narration, progress tracking, awards, and parent visibility. It is designed for students who respond better to short, visual, interactive activities than to long worksheets or dense instructional pages.

## 2. Product Decision

The current family MVP validates the core learning loop:

1. Select a grade, week, and subject.
2. Open a compact lesson card.
3. Review the mission and optional video.
4. Complete a quick-check quiz.
5. Receive a composite score across no more than three attempts.
6. Unlock daily completion only after earning at least 90%.
7. Earn XP and update progress.
8. Review results in the progress sheet, parent dashboard, or leaderboard.

The next major product decision is whether to keep Diop Yaba Academy as a private family tool or invest in authentication, child privacy controls, and scalable curriculum authoring so other families and educators can use it.

## 3. Problem Statement

Students with high visual engagement needs often struggle with conventional summer-learning materials because:

- Long pages and packets create a high barrier to starting.
- Static assignments compete poorly with games and video.
- Immediate feedback is limited or absent.
- Unlimited retries allow students to guess until they pass without demonstrating learning.
- Parents lack a fast way to verify effort, accuracy, and consistency.
- Free instructional material is fragmented across websites.
- Paid worksheet content usually cannot be redistributed inside another product.

Diop Yaba Academy addresses these problems with compact accordions, short missions, controlled quiz attempts, standards-linked practice, a 90% completion gate, visible progress, and parent-facing reporting.

## 4. Goals

### 4.1 Family MVP goals

- Make daily practice easy to begin on a phone, tablet, or desktop.
- Keep each activity short enough for a focused 20-minute session.
- Require evidence of mastery before marking a day complete.
- Preserve progress across refreshes and devices.
- Give the parent a clear view of scores, progress, streaks, and weekly activity.
- Provide printable work for offline reinforcement.

### 4.2 Product expansion goals

- Support independent family accounts and student profiles.
- Restrict each family to its own student data.
- Support more grades, weeks, subjects, and question variants.
- Allow educators to assign content and review a roster.
- Make the app installable and resilient offline.
- Establish privacy, consent, retention, and deletion controls suitable for children.

## 5. Non-Goals

The current build does not aim to:

- Replace a school curriculum or licensed learning-management system.
- Provide formal grades, transcripts, or high-stakes assessment.
- Diagnose learning disabilities or make clinical recommendations.
- Host copied worksheets from paid third-party sites.
- Embed uncontrolled social features or student-to-student messaging.
- Support public self-registration before authentication and child-privacy controls exist.

## 6. Users and Job Stories

### Student

**When** I am ready to study, **I want** to choose one grade, week, and subject without scrolling through the whole course, **so I can** start quickly.

**When** I finish an assignment, **I want** a short quiz with clear attempt limits and feedback, **so I can** prove that I understand the material.

**When** I complete a day, **I want** XP, progress, and leaderboard movement, **so I can** see that my effort matters.

### Parent-coach

**When** my child says an assignment is complete, **I want** to see the score, attempts, progress, and activity record, **so I can** confirm mastery without hovering.

**When** internet-based learning is not appropriate, **I want** a printable weekly worksheet and answer key, **so I can** continue practice offline.

### Future educator

**When** I support several students, **I want** to assign standards-aligned work and review progress by student and subject, **so I can** intervene efficiently.

## 7. Experience Requirements

### 7.1 Navigation and responsive layout

- Desktop retains side-by-side grade buttons.
- Mobile replaces grade buttons with a compact grade dropdown.
- Subject navigation uses tabs so only the selected subject is shown.
- Weekly content uses a week dropdown and subject/day tabs.
- Quest and weekly cards use accordion reveals to minimize scrolling.
- Mobile cards use nearly the full viewport width with small, consistent gutters.
- Touch targets must be at least 44 by 44 CSS pixels.
- The existing navy, cyan, yellow, green, and orange color scheme must remain unchanged.

### 7.2 Quest experience

Each quest must provide:

- Title, duration, XP value, narration status, and score in the collapsed summary.
- Mission description and artifact instructions.
- British English narration using the best available `en-GB` browser voice.
- Optional external instructional link.
- Interactive quiz.
- Completion action.

### 7.3 Quiz integrity

- A student selects answers and submits one attempt.
- Submission locks all answers for that attempt.
- Correct and incorrect answers remain visible.
- Each attempt is logged before a retry is offered.
- A quiz supports a maximum of three total attempts.
- A fresh retry resets and reshuffles the quiz UI.
- The final composite is the rounded average of all recorded attempts.
- The composite score is stored in the profile state.
- A weekly day is only eligible for completion when its final composite score is at least 90%.
- XP bonuses are awarded once and cannot be repeatedly farmed.

### 7.4 Progress and reporting

- A progress icon next to grade selection opens the progress report sheet.
- The progress sheet displays XP, quests completed, streak, subject completion, quiz scores, export, and reset controls.
- Successful weekly completion automatically opens the progress sheet.
- The parent dashboard displays both students side by side.
- The leaderboard ranks students overall and for the current week.
- Progress remains available in local storage if the server is temporarily unavailable.

### 7.5 Weekly curriculum

For each grade:

- Thirty-six weeks of school-year content.
- Four days per week: Math, ELA, Science, and Social Studies.
- One standard code, concept, mission, video, problem set, answer set, and quick-check per subject/day.
- Printable weekly worksheet.
- Separate parent answer-key page.

## 8. Functional Requirements and Status

| ID | Capability | Requirement | Status |
| --- | --- | --- | --- |
| FR-01 | Grade profiles | Switch between Cheikh and Seydina with independent content and state. | Shipped |
| FR-02 | Mobile grade menu | Use a dropdown on mobile and buttons on desktop. | Shipped |
| FR-03 | Subject navigation | Filter the course through subject tabs. | Shipped |
| FR-04 | Compact cards | Use accordion summaries and nested reveals to reduce scrolling. | Shipped |
| FR-05 | Quest system | Provide subject quests, mission artifacts, videos, narration, and XP. | Shipped |
| FR-06 | Focus support | Provide a 20-minute focus timer and movement-break guidance. | Shipped |
| FR-07 | Quiz controls | Lock submitted answers and allow no more than three attempts. | Shipped |
| FR-08 | Composite scores | Average recorded attempts and persist the final score. | Shipped |
| FR-09 | Mastery gate | Require a weekly score of at least 90% before daily completion. | Shipped |
| FR-10 | Weekly curriculum | Provide 36 Ohio-aligned weeks for grades 5 and 7. | Shipped |
| FR-11 | Worksheets | Print a weekly worksheet and separate answer key. | Shipped |
| FR-12 | Persistent state | Store normalized profile state in PostgreSQL and mirror it locally. | Shipped |
| FR-13 | Progress events | Log quiz attempts, completions, and XP changes. | Shipped |
| FR-14 | Progress sheet | Open progress from the header and after weekly completion. | Shipped |
| FR-15 | Parent dashboard | Show both students, awards, scores, streaks, and weekly activity. | Shipped |
| FR-16 | Leaderboard | Rank total XP, weekly XP, progress, and quiz averages. | Shipped |
| FR-17 | Authentication | Protect student and family data with signed-in accounts. | Planned |
| FR-18 | Family authorization | Ensure families can access only their own profiles. | Planned |
| FR-19 | PWA | Support installability and structured offline caching. | Planned |
| FR-20 | Curriculum scale | Add additional grades and question variants beyond the 36-week grades 5 and 7 program. | Planned |
| FR-21 | Educator tools | Add rosters, assignments, and educator reporting. | Later |

## 9. Architecture Requirements

### Frontend

- Vanilla HTML, CSS, and JavaScript.
- No build step.
- Main application in `Cheikh7/`.
- Course data stored in JavaScript/JSON curriculum files.
- Responsive CSS based on the existing visual system.

### Backend

- Node.js with Express.
- Static file delivery and JSON APIs from `server.js`.
- PostgreSQL for profile state and event history.
- Production run command: `node server.js`.

### State

The normalized state includes:

- XP
- Completed quests
- Last activity date
- Streak
- Quiz scores
- One-time quiz bonus flags
- Weekly completion flags
- Quiz-attempt arrays

Server writes must:

- Clamp numeric values.
- Bound keys and attempt arrays.
- Union-merge completion maps.
- Preserve server state during equal-length attempt conflicts.
- Allow full replacement only for an explicit reset.

## 10. Safety, Privacy, and Security

The current public deployment is appropriate only for controlled family use because profile endpoints are not authenticated.

Before onboarding other families:

- Add authentication and authorization.
- Replace hard-coded profile IDs with account-owned profile records.
- Add parental consent and child-profile management.
- Publish a privacy policy.
- Add account data export and deletion.
- Define data retention.
- Review third-party instructional links and tracking behavior.
- Add rate limits and abuse protection to write endpoints.

## 11. Success Metrics

### Learning

- At least three of four weekly days completed per student.
- At least 90% final composite for completed days.
- Quiz composites improve over time by subject.
- Students use fewer attempts as mastery increases.

### Engagement

- Weekly active students.
- Completed focus sessions.
- Weekly streak retention.
- Worksheet prints per active student.

### Reliability

- State-sync success rate.
- Event-log delivery rate.
- Server error rate.
- Deployment health-check success.

### Product expansion

- Family activation rate.
- Four-week retention.
- Parent dashboard usage.
- Assigned-work completion rate for educator accounts.

## 12. Release Gates

A production release is ready when:

- All changed JavaScript passes syntax validation.
- `/`, `/parent.html`, `/leaderboard.html`, `/deck.html`, and a worksheet URL return HTTP 200.
- Grade switching preserves independent state.
- Submitted quiz answers lock.
- Attempt arrays stop at three.
- Composite calculations match the attempt average.
- Weekly completion remains blocked below 90%.
- Progress opens after successful weekly completion.
- Parent and leaderboard APIs return valid JSON.
- Mobile layouts have no horizontal overflow at 390px width.
- Production starts with `node server.js` and returns HTTP 200 from `/`.

## 13. Risks

| Risk | Impact | Mitigation |
| --- | --- | --- |
| Unauthenticated public APIs | Anyone with endpoint knowledge could modify family progress. | Keep access controlled now; prioritize authentication before expansion. |
| Hand-authored curriculum errors | Incorrect answer or standard can reduce trust. | Add curriculum review and structured validation. |
| Event delivery is fire-and-forget | Weekly activity totals can undercount. | Add a durable client queue and idempotent event IDs. |
| External video links change | Lessons can lead to missing or unsuitable content. | Add link monitoring and approved-resource metadata. |
| Browser voice differences | Narration quality varies by device. | Keep prioritized `en-GB` selection and provide text transcripts. |
| Local/server conflict | Stale devices can disagree on mutable score history. | Move attempts to append-only server records in a future revision. |

## 14. Build Priority

1. **Protect family data:** authentication, authorization, consent, and account ownership.
2. **Improve reliability:** durable events, automated tests, monitoring, and backups.
3. **Make it installable:** PWA manifest, service worker, and offline content policy.
4. **Scale content:** structured curriculum schema, validation, and authoring workflow.
5. **Serve educators:** rosters, assignments, reporting, and bulk worksheet tools.
