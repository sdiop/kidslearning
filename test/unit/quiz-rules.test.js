const test = require('node:test');
const assert = require('node:assert/strict');
const rules = require('../../Cheikh7/quiz-rules');

test('composite score averages and rounds up or down consistently', () => {
  assert.equal(rules.compositeScore([50, 100, 100]), 83);
  assert.equal(rules.compositeScore([100]), 100);
  assert.equal(rules.compositeScore([]), 0);
});

test('attempts stop at three or immediately after a perfect score', () => {
  assert.equal(rules.isExhausted([50, 50]), false);
  assert.equal(rules.isExhausted([50, 50, 50]), true);
  assert.equal(rules.isExhausted([100]), true);
  assert.deepEqual(rules.normalizeAttempts([20, 40, 60, 80]), [20, 40, 60]);
});

test('weekly mastery requires at least 90 percent', () => {
  assert.equal(rules.isMastered(89, 90), false);
  assert.equal(rules.isMastered(90, 90), true);
  assert.equal(rules.isMastered('90', 90), true);
  assert.equal(rules.isMastered(undefined, 90), false);
});

test('XP award is applied only once for the same key', () => {
  assert.equal(rules.xpAwardFor(80, false, 80, 15), 15);
  assert.equal(rules.xpAwardFor(80, true, 80, 15), 0);
  assert.equal(rules.xpAwardFor(79, false, 80, 15), 0);
});