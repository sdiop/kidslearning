const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');

function loadConst(file, name) {
  const annualFile = name === 'WEEKLY_G5' ? 'annual_grade5.js' : 'annual_grade7.js';
  const prefix = name === 'WEEKLY_G5' ? 'annual_g5_' : 'annual_g7_';
  const subjectSources = ['math', 'ela', 'science', 'social']
    .map(subject => fs.readFileSync(path.join(__dirname, '../..', 'Cheikh7/data', `${prefix}${subject}.js`), 'utf8'))
    .join('\n');
  const annual = `${subjectSources}\n${fs.readFileSync(path.join(__dirname, '../..', 'Cheikh7/data', annualFile), 'utf8')}`;
  const source = fs.readFileSync(path.join(__dirname, '../..', file), 'utf8');
  return vm.runInNewContext(`${annual}\n${source}\n${name}`, {});
}

function simpleNumericValue(choice) {
  const value = String(choice).trim().replace(/[$,]/g, '');
  const fraction = value.match(/^(-?\d+)\/(\d+)$/);
  if (fraction) return Number(fraction[1]) / Number(fraction[2]);
  const scalar = value.match(/^(-?\d+(?:\.\d+)?)(%)?$/);
  if (scalar) return Number(scalar[1]) / (scalar[2] ? 100 : 1);
  return null;
}

for (const [grade, file, name] of [
  [5, 'Cheikh7/data/weekly_grade5.js', 'WEEKLY_G5'],
  [7, 'Cheikh7/data/weekly_grade7.js', 'WEEKLY_G7']
]) {
  test(`grade ${grade} has complete and answerable 36-week curriculum`, () => {
    const weeks = loadConst(file, name);
    const addedProblemQuestions = new Set();
    const addedQuickCheckQuestions = new Set();
    const normalized = value => String(value).toLowerCase().replace(/[^a-z0-9]+/g, '');
    const scienceStandards = grade === 5
      ? new Set(['Ohio 5.ESS.1', 'Ohio 5.ESS.2', 'Ohio 5.ESS.3', 'Ohio 5.PS.1', 'Ohio 5.PS.2', 'Ohio 5.LS.1', 'Ohio 5.LS.2'])
      : new Set(['Ohio 7.ESS.1', 'Ohio 7.ESS.2', 'Ohio 7.ESS.3', 'Ohio 7.ESS.4', 'Ohio 7.ESS.5', 'Ohio 7.PS.1', 'Ohio 7.PS.2', 'Ohio 7.PS.3', 'Ohio 7.PS.4', 'Ohio 7.LS.1', 'Ohio 7.LS.2']);
    const socialStandards = new Set(
      Array.from(
        { length: grade === 5 ? 18 : 21 },
        (_, index) => `Ohio Social Studies ${grade}.${index + 1}`
      )
    );
    assert.deepEqual(Array.from(weeks, week => week.week), Array.from({ length: 36 }, (_, index) => index + 1));
    for (const week of weeks) {
      assert.ok(week.title && week.title.trim());
      assert.deepEqual(Array.from(week.subjects, subject => subject.s), ['math', 'ela', 'science', 'social']);
      for (const subject of week.subjects) {
        assert.ok(subject.concept && subject.std && subject.sprint);
        assert.match(subject.std, /^Ohio /);
        if (subject.s === 'science') {
          assert.ok(scienceStandards.has(subject.std), `${grade} week ${week.week}: unsupported Ohio science standard ${subject.std}`);
        }
        if (subject.s === 'social') {
          assert.ok(socialStandards.has(subject.std), `${grade} week ${week.week}: unsupported Ohio social studies standard ${subject.std}`);
        }
        assert.doesNotThrow(() => {
          const resource = new URL(subject.video);
          assert.equal(resource.protocol, 'https:');
        }, `${grade} week ${week.week} ${subject.s}: video must be a valid HTTPS URL`);
        assert.ok(Array.isArray(subject.problems) && subject.problems.length >= 4);
        for (const problem of subject.problems) {
          assert.equal(problem.length, 2);
          assert.ok(problem[0] && problem[1]);
          if (week.week >= 9) {
            assert.doesNotMatch(problem[1], /^(sample answer|placeholder)$/i);
            const answerText = normalized(problem[1]);
            if (answerText.length >= 5 && subject.s !== 'ela') {
              assert.ok(!normalized(problem[0]).includes(answerText), `${grade} week ${week.week} ${subject.s}: problem prompt reveals its answer`);
            }
            assert.ok(!addedProblemQuestions.has(problem[0]), `${grade} week ${week.week} ${subject.s}: duplicate problem prompt`);
            addedProblemQuestions.add(problem[0]);
          }
        }
        assert.ok(Array.isArray(subject.qc) && subject.qc.length >= 2);
        for (const item of subject.qc) {
          assert.ok(item.q && item.a);
          assert.equal(item.choices.length, 4);
          assert.ok(item.choices.includes(item.a), `${grade} week ${week.week} ${subject.s}: answer must be a choice`);
          assert.equal(new Set(item.choices).size, item.choices.length);
          const numericChoices = item.choices.map(simpleNumericValue).filter(value => value !== null);
          assert.equal(
            new Set(numericChoices.map(value => value.toFixed(12))).size,
            numericChoices.length,
            `${grade} week ${week.week} ${subject.s}: quick-check choices must not be numerically equivalent`
          );
        }
        if (week.week >= 9) {
          const resource = new URL(subject.video);
          assert.notEqual(resource.pathname, '/results', `${grade} week ${week.week} ${subject.s}: use a direct instructional resource`);
          assert.doesNotMatch(subject.qc.map(item => item.q).join(' '), /topic is the focus|which standard/i);
          for (const item of subject.qc) {
            const answerText = normalized(item.a);
            if (answerText.length >= 5 && subject.s !== 'ela') {
              assert.ok(!normalized(item.q).includes(answerText), `${grade} week ${week.week} ${subject.s}: quick-check prompt reveals its answer`);
            }
            assert.ok(!addedQuickCheckQuestions.has(item.q), `${grade} week ${week.week} ${subject.s}: duplicate quick-check prompt`);
            addedQuickCheckQuestions.add(item.q);
          }
        }
      }
    }
  });
}

