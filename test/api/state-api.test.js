const test = require('node:test');
const assert = require('node:assert/strict');
const { app, normalizeState, mergeStates, setPoolForTests } = require('../../server');

function fakePool(initialState) {
  let state = initialState || {};
  const client = {
    async query(sql, params) {
      if (sql.startsWith('SELECT state FROM progress_state')) return { rows: Object.keys(state).length ? [{ state }] : [] };
      if (sql.startsWith('INSERT INTO progress_state')) {
        state = JSON.parse(params[1]);
        return { rows: [] };
      }
      return { rows: [] };
    },
    release() {}
  };
  return {
    connect: async () => client,
    query: (...args) => client.query(...args),
    getState: () => state
  };
}

test('normalization bounds values and removes unknown fields', () => {
  assert.deepEqual(normalizeState({
    xp: -4, streak: Infinity, done: { good: 1, bad: false },
    quizScores: { q: 140 }, quizAttempts: { q: [-2, 50, 120, 70] },
    injected: '<script>'
  }), {
    xp: 0, done: { good: true }, last: '', streak: 0,
    quizScores: { q: 100 }, quizBonuses: {}, weeklyDone: {},
    quizAttempts: { q: [0, 50, 100] }
  });
});

test('merge preserves completions, maximum scores, XP, and longer attempt history', () => {
  const merged = mergeStates(
    { xp: 50, done: { a: true }, quizScores: { q: 90 }, quizAttempts: { q: [50, 80] } },
    { xp: 20, done: { b: true }, quizScores: { q: 70 }, quizAttempts: { q: [100] } }
  );
  assert.equal(merged.xp, 50);
  assert.deepEqual(merged.done, { a: true, b: true });
  assert.equal(merged.quizScores.q, 90);
  assert.deepEqual(merged.quizAttempts.q, [50, 80]);
});

test('normalization rejects overlong keys and limits attempt histories to 500 quizzes', () => {
  const quizAttempts = {};
  for (let i = 0; i < 510; i++) quizAttempts[`quiz-${i}`] = [i % 101];
  quizAttempts['x'.repeat(61)] = [100];
  const normalized = normalizeState({
    done: { valid: true, ['x'.repeat(61)]: true },
    quizScores: { valid: 90, ['y'.repeat(61)]: 100 },
    quizAttempts
  });
  assert.deepEqual(normalized.done, { valid: true });
  assert.deepEqual(normalized.quizScores, { valid: 90 });
  assert.equal(Object.keys(normalized.quizAttempts).length, 500);
  assert.equal(normalized.quizAttempts['x'.repeat(61)], undefined);
});

test('equal-length attempt histories keep the server sequence', () => {
  const merged = mergeStates(
    { quizAttempts: { q: [20, 60] } },
    { quizAttempts: { q: [80, 100] } }
  );
  assert.deepEqual(merged.quizAttempts.q, [20, 60]);
});

test('PUT merges by default and explicit replace resets state', async () => {
  const db = fakePool({ xp: 80, done: { old: true }, quizScores: {}, quizAttempts: {} });
  setPoolForTests(db);
  const server = app.listen(0, '127.0.0.1');
  await new Promise(resolve => server.once('listening', resolve));
  const base = `http://127.0.0.1:${server.address().port}`;
  try {
    let response = await fetch(base + '/api/state/cheikh', {
      method: 'PUT', headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ state: { xp: 10, done: { fresh: true } } })
    });
    assert.equal(response.status, 200);
    assert.deepEqual((await response.json()).state.done, { old: true, fresh: true });

    response = await fetch(base + '/api/state/cheikh', {
      method: 'PUT', headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ replace: true, state: { xp: 0, done: {} } })
    });
    assert.equal(response.status, 200);
    const reset = (await response.json()).state;
    assert.equal(reset.xp, 0);
    assert.deepEqual(reset.done, {});
    assert.deepEqual(db.getState(), reset);
  } finally {
    await new Promise(resolve => server.close(resolve));
  }
});

test('unknown profile IDs return 404 without touching storage', async () => {
  const db = fakePool({});
  setPoolForTests(db);
  const server = app.listen(0, '127.0.0.1');
  await new Promise(resolve => server.once('listening', resolve));
  try {
    const response = await fetch(`http://127.0.0.1:${server.address().port}/api/state/unknown`);
    assert.equal(response.status, 404);
    assert.deepEqual(await response.json(), { error: 'unknown profile' });
    assert.deepEqual(db.getState(), {});
  } finally {
    await new Promise(resolve => server.close(resolve));
  }
});