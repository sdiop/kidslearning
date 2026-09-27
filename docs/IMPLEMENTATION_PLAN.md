# Diop Yaba Academy — Detailed Implementation Plan

---

**Version:** 1.0  
**Last updated:** 2026-09-15  
**Status:** Ready for execution  
**Related documents:** [Consolidated PRD](PRD.md), [Design document](DESIGN.md)

> This plan predates the consolidated PRD's 2026-09-26 app review. Its phase
> statuses may be stale; use the consolidated PRD for current shipped/planned
> status and re-scope this plan before implementing accounts, grades 6/8 or
> flash cards.

---

## 1. Plan Conventions

### Status

- `[x]` Shipped and verified in the current MVP
- `[ ]` Planned or not yet verified to production quality

### Effort

- **XS:** less than one day
- **S:** one to three days
- **M:** one to two weeks
- **L:** two to four weeks
- **XL:** more than one month

### Priority

- **P0:** required before onboarding external families
- **P1:** required for a reliable, polished family product
- **P2:** expansion capability

## 2. Dependency Map

```text
Foundation
  ├── Student experience
  │     ├── Quizzes and mastery
  │     └── Weekly curriculum
  ├── Persistence and reporting
  │     ├── Parent dashboard
  │     └── Leaderboard
  └── Deployment

Authentication and family ownership
  ├── Privacy controls
  ├── Multi-student onboarding
  └── Educator accounts

Structured curriculum schema
  ├── Content validation
  ├── More grades and weeks
  └── Adaptive item banks
```

## 3. Shipped Baseline

### Phase A — Application foundation

- [x] **A1. Configure the Node/Express application**  
  **Priority:** P1 · **Effort:** S  
  Serve `Cheikh7/` and expose JSON APIs from `server.js`.

- [x] **A2. Configure the Replit workflow and deployment command**  
  **Priority:** P1 · **Effort:** XS · **Depends on:** A1  
  Run `node server.js`, bind to `0.0.0.0`, and respond from `/`.

- [x] **A3. Preserve a build-step-free frontend**  
  **Priority:** P2 · **Effort:** XS  
  Keep the frontend in vanilla HTML, CSS, and JavaScript.

### Phase B — Grade-specific student experience

- [x] **B1. Add separate 5th- and 7th-grade experiences**  
  **Priority:** P1 · **Effort:** M · **Depends on:** A1  
  Load grade-specific content and independent state.

- [x] **B2. Add desktop and mobile grade controls**  
  **Priority:** P1 · **Effort:** S · **Depends on:** B1  
  Retain desktop buttons and use a compact mobile dropdown.

- [x] **B3. Add subject navigation**  
  **Priority:** P1 · **Effort:** S · **Depends on:** B1  
  Filter long course content through subject tabs.

- [x] **B4. Reorganize quests into accordions**  
  **Priority:** P1 · **Effort:** S · **Depends on:** B3  
  Show titles and status first; reveal mission, narration, resources, and quiz on demand.

- [x] **B5. Optimize mobile width and touch targets**  
  **Priority:** P1 · **Effort:** S · **Depends on:** B4  
  Reduce side gutters and make actions at least 44px high.

### Phase C — Engagement and accessibility

- [x] **C1. Add XP, badges, streaks, and completion feedback**  
  **Priority:** P1 · **Effort:** M · **Depends on:** B1

- [x] **C2. Add the 20-minute focus timer**  
  **Priority:** P1 · **Effort:** S

- [x] **C3. Add British English narration**  
  **Priority:** P1 · **Effort:** S  
  Prefer Google UK voices, Daniel/Arthur, then any `en-GB` voice.

- [x] **C4. Add narration transcripts**  
  **Priority:** P1 · **Effort:** S · **Depends on:** C3

### Phase D — Quiz integrity and mastery

- [x] **D1. Lock answers after each submission**  
  **Priority:** P0 · **Effort:** S

- [x] **D2. Persist no more than three attempts per quiz**  
  **Priority:** P0 · **Effort:** M · **Depends on:** D1

- [x] **D3. Calculate a final composite score**  
  **Priority:** P0 · **Effort:** S · **Depends on:** D2

- [x] **D4. Prevent repeat XP awards**  
  **Priority:** P0 · **Effort:** S · **Depends on:** D3

- [x] **D5. Require a 90% weekly composite before completion**  
  **Priority:** P0 · **Effort:** S · **Depends on:** D3

### Phase E — Weekly curriculum and worksheets

- [x] **E1. Author 36 school-year weeks for grade 5**
  **Priority:** P1 · **Effort:** L

- [x] **E2. Author 36 school-year weeks for grade 7**
  **Priority:** P1 · **Effort:** L

- [x] **E3. Add week dropdown and subject/day tabs**  
  **Priority:** P1 · **Effort:** S · **Depends on:** E1, E2

- [x] **E4. Add weekly quick-checks and completion state**  
  **Priority:** P0 · **Effort:** M · **Depends on:** D1–D5, E3

- [x] **E5. Add printable worksheets and answer keys**  
  **Priority:** P1 · **Effort:** M · **Depends on:** E1, E2

### Phase F — Persistence and reporting

