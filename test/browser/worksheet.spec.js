const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { test, expect } = require('@playwright/test');

const SUBJECT_LABELS = {
  math: 'Math',
  ela: 'English Language Arts',
  science: 'Science',
  social: 'Social Studies'
};
const SUBJECT_ORDER = ['math', 'ela', 'science', 'social'];

function loadCurriculum(fileName, variableName) {
  const filePath = path.join(__dirname, '../../Cheikh7/data', fileName);
  const prefix = variableName === 'WEEKLY_G5' ? 'annual_g5_' : 'annual_g7_';
  const subjectSources = ['math', 'ela', 'science', 'social']
    .map(subject => fs.readFileSync(path.join(__dirname, '../../Cheikh7/data', `${prefix}${subject}.js`), 'utf8'))
    .join('\n');
  const annualPath = path.join(
    __dirname,
    '../../Cheikh7/data',
    variableName === 'WEEKLY_G5' ? 'annual_grade5.js' : 'annual_grade7.js'
  );
  const annual = fs.readFileSync(annualPath, 'utf8');
  const source = fs.readFileSync(filePath, 'utf8');
  const context = {};
  vm.runInNewContext(`${subjectSources}\n${annual}\n${source}\nthis.result = ${variableName};`, context, {
    filename: filePath
  });
  return JSON.parse(JSON.stringify(context.result));
}

const CURRICULUM = {
  5: loadCurriculum('weekly_grade5.js', 'WEEKLY_G5'),
  7: loadCurriculum('weekly_grade7.js', 'WEEKLY_G7')
};

function orderedSubjects(unit) {
  return SUBJECT_ORDER.map(subject =>
    unit.subjects.find(candidate => candidate.s === subject)
  ).filter(Boolean);
}

for (const grade of ['5', '7']) {
  for (const unit of CURRICULUM[grade]) {
    test(`grade ${grade} week ${unit.week} worksheet and answer key match the curriculum`, async ({ page }) => {
      await page.goto(`/worksheet.html?grade=${grade}&week=${unit.week}`);

      const gradeLabel = grade === '5' ? '5th Grade' : '7th Grade';
      await expect(page).toHaveTitle(`Worksheet — ${gradeLabel} Week ${unit.week}`);
      await expect(page.locator('.wsHeader .wk')).toContainText(
        `${gradeLabel} · Week ${unit.week}: ${unit.title}`
      );

      const subjects = orderedSubjects(unit);
      await expect(page.locator('#sheet > .subject')).toHaveCount(subjects.length);
      await expect(page.locator('.answerKeyPage .subject')).toHaveCount(subjects.length);
      await expect(page.locator('.answerKeyPage')).toBeHidden();

      const answerKeyToggle = page.locator('.answerKeyToggle');
      await expect(answerKeyToggle).toHaveAccessibleName('Show answer key (parents/educators)');
      await expect(answerKeyToggle).toHaveAttribute('aria-expanded', 'false');
      await answerKeyToggle.click();
      await expect(answerKeyToggle).toHaveAccessibleName('Hide answer key');
      await expect(answerKeyToggle).toHaveAttribute('aria-expanded', 'true');
      await expect(page.locator('.answerKeyPage')).toBeVisible();

      for (let subjectIndex = 0; subjectIndex < subjects.length; subjectIndex++) {
        const subject = subjects[subjectIndex];
        expect(subject.problems.length, `${grade} week ${unit.week} ${subject.s} has problems`).toBeGreaterThan(0);
        for (const problem of subject.problems) {
          expect(Array.isArray(problem), `${grade} week ${unit.week} ${subject.s} problem is a tuple`).toBe(true);
          expect(problem).toHaveLength(2);
          expect(typeof problem[0], `${grade} week ${unit.week} ${subject.s} question is text`).toBe('string');
          expect(problem[0].trim(), `${grade} week ${unit.week} ${subject.s} question is not blank`).not.toBe('');
          expect(typeof problem[1], `${grade} week ${unit.week} ${subject.s} answer is text`).toBe('string');
          expect(problem[1].trim(), `${grade} week ${unit.week} ${subject.s} answer is not blank`).not.toBe('');
        }

        const worksheetSubject = page.locator('#sheet > .subject').nth(subjectIndex);
        const keySubject = page.locator('.answerKeyPage .subject').nth(subjectIndex);
        const heading = `${SUBJECT_LABELS[subject.s]} — ${subject.concept}`;

        await expect(worksheetSubject.getByRole('heading', { name: heading })).toBeVisible();
        await expect(keySubject.getByRole('heading', { name: heading })).toBeVisible();
        await expect(worksheetSubject.locator('.qtext')).toHaveText(
          subject.problems.map(problem => problem[0])
        );
        await expect(keySubject.locator('.keyList li')).toHaveCount(subject.problems.length);

        for (let problemIndex = 0; problemIndex < subject.problems.length; problemIndex++) {
          const [question, answer] = subject.problems[problemIndex];
          const keyItem = keySubject.locator('.keyList li').nth(problemIndex);
          await expect(keyItem).toContainText(question);
          await expect(keyItem.locator('.a')).toHaveText(`→ ${answer}`);
        }
      }

      await page.emulateMedia({ media: 'print' });
      await expect(page.locator('.printActions')).toBeHidden();
      await expect(page.locator('.backLink')).toBeHidden();
      await expect(page.locator('.answerKeyPage')).toHaveCSS('break-before', 'page');
      await expect(page.locator('.answerKeyPage')).toBeHidden();

      const horizontalOverflow = await page.evaluate(
        () => document.documentElement.scrollWidth > document.documentElement.clientWidth
      );
      expect(horizontalOverflow).toBe(false);
    });
  }
}

