// Weekly Homework — Ohio Standards
// Renders full-year homework for the active grade using WEEKLY_G5 / WEEKLY_G7.
// Called after buildCourse(); uses globals currentGrade, STATE, save(), logEvent().

const WEEKLY_DAYS = [
  { s: "math", day: "Mon", label: "Math", emoji: "🧮" },
  { s: "ela", day: "Tue", label: "ELA", emoji: "📚" },
  { s: "science", day: "Wed", label: "Science", emoji: "🔬" },
  { s: "social", day: "Thu", label: "Social Studies", emoji: "🌍" }
];

function weeklyData() {
  return currentGrade === '5'
    ? (typeof WEEKLY_G5 !== 'undefined' ? WEEKLY_G5 : [])
    : (typeof WEEKLY_G7 !== 'undefined' ? WEEKLY_G7 : []);
}

function weeklyEscAttr(str) {
  return String(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function weeklyEscHtml(str) {
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function weeklyShuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getSelectedWeek() {
  const key = 'qaWeek' + currentGrade;
  const validWeeks = weeklyData().map(unit => unit.week);
  let n = parseInt(localStorage.getItem(key) || '1', 10);
  if (!Number.isFinite(n) || !validWeeks.includes(n)) n = validWeeks[0] || 1;
  return n;
}

function setSelectedWeek(n) {
  localStorage.setItem('qaWeek' + currentGrade, String(n));
  renderWeekly();
  const box = document.getElementById('weekly');
  if (box) box.scrollIntoView({ behavior: 'smooth' });
}

// Persisted weekly subject tab ('__all__' or one of math/ela/science/social)
function getWeeklySubject() {
  const key = 'qaWeeklySubject' + currentGrade;
  let v = localStorage.getItem(key);
  const valid = ['__all__', ...WEEKLY_DAYS.map(d => d.s)];
  if (!v || !valid.includes(v)) v = (window.innerWidth <= 650) ? WEEKLY_DAYS[0].s : '__all__';
  return v;
}

function setWeeklySubject(s) {
  localStorage.setItem('qaWeeklySubject' + currentGrade, s);
  applyWeeklySubjectFilter(s);
  renderWeeklySubjectTabs();
}

function applyWeeklySubjectFilter(s) {
  const box = document.getElementById('weekly');
  if (!box) return;
  box.querySelectorAll('.weeklyCard').forEach(card => {
    const subj = card.getAttribute('data-subject');
    card.style.display = (s === '__all__' || s === subj) ? '' : 'none';
  });
}

function renderWeeklySubjectTabs() {
  const bar = document.getElementById('weeklySubjectTabs');
  if (!bar) return;
  const sel = getWeeklySubject();
  let html = `<button class="subjectTab${sel === '__all__' ? ' active' : ''}" onclick="setWeeklySubject('__all__')">🗂️ All</button>`;
  WEEKLY_DAYS.forEach(d => {
    html += `<button class="subjectTab${sel === d.s ? ' active' : ''}" onclick="setWeeklySubject('${d.s}')">${d.emoji} ${d.day} ${d.label}</button>`;
  });
  bar.innerHTML = html;
}

function onWeekSelectChange(sel) {
  setSelectedWeek(parseInt(sel.value, 10));
}

function weeklyDoneKey(week, subject) {
  return 'wk' + currentGrade + '-' + week + '-' + subject;
}

const WEEKLY_MAX_ATTEMPTS = QuizRules.MAX_ATTEMPTS;

function weeklyQuizExhausted(key) {
  const arr = (STATE.quizAttempts && STATE.quizAttempts[key]) || [];
  return QuizRules.isExhausted(arr);
}

function renderWeekly() {
  const box = document.getElementById('weekly');
  if (!box) return;
  if (typeof STATE === 'undefined' || !STATE) return;
  if (!STATE.weeklyDone) STATE.weeklyDone = {};
  if (!STATE.quizScores) STATE.quizScores = {};

  const data = weeklyData();
  if (!data.length) { box.innerHTML = ''; return; }

  const selected = getSelectedWeek();
  const unit = data.find(w => w.week === selected) || data[0];

  // Week selector dropdown (styled to match)
  let optionsHtml = '';
  data.forEach(u => {
    const doneCount = WEEKLY_DAYS.filter(d => STATE.weeklyDone[weeklyDoneKey(u.week, d.s)]).length;
    optionsHtml += `<option value="${u.week}"${u.week === unit.week ? ' selected' : ''}>Week ${u.week}${doneCount === 4 ? ' ✓' : ''}</option>`;
  });
  const selectorHtml = `<div class="weekSelectRow"><label class="weekSelectLabel" for="weekSelect">Week</label><select id="weekSelect" class="weekSelect" onchange="onWeekSelectChange(this)">${optionsHtml}</select></div>`;

  // Subject tab bar (Mon Math / Tue ELA / Wed Science / Thu Social + All)
  const subjectTabsHtml = '<nav class="subjectTabs weeklySubjectTabs" id="weeklySubjectTabs" aria-label="Weekly subject navigation"></nav>';

  // Per-week progress line
  const weekDone = WEEKLY_DAYS.filter(d => STATE.weeklyDone[weeklyDoneKey(unit.week, d.s)]).length;

  // Day cards
  let cardsHtml = '<div class="weekGrid">';
  WEEKLY_DAYS.forEach(d => {
    const subj = unit.subjects.find(x => x.s === d.s);
    if (!subj) return;
    const dkey = weeklyDoneKey(unit.week, d.s);
    const done = !!STATE.weeklyDone[dkey];
    const scoreKey = dkey;
    const score = STATE.quizScores[scoreKey];
    const scoreChip = (score !== undefined) ? `<span class="chip">Quiz: ${score}%</span>` : '';
    const eligible = Number(score) >= 90;
    const exhausted = weeklyQuizExhausted(dkey);
    const attemptsArr = (STATE.quizAttempts && STATE.quizAttempts[dkey]) || [];

    let quizInnerHtml;
    if (exhausted) {
      // Locked/completed state on load: show composite, no retry.
      const composite = (score !== undefined) ? score
        : QuizRules.compositeScore(attemptsArr);
      quizInnerHtml = `<strong>Quick Check</strong><div class="feedback" id="wkfb-${d.s}" style="color:#22c55e">Final score: ${composite}% (composite of ${attemptsArr.length} attempt${attemptsArr.length === 1 ? '' : 's'})</div>`;
    } else {
      let qcHtml = '';
      const attemptNo = attemptsArr.length + 1;
      subj.qc.forEach((item, qi) => {
        let choicesHtml = '';
        weeklyShuffle(item.choices).forEach((c, ci) => {
          choicesHtml += `<button class="choice" data-q="${qi}" data-c="${ci}" onclick="weeklyPick(this)">${weeklyEscHtml(c)}</button>`;
        });
        qcHtml += `<div class="quizItem"><p class="wkQ">${qi + 1}. ${weeklyEscHtml(item.q)}</p><div class="choiceGroup" data-answer="${weeklyEscAttr(item.a)}">${choicesHtml}</div></div>`;
      });
      quizInnerHtml = `<strong>Quick Check</strong><div class="quizAttemptTag">Attempt ${attemptNo} of ${WEEKLY_MAX_ATTEMPTS}</div>${qcHtml}<div class="feedback" id="wkfb-${d.s}"></div><div class="questActions"><button class="wkCheckBtn" onclick="weeklyCheck(this.closest('.weeklyCard'))">Check Answers</button></div>`;
    }

    cardsHtml += `
      <details class="quest weeklyCard${done ? ' done' : ''}" data-week="${unit.week}" data-subject="${d.s}">
        <summary class="questSummary weeklySummary"><div><h3>${d.emoji} ${d.day} — ${d.label}</h3><div class="chips"><span class="chip">${weeklyEscHtml(subj.concept)}</span><span class="chip stdChip">${weeklyEscHtml(subj.std)}</span>${scoreChip}</div></div><span class="accordionChevron" aria-hidden="true">＋</span></summary>
        <div class="questBody weeklyCardBody">
        <div class="chips"><span class="chip">${weeklyEscHtml(subj.concept)}</span><span class="chip stdChip">${weeklyEscHtml(subj.std)}</span>${scoreChip}</div>
        <p class="task"><strong>🎯 20-min Mission:</strong> ${weeklyEscHtml(subj.sprint)}</p>
        <div class="questActions">
          <a class="link" target="_blank" rel="noopener" href="${weeklyEscAttr(subj.video)}">▶ Watch / Learn</a>
        </div>
        <div class="quiz interactiveQuiz${exhausted ? ' quizLocked' : ''}" data-day="${d.s}">
          ${quizInnerHtml}
        </div>
        <div class="questActions">
           <button class="secondary" ${done || !eligible ? 'disabled' : ''} title="${done ? 'Day complete' : eligible ? 'Score is high enough to complete this day' : 'Finish the quick check with a final score of at least 90% first'}" onclick="weeklyMarkDone(this.closest('.weeklyCard'))">Mark Day Done ${done ? '✓' : ''}</button>
           ${!done && !eligible ? '<small class="completionHint">Complete the quick check with a final score of 90% or higher to unlock.</small>' : ''}
        </div>
        </div>
      </details>`;
  });
  cardsHtml += '</div>';

  box.innerHTML = `
    <div class="module weeklyModule">
      <div class="moduleHead"><div><h2>📅 Weekly Homework — Ohio Standards</h2><p>Four days, four subjects. Each mission is a quick 20-minute sprint aligned to Ohio Learning Standards.</p></div><span>${data.length} weeks</span></div>
      <div class="weeklyBody">
        ${selectorHtml}
        <div class="weekTitleRow">
          <h3 class="weekTitle">Week ${unit.week}: ${weeklyEscHtml(unit.title)}</h3>
          <span class="weekProgress">${weekDone}/4 days done</span>
        </div>
        <a class="printWeekBtn" href="worksheet.html?grade=${currentGrade}&week=${unit.week}" target="_blank" rel="noopener">🖨️ Print This Week's Worksheet</a>
        ${subjectTabsHtml}
        ${cardsHtml}
      </div>
    </div>`;
  renderWeeklySubjectTabs();
  applyWeeklySubjectFilter(getWeeklySubject());
}

// Toggle a choice selection (one per question group). No-op once graded/locked.
function weeklyPick(btn) {
  const quiz = btn.closest('.interactiveQuiz');
  if (quiz && quiz.classList.contains('quizLocked')) return;
  const group = btn.parentElement;
  group.querySelectorAll('.choice').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
}

// Rebuild a single day card's quiz UI for a fresh retry attempt (new shuffle).
function weeklyRetry(card) {
  const week = parseInt(card.getAttribute('data-week'), 10);
  const subject = card.getAttribute('data-subject');
  const data = weeklyData();
  const unit = data.find(w => w.week === week);
  const subj = unit && unit.subjects.find(x => x.s === subject);
  const quizBox = card.querySelector('.interactiveQuiz');
  if (!subj || !quizBox) return;
  const key = weeklyDoneKey(week, subject);
  const attemptNo = ((STATE.quizAttempts && STATE.quizAttempts[key]) || []).length + 1;
  let qcHtml = '';
  subj.qc.forEach((item, qi) => {
    let choicesHtml = '';
    weeklyShuffle(item.choices).forEach((c, ci) => {
      choicesHtml += `<button class="choice" data-q="${qi}" data-c="${ci}" onclick="weeklyPick(this)">${weeklyEscHtml(c)}</button>`;
    });
    qcHtml += `<div class="quizItem"><p class="wkQ">${qi + 1}. ${weeklyEscHtml(item.q)}</p><div class="choiceGroup" data-answer="${weeklyEscAttr(item.a)}">${choicesHtml}</div></div>`;
  });
  quizBox.classList.remove('quizLocked');
  quizBox.innerHTML = `<strong>Quick Check</strong><div class="quizAttemptTag">Attempt ${attemptNo} of ${WEEKLY_MAX_ATTEMPTS}</div>${qcHtml}<div class="feedback" id="wkfb-${subject}"></div><div class="questActions"><button class="wkCheckBtn" onclick="weeklyCheck(this.closest('.weeklyCard'))">Check Answers</button></div>`;
}

// Score the quick-check questions; lock the attempt, log it, retry or composite.
function weeklyCheck(card) {
  const week = parseInt(card.getAttribute('data-week'), 10);
  const subject = card.getAttribute('data-subject');
  const quizBox = card.querySelector('.interactiveQuiz');
  if (quizBox && quizBox.classList.contains('quizLocked')) return; // already graded
  const groups = card.querySelectorAll('.choiceGroup');
  const fb = card.querySelector('.feedback');
  let answered = 0;
  groups.forEach(g => { if (g.querySelector('.choice.selected')) answered++; });
  const total = groups.length;
  if (answered < total) {
    if (fb) fb.textContent = 'Answer both questions first!';
    return;
  }
  let correct = 0;
  groups.forEach(g => {
    const sel = g.querySelector('.choice.selected');
    if (sel && sel.textContent === g.getAttribute('data-answer')) {
      correct++;
      sel.classList.add('correct');
    } else if (sel) {
      sel.classList.add('wrong');
    }
    // Lock and reveal the correct answer
    g.querySelectorAll('.choice').forEach(b => {
      b.disabled = true;
      if (b.textContent === g.getAttribute('data-answer')) b.classList.add('correct');
    });
  });
  const pct = Math.round((correct / total) * 100);
  const key = weeklyDoneKey(week, subject);

  if (!STATE.quizAttempts) STATE.quizAttempts = {};
  if (!STATE.quizAttempts[key]) STATE.quizAttempts[key] = [];
  if (STATE.quizAttempts[key].length < WEEKLY_MAX_ATTEMPTS) STATE.quizAttempts[key].push(pct);
  const attempts = STATE.quizAttempts[key];
  const attemptNo = attempts.length;

  if (quizBox) quizBox.classList.add('quizLocked');
  const checkBtn = card.querySelector('.wkCheckBtn');
  if (checkBtn) checkBtn.disabled = true;

  if (typeof logEvent === 'function') logEvent('quiz_attempt', { quiz: key, attempt: attemptNo, score: pct }, 0);

  const finished = QuizRules.isExhausted(attempts);

  if (!finished) {
    if (fb) fb.textContent = `You got ${correct}/${total} (${pct}%).`;
    const retryBtn = document.createElement('button');
    retryBtn.className = 'secondary retryQuizBtn';
    retryBtn.textContent = `Retry (attempt ${attemptNo + 1} of ${WEEKLY_MAX_ATTEMPTS})`;
    retryBtn.onclick = () => weeklyRetry(card);
    if (fb) fb.after(retryBtn);
    if (typeof save === 'function') save();
    return;
  }

  // Final: composite score
  const composite = QuizRules.compositeScore(attempts);
  const prev = STATE.quizScores[key];
  STATE.quizScores[key] = composite;
  const xpBonus = QuizRules.xpAwardFor(composite, prev >= 100, 100, 10);
  if (xpBonus) {
    STATE.xp = (STATE.xp || 0) + xpBonus;
  }
  const xpAwarded = xpBonus > 0;
  if (fb) fb.textContent = `Final score: ${composite}% (composite of ${attempts.length} attempts).${xpAwarded ? ' +10 XP' : ''}`;
  if (typeof save === 'function') save();
  if (typeof logEvent === 'function') logEvent('weekly_quiz_graded', { week, subject, score: composite }, xpBonus);
  renderWeekly();
}

// Mark a day complete: +20 XP once, save, log event
function weeklyMarkDone(card) {
  const week = parseInt(card.getAttribute('data-week'), 10);
  const subject = card.getAttribute('data-subject');
  const key = weeklyDoneKey(week, subject);
  if (!STATE.weeklyDone) STATE.weeklyDone = {};
  const score = Number(STATE.quizScores && STATE.quizScores[key]);
  if (!QuizRules.isMastered(score, 90)) {
    const feedback = card.querySelector('.feedback');
    if (feedback) feedback.textContent = 'Finish the quick check with a final score of at least 90% before marking this day done.';
    return;
  }
  if (!STATE.weeklyDone[key]) {
    STATE.weeklyDone[key] = true;
    STATE.xp = (STATE.xp || 0) + 20;
    if (typeof save === 'function') save();
    if (typeof logEvent === 'function') logEvent('weekly_day_done', { week, subject }, 20);
  }
  renderWeekly();
  if (typeof showProgressSheet === 'function') setTimeout(showProgressSheet, 0);
}

// Initial render (weekly.js loads after app.js, so the first buildCourse ran before renderWeekly existed)
if (document.getElementById('weekly')) { try { renderWeekly(); } catch (e) { console.error('weekly init', e); } }
