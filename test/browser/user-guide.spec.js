const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await page.evaluate(() => localStorage.removeItem('diopYabaUserGuideDismissed'));
  await page.reload();
});

test('first visit offers the guide and remembers Start exploring', async ({ page }) => {
  const dialog = page.getByRole('dialog', { name: 'Welcome to Diop Yaba Academy' });
  await expect(dialog).toBeVisible();
  await expect(page.getByRole('button', { name: 'Watch the guide' })).toBeVisible();

  await page.getByRole('button', { name: 'Start exploring' }).click();
  await expect(dialog).toBeHidden();
  await page.reload();
  await expect(dialog).toBeHidden();
});

test('the permanent guide control reopens the player and Escape closes it', async ({ page }) => {
  const dialog = page.getByRole('dialog', { name: 'Welcome to Diop Yaba Academy' });
  await page.getByRole('button', { name: 'Start exploring' }).click();

  const trigger = page.getByRole('button', { name: 'How to use this app' });
  await trigger.click();
  await expect(dialog).toBeVisible();
  await expect(page.locator('#userGuideVideo')).toHaveAttribute('poster', '/assets/user-guide-poster.jpg');
  await expect(page.getByRole('button', { name: 'Reopen this guide' })).toBeVisible();

  await page.keyboard.press('Escape');
  await expect(dialog).toBeHidden();
  await expect(trigger).toBeFocused();
});

test('chapter controls seek the real guide video', async ({ page }) => {
  const video = page.locator('#userGuideVideo');
  await page.getByRole('button', { name: 'Offline use and installation' }).click();
  await expect.poll(() => video.evaluate(element => element.currentTime)).toBeCloseTo(122.324, 1);
});