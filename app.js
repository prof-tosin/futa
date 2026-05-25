/**
 * app.js — FUTA Online Class Portal Engine
 *
 * Handles all routing, rendering, and CBT logic.
 * Depends on: data.js (must be loaded first)
 */

"use strict";

let state = { page: "home", levelId: null, semId: null, courseCode: null };
let cbtState = {};
let activeSemTab = {};
let cbtTimer = null;

/* ─────────────────────────────────────────────────────────────────
   ROUTING
───────────────────────────────────────────────────────────────── */
function navigate(page, levelId, courseCode, semId) {
  state = { page, levelId: levelId || null, semId: semId || null, courseCode: courseCode || null };
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');
  updateBreadcrumb();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (page === 'level')  renderLevel(levelId);
  if (page === 'course') renderCourse(levelId, courseCode);
}

function updateBreadcrumb() {
  const bc = document.getElementById('breadcrumb');
  const crumbs = [{ label: 'Home', page: 'home' }];
  if (state.levelId) {
    const lvl = PORTAL_DATA.levels.find(l => l.id === state.levelId);
    if (lvl) crumbs.push({ label: lvl.name, page: 'level', levelId: state.levelId });
  }
  if (state.courseCode && state.levelId) {
    const lvl = PORTAL_DATA.levels.find(l => l.id === state.levelId);
    let course = null;
    lvl?.semesters.forEach(s => {
      const c = s.courses.find(c => c.code === state.courseCode);
      if (c) course = c;
    });
    if (course) crumbs.push({ label: course.code, page: 'course', levelId: state.levelId, courseCode: state.courseCode });
  }
  bc.innerHTML = crumbs.map((c, i) => {
    const isLast = i === crumbs.length - 1;
    if (isLast) return `<span class="crumb active">${c.label}</span>`;
    return `<span class="crumb" onclick="navigate('${c.page}','${c.levelId||''}','${c.courseCode||''}')">${c.label}</span><span class="sep">/</span>`;
  }).join('');
}

/* ─────────────────────────────────────────────────────────────────
   HOME PAGE
───────────────────────────────────────────────────────────────── */
function renderHome() {
  let totalCourses = 0, totalChapters = 0, totalQ = 0;
  PORTAL_DATA.levels.forEach(l => {
    l.semesters.forEach(s => {
      s.courses.forEach(c => {
        totalCourses++;
        c.chapters.forEach(ch => {
          totalChapters++;
          totalQ += (ch.questions || []).length;
        });
      });
    });
  });

  document.getElementById('hero-stats').innerHTML = `
    <div class="stat"><div class="stat-num">${PORTAL_DATA.levels.length}</div><div class="stat-label">Levels</div></div>
    <div class="stat"><div class="stat-num">${totalCourses}</div><div class="stat-label">Courses</div></div>
    <div class="stat"><div class="stat-num">${totalChapters}</div><div class="stat-label">Chapters</div></div>
    <div class="stat"><div class="stat-num">${totalQ}+</div><div class="stat-label">Practice Questions</div></div>
  `;

  const grid = document.getElementById('level-grid');
  grid.innerHTML = PORTAL_DATA.levels.map(lvl => {
    const totalCrs = lvl.semesters.reduce((sum, s) => sum + s.courses.length, 0);
    const hasCourses = totalCrs > 0;
    const semCount = lvl.semesters.length > 1 ? `${lvl.semesters.length} semesters` : '';
    return `
      <div class="level-card ${hasCourses ? '' : 'empty'}"
           onclick="${hasCourses ? `navigate('level','${lvl.id}')` : 'void(0)'}">
        <div class="level-badge">${lvl.name}</div>
        <div class="level-name">${lvl.name}</div>
        <div class="level-full">${lvl.fullName}</div>
        <div class="level-footer">
          ${hasCourses
            ? `<span class="level-count">${totalCrs} course${totalCrs !== 1 ? 's' : ''}${semCount ? ' · ' + semCount : ''}</span>
               <span class="level-arrow">→</span>`
            : `<span class="coming-soon-tag">Coming Soon</span>`}
        </div>
      </div>`;
  }).join('');
}

