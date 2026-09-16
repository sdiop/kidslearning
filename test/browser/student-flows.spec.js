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

test.beforeEach(async ({ page }) => {
  await stubApi(page);
  await page.goto('/');
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