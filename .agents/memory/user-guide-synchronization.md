---
name: User-guide synchronization
description: Production constraints that prevent narration, live visuals, captions, and chapter links from drifting apart.
---

Build each narrated sentence as its own chapter with one asserted live-app capture and one processed voice clip. Derive the chapter duration, caption cue, and landing-page seek time from measured media rather than handwritten timestamps.

**Why:** A previous guide reused stale screenshots and independent timing tables, so narration described controls that were not visible. A later rebuild also exposed how concatenating visuals and voice separately can silently recreate drift.

**How to apply:** Require every capture to assert the promised state before saving, mux voice per chapter before concatenation, generate one midpoint review frame per chapter, reject stale branding, and keep FFmpeg from consuming loop input with `-nostdin`.