/* ─────────────────────────────────────────────────────────────────
   LEVEL PAGE
───────────────────────────────────────────────────────────────── */
function renderLevel(levelId) {
  const lvl = PORTAL_DATA.levels.find(l => l.id === levelId);
  if (!lvl) return;

  document.getElementById('level-tag').textContent = 'All Departments';
  document.getElementById('level-title').textContent = lvl.fullName + ' — ' + lvl.name;
  document.getElementById('level-desc').textContent = lvl.description;

  const container = document.getElementById('course-content');
  const hasAnyCourses = lvl.semesters.some(s => s.courses.length > 0);
  if (!hasAnyCourses) {
    container.innerHTML = comingSoonBanner('This level', 'Courses are being prepared for this programme. Check back soon!');
    return;
  }

  const hasTabs = lvl.semesters.length > 1;
  if (!activeSemTab[levelId]) activeSemTab[levelId] = lvl.semesters[0].id;

  let html = '';
  if (hasTabs) {
    html += `<div class="semester-tabs" id="sem-tabs-${levelId}">`;
    lvl.semesters.forEach(sem => {
      const isActive = activeSemTab[levelId] === sem.id;
      html += `<div class="sem-tab ${isActive ? 'active' : ''}" onclick="switchSem('${levelId}','${sem.id}')">${sem.name}</div>`;
    });
    html += `</div>`;
  }

  lvl.semesters.forEach(sem => {
    const isActive = !hasTabs || activeSemTab[levelId] === sem.id;
    html += `<div class="sem-panel ${isActive ? 'active' : ''}" id="sem-panel-${levelId}-${sem.id}">`;
    if (!sem.courses.length) {
      html += comingSoonBanner(sem.name, 'Courses for this semester are being prepared.');
    } else {
      html += `<div class="course-grid">`;
      sem.courses.forEach(course => {
        const hasChapters = course.chapters.length > 0;
        html += `
          <div class="course-card ${hasChapters ? '' : 'empty'}"
            onclick="${hasChapters ? `navigate('course','${escQ(levelId)}','${escQ(course.code)}')` : 'void(0)'}">
            <div class="course-code">${course.code}</div>
            <div class="course-title">${course.title}</div>
            <div class="course-meta">
              ${hasChapters
                ? `<span class="chapter-count">📖 ${course.chapters.length} chapter${course.chapters.length !== 1 ? 's' : ''}</span>
                   <span class="course-arrow">→</span>`
                : `<span class="coming-soon-tag">Coming soon</span>`}
            </div>
          </div>`;
      });
      html += `</div>`;
    }
    html += `</div>`;
  });

  container.innerHTML = html;
}

function switchSem(levelId, semId) {
  activeSemTab[levelId] = semId;
  const lvl = PORTAL_DATA.levels.find(l => l.id === levelId);
  const tabContainer = document.getElementById(`sem-tabs-${levelId}`);
  if (tabContainer) {
    tabContainer.querySelectorAll('.sem-tab').forEach((tab, i) => {
      tab.classList.toggle('active', lvl.semesters[i].id === semId);
    });
  }
  lvl.semesters.forEach(sem => {
    const panel = document.getElementById(`sem-panel-${levelId}-${sem.id}`);
    if (panel) panel.classList.toggle('active', sem.id === semId);
  });
}

/* ─────────────────────────────────────────────────────────────────
   COURSE PAGE
───────────────────────────────────────────────────────────────── */
function renderCourse(levelId, courseCode) {
  const lvl = PORTAL_DATA.levels.find(l => l.id === levelId);
  let course = null, semName = '';
  lvl?.semesters.forEach(s => {
    const c = s.courses.find(c => c.code === courseCode);
    if (c) { course = c; semName = s.name; }
  });
  if (!course) return;

  document.getElementById('course-tag').textContent = lvl.name + ' · ' + semName + ' · ' + course.code;
  document.getElementById('course-title').textContent = course.title;
  document.getElementById('course-desc').textContent = course.description || '';
  document.getElementById('course-back-btn').onclick = () => navigate('level', levelId);

  const container = document.getElementById('chapter-content');
  if (!course.chapters.length) {
    container.innerHTML = comingSoonBanner(course.code, 'Chapter materials for this course are being prepared. Check back soon!');
    return;
  }

  container.innerHTML = `<div class="chapter-list">${course.chapters.map((ch, idx) => `
    <div class="chapter-item" id="ch-${idx}">
      <div class="chapter-header" onclick="toggleChapter(${idx})">
        <div class="ch-num">${String(ch.number).padStart(2,'0')}</div>
        <div class="ch-info">
          <div class="ch-label">Chapter ${ch.number}</div>
          <div class="ch-title">${ch.title}</div>
        </div>
        <div class="ch-toggle">▾</div>
      </div>
      <div class="chapter-body">
        ${ch.summary ? `<div class="ch-summary">${ch.summary}</div>` : ''}
        ${ch.keyPoints && ch.keyPoints.length ? `
          <div class="ch-keypoints">
            <div class="ch-keypoints-title">Key Points</div>
            <ul>${ch.keyPoints.map(kp => `<li>${kp}</li>`).join('')}</ul>
          </div>` : ''}
        <div class="ch-actions">
          ${ch.pdfUrl ? `<a class="btn btn-secondary" href="${ch.pdfUrl}" target="_blank" rel="noopener">📄 Read PDF</a>` : ''}
          ${(ch.questions && ch.questions.length) ? `<button class="btn btn-primary" onclick="startCBT('${escQ(courseCode)}','${escQ(levelId)}',${idx})">🎯 Practice CBT</button>` : ''}
          ${ch.cbtUrl ? `<a class="btn btn-ghost" href="${ch.cbtUrl}" target="_blank" rel="noopener">🔗 External CBT</a>` : ''}
        </div>
      </div>
    </div>`).join('')}
  </div>`;
}

