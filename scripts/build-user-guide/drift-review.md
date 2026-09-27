# Guide drift review

| Chapter | Narrated state | Recorded route/control | Drift result |
|---|---|---|---|
| 01 | Grade 5 and grade 7 profile choice | `/index.html`: `#grade5Btn`, `#grade7Btn` | PASS — current Diop Yaba Academy Grade 5 and Grade 7 heroes recorded |
| 02–03 | Quest card, mission, and task | `/index.html`: quest summary/body | PASS — exact quest, mission, and artifact controls visible |
| 04 | Browser narration and transcript | `/index.html`: narration controls/transcript | PASS — Play Narration and expanded transcript visible |
| 05 | Optional Watch/Learn resource | `/index.html`: quest `a.link` | PASS — real optional link visible; no external page claim |
| 06–07 | Supported quiz types, feedback, retry | `/index.html`: `.interactiveQuiz` | PASS — choices, matching, feedback, and retry state recorded |
| 08–11 | Completion, progress, report/reset, focus | `/index.html`: named controls | PASS — live completion, progress sheet, report/reset, and timer states recorded |
| 12–13 | 36 weeks, filter, daily quick check | `/index.html`: `#weekSelect`, weekly cards | PASS — Week 36, Math filter, choices, and feedback recorded |
| 14–15 | Student worksheet, parent PIN, answer key | `/worksheet.html?grade=7&week=36` | PASS — student sheet and parent-protected answer state visible |
| 16 | Parent dashboard | `/parent.html`: `#dash` | PASS — both seeded profiles and metrics visible |
| 17 | Leaderboard | `/leaderboard.html`: `#lb` | PASS — overall and weekly standings visible |
| 18 | Offline boundary | `/index.html`, offline context | PASS — offline status and loaded quest visible; outside links excluded |
| 19 | Install | `/index.html`, `/manifest.json` | PASS — current Diop Yaba Academy manifest identity recorded |
| 20 | Reopen and chapter seek | `/index.html`: `.guideTrigger`, chapter buttons | PASS — current guide dialog and replacement poster recorded |

The previous `assets/shots/*.jpg` files are intentionally not referenced. The
20 live captures, midpoint contact sheet, synchronized 145.98-second build,
H.264/AAC streams, and full decode were reviewed on September 17, 2026.