test('invalid worksheet selections fall back to grade 7 week 1', async ({ page }) => {
  await page.goto('/worksheet.html?grade=99&week=99');
  await expect(page).toHaveTitle('Worksheet — 7th Grade Week 1');
  await expect(page.locator('.wsHeader .wk')).toContainText('7th Grade · Week 1');
});

test('print choices include or exclude the answer key', async ({ page }) => {
  await page.goto('/worksheet.html?grade=5&week=1');
  await expect(page.locator('.answerKeyPage')).toBeHidden();
  await page.evaluate(() => {
    window.print = () => {
      window.lastPrintMode = document.body.classList.contains('print-with-answers')
        ? 'with-answers'
        : 'worksheet-only';
    };
  });

  const worksheetOnly = page.getByRole('button', { name: 'Print worksheet only' });
  const withAnswers = page.getByRole('button', { name: 'Print with answer key' });
  await expect(worksheetOnly).toBeVisible();
  await expect(withAnswers).toBeVisible();

  await worksheetOnly.click();
  await expect.poll(() => page.evaluate(() => window.lastPrintMode)).toBe('worksheet-only');
  await page.emulateMedia({ media: 'print' });
  await expect(page.locator('.answerKeyPage')).toBeHidden();

  await page.emulateMedia({ media: 'screen' });
  await withAnswers.click();
  await expect.poll(() => page.evaluate(() => window.lastPrintMode)).toBe('with-answers');
  await page.emulateMedia({ media: 'print' });
  await expect(page.locator('.answerKeyPage')).toBeVisible();
});

test('answer key controls and both print choices remain usable on a mobile viewport', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto('/worksheet.html?grade=7&week=1');

  const printButtons = page.locator('.printActions .printBtn');
  await expect(printButtons).toHaveCount(4);
  await expect(printButtons.nth(0)).toBeVisible();
  await expect(printButtons.nth(1)).toBeVisible();
  await expect(printButtons.nth(2)).toBeVisible();
  await expect(printButtons.nth(3)).toBeVisible();

  const answerKey = page.locator('.answerKeyPage');
  const answerKeyToggle = page.locator('.answerKeyToggle');
  await expect(answerKey).toBeHidden();
  await answerKeyToggle.click();
  await expect(answerKey).toBeVisible();
  await page.getByRole('button', { name: 'Hide answer key' }).click();
  await expect(answerKey).toBeHidden();

  await page.evaluate(() => {
    window.print = () => {
      window.printedWithAnswers = document.body.classList.contains('print-with-answers');
    };
  });
  await page.getByRole('button', { name: 'Print with answer key' }).click();
  await expect.poll(() => page.evaluate(() => window.printedWithAnswers)).toBe(true);
  await page.emulateMedia({ media: 'print' });
  await expect(answerKey).toBeVisible();

  const horizontalOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth
  );
  expect(horizontalOverflow).toBe(false);
});