test('known annual curriculum assessment regressions stay fixed', () => {
  const grade5 = loadConst('Cheikh7/data/weekly_grade5.js', 'WEEKLY_G5');
  const grade7 = loadConst('Cheikh7/data/weekly_grade7.js', 'WEEKLY_G7');
  const subject = (weeks, week, name) => weeks.find(item => item.week === week).subjects.find(item => item.s === name);

  const divideFractions = subject(grade5, 23, 'math');
  assert.match(divideFractions.qc[1].q, /1\/2-cup serving.*6 equal portions/i);
  assert.equal(divideFractions.qc[1].a, '1/12 cup');

  const grade5Synthesis = subject(grade5, 36, 'math');
  assert.equal(grade5Synthesis.qc[1].choices.filter(choice => simpleNumericValue(choice) === 0.8).length, 1);

  const grade7Construction = subject(grade7, 27, 'math');
  assert.match(grade7Construction.problems[3][0], /copied exactly/i);
  assert.equal(grade7Construction.problems[3][1], 'same length');

  const grade5EnergyRoles = subject(grade5, 29, 'science');
  assert.equal(grade5EnergyRoles.qc[0].a, 'producer');

  const grade7EnergyFlow = subject(grade7, 32, 'science');
  assert.doesNotMatch(grade7EnergyFlow.problems.map(problem => problem[0]).join(' '), /this food chain|this chain/i);

  const grade7Seasons = subject(grade7, 19, 'science');
  assert.equal(grade7Seasons.qc[1].a, 'Summer');
  assert.doesNotMatch(grade7Seasons.qc[1].q, /which hemisphere/i);

  const grade5ProblemSolving = subject(grade5, 34, 'math');
  assert.match(grade5ProblemSolving.problems[1][0], /48 students.*6 leave/i);
  assert.equal(grade5ProblemSolving.problems[1][1], '14');

  const grade5Quoting = subject(grade5, 9, 'ela');
  assert.equal(grade5Quoting.problems[1][1], 'built long ago');

  const grade5Narrative = subject(grade5, 26, 'ela');
  assert.match(grade5Narrative.problems[1][0], /Maya said I found the missing key/);

  const grade5Research = subject(grade5, 28, 'ela');
  assert.match(grade5Research.qc[1].q, /^Source:/);

  const grade5Punctuation = subject(grade5, 33, 'ela');
  assert.match(grade5Punctuation.problems[0][0], /Where is the nearest library/);

  const grade5Planets = subject(grade5, 10, 'science');
  assert.match(grade5Planets.problems[1][0], /Compared with Earth/);

  const grade5Seasons = subject(grade5, 19, 'science');
  assert.doesNotMatch(grade5Seasons.problems[2][0], /^Do /);

  const grade5Chronology = subject(grade5, 9, 'social');
  assert.match(grade5Chronology.problems[1][0], /1 CE and 50 CE/);

  const grade5Latitude = subject(grade5, 13, 'social');
  assert.match(grade5Latitude.problems[0][0], /25°N/);

  const grade5Regions = subject(grade5, 14, 'social');
  assert.match(grade5Regions.problems[0][0], /biome and vegetation/i);

  const grade7StoryElements = subject(grade7, 11, 'ela');
  assert.match(grade7StoryElements.problems[0][0], /librarian suspects/i);
  assert.equal(grade7StoryElements.problems[3][1], 'the power outage');

  const grade7Exchange = subject(grade7, 19, 'social');
  assert.deepEqual(
    Array.from(grade7Exchange.qc[1].choices),
    ['smallpox', 'seasonal allergies', 'motion sickness', 'scurvy']
  );
});