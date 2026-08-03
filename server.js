const express = require('express');
const path = require('path');
const { Pool } = require('pg');

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const app = express();
app.use(express.json({ limit: '1mb' }));

// No-cache for dev preview
app.use((req, res, next) => {
  if (process.env.NODE_ENV !== 'production') res.set('Cache-Control', 'no-store');
  next();
});

const EMPTY_STATE = { xp: 0, done: {}, last: '', streak: 0, quizScores: {}, quizBonuses: {}, weeklyDone: {} };

const GRADE_TO_PROFILE = { '5': 'seydina', '7': 'cheikh' };

function profileIdOr404(res, id) {
  if (id !== 'cheikh' && id !== 'seydina') {
    res.status(404).json({ error: 'unknown profile' });
    return null;
  }
  return id;
}

// --- API ---

app.get('/api/profiles', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT id, name, grade FROM profiles ORDER BY grade DESC');
    res.json(rows);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.get('/api/state/:id', async (req, res) => {
  const id = profileIdOr404(res, req.params.id);
  if (!id) return;
  try {
    const { rows } = await pool.query('SELECT state, updated_at FROM progress_state WHERE profile_id=$1', [id]);
    const state = rows[0] ? rows[0].state : EMPTY_STATE;
    res.json({ profileId: id, state: Object.keys(state).length ? state : EMPTY_STATE, updatedAt: rows[0] ? rows[0].updated_at : null });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Normalize incoming state to a strict schema (prevents stored XSS / bad data)
function normalizeState(raw) {
  const s = raw && typeof raw === 'object' ? raw : {};
  const clampNum = (v, max) => {
    const n = Number(v);
    return Number.isFinite(n) ? Math.max(0, Math.min(n, max)) : 0;
  };
  const boolMap = (obj) => {
    const out = {};
    if (obj && typeof obj === 'object') {
      for (const k of Object.keys(obj)) {
        if (typeof k === 'string' && k.length <= 60 && obj[k]) out[k] = true;
      }
    }
    return out;
  };
  const scoreMap = (obj) => {
    const out = {};
    if (obj && typeof obj === 'object') {
      for (const k of Object.keys(obj)) {
        if (typeof k === 'string' && k.length <= 60) out[k] = clampNum(obj[k], 100);
      }
    }
    return out;
  };
  return {
    xp: clampNum(s.xp, 1000000),
    done: boolMap(s.done),
    last: typeof s.last === 'string' ? s.last.slice(0, 40) : '',
    streak: clampNum(s.streak, 100000),
    quizScores: scoreMap(s.quizScores),
    quizBonuses: boolMap(s.quizBonuses),
    weeklyDone: boolMap(s.weeklyDone)
  };
}

// Union-merge so out-of-order or multi-device writes never erase completions
function mergeStates(current, incoming) {
  const cur = normalizeState(current);
  const inc = normalizeState(incoming);
  const merged = {
    xp: Math.max(cur.xp, inc.xp),
    done: { ...cur.done, ...inc.done },
    last: inc.last || cur.last,
    streak: Math.max(cur.streak, inc.streak),
    quizScores: { ...cur.quizScores },
    quizBonuses: { ...cur.quizBonuses, ...inc.quizBonuses },
    weeklyDone: { ...cur.weeklyDone, ...inc.weeklyDone }
  };
  for (const k of Object.keys(inc.quizScores)) {
    merged.quizScores[k] = Math.max(merged.quizScores[k] || 0, inc.quizScores[k]);
  }
  return merged;
}

app.put('/api/state/:id', async (req, res) => {
  const id = profileIdOr404(res, req.params.id);
  if (!id) return;
  const state = req.body && req.body.state;
  const replace = !!(req.body && req.body.replace);
  if (!state || typeof state !== 'object') return res.status(400).json({ error: 'missing state' });
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const { rows } = await client.query('SELECT state FROM progress_state WHERE profile_id=$1 FOR UPDATE', [id]);
    const current = rows[0] ? rows[0].state : {};
    const next = replace ? normalizeState(state) : mergeStates(current, state);
    await client.query(
      `INSERT INTO progress_state (profile_id, state, updated_at) VALUES ($1, $2, now())
       ON CONFLICT (profile_id) DO UPDATE SET state=$2, updated_at=now()`,
      [id, JSON.stringify(next)]
    );
    await client.query('COMMIT');
    res.json({ ok: true, state: next });
  } catch (e) {
    await client.query('ROLLBACK').catch(() => {});
    res.status(500).json({ error: e.message });
  } finally {
    client.release();
  }
});

app.post('/api/event/:id', async (req, res) => {
  const id = profileIdOr404(res, req.params.id);
  if (!id) return;
  const { eventType, detail, xpDelta } = req.body || {};
  if (!eventType) return res.status(400).json({ error: 'missing eventType' });
  try {
    await pool.query(
      'INSERT INTO progress_events (profile_id, event_type, detail, xp_delta) VALUES ($1,$2,$3,$4)',
      [id, String(eventType), JSON.stringify(detail || {}), Number(xpDelta) || 0]
    );
    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Awards computed from stored state + event history
function computeAwards(state, weekly) {
  const awards = [];
  const doneCount = Object.keys(state.done || {}).length;
  const scores = Object.values(state.quizScores || {});
  const avg = scores.length ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0;
  if (state.xp >= 25) awards.push({ id: 'first-quest', label: 'First Quest', emoji: '🌟' });
  if (state.xp >= 150) awards.push({ id: 'quest-knight', label: 'Quest Knight', emoji: '⚔️' });
  if (state.xp >= 300) awards.push({ id: 'focus-wizard', label: 'Focus Wizard', emoji: '🧙' });
  if (state.xp >= 500) awards.push({ id: 'grade-ready', label: 'Grade Ready', emoji: '🏆' });
  if ((state.streak || 0) >= 3) awards.push({ id: 'streak-3', label: '3-Day Streak', emoji: '🔥' });
  if ((state.streak || 0) >= 7) awards.push({ id: 'streak-7', label: '7-Day Streak', emoji: '🚀' });
  if (scores.filter(s => s >= 80).length >= 3) awards.push({ id: 'quiz-master', label: 'Quiz Master', emoji: '🧠' });
  if (avg >= 90 && scores.length >= 5) awards.push({ id: 'perfectionist', label: 'A+ Scholar', emoji: '💯' });
  if (doneCount >= 10) awards.push({ id: 'quest-champion', label: 'Quest Champion', emoji: '👑' });
  if (weekly.some(w => w.events >= 4)) awards.push({ id: 'weekly-warrior', label: 'Weekly Warrior', emoji: '🗓️' });
  return awards;
}

app.get('/api/dashboard', async (req, res) => {
  try {
    const profiles = (await pool.query('SELECT id, name, grade FROM profiles ORDER BY grade DESC')).rows;
    const out = [];
    for (const p of profiles) {
      const st = (await pool.query('SELECT state, updated_at FROM progress_state WHERE profile_id=$1', [p.id])).rows[0];
      const state = normalizeState((st && st.state && Object.keys(st.state).length) ? st.state : EMPTY_STATE);
      const weekly = (await pool.query(
        `SELECT to_char(date_trunc('week', created_at), 'YYYY-MM-DD') AS week,
                count(*)::int AS events, sum(xp_delta)::int AS xp
         FROM progress_events WHERE profile_id=$1
         GROUP BY 1 ORDER BY 1 DESC LIMIT 8`, [p.id])).rows;
      const scores = Object.values(state.quizScores || {});
      out.push({
        id: p.id, name: p.name, grade: p.grade,
        xp: state.xp || 0,
        questsDone: Object.keys(state.done || {}).length,
        streak: state.streak || 0,
        quizAvg: scores.length ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : null,
        quizCount: scores.length,
        lastActive: st ? st.updated_at : null,
        weekly,
        awards: computeAwards(state, weekly)
      });
    }
    res.json(out);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// --- Static app ---
app.use(express.static(path.join(__dirname, 'Cheikh7')));

const port = process.env.PORT || 5000;
app.listen(port, '0.0.0.0', () => console.log(`Quest Academy server on ${port}`));