- [x] **F1. Create profile and progress tables**  
  **Priority:** P0 · **Effort:** M

- [x] **F2. Add normalized state APIs**  
  **Priority:** P0 · **Effort:** M · **Depends on:** F1

- [x] **F3. Add merge-on-write conflict handling**  
  **Priority:** P0 · **Effort:** M · **Depends on:** F2

- [x] **F4. Add local storage fallback and stale-response guards**  
  **Priority:** P0 · **Effort:** M · **Depends on:** F2

- [x] **F5. Add append-only progress events**  
  **Priority:** P1 · **Effort:** S · **Depends on:** F1

- [x] **F6. Add the progress report sheet**  
  **Priority:** P1 · **Effort:** S · **Depends on:** F2

- [x] **F7. Add the parent dashboard**  
  **Priority:** P1 · **Effort:** M · **Depends on:** F2, F5

- [x] **F8. Add the weekly and overall leaderboard**  
  **Priority:** P1 · **Effort:** M · **Depends on:** F2, F5

### Phase G — Supporting deliverables

- [x] **G1. Add parent coaching guidance and source maps**  
  **Priority:** P2 · **Effort:** S

- [x] **G2. Make guidance sections collapsible**  
  **Priority:** P1 · **Effort:** XS · **Depends on:** G1

- [x] **G3. Add parent/educator presentation**  
  **Priority:** P2 · **Effort:** M

- [x] **G4. Create PRD, design, review, and implementation documentation**  
  **Priority:** P1 · **Effort:** M

- [x] **G5. Rename the product to Diop Yaba Academy**  
  **Priority:** P1 · **Effort:** XS

## 4. Production Readiness Tasks

### Phase H — Automated quality gates

- [ ] **H1. Add unit tests for quiz scoring and attempt limits**  
  **Priority:** P0 · **Effort:** M  
  **Depends on:** D1–D5  
  **Files:** new test files plus exported pure scoring helpers.

  **Acceptance criteria**

  ```text
  Given attempts of 75, 100, and 100
  When the composite is calculated
  Then the result is 92
  And weekly completion is eligible
  ```

  ```text
  Given three recorded attempts
  When the student requests another retry
  Then no fourth attempt is created
  ```

- [ ] **H2. Add API tests for normalization and merging**  
  **Priority:** P0 · **Effort:** M  
  **Depends on:** F2, F3

  Test numeric clamping, key bounds, boolean maps, equal-length attempt conflicts, explicit reset, and invalid profile IDs.

- [ ] **H3. Add browser tests for critical student flows**  
  **Priority:** P0 · **Effort:** M  
  **Depends on:** H1, H2

  Cover grade switching, accordions, quiz locking, retry, 90% gate, progress sheet, subject filters, and worksheet navigation at desktop and 390px width.

- [ ] **H4. Add curriculum data validation**  
  **Priority:** P0 · **Effort:** S  
  **Depends on:** E1, E2

  Validate required weeks, subjects, fields, answer membership, and HTTPS resources.

- [ ] **H5. Register validations as repeatable project checks**  
  **Priority:** P1 · **Effort:** S  
  **Depends on:** H1–H4

### Phase I — Event reliability and observability

- [ ] **I1. Add durable client event delivery**  
  **Priority:** P1 · **Effort:** M  
  Store failed events locally and retry with backoff.

- [ ] **I2. Make progress events idempotent**  
  **Priority:** P1 · **Effort:** M · **Depends on:** I1  
  Add event IDs and reject duplicates server-side.

- [ ] **I3. Add structured server logs**  
  **Priority:** P1 · **Effort:** S  
  Include request route, status, profile-safe identifier, and failure category without logging child data.

- [ ] **I4. Add health and readiness endpoints**  
  **Priority:** P1 · **Effort:** S  
  Separate process health from database readiness.

- [ ] **I5. Add production monitoring and backup verification**  
  **Priority:** P1 · **Effort:** M · **Depends on:** I3, I4

## 5. External-Family Release Tasks

### Phase J — Authentication and family ownership

- [ ] **J1. Select and integrate an authentication provider**  
  **Priority:** P0 · **Effort:** L

- [ ] **J2. Create family accounts and student ownership**  
  **Priority:** P0 · **Effort:** L · **Depends on:** J1

- [ ] **J3. Migrate current family profiles**  
  **Priority:** P0 · **Effort:** M · **Depends on:** J2  
  Preserve existing progress for Cheikh and Seydina.

- [ ] **J4. Require authorization on every profile route**  
  **Priority:** P0 · **Effort:** L · **Depends on:** J2

  **Acceptance criteria**

  ```text
  Given a signed-in parent from Family A
  When they request a student owned by Family B
  Then the server returns 404 or 403
  And no student data is disclosed
  ```

- [ ] **J5. Add parent-managed student creation**  
  **Priority:** P0 · **Effort:** M · **Depends on:** J2, J4

- [ ] **J6. Add account data export and deletion**  
  **Priority:** P0 · **Effort:** M · **Depends on:** J2

### Phase K — Child privacy and trust

- [ ] **K1. Draft and publish the privacy policy**  
  **Priority:** P0 · **Effort:** M