function toggleChapter(idx) {
  document.getElementById('ch-' + idx).classList.toggle('open');
}

/* ─────────────────────────────────────────────────────────────────
   CBT ENGINE
───────────────────────────────────────────────────────────────── */
function startCBT(courseCode, levelId, chapterIdx) {
  const lvl = PORTAL_DATA.levels.find(l => l.id === levelId);
  let chapter = null;
  lvl?.semesters.forEach(s => {
    const c = s.courses.find(c => c.code === courseCode);
    if (c && c.chapters[chapterIdx]) chapter = c.chapters[chapterIdx];
  });
  if (!chapter || !chapter.questions.length) return;

  const limit = chapter.questionLimit || chapter.questions.length;
const questions = shuffle([...chapter.questions]).slice(0, limit);
  cbtState = { questions, current: 0, score: 0, answered: false, timeLimit: (chapter.timeLimit || 0) * 60 };
  document.getElementById('cbt-modal-title').textContent = `Chapter ${chapter.number} — CBT Practice`;
  document.getElementById('cbt-modal-sub').textContent = chapter.title;
  document.getElementById('cbt-modal').classList.add('open');
  renderCBTQuestion();
     // ← ADD THIS: start the timer
  clearInterval(cbtTimer);
  if (cbtState.timeLimit > 0) {
    cbtState.secondsLeft = cbtState.timeLimit;
    startCBTTimer();
  }
}

function renderCBTQuestion() {
  const { questions, current } = cbtState;
  const q = questions[current];
  const total = questions.length;
  const pct = (current / total * 100).toFixed(0);
  document.getElementById('cbt-body').innerHTML = `
    <div class="cbt-progress"><div class="cbt-progress-bar" style="width:${pct}%"></div></div>
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
  <div class="cbt-q-count">Question ${current + 1} of ${total}</div>
  ${cbtState.timeLimit > 0 
    ? `<div id="cbt-timer" style="font-family:'JetBrains Mono',monospace; font-size:0.85rem; font-weight:600; color:var(--gold); background:rgba(201,146,26,0.1); border:1px solid rgba(201,146,26,0.3); padding:4px 12px; border-radius:4px;">--:--</div>` 
    : ''}
</div>
    <div class="cbt-question">${q.text}</div>
    <div class="cbt-options">
      ${q.options.map((opt, i) => `
        <button class="cbt-option" id="opt-${i}" onclick="answerCBT(${i})">${String.fromCharCode(65+i)}. ${opt}</button>
      `).join('')}
    </div>
    <div class="cbt-feedback" id="cbt-feedback"></div>
    <div class="cbt-nav">
      <span></span>
      <button class="btn btn-primary" id="cbt-next-btn" style="display:none" onclick="nextCBTQuestion()">
        ${current + 1 >= total ? 'See Results' : 'Next →'}
      </button>
    </div>
  `;
  cbtState.answered = false;
}

