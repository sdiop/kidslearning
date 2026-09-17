const { test, expect } = require('@playwright/test');

async function stubApi(page) {
  await page.route('**/api/**', async route => {
    const url = route.request().url();
    if (url.includes('/api/state/')) {
      const body = route.request().method() === 'GET'
        ? { profileId: 'test', state: { xp: 0, done: {}, last: '', streak: 0, quizScores: {}, quizBonuses: {}, weeklyDone: {}, quizAttempts: {} } }
        : { ok: true };
      return route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify(body) });
    }
    return route.fulfill({ status: 200, contentType: 'application/json', body: '{}' });
  });
}

async function downloadProgressReport(page) {
  await page.getByRole('button', { name: 'Open progress report' }).click();
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Download Progress Report' }).click();
  const download = await downloadPromise;
  const stream = await download.createReadStream();
  const chunks = [];
  for await (const chunk of stream) chunks.push(chunk);
  return {
    filename: download.suggestedFilename(),
    text: Buffer.concat(chunks).toString('utf8')
  };
}

test.beforeEach(async ({ page }) => {
  await stubApi(page);
  await page.goto('/');
  await page.getByRole('button', { name: 'Start exploring' }).click();
});

test('grade switching, accordions, and progress sheet work', async ({ page }, testInfo) => {
  if (testInfo.project.name === 'mobile') {
    await page.getByLabel('Choose grade').selectOption('5');
  } else {
    await page.getByRole('button', { name: '5th Grade — Seydina' }).click();
  }
  await expect(page.locator('#hero5')).toBeVisible();
  await expect(page.locator('#hero7')).toBeHidden();

  const quest = page.locator('#course details.quest').filter({ visible: true }).first();
  await quest.locator(':scope > summary').click();
  await expect(quest).toHaveAttribute('open', '');

  await page.getByRole('button', { name: 'Open progress report' }).click();
  await expect(page.locator('#progressTracker')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Progress Report' })).toBeVisible();
  await page.getByRole('button', { name: 'Close progress report' }).click();
  await expect(page.locator('#progressTracker')).toBeHidden();
});

test('downloaded progress reports keep each grade results isolated', async ({ page }, testInfo) => {
  await page.evaluate(() => {
    localStorage.setItem('questAcademyState', JSON.stringify({
      xp: 75,
      done: { 'ela-0': true, 'math-1': true },
      last: '',
      streak: 3,
      quizScores: { 'ela-0': 92, 'math-1': 88 },
      quizBonuses: {},
      quizAttempts: {}
    }));
    localStorage.setItem('grade5QuestState', JSON.stringify({
      xp: 40,
      done: { 'math-0': true },
      last: '',
      streak: 1,
      quizScores: { 'math-0': 100 },
      quizBonuses: {},
      quizAttempts: {}
    }));
  });
  await page.reload();

  const grade7Total = await page.evaluate(() =>
    COURSE_DATA.reduce((total, module) => total + module.quests.length, 0)
  );
  const grade7 = await downloadProgressReport(page);
  expect(grade7.filename).toBe('grade7_quest_progress_report.txt');
  expect(grade7.text).toContain('Rising 7th Grade Diop Yaba Academy - Progress Report');
  expect(grade7.text).toContain('XP: 75');
  expect(grade7.text).toContain(`Quests Done: 2/${grade7Total}`);
  expect(grade7.text).toContain('[DONE] Figurative Language Anime Detective | Quiz: 92%');
  expect(grade7.text).toContain('[DONE] Ratio Ramen Shop | Quiz: 88%');
  expect(grade7.text).not.toContain('XP: 40');

  await page.getByRole('button', { name: 'Close progress report' }).click();
  if (testInfo.project.name === 'mobile') {
    await page.getByLabel('Choose grade').selectOption('5');
  } else {
    await page.getByRole('button', { name: '5th Grade — Seydina' }).click();
  }
  const grade5Total = await page.evaluate(() =>
    GRADE5_DATA.reduce((total, module) => total + module.quests.length, 0)
  );
  const grade5 = await downloadProgressReport(page);
  expect(grade5.filename).toBe('grade5_quest_progress_report.txt');
  expect(grade5.text).toContain('5th Grade Diop Yaba Academy - Progress Report');
  expect(grade5.text).toContain('XP: 40');
  expect(grade5.text).toContain(`Quests Done: 1/${grade5Total}`);
  expect(grade5.text).toContain('[DONE] Decimal Place Value Portal | Quiz: 100%');
  expect(grade5.text).toContain('[ ] Fraction Forge');
  expect(grade5.text).not.toContain('XP: 75');
  expect(grade5.text).not.toContain('Figurative Language Anime Detective');

  await page.getByRole('button', { name: 'Close progress report' }).click();
  if (testInfo.project.name === 'mobile') {
    await page.getByLabel('Choose grade').selectOption('7');
  } else {
    await page.getByRole('button', { name: '7th Grade — Cheikh' }).click();
  }
  const grade7Again = await downloadProgressReport(page);
  expect(grade7Again.filename).toBe('grade7_quest_progress_report.txt');
  expect(grade7Again.text).toContain('XP: 75');
  expect(grade7Again.text).toContain('[DONE] Figurative Language Anime Detective | Quiz: 92%');
  expect(grade7Again.text).not.toContain('Decimal Place Value Portal');
});

test('weekly quiz locks, retries, limits attempts, and blocks completion below 90%', async ({ page }) => {
  const card = page.locator('.weeklyCard').filter({ visible: true }).first();
  await card.locator(':scope > summary').click();
  const markDone = card.getByRole('button', { name: /Mark Day Done/ });
  await expect(markDone).toBeDisabled();

  for (let attempt = 1; attempt <= 3; attempt++) {
    const groups = card.locator('.choiceGroup');
    for (let i = 0; i < await groups.count(); i++) {
      const group = groups.nth(i);
      const answer = await group.getAttribute('data-answer');
      const choices = group.locator('.choice');
      const labels = await choices.allTextContents();
      const wrong = labels.find(label => label !== answer);
      await group.getByRole('button', { name: wrong, exact: true }).click();
    }
    await card.getByRole('button', { name: 'Check Answers' }).click();
    await expect(card.locator('.interactiveQuiz')).toHaveClass(/quizLocked/);
    if (attempt < 3) {
      await expect(card.locator('.choice').first()).toBeDisabled();
      await card.getByRole('button', { name: new RegExp(`Retry.*${attempt + 1} of 3`) }).click();
    }
  }

  await expect(card.locator('.feedback')).toContainText('Final score: 0%');
  await expect(card.locator('.choice')).toHaveCount(0);
  await expect(card.getByRole('button', { name: /Retry/ })).toHaveCount(0);
  await expect(card.locator('button.secondary').filter({ hasText: 'Mark Day Done' })).toBeDisabled();
});

test('mastery unlocks day completion and updates the progress sheet', async ({ page }) => {
  const card = page.locator('.weeklyCard').filter({ visible: true }).first();
  await card.locator(':scope > summary').click();
  const groups = card.locator('.choiceGroup');
  for (let i = 0; i < await groups.count(); i++) {
    const group = groups.nth(i);
    const answer = await group.getAttribute('data-answer');
    await group.getByRole('button', { name: answer, exact: true }).click();
  }
  await card.getByRole('button', { name: 'Check Answers' }).click();

  const currentCard = page.locator('.weeklyCard').filter({ visible: true }).first();
  await currentCard.locator(':scope > summary').click();
  const markDone = currentCard.locator('button.secondary').filter({ hasText: 'Mark Day Done' });
  await expect(currentCard.locator('.feedback')).toContainText('Final score: 100%');
  await expect(markDone).toBeEnabled();
  await markDone.click();

  await expect(page.locator('#progressTracker')).toBeVisible();
  await expect(page.locator('.weekProgress')).toHaveText('1/4 days done');
  await expect(page.locator('#xp')).toHaveText('30');
});