- [ ] **K2. Add verifiable parental consent**  
  **Priority:** P0 · **Effort:** L · **Depends on:** J1, J2

- [ ] **K3. Define data retention and deletion schedules**  
  **Priority:** P0 · **Effort:** M · **Depends on:** J6

- [ ] **K4. Review all third-party resources**  
  **Priority:** P0 · **Effort:** M  
  Document destination, tracking behavior, age suitability, and fallback.

- [ ] **K5. Add rate limiting and abuse protection**  
  **Priority:** P0 · **Effort:** M · **Depends on:** J4

## 6. Distribution and Scale Tasks

### Phase L — Installable mobile experience

- [ ] **L1. Add web-app manifest and icons**  
  **Priority:** P1 · **Effort:** S

- [ ] **L2. Add a service worker and cache policy**  
  **Priority:** P1 · **Effort:** M · **Depends on:** L1

- [ ] **L3. Define offline-supported routes and resources**  
  **Priority:** P1 · **Effort:** M · **Depends on:** L2

- [ ] **L4. Add update and stale-content handling**  
  **Priority:** P1 · **Effort:** M · **Depends on:** L2

- [ ] **L5. Validate installation on iOS and Android**  
  **Priority:** P1 · **Effort:** S · **Depends on:** L1–L4

### Phase M — Curriculum authoring and expansion

- [ ] **M1. Define a versioned curriculum schema**  
  **Priority:** P1 · **Effort:** M

- [ ] **M2. Build a curriculum validator**  
  **Priority:** P1 · **Effort:** M · **Depends on:** M1

- [ ] **M3. Add question-item variants**  
  **Priority:** P1 · **Effort:** L · **Depends on:** M1, M2

- [ ] **M4. Extend grades 5 and 7 to a full school year**  
  **Priority:** P2 · **Effort:** XL · **Depends on:** M1, M2

- [ ] **M5. Add additional grade levels**  
  **Priority:** P2 · **Effort:** XL · **Depends on:** M1, M2

- [ ] **M6. Add curriculum editorial review workflow**  
  **Priority:** P1 · **Effort:** L · **Depends on:** M1

### Phase N — Educator product

- [ ] **N1. Add educator accounts and roles**  
  **Priority:** P2 · **Effort:** L · **Depends on:** J1–J4

- [ ] **N2. Add classrooms and rosters**  
  **Priority:** P2 · **Effort:** XL · **Depends on:** N1

- [ ] **N3. Add curriculum assignment workflows**  
  **Priority:** P2 · **Effort:** L · **Depends on:** N2, M1

- [ ] **N4. Add roster reporting and intervention flags**  
  **Priority:** P2 · **Effort:** L · **Depends on:** N2, N3

- [ ] **N5. Add bulk worksheet printing**  
  **Priority:** P2 · **Effort:** M · **Depends on:** N2, E5

## 7. Release Checklist

### Code and data

- [ ] JavaScript syntax checks pass.
- [ ] Automated scoring and API tests pass.
- [ ] Curriculum validation passes.
- [ ] No secrets or credentials are committed.
- [ ] Database migrations are reviewed and reversible.

### Student experience

- [ ] Grade state remains independent.
- [ ] Mobile dropdown and desktop buttons work.
- [ ] Accordions work by mouse, touch, and keyboard.
- [ ] Quiz answers lock after submission.
- [ ] Maximum attempts cannot be bypassed through the UI.
- [ ] Composite score is correct.
- [ ] Weekly completion is blocked below 90%.
- [ ] XP is awarded once.
- [ ] Progress sheet opens and closes correctly.

### Parent experience

- [ ] Dashboard data matches student state.
- [ ] Leaderboard ordering and weekly XP are correct.
- [ ] Worksheets print without navigation controls.
- [ ] Answer keys begin on a separate page.

### Responsive and accessibility

- [ ] No horizontal overflow at 390px.
- [ ] Controls meet 44px touch-target guidance.
- [ ] Focus states are visible.
- [ ] All meaningful images have alt text.
- [ ] Narration transcripts remain available.
- [ ] The app is usable at 200% zoom.

### Production

- [ ] Deployment runs `node server.js`.
- [ ] Root health check returns HTTP 200.
- [ ] Production database is available.
- [ ] Required production secrets are configured.
- [ ] Published routes return HTTP 200.
- [ ] Logs contain no startup exceptions.

## 8. Recommended Execution Order

### Now

1. H1–H5: automated quality gates.
2. I1–I5: reliable events and production observability.
3. J1–J6 and K1–K5: authentication, authorization, and privacy.

### Next

4. L1–L5: installable mobile/PWA experience.
5. M1–M3 and M6: structured curriculum and editorial workflow.

### Later

6. M4–M5: full-year and additional-grade content.
7. N1–N5: educator product.

## 9. Definition of Done

A task is done when:

- The requirement is implemented.
- Acceptance criteria are demonstrated.
- Relevant validation is automated where practical.
- Mobile and desktop behavior are checked.
- Error and empty states are handled.
- Documentation reflects the final behavior.
- The app starts cleanly and critical routes respond successfully.