function answerCBT(chosen) {
  if (cbtState.answered) return;
  cbtState.answered = true;
  const q = cbtState.questions[cbtState.current];
  const correct = q.correct;
  const isCorrect = chosen === correct;
  if (isCorrect) cbtState.score++;
  document.querySelectorAll('.cbt-option').forEach((btn, i) => {
    btn.disabled = true;
    if (i === correct) btn.classList.add(isCorrect ? 'selected-correct' : 'reveal-correct');
    if (i === chosen && !isCorrect) btn.classList.add('selected-wrong');
  });
  const fb = document.getElementById('cbt-feedback');
  fb.className = 'cbt-feedback show ' + (isCorrect ? 'correct' : 'wrong');
  fb.innerHTML = isCorrect
    ? `✅ Correct! ${q.explanation || ''}`
    : `❌ Incorrect. Correct answer: <strong>${String.fromCharCode(65+correct)}. ${q.options[correct]}</strong>. ${q.explanation || ''}`;
  document.getElementById('cbt-next-btn').style.display = 'inline-flex';
}

function nextCBTQuestion() {
  cbtState.current++;
  if (cbtState.current >= cbtState.questions.length) showCBTResults();
  else renderCBTQuestion();
}

function showCBTResults(timeExpired = false) {
  clearInterval(cbtTimer); // ← stop the timer
  const { score, questions } = cbtState;
  const total = questions.length;
  const pct = Math.round(score / total * 100);
  const grade = pct >= 70 ? '🏆 Distinction!' : pct >= 50 ? '👍 Good Effort!' : '📚 Keep Studying!';
  
  // ← add the time expired message
  const timeMsg = timeExpired 
    ? `<div style="color:#c0392b; font-size:0.8rem; margin-bottom:12px; font-family:'Lora',serif; font-style:italic;">⏰ Time expired — quiz submitted automatically.</div>` 
    : '';

  document.getElementById('cbt-body').innerHTML = `
    <div class="cbt-score-screen">
      ${timeMsg}
      <div class="score-ring" style="--pct:${pct * 3.6}deg">
        <div class="score-num">${pct}%</div>
      </div>
      <div class="score-label">${grade}</div>
      <div class="score-sub">You scored ${score} out of ${total} questions.</div>
      <div style="margin-top:26px;display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
        <button class="btn btn-primary" onclick="restartCBT()">🔄 Try Again</button>
        <button class="btn btn-ghost" onclick="closeCBT()">Close</button>
      </div>
    </div>
  `;
}

function restartCBT() {
  clearInterval(cbtTimer);
  cbtState.current = 0;
  cbtState.score = 0;
  cbtState.secondsLeft = cbtState.timeLimit;
  cbtState.questions = shuffle([...cbtState.questions]);
  renderCBTQuestion();
  if (cbtState.timeLimit > 0) startCBTTimer();
}

function closeCBT() {
  clearInterval(cbtTimer); // ← add this line
  document.getElementById('cbt-modal').classList.remove('open');
}

/* ─────────────────────────────────────────────────────────────────
   UTILITIES
───────────────────────────────────────────────────────────────── */
function comingSoonBanner(name, msg) {
  return `<div class="coming-soon-banner">
    <span class="icon">📜</span>
    <h3>Coming Soon</h3>
    <p>${msg || name + ' materials are being prepared.'}</p>
  </div>`;
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function escQ(str) {
  return (str || '').replace(/'/g, "\\'");
}

function startCBTTimer() {
  updateTimerDisplay();
  cbtTimer = setInterval(() => {
    cbtState.secondsLeft--;
    updateTimerDisplay();
    if (cbtState.secondsLeft <= 0) {
      clearInterval(cbtTimer);
      showCBTResults(true); // true = time expired
    }
  }, 1000);
}

function updateTimerDisplay() {
  const el = document.getElementById('cbt-timer');
  if (!el) return;
  const m = Math.floor(cbtState.secondsLeft / 60);
  const s = cbtState.secondsLeft % 60;
  const display = `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  el.textContent = display;
  // turn red when under 1 minute
  el.style.color = cbtState.secondsLeft <= 60 ? '#c0392b' : '';
}

/* ─────────────────────────────────────────────────────────────────
   MODAL BACKDROP CLOSE
───────────────────────────────────────────────────────────────── */
document.getElementById('cbt-modal').addEventListener('click', function(e) {
  if (e.target === this) closeCBT();
});

/* ─────────────────────────────────────────────────────────────────
   INIT
───────────────────────────────────────────────────────────────── */
renderHome();
updateBreadcrumb();
