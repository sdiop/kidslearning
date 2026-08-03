// Weekly Homework — Ohio Standards
// Renders an 8-week homework section for the active grade using WEEKLY_G5 / WEEKLY_G7.
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

function getSelectedWeek() {
  const key = 'qaWeek' + currentGrade;
  let n = parseInt(localStorage.getItem(key) || '1', 10);
  if (!Number.isFinite(n) || n < 1 || n > 8) n = 1;
  return n;
}

function setSelectedWeek(n) {
  localStorage.setItem('qaWeek' + currentGrade, String(n));
  renderWeekly();
  const box = document.getElementById('weekly');
  if (box) box.scrollIntoView({ behavior: 'smooth' });
}

function weeklyDoneKey(week, subject) {
  return 'wk' + currentGrade + '-' + week + '-' + subject;
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

  // Week selector buttons 1-8
  let selectorHtml = '<div class="weekSelector">';
  for (let i = 1; i <= 8; i++) {
    const u = data.find(w => w.week === i);
    if (!u) continue;
    const doneCount = WEEKLY_DAYS.filter(d => STATE.weeklyDone[weeklyDoneKey(i, d.s)]).length;
    const cls = 'weekBtn' + (i === unit.week ? ' active' : '') + (doneCount === 4 ? ' complete' : '');
    selectorHtml += `<button class="${cls}" onclick="setSelectedWeek(${i})">Week ${i}${doneCount === 4 ? ' ✓' : ''}</button>`;
  }
  selectorHtml += '</div>';

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

    let qcHtml = '';
    subj.qc.forEach((item, qi) => {
      let choicesHtml = '';
      item.choices.forEach((c, ci) => {
        choicesHtml += `<button class="choice" data-q="${qi}" data-c="${ci}" onclick="weeklyPick(this)">${weeklyEscHtml(c)}</button>`;
      });
      qcHtml += `<div class="quizItem"><p class="wkQ">${qi + 1}. ${weeklyEscHtml(item.q)}</p><div class="choiceGroup" data-answer="${weeklyEscAttr(item.a)}">${choicesHtml}</div></div>`;
    });

    cardsHtml += `
      <article class="quest weeklyCard${done ? ' done' : ''}" data-week="${unit.week}" data-subject="${d.s}">
        <h3>${d.emoji} ${d.day} — ${d.label}</h3>
        <div class="chips"><span class="chip">${weeklyEscHtml(subj.concept)}</span><span class="chip stdChip">${weeklyEscHtml(subj.std)}</span>${scoreChip}</div>
        <p class="task"><strong>🎯 20-min Mission:</strong> ${weeklyEscHtml(subj.sprint)}</p>
        <div class="questActions">
          <a class="link" target="_blank" rel="noopener" href="${weeklyEscAttr(subj.video)}">▶ Watch / Learn</a>
        </div>
        <div class="quiz interactiveQuiz">
          <strong>Quick Check</strong>
          ${qcHtml}
          <div class="feedback" id="wkfb-${d.s}"></div>
          <div class="questActions">
            <button onclick="weeklyCheck(this.closest('.weeklyCard'))">Check Answers</button>
            <button class="secondary" onclick="weeklyMarkDone(this.closest('.weeklyCard'))">Mark Day Done ${done ? '✓' : ''}</button>
          </div>
        </div>
      </article>`;
  });
  cardsHtml += '</div>';

  box.innerHTML = `
    <div class="module weeklyModule">
      <div class="moduleHead"><div><h2>📅 Weekly Homework — Ohio Standards</h2><p>Four days, four subjects. Each mission is a quick 20-minute sprint aligned to Ohio Learning Standards.</p></div><span>8 weeks</span></div>
      <div class="weeklyBody">
        ${selectorHtml}
        <div class="weekTitleRow">
          <h3 class="weekTitle">Week ${unit.week}: ${weeklyEscHtml(unit.title)}</h3>
          <span class="weekProgress">${weekDone}/4 days done</span>
        </div>
        <a class="printWeekBtn" href="worksheet.html?grade=${currentGrade}&week=${unit.week}" target="_blank" rel="noopener">🖨️ Print This Week's Worksheet</a>
        ${cardsHtml}
      </div>
    </div>`;
}

// Toggle a choice selection (one per question group)
function weeklyPick(btn) {
  const group = btn.parentElement;
  group.querySelectorAll('.choice').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
}

// Score the two quick-check questions; award XP if both correct
function weeklyCheck(card) {
  const week = parseInt(card.getAttribute('data-week'), 10);
  const subject = card.getAttribute('data-subject');
  const groups = card.querySelectorAll('.choiceGroup');
  let correct = 0;
  let answered = 0;
  groups.forEach(g => {
    const sel = g.querySelector('.choice.selected');
    if (sel) {
      answered++;
      if (sel.textContent === g.getAttribute('data-answer')) {
        correct++;
        sel.classList.add('correct');
      } else {
        sel.classList.add('wrong');
      }
    }
  });
  const total = groups.length;
  const fb = card.querySelector('.feedback');
  if (answered < total) {
    if (fb) fb.textContent = 'Answer both questions first!';
    return;
  }
  const pct = Math.round((correct / total) * 100);
  const key = weeklyDoneKey(week, subject);
  const prev = STATE.quizScores[key];
  STATE.quizScores[key] = Math.max(prev || 0, pct);

  if (correct === total && !(prev >= 100)) {
    STATE.xp = (STATE.xp || 0) + 10;
    if (fb) fb.textContent = '✅ Perfect! +10 XP';
  } else if (correct === total) {
    if (fb) fb.textContent = '✅ Perfect!';
  } else {
    if (fb) fb.textContent = `You got ${correct}/${total}. Try the misses again!`;
  }
  if (typeof save === 'function') save();
  // Note: no immediate re-render — keep selections and correct/wrong feedback
  // visible so the child can review misses. The score chip refreshes on the
  // next render (week switch, day-done, or reload).
}

// Mark a day complete: +20 XP once, save, log event
function weeklyMarkDone(card) {
  const week = parseInt(card.getAttribute('data-week'), 10);
  const subject = card.getAttribute('data-subject');
  const key = weeklyDoneKey(week, subject);
  if (!STATE.weeklyDone) STATE.weeklyDone = {};
  if (!STATE.weeklyDone[key]) {
    STATE.weeklyDone[key] = true;
    STATE.xp = (STATE.xp || 0) + 20;
    if (typeof save === 'function') save();
    if (typeof logEvent === 'function') logEvent('weekly_day_done', { week, subject }, 20);
  }
  renderWeekly();
}

// Initial render (weekly.js loads after app.js, so the first buildCourse ran before renderWeekly existed)
if (document.getElementById('weekly')) { try { renderWeekly(); } catch (e) { console.error('weekly init', e); } }
