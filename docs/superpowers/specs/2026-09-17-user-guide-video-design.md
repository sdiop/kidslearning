# User Guide Video and Landing-Page Welcome

## Goal

Create a kid-friendly user guide video that demonstrates the real app, covers every current user-facing feature, and is easy to find before a child starts using the app.

## Audience and tone

- Primary audience: children using the grade 5 and rising grade 7 learning experiences.
- Secondary audience: parents helping with setup, progress, worksheets, and answer keys.
- Narration: a friendly synthetic child-style British voice with a Cockney accent. It must not imitate or claim to be a real child.
- Pronunciation: say **Diop** as “Jowb” and **Yaba** as “yaaba” in narration; captions and on-screen product text retain “Diop Yaba”.
- Language: short sentences, concrete instructions, encouraging tone, and no unexplained technical terms.

## Video format

- 16:9 landscape.
- Standard 720p output.
- Self-hosted MP4 with a WebVTT caption track.
- Recordings of the real app are the main visual content.
- Short title cards, cursor emphasis, zooms, and callouts may be used to separate chapters and make controls easy to identify.
- The video must not depend on generated interface approximations when the real app can be shown.

## Required chapters

The video must cover all current user-facing functionality:

1. Welcome and choosing the grade 5/Seydina or rising grade 7/Cheikh profile.
2. Starting a subject quest and opening a quest card.
3. Reading the mission and task.
4. Using the browser narration controls and opening the transcript.
5. Opening an optional external lesson video or learning resource.
6. Completing multiple-choice, true/false, and matching quiz interactions.
7. Understanding quiz feedback and retrying.
8. Marking a quest complete and earning XP, streak progress, and awards.
9. Opening and reading the progress sheet.
10. Downloading a progress report and identifying reset progress as an adult-assisted action.
11. Starting and resetting the 20-minute focus timer.
12. Choosing a weekly homework week and subject filter.
13. Opening a daily assignment, using its learning link, completing its quick check, retrying when allowed, and marking the day complete.
14. Opening a worksheet and printing a student worksheet.
15. Identifying worksheet answer keys and answer-inclusive printing as parent-only actions.
16. Opening the parent progress dashboard.
17. Opening and understanding the leaderboard.
18. Explaining what remains available offline and that external learning links need internet access.
19. Installing the app through the browser's Add to Home Screen or Install action, while noting that the exact browser wording can vary.
20. Showing how to reopen the guide later.

The recording must describe the app as it actually behaves. It must not imply that authentication or enforced parent roles exist when the current app only distinguishes those areas through its interface.

## Landing-page experience

### First visit

- Show a welcome dialog before the child begins using the app.
- Provide two clear actions: **Watch the guide** and **Start exploring**.
- Do not autoplay audible media.
- **Watch the guide** reveals or focuses the video player and starts playback only after the user's explicit action.
- **Start exploring** closes the dialog without starting the video.

### Repeat visits

- Store dismissal on the current device so the welcome dialog does not interrupt every visit.
- Keep a permanent **How to use this app** control near the top of the landing page.
- That control must reopen the guide and remain available for either grade.

### Player

- Use native video controls.
- Provide captions through a WebVTT track and make captions easy to enable.
- Support full-screen playback where the browser provides it.
- Include a poster frame and a concise text fallback with chapter links or instructions if the video cannot load.
- Include chapter labels or a chapter list so users can revisit a feature without replaying the entire video.

## Accessibility and responsive behavior

- The welcome dialog must have an accessible name, keyboard-operable controls, initial focus, Escape-to-close behavior, and focus restoration.
- Video controls and fallback content must be usable with a keyboard.
- Captions must match the final narration.
- Callouts must not communicate meaning by color alone.
- Text and controls must meet readable contrast and touch-target requirements.
- The player and dialog must fit mobile, tablet, and desktop widths without horizontal scrolling.
- Respect reduced-motion preferences for custom transitions.

## Asset and delivery design

- Store the final video, captions, and poster in the served application assets.
- Keep the video filename stable so landing-page markup and offline behavior are predictable.
- Add the poster and captions to the application shell cache where appropriate.
- Do not force the full MP4 into the service-worker precache if doing so would make first installation slow or fragile; the video may be cached after successful playback instead.
- Provide a text fallback when video playback, media decoding, or offline access fails.

## Production approach

1. Prepare a feature-complete narration script and shot list from the current app.
2. Capture the real app at 16:9 in deterministic demo states that avoid exposing private data.
3. Create the synthetic child-style Cockney narration.
4. Edit screen captures, narration, captions, callouts, and chapter transitions into a 720p MP4.
5. Add the welcome dialog, permanent guide control, accessible player, chapters, fallback, and device-local dismissal.
6. Update offline handling for the new lightweight assets and safe runtime caching of the video.

## Error handling

- If the video cannot load, show a visible message and the chapter-based text guide.
- If captions cannot load, playback must still work and the text guide must remain available.
- If device storage is unavailable, the dialog may reappear on a future visit without blocking app use.
- If narration voice generation cannot produce an appropriate child-style Cockney result, use the closest safe youthful British voice and keep the approved script unchanged.
- External learning links must continue to be described as optional and internet-dependent.

## Verification

Automated checks must verify:

- The landing page references existing video, poster, and caption assets.
- The welcome dialog appears when no dismissal preference exists.
- Both dialog actions work.
- Dismissal is remembered when storage is available.
- The permanent guide control reopens the guide.
- Escape closes the dialog and focus returns appropriately.
- The caption file is valid and references the final script timing.
- The service worker does not make installation depend on downloading the full video.
- Existing app, syntax, curriculum, worksheet, and print tests continue to pass.

Manual verification must cover:

- Playback, seeking, captions, sound, and full screen in the running Replit preview.
- Mobile and desktop layout.
- Keyboard-only dialog and player access.
- Every required chapter against the current app.
- Narration clarity, age appropriateness, and consistency with on-screen actions.
- Offline fallback behavior after the app has loaded successfully once.

## Acceptance criteria

- A child opening the landing page for the first time is invited to watch the guide before using the app.
- The child can skip the guide and continue immediately.
- The guide can always be reopened.
- The final 720p video uses real app footage, understandable captions, and the approved child-style Cockney narration.
- Every current user-facing feature listed above is demonstrated or explicitly explained.
- Parent-oriented and answer-revealing actions are clearly labeled for adults.
- The app remains functional if the video is unavailable.
- Existing functionality and automated tests remain intact.