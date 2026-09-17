# Diop Yaba Academy user-guide production script

This is the current-head shot list. Every row is a narration cue, its exact
time range, and the real control/state that `scripts/build-user-guide/capture.js`
must record. Capture clips are generated in `scripts/build-user-guide/captures/`
and are never sourced from the retired `assets/shots/` directory.

| # | Time | Narration (caption text) | Route | Exact target/state | Capture source |
|---|---|---|---|---|---|
| 01 | 00:00:00.000–00:00:07.500 | Hi! Welcome to Jowb yaaba Academy. Choose Seydina for fifth grade, or Cheikh for rising seventh grade. | `/index.html` | `#grade5Btn`, then `#grade7Btn`; visible hero/profile change | `captures/01-welcome.webm` |
| 02 | 00:00:08.000–00:00:13.236 | Pick a subject quest and open its card to see the mission, time, and task. | `/index.html` | `ELA Skills Lab`, `Figurative Language Anime Detective` expanded | `captures/02-quest.webm` |
| 03 | 00:00:13.736–00:00:19.437 | Read the mission first, then read the task, so you know what finished work looks like. | `/index.html` | `.questBody` mission and `.task` visible | `captures/03-mission.webm` |
| 04 | 00:00:19.936–00:00:27.157 | Press the browser narration play button, pause or stop it, and open the transcript when you want the words on screen. | `/index.html` | narration controls and transcript expanded | `captures/04-narration.webm` |
| 05 | 00:00:27.657–00:00:32.789 | Use Watch or Learn for an optional outside lesson; the link needs internet. | `/index.html` | `a.link` Watch / Learn visible before opening | `captures/05-learning-link.webm` |
| 06 | 00:00:33.289–00:00:40.220 | Try the real multiple-choice and true-or-false questions, and match terms when that activity appears. | `/index.html` | `.interactiveQuiz`, choice selected, true/false and matching controls | `captures/06-quiz.webm` |
| 07 | 00:00:40.720–00:00:45.538 | Check your answers for feedback; retry when the app offers another attempt. | `/index.html` | `.feedback` outcome and `Retry` button | `captures/07-feedback.webm` |
| 08 | 00:00:46.038–00:00:51.646 | Mark the quest done when your work and quiz are ready to earn XP and grow your streak. | `/index.html` | `Mark Quest Done`, dashboard XP/streak updated | `captures/08-rewards.webm` |
| 09 | 00:00:52.146–00:00:58.636 | Open the progress sheet to see completion bars, scores, XP, streaks, and awards. | `/index.html` | `.progressMenuButton`, `#progressTracker` visible | `captures/09-progress.webm` |
| 10 | 00:00:59.136–00:01:06.334 | Download a progress report, and ask an adult before using Reset Progress because it clears results. | `/index.html` | `Download Progress Report`, `Reset Progress`, adult warning visible | `captures/10-report-reset.webm` |
| 11 | 00:01:06.834–00:01:12.674 | Focus Mode is a twenty-minute sprint; press Start, then Reset when you need a fresh timer. | `/index.html` | `#focus`, `Start`, `Reset`, `#timer` outcome | `captures/11-focus.webm` |
| 12 | 00:01:13.174–00:01:19.083 | Weekly Homework has all 36 school-year weeks; choose a week and filter by subject. | `/index.html` | `#weekSelect` shows Week 36; `#weeklySubjectTabs` subject selected | `captures/12-week-subject.webm` |
| 13 | 00:01:19.583–00:01:27.269 | Open a day, use its learning link if you like, complete its quick check, retry when allowed, and mark the day done. | `/index.html` | `.weeklyCard` open, `.choice` selected, feedback/retry | `captures/13-daily-check.webm` |
| 14 | 00:01:27.769–00:01:34.596 | Print This Week’s Worksheet opens a student sheet for pencil-and-paper work or saving as a PDF. | `/worksheet.html?grade=7&week=36` | student worksheet; `Print worksheet only` | `captures/14-worksheet.webm` |
| 15 | 00:01:35.096–00:01:42.480 | Answer keys and answer-inclusive printing are for parents and educators, protected by the parent PIN check. | `/worksheet.html?grade=7&week=36` | `Turn on parent check`, PIN prompt, answer key/print controls | `captures/15-answer-parent-check.webm` |
| 16 | 00:01:42.980–00:01:51.920 | Parent Dashboard lets adults see both profiles, XP, quests, streaks, quiz averages, awards, and weekly activity. | `/parent.html` | `#dash` with both kid cards | `captures/16-dashboard.webm` |
| 17 | 00:01:52.420–00:02:01.824 | Leaderboard shows overall standings, this week’s XP, weekly days, and quiz averages; it is a progress view, not a judgement. | `/leaderboard.html` | `#lb`, Overall Standings and weekly cards | `captures/17-leaderboard.webm` |
| 18 | 00:02:02.324–00:02:11.937 | After pages load, saved lessons, quizzes, progress, worksheets, and the timer remain useful offline; outside links need internet. | `/index.html` | cached app state, offline status; no claim that external link works | `captures/18-offline.webm` |
| 19 | 00:02:12.437–00:02:19.345 | To install, use your browser menu and choose Add to Home Screen or Install; the words vary by browser. | `/index.html`, then `/manifest.json` | real manifest identity (`Diop Yaba Academy`) visible; browser menu described, not fabricated | `captures/19-install.webm` |
| 20 | 00:02:19.845–00:02:25.209 | Reopen the guide with How to use this app, then choose a chapter and keep exploring. | `/index.html` | `.guideTrigger`, guide dialog, chapter seek | `captures/20-reopen.webm` |

The narration is generated with Piper `en_GB-alan-medium.onnx`, then pitched
to 1.17 with FFmpeg rubberband (formants preserved), compression, EQ, and
loudness normalization. “Diop” is spoken as “Jowb” and “Yaba” as “yaaba”.
The voice is synthetic and does not imitate a real child. Captions are the
same twenty cue texts and timings in `scripts/build-user-guide/user-guide.vtt`.