test('parent check blocks an incorrect desktop reveal and accepts the correct PIN', async ({ page }) => {
  await page.goto('/worksheet.html?grade=5&week=1');

  const parentCheck = page.getByRole('button', { name: 'Turn on parent check' });
  page.once('dialog', dialog => dialog.accept('2468'));
  await parentCheck.click();
  await expect(page.getByRole('button', { name: 'Parent check: on' })).toHaveAttribute('aria-pressed', 'true');

  const answerKeyToggle = page.locator('.answerKeyToggle');
  const handleIncorrectPin = async dialog => {
    if (dialog.type() === 'prompt') {
      await dialog.accept('1111');
    } else {
      await dialog.accept();
    }
  };
  page.on('dialog', handleIncorrectPin);
  await answerKeyToggle.click();
  page.off('dialog', handleIncorrectPin);
  await expect(page.locator('.answerKeyPage')).toBeHidden();
  await expect(answerKeyToggle).toHaveAttribute('aria-expanded', 'false');

  page.once('dialog', dialog => dialog.accept('2468'));
  await answerKeyToggle.click();
  await expect(page.locator('.answerKeyPage')).toBeVisible();
  await expect(answerKeyToggle).toHaveAttribute('aria-expanded', 'true');
});

test('parent check blocks and allows answer access on a mobile viewport', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto('/worksheet.html?grade=7&week=1');

  page.once('dialog', dialog => dialog.accept('1357'));
  await page.getByRole('button', { name: 'Turn on parent check' }).click();

  const answerKey = page.locator('.answerKeyPage');
  const reveal = page.getByRole('button', { name: 'Show answer key (parents/educators)' });
  page.once('dialog', dialog => dialog.dismiss());
  await reveal.click();
  await expect(answerKey).toBeHidden();

  page.once('dialog', dialog => dialog.accept('1357'));
  await reveal.click();
  await expect(answerKey).toBeVisible();

  await page.getByRole('button', { name: 'Hide answer key' }).click();
  await expect(answerKey).toBeHidden();
});

test('native printing stays worksheet-only and protected printing requires the parent PIN', async ({ page }) => {
  await page.goto('/worksheet.html?grade=5&week=1');
  const answerKey = page.locator('.answerKeyPage');

  page.once('dialog', dialog => dialog.accept('2468'));
  await page.getByRole('button', { name: 'Turn on parent check' }).click();
  await page.emulateMedia({ media: 'print' });
  await expect(answerKey).toBeHidden();
  await page.emulateMedia({ media: 'screen' });

  await page.evaluate(() => {
    window.print = () => {
      window.printWasCalled = true;
      window.printedWithAnswers = document.body.classList.contains('print-with-answers');
    };
  });

  const printWithAnswers = page.getByRole('button', { name: 'Print with answer key' });
  const handleIncorrectPin = async dialog => {
    await dialog.accept(dialog.type() === 'prompt' ? '1111' : undefined);
  };
  page.on('dialog', handleIncorrectPin);
  await printWithAnswers.click();
  page.off('dialog', handleIncorrectPin);
  await expect.poll(() => page.evaluate(() => window.printWasCalled || false)).toBe(false);

  page.once('dialog', dialog => dialog.accept('2468'));
  await printWithAnswers.click();
  await expect.poll(() => page.evaluate(() => window.printedWithAnswers)).toBe(true);
  await page.emulateMedia({ media: 'print' });
  await expect(answerKey).toBeVisible();
});

test('turning on the parent check immediately hides a visible answer key', async ({ page }) => {
  await page.goto('/worksheet.html?grade=7&week=1');
  const answerKey = page.locator('.answerKeyPage');
  const answerKeyToggle = page.locator('.answerKeyToggle');

  await answerKeyToggle.click();
  await expect(answerKey).toBeVisible();

  page.once('dialog', dialog => dialog.accept('1357'));
  await page.getByRole('button', { name: 'Turn on parent check' }).click();
  await expect(answerKey).toBeHidden();
  await expect(answerKeyToggle).toHaveAttribute('aria-expanded', 'false');
  await expect(answerKeyToggle).toHaveAccessibleName('Show answer key (parents/educators)');
});
