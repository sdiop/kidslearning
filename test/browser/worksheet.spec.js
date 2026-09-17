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
  const source = fs.readFileSync(filePath, 'utf8');
  const context = {};
  vm.runInNewContext(`${source}\nthis.result = ${variableName};`, context, {
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
      await expect(page.locator('.printBtn')).toBeHidden();
      await expect(page.locator('.backLink')).toBeHidden();
      await expect(page.locator('.answerKeyPage')).toHaveCSS('break-before', 'page');
      await expect(page.locator('.answerKeyPage')).toBeVisible();

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