/* Capture the guide from the running app.  This is deliberately interaction
 * driven: the resulting clips are evidence of the controls, rather than
 * screenshots of a hand-built interface.
 *
 * Run with: node scripts/build-user-guide/capture.js
 * The app must already be serving on http://127.0.0.1:5000.
 */
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const OUT = path.resolve(__dirname, 'captures');
fs.mkdirSync(OUT, { recursive: true });
const url = process.env.GUIDE_URL || 'http://127.0.0.1:5000';

async function contextFor(browser, route) {
  const context = await browser.newContext({
    viewport: { width: 1280, height: 720 },
    recordVideo: { dir: OUT, size: { width: 1280, height: 720 } },
  });
  const page = await context.newPage();
  await context.route('**/api/**', async route => {
    const u = new URL(route.request().url());
    let body = {};
    if (u.pathname === '/api/dashboard') body = [
      { grade: '7', name: 'Cheikh', xp: 225, questsDone: 2, streak: 3, quizAvg: 90, quizCount: 2, awards: [{ emoji: '⭐', label: 'First Quest' }], weekly: [{ week: 'This week', events: 4, xp: 75 }], lastActive: '2026-09-17T10:00:00Z' },
      { grade: '5', name: 'Seydina', xp: 140, questsDone: 1, streak: 2, quizAvg: 100, quizCount: 1, awards: [{ emoji: '🏅', label: 'Quiz Star' }], weekly: [{ week: 'This week', events: 2, xp: 40 }], lastActive: '2026-09-17T09:00:00Z' }
    ];
    else if (u.pathname === '/api/leaderboard') body = [
      { grade: '7', name: 'Cheikh', xp: 225, questsDone: 2, streak: 3, quizAvg: 90, quizCount: 2, weeklyDaysDone: 3, weekXp: 75 },
      { grade: '5', name: 'Seydina', xp: 140, questsDone: 1, streak: 2, quizAvg: 100, quizCount: 1, weeklyDaysDone: 2, weekXp: 40 }
    ];
    else if (/\/api\/state\//.test(u.pathname) && route.request().method() === 'GET') body = { state: { xp: 225, done: { 'math-0': true }, streak: 3, quizScores: { 'math-0': 80 }, quizAttempts: {}, quizBonuses: {}, weeklyDone: {} } };
    else if (/\/api\/state\//.test(u.pathname)) body = { ok: true };
    else if (/\/api\/event\//.test(u.pathname)) body = { ok: true };
    await route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify(body) });
  });
  await page.addInitScript(() => {
    localStorage.setItem('questAcademyGrade', '7');
    localStorage.setItem('questAcademyState', JSON.stringify({
      xp: 225, done: { 'math-0': true }, last: '',
      streak: 3, quizScores: { 'ela-0': 100, 'math-0': 80 },
      quizBonuses: {}, quizAttempts: {}, weeklyDone: {}
    }));
    localStorage.setItem('diopYabaUserGuideDismissed', 'true');
  });
  await page.goto(`${url}/${route}`, { waitUntil: 'networkidle' });
  return { context, page };
}
async function clickText(page, text) {
  const candidate = page.getByText(text, { exact: false }).first();
  if (!(await candidate.count())) throw new Error(`Missing control: ${text}`);
  await candidate.scrollIntoViewIfNeeded(); await candidate.click();
}
async function must(page, selector, label = selector) {
  const el = typeof selector === 'string' ? page.locator(selector).first() : selector.first();
  await el.waitFor({ state: 'visible', timeout: 5000 });
  return el;
}
async function settle(page, ms = 900) { await page.waitForTimeout(ms); }
async function openQuest(page) {
  const quest = page.locator('details.quest').filter({ hasText: 'Figurative Language Anime Detective' }).first();
  await must(page, quest);
  await quest.locator(':scope > summary').click();
  await must(page, quest.locator(':scope > .questBody'));
  return quest;
}

const scenes = [
  ['01-welcome', 'index.html', async p => { await p.locator('#grade5Btn').click(); await settle(p); await must(p, '#hero5:not(.hidden)'); await p.locator('#grade7Btn').click(); await must(p, '#hero7:not(.hidden)'); }],
  ['02-quest', 'index.html', async p => { await openQuest(p); }],
  ['03-mission', 'index.html', async p => { const quest = await openQuest(p); await quest.getByText('Mission artifact').click(); await must(p, quest.locator('.mission')); await must(p, quest.locator('.task')); }],
  ['04-narration', 'index.html', async p => { const quest = await openQuest(p); await quest.getByText('Play Narration').click(); await quest.getByText('Narration transcript').click(); await must(p, quest.locator('.transcript[open]')); }],
  ['05-learning-link', 'index.html', async p => { const quest = await openQuest(p); await must(p, quest.locator('a.link')); }],
  ['06-quiz', 'index.html', async p => {
    const quest = await openQuest(p);
    await quest.locator('details.quizReveal > summary').click();
    const quiz = quest.locator('.interactiveQuiz');
    await must(p, quiz);
    for (const item of await quiz.locator('.quizItem').all()) {
      const choice = item.locator('button.choice').first();
      if (await choice.count()) await choice.click();
    }
    const matches = quiz.locator('.matchGrid select');
    if (await matches.count()) {
      await matches.evaluateAll((xs) => xs.forEach(x => {
        x.selectedIndex = 1;
        x.dispatchEvent(new Event('change', { bubbles: true }));
      }));
    }
  }],
  ['07-feedback', 'index.html', async p => {
    const quest = await openQuest(p);
    await quest.locator('details.quizReveal > summary').click();
    const quiz = quest.locator('.interactiveQuiz');
    for (const item of await quiz.locator('.quizItem').all()) {
      const choice = item.locator('button.choice').first();
      if (await choice.count()) await choice.click();
    }
    const matches = quiz.locator('.matchGrid select');
    if (await matches.count()) {
      await matches.evaluateAll((xs) => xs.forEach(x => {
        x.selectedIndex = 1;
        x.dispatchEvent(new Event('change', { bubbles: true }));
      }));
    }
    await quiz.getByText('Grade Quiz').click();
    await must(p, quiz.locator('.feedback'));
    await must(p, quiz.locator('.retryQuizBtn'));
  }],
  ['08-rewards', 'index.html', async p => { const quest = await openQuest(p); await quest.getByText('Mark Done').click(); await must(p, '#xp'); await p.waitForFunction(() => Number(document.querySelector('#xp').textContent) > 225); }],
  ['09-progress', 'index.html', async p => { await p.locator('.progressMenuButton').click(); await must(p, '#progressTracker:not(.hidden)'); }],
  ['10-report-reset', 'index.html', async p => { await p.locator('.progressMenuButton').click(); await must(p, p.getByText('Download Progress Report')); await must(p, p.getByText('Reset Progress')); }],
  ['11-focus', 'index.html', async p => { const focus = p.locator('#focus'); await focus.scrollIntoViewIfNeeded(); await focus.getByRole('button', { name: 'Start' }).click(); await must(p, '#timer'); await settle(p, 1200); await focus.getByRole('button', { name: 'Reset' }).click(); await p.getByText('20:00', { exact: true }).waitFor(); }],
  ['12-week-subject', 'index.html', async p => { await p.locator('#weekSelect').selectOption('36'); await must(p, '#weekSelect'); await p.locator('#weeklySubjectTabs .subjectTab').filter({ hasText: 'Math' }).click(); await must(p, '#weeklySubjectTabs .subjectTab.active'); }],
  ['13-daily-check', 'index.html', async p => { const card = p.locator('.weeklyCard').first(); await card.locator('summary').click(); await card.locator('.choiceGroup').evaluateAll(gs => gs.forEach(g => g.querySelector('.choice').click())); await card.getByText('Check Answers').click(); await must(p, '.weeklyCard .feedback'); }],
  ['14-worksheet', 'index.html', async p => { const link = await must(p, '.printWeekBtn'); await link.evaluate(el => el.removeAttribute('target')); await link.click(); await p.waitForURL(/worksheet\.html/); await must(p, '#sheet'); await p.getByText('Diop Yaba Academy — Weekly Worksheet').waitFor(); }],
  ['15-answer-parent-check', 'worksheet.html?grade=7&week=36', async p => { await p.evaluate(() => { window.prompt = () => '2468'; }); await clickText(p, 'Turn on parent check'); await must(p, '.parentCheckToggle[aria-pressed="true"]'); await clickText(p, 'Show answer key'); await must(p, 'body.answer-key-visible'); }],
  ['16-dashboard', 'parent.html', async p => { await settle(p, 1400); await must(p, '#dash .kidCard'); }],
  ['17-leaderboard', 'leaderboard.html', async p => { await settle(p, 1400); await must(p, '#lb .lbCard'); }],
  ['18-offline', 'index.html', async p => { await p.context().setOffline(true); await p.evaluate(() => setSyncStatus(false)); await must(p, '#syncStatus.off'); await openQuest(p); }],
  ['19-install', 'index.html', async p => { if (await p.locator('link[rel="manifest"]').count() !== 1) throw new Error('Missing manifest link'); await p.goto(`${url}/manifest.json`, { waitUntil: 'networkidle' }); await must(p, 'body'); await p.getByText('Diop Yaba Academy', { exact: false }).waitFor(); }],
  ['20-reopen', 'index.html', async p => { await p.locator('.guideTrigger').click(); await must(p, '#userGuideDialog[open]'); await clickText(p, 'Choose your grade'); }],
];

(async () => {
  const browser = await chromium.launch({
    executablePath: process.env.CHROMIUM_PATH || '/repl/tools/bin/chromium',
  });
  for (const [name, route, action] of scenes) {
    const output = path.join(OUT, `${name}.webm`);
    if (fs.existsSync(output) && fs.statSync(output).size > 0) continue;
    const { context, page } = await contextFor(browser, route);
    try { await action(page); await settle(page, 2600); }
    finally {
      const video = page.video();
      await context.close();
      if (video) await video.saveAs(output);
    }
  }
  await browser.close();
})();