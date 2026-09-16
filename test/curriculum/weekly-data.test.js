const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');

function loadConst(file, name) {
  const source = fs.readFileSync(path.join(__dirname, '../..', file), 'utf8');
  return vm.runInNewContext(`${source}\n${name}`, {});
}

for (const [grade, file, name] of [
  [5, 'Cheikh7/data/weekly_grade5.js', 'WEEKLY_G5'],
  [7, 'Cheikh7/data/weekly_grade7.js', 'WEEKLY_G7']
]) {
  test(`grade ${grade} has complete and answerable eight-week curriculum`, () => {
    const weeks = loadConst(file, name);
    assert.deepEqual(Array.from(weeks, week => week.week), [1, 2, 3, 4, 5, 6, 7, 8]);
    for (const week of weeks) {
      assert.deepEqual(Array.from(week.subjects, subject => subject.s), ['math', 'ela', 'science', 'social']);
      for (const subject of week.subjects) {
        assert.ok(subject.concept && subject.std && subject.sprint);
        assert.doesNotThrow(() => {
          const resource = new URL(subject.video);
          assert.equal(resource.protocol, 'https:');
        }, `${grade} week ${week.week} ${subject.s}: video must be a valid HTTPS URL`);
        assert.ok(Array.isArray(subject.qc) && subject.qc.length >= 2);
        for (const item of subject.qc) {
          assert.ok(item.q && item.a);
          assert.equal(item.choices.length, 4);
          assert.ok(item.choices.includes(item.a), `${grade} week ${week.week} ${subject.s}: answer must be a choice`);
          assert.equal(new Set(item.choices).size, item.choices.length);
        }
      }
    }
  });
}