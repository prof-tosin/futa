// ============================================================
//  app.js  —  FUTA Online Class
//  Phase 1: CBT configurator, combining
//  Phase 2: Firebase Auth + Realtime Database (no billing needed)
//
//  Load order: firebase.js → registry.js → courses → data.js → app.js
// ============================================================

‘use strict’;

// ── FIREBASE INSTANCES ────────────────────────────────────────
let _auth        = null;
let _db          = null;   // Realtime Database instance
let _currentUser = null;
let _userProfile = null;

// ── ROUTER STATE ──────────────────────────────────────────────
let _state = { level: null, course: null, chapter: null };

// ── CBT SESSION STATE ─────────────────────────────────────────
let _cbt = {
questions: [], current: 0, answers: [],
mode: ‘practice’, timeLimit: 0,
timerHandle: null, timeLeft: 0,
sourceName: ‘’, sourceId: ‘’,
};

// ── COMBINE STATE ─────────────────────────────────────────────
let _combineChapters = new Set();
let _combineCourses  = new Set();
let _combineMode     = false;

// ============================================================
//  FIREBASE INIT  (Auth + Realtime Database)
// ============================================================
async function initFirebase() {
if (!window.FIREBASE_CONFIG ||
window.FIREBASE_CONFIG.apiKey === ‘PASTE_YOUR_API_KEY_HERE’) {
console.warn(’[FUTA] firebase.js not configured — cloud features disabled.’);
return;
}
try {
const { initializeApp } =
await import(‘https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js’);

```
const { getAuth, onAuthStateChanged,
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword, signOut } =
  await import('https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js');

const { getDatabase, ref, set, get, push,
        query, orderByChild, limitToLast, equalTo } =
  await import('https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js');

const app = initializeApp(window.FIREBASE_CONFIG);
_auth = getAuth(app);
_db   = getDatabase(app);

// Attach RTDB helpers globally so all functions can use them
window._fb = {
  // Auth
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  // RTDB
  ref, set, get, push,
  query, orderByChild, limitToLast, equalTo,
};

onAuthStateChanged(_auth, async user => {
  _currentUser = user;
  if (user) {
    try {
      const snap = await _fb.get(_fb.ref(_db, `users/${user.uid}`));
      _userProfile = snap.exists() ? snap.val() : null;
    } catch (e) {
      _userProfile = null;
    }
  } else {
    _userProfile = null;
  }
  renderNavAuth();
});
```

} catch (e) {
console.error(’[FUTA] Firebase init error:’, e);
}
}

// ============================================================
//  BOOT
// ============================================================
document.addEventListener(‘DOMContentLoaded’, async () => {
await initFirebase();
buildHeroStats();
bindNav();
handleHash();
});

window.addEventListener(‘popstate’, handleHash);

function handleHash() {
const h = location.hash.replace(’#’, ‘’);
if (!h) { navigate(‘home’); return; }
const parts = h.split(’/’);
if      (parts[0] === ‘level’   && parts[1]) { _state.level = parts[1]; navigate(‘level’); }
else if (parts[0] === ‘course’  && parts[1]) { _state.course = parts[1]; navigate(‘course’); }
else if (parts[0] === ‘chapter’ && parts[1]) {
_state.course = parts[1]; _state.chapter = parseInt(parts[2], 10); navigate(‘chapter’);
} else { navigate(‘home’); }
}

// ============================================================
//  NAVIGATION
// ============================================================
function navigate(page, pushState = false) {
document.querySelectorAll(’.page’).forEach(p => p.classList.remove(‘active’));
const el = document.getElementById(‘page-’ + page);
if (!el) return;
el.classList.add(‘active’);
if (pushState) history.pushState(null, ‘’, ‘#’ + buildHash(page));
switch (page) {
case ‘home’:      renderHome();      break;
case ‘levels’:    renderLevels();    break;
case ‘level’:     renderLevel();     break;
case ‘course’:    renderCourse();    break;
case ‘chapter’:   renderChapter();   break;
case ‘dashboard’:    renderDashboard();       break;
case ‘leaderboard’:  renderLeaderboardPage(); break;
case ‘admin’:        renderAdmin();           break;
}
window.scrollTo(0, 0);
}
window.navigate = navigate;

function buildHash(page) {
switch (page) {
case ‘level’:   return `level/${_state.level}`;
case ‘course’:  return `course/${_state.course}`;
case ‘chapter’: return `chapter/${_state.course}/${_state.chapter}`;
default:        return ‘’;
}
}

function goLevel(levelId)        { _state.level = levelId; _combineChapters.clear(); _combineCourses.clear(); _combineMode = false; navigate(‘level’, true); }
function goCourse(courseId)      { _state.course = courseId; _combineChapters.clear(); _combineMode = false; navigate(‘course’, true); }
function goChapter(courseId, idx){ _state.course = courseId; _state.chapter = idx; navigate(‘chapter’, true); }
window.goLevel = goLevel; window.goCourse = goCourse; window.goChapter = goChapter;

// ============================================================
//  BREADCRUMB
// ============================================================
function setBreadcrumb(parts) {
const bc = document.getElementById(‘breadcrumb’);
if (!bc) return;
bc.innerHTML = parts.map((p, i) =>
i === parts.length - 1
? `<span>${p}</span>`
: `${p} <span style="margin:0 .3rem;opacity:.4">/</span>`
).join(’’);
}

// ============================================================
//  HERO STATS
// ============================================================
function buildHeroStats() {
const courses   = Object.keys(window.COURSES || {}).length;
let chapters = 0, questions = 0;
for (const c of Object.values(window.COURSES || {})) {
chapters  += (c.chapters || []).length;
questions += window.courseQuestionCount(c);
}
const el = document.getElementById(‘hero-stats’);
if (!el) return;
el.innerHTML = ` <div class="hero-stat"><span class="n">${courses}</span><span class="l">Courses</span></div> <div class="hero-stat"><span class="n">${chapters}</span><span class="l">Chapters</span></div> <div class="hero-stat"><span class="n">${questions.toLocaleString()}</span><span class="l">Questions</span></div>`;
}

// ============================================================
//  HOME
// ============================================================
function renderHome() {
setBreadcrumb([‘Home’]);
const quickLinks = document.getElementById(‘home-quick-links’);
if (!quickLinks) return;
if (_currentUser) {
// Show quick-links as soon as user is logged in
// Admin check: use _userProfile if loaded, else ADMIN_UID comparison
const isAdmin = _currentUser.uid === window.ADMIN_UID;
quickLinks.innerHTML = `<div class="quick-links-row"> <div class="quick-link-card" onclick="navigate('dashboard',true)"> <div class="ql-icon">📊</div> <div class="ql-label">My Dashboard</div> <div class="ql-sub">Your scores &amp; progress</div> </div> <div class="quick-link-card" onclick="navigate('leaderboard',true)"> <div class="ql-icon">🏆</div> <div class="ql-label">Leaderboard</div> <div class="ql-sub">Top students per course</div> </div> ${isAdmin ?`
<div class="quick-link-card admin-card" onclick="navigate('admin',true)">
<div class="ql-icon">🛡</div>
<div class="ql-label">Admin Panel</div>
<div class="ql-sub">All students & attempts</div>
</div>` : ''} </div>`;
} else {
quickLinks.innerHTML = ‘’;
}
}

// ============================================================
//  LEVELS PAGE
// ============================================================
function renderLevels() {
setBreadcrumb([‘Home’, ‘Levels’]);
const grid = document.getElementById(‘level-grid’);
if (!grid) return;
const accentMap = { purple:’#7F77DD’, blue:’#378ADD’, teal:’#1D9E75’, amber:’#BA7517’, coral:’#D85A30’, pink:’#D4537E’ };
grid.innerHTML = window.LEVELS.map(lv => {
const courses = window.BY_LEVEL[lv.id] || [];
let qTotal = 0;
courses.forEach(c => { qTotal += window.courseQuestionCount(c); });
const accent = accentMap[lv.color] || ‘#c9993a’;
return `<div class="level-card" style="--level-accent:${accent}" onclick="goLevel('${lv.id}')"> <div class="level-card-label">${lv.label}</div> <h3>${lv.fullName}</h3> <p>${lv.desc}</p> <div class="level-card-stats"> <span class="level-stat"><strong>${courses.length}</strong> course${courses.length !== 1 ? 's' : ''}</span> ${qTotal > 0 ?`<span class="level-stat"><strong>${qTotal.toLocaleString()}</strong> questions</span>` : ''} </div> </div>`;
}).join(’’);
}

// ============================================================
//  LEVEL PAGE
// ============================================================
function renderLevel() {
const level = window.LEVELS.find(l => l.id === _state.level);
if (!level) { navigate(‘levels’); return; }
setBreadcrumb([‘Home’, ‘Levels’, level.fullName]);

const el = (id) => document.getElementById(id);
if (el(‘level-title’)) el(‘level-title’).textContent = level.fullName;
if (el(‘level-tag’))   el(‘level-tag’).textContent   = level.label;
if (el(‘level-desc’))  el(‘level-desc’).textContent  = level.desc;
const backBtn = el(‘course-back-btn’);
if (backBtn) backBtn.onclick = () => navigate(‘levels’, true);

const courses = window.BY_LEVEL[level.id] || [];
const content = el(‘course-content’);
if (!content) return;

if (courses.length === 0) {
content.innerHTML = ` <div class="empty-state" style="padding-top:3rem"> <div class="icon">📚</div> <p>No course content has been added for this level yet. Check back soon.</p> </div>`;
return;
}

let html = ‘’;

if (level.allowCombine && courses.length >= 2) {
html += ` <div style="display:flex;align-items:center;gap:.8rem;margin-top:1.5rem;margin-bottom:.5rem;flex-wrap:wrap;"> <label style="display:flex;align-items:center;gap:.5rem;font-size:.82rem;color:var(--text-muted);cursor:pointer;"> <input type="checkbox" id="combine-courses-toggle" style="accent-color:var(--gold)" onchange="toggleCombineCourseMode(this.checked)"> Combine courses for CBT </label> <span style="font-size:.75rem;color:var(--text-dim)">Select courses below, then launch combined CBT</span> </div> <div class="combine-bar" id="combine-courses-bar"> <div class="combine-bar-info"> <strong id="combine-courses-count">0 courses</strong> selected — <span id="combine-courses-q-count">0 questions</span> available </div> <button class="btn-action btn-practice" onclick="launchCombinedCourseCBT('practice')">Practice CBT</button> <button class="btn-action btn-test"     onclick="launchCombinedCourseCBT('test')">Take Test</button> </div>`;
}

const bySem = {};
courses.forEach(c => { const s = c.semester || ‘1’; if (!bySem[s]) bySem[s] = []; bySem[s].push(c); });

for (const [sem, semCourses] of Object.entries(bySem)) {
html += `<div class="semester-section"> <div class="semester-label">${window.SEMESTER_LABELS[sem] || `Semester ${sem}`}</div> <div class="course-grid">`;
for (const c of semCourses) {
const qCount  = window.courseQuestionCount(c);
const chCount = (c.chapters || []).length;
html += ` <div class="course-card" id="course-card-${c.id}" onclick="handleCourseCardClick(event,'${c.id}')"> <div class="combine-check-wrap" id="combine-check-wrap-${c.id}" style="display:none"> <input type="checkbox" class="combine-check" id="combine-check-${c.id}" onclick="event.stopPropagation()" onchange="toggleCourseSelect('${c.id}')"> </div> <div class="course-card-code">${c.code || c.id.toUpperCase()}</div> <h4>${c.title}</h4> <div class="course-card-meta"> <span>${chCount} chapter${chCount !== 1 ? 's' : ''}</span> <span>${qCount.toLocaleString()} questions</span> </div> </div>`;
}
html += `</div></div>`;
}
content.innerHTML = html;
}
window.renderLevel = renderLevel;

window.handleCourseCardClick = function(evt, courseId) {
if (_combineMode && evt.target.tagName !== ‘INPUT’) {
const cb = document.getElementById(‘combine-check-’ + courseId);
if (cb) { cb.checked = !cb.checked; toggleCourseSelect(courseId); }
return;
}
if (!_combineMode) goCourse(courseId);
};

function toggleCombineCourseMode(on) {
_combineMode = on; _combineCourses.clear();
document.querySelectorAll(’[id^=“combine-check-wrap-”]’).forEach(el => el.style.display = on ? ‘flex’ : ‘none’);
document.querySelectorAll(’[id^=“course-card-”]’).forEach(el => el.classList.toggle(‘combine-mode’, on));
document.querySelectorAll(’.combine-check’).forEach(cb => cb.checked = false);
updateCombineCoursesBar();
}
window.toggleCombineCourseMode = toggleCombineCourseMode;

function toggleCourseSelect(courseId) {
const cb = document.getElementById(‘combine-check-’ + courseId);
if (!cb) return;
cb.checked ? _combineCourses.add(courseId) : _combineCourses.delete(courseId);
updateCombineCoursesBar();
}
window.toggleCourseSelect = toggleCourseSelect;

function updateCombineCoursesBar() {
const bar = document.getElementById(‘combine-courses-bar’);
if (!bar) return;
const n = _combineCourses.size;
let qTotal = 0;
_combineCourses.forEach(cid => { const c = window.COURSES[cid]; if (c) qTotal += window.courseQuestionCount(c); });
const countEl = document.getElementById(‘combine-courses-count’);
const qEl     = document.getElementById(‘combine-courses-q-count’);
if (countEl) countEl.textContent = `${n} course${n !== 1 ? 's' : ''}`;
if (qEl)     qEl.textContent     = `${qTotal.toLocaleString()} questions`;
bar.classList.toggle(‘visible’, n >= 2);
}

function launchCombinedCourseCBT(defaultMode) {
if (_combineCourses.size < 2) return;
const chapters = [], names = [];
_combineCourses.forEach(cid => {
const c = window.COURSES[cid];
if (c) { (c.chapters || []).forEach(ch => chapters.push(ch)); names.push(c.code || c.title); }
});
openCBTConfigurator(chapters, names.join(’ + ‘), […_combineCourses].sort().join(’+’), defaultMode);
}
window.launchCombinedCourseCBT = launchCombinedCourseCBT;

// ============================================================
//  COURSE PAGE
// ============================================================
function renderCourse() {
const course = window.COURSES[_state.course];
if (!course) { navigate(‘levels’); return; }
const level = window.LEVELS.find(l => l.id === course.level);
setBreadcrumb([‘Home’, ‘Levels’, level ? level.fullName : ‘…’, course.code || course.title]);

const el = (id) => document.getElementById(id);
if (el(‘course-tag’))     el(‘course-tag’).textContent     = course.code || ‘’;
if (el(‘course-title’))   el(‘course-title’).textContent   = course.title;
if (el(‘course-desc’))    el(‘course-desc’).textContent    = course.description || ‘’;
const back = el(‘course-back-btn’) || el(‘course-back-btn-2’);
if (back) back.onclick = () => navigate(‘level’, true);

_combineChapters.clear(); _combineMode = false;

const chapters = course.chapters || [];
const content  = el(‘chapter-content’);
if (!content) return;

if (chapters.length === 0) {
content.innerHTML = `<div class="empty-state"><div class="icon">📖</div><p>No chapters added yet.</p></div>`;
return;
}

const totalQ = window.courseQuestionCount(course);
let html = ` <div style="display:flex;align-items:center;gap:.8rem;margin-top:1.5rem;margin-bottom:.5rem;flex-wrap:wrap;"> <label style="display:flex;align-items:center;gap:.5rem;font-size:.82rem;color:var(--text-muted);cursor:pointer;"> <input type="checkbox" id="combine-chapters-toggle" style="accent-color:var(--gold)" onchange="toggleCombineChapterMode(this.checked)"> Combine chapters for CBT </label> <span style="font-size:.75rem;color:var(--text-dim)">Select chapters below, then launch combined CBT</span> </div> <div class="combine-bar" id="combine-chapters-bar"> <div class="combine-bar-info"> <strong id="combine-ch-count">0 chapters</strong> selected — <span id="combine-ch-q-count">0 questions</span> available </div> <button class="btn-action btn-practice" onclick="launchCombinedChapterCBT('practice')">Practice CBT</button> <button class="btn-action btn-test"     onclick="launchCombinedChapterCBT('test')">Take Test</button> </div> <div class="chapter-list" style="margin-top:1rem;">`;

chapters.forEach((ch, idx) => {
const qCount = window.chapterQuestionCount(ch);
html += ` <div class="chapter-row" id="chapter-row-${idx}"> <div class="chapter-row-head" onclick="handleChapterRowClick(event,'${course.id}',${idx})"> <div class="chapter-combine-check-wrap" id="ch-check-wrap-${idx}" style="display:none"> <input type="checkbox" class="combine-check" id="ch-check-${idx}" onclick="event.stopPropagation()" onchange="toggleChapterSelect(${idx})"> </div> <div class="chapter-num">Ch.${idx + 1}</div> <h4>${ch.title}</h4> <div class="chapter-q-count">${qCount} Qs</div> </div> <div class="chapter-actions" id="ch-actions-${idx}" style="display:none"> <button class="btn-action btn-read"     onclick="goChapter('${course.id}',${idx})">Read Notes</button> <button class="btn-action btn-practice" onclick="openChapterCBT('${course.id}',${idx},'practice')">Practice CBT</button> <button class="btn-action btn-test"     onclick="openChapterCBT('${course.id}',${idx},'test')">Take Test</button> </div> </div>`;
});

html += `</div> <div style="margin-top:1.5rem;display:flex;gap:.75rem;flex-wrap:wrap"> <button class="btn-action btn-practice" onclick="openCourseCBT('${course.id}','practice')"> Practice Full Course (${totalQ} Qs) </button> <button class="btn-action btn-test" onclick="openCourseCBT('${course.id}','test')"> Take Full Course Test </button> </div>`;

content.innerHTML = html;
}

window.handleChapterRowClick = function(evt, courseId, idx) {
if (_combineMode && evt.target.tagName !== ‘INPUT’) {
const cb = document.getElementById(‘ch-check-’ + idx);
if (cb) { cb.checked = !cb.checked; toggleChapterSelect(idx); }
return;
}
if (!_combineMode) {
const actions = document.getElementById(‘ch-actions-’ + idx);
if (actions) {
const open = actions.style.display === ‘flex’;
document.querySelectorAll(’[id^=“ch-actions-”]’).forEach(a => a.style.display = ‘none’);
if (!open) actions.style.display = ‘flex’;
}
}
};

function toggleCombineChapterMode(on) {
_combineMode = on; _combineChapters.clear();
document.querySelectorAll(’[id^=“ch-check-wrap-”]’).forEach(el => el.style.display = on ? ‘flex’ : ‘none’);
document.querySelectorAll(’[id^=“chapter-row-”]’).forEach(el => el.classList.toggle(‘combine-mode’, on));
document.querySelectorAll(’.combine-check’).forEach(cb => cb.checked = false);
updateCombineChaptersBar();
}
window.toggleCombineChapterMode = toggleCombineChapterMode;

function toggleChapterSelect(idx) {
const cb  = document.getElementById(‘ch-check-’ + idx);
if (!cb) return;
const key = `${_state.course}-${idx}`;
cb.checked ? _combineChapters.add(key) : _combineChapters.delete(key);
updateCombineChaptersBar();
}
window.toggleChapterSelect = toggleChapterSelect;

function updateCombineChaptersBar() {
const bar    = document.getElementById(‘combine-chapters-bar’);
if (!bar) return;
const course = window.COURSES[_state.course];
const n      = _combineChapters.size;
let qTotal   = 0;
_combineChapters.forEach(key => {
const idx = parseInt(key.split(’-’).pop(), 10);
const ch  = course && course.chapters && course.chapters[idx];
if (ch) qTotal += window.chapterQuestionCount(ch);
});
const countEl = document.getElementById(‘combine-ch-count’);
const qEl     = document.getElementById(‘combine-ch-q-count’);
if (countEl) countEl.textContent = `${n} chapter${n !== 1 ? 's' : ''}`;
if (qEl)     qEl.textContent     = `${qTotal.toLocaleString()} questions`;
bar.classList.toggle(‘visible’, n >= 2);
}

function launchCombinedChapterCBT(defaultMode) {
const course = window.COURSES[_state.course];
if (!course || _combineChapters.size < 2) return;
const chapters = [], chNums = [];
_combineChapters.forEach(key => {
const idx = parseInt(key.split(’-’).pop(), 10);
const ch  = course.chapters[idx];
if (ch) { chapters.push(ch); chNums.push(idx + 1); }
});
chNums.sort((a, b) => a - b);
openCBTConfigurator(
chapters,
`${course.code || course.title} — Chapters ${chNums.join(', ')}`,
`${course.id}_ch_${chNums.join('_')}`,
defaultMode
);
}
window.launchCombinedChapterCBT = launchCombinedChapterCBT;

function openChapterCBT(courseId, chIdx, defaultMode) {
const course = window.COURSES[courseId]; if (!course) return;
const ch     = course.chapters[chIdx];  if (!ch)     return;
openCBTConfigurator([ch], `${course.code || course.title} — ${ch.title}`, `${courseId}_ch${chIdx}`, defaultMode);
}
window.openChapterCBT = openChapterCBT;

function openCourseCBT(courseId, defaultMode) {
const course = window.COURSES[courseId]; if (!course) return;
openCBTConfigurator(course.chapters || [], `${course.code || course.title} — Full Course`, `${courseId}_full`, defaultMode);
}
window.openCourseCBT = openCourseCBT;

// ============================================================
//  CHAPTER DETAIL
// ============================================================
function renderChapter() {
const course = window.COURSES[_state.course];
if (!course) { navigate(‘levels’); return; }
const ch = (course.chapters || [])[_state.chapter];
if (!ch)  { navigate(‘course’, true); return; }

const level = window.LEVELS.find(l => l.id === course.level);
setBreadcrumb([‘Home’, ‘Levels’, level ? level.label : ‘…’, course.code, `Ch.${_state.chapter + 1}`]);

const el = (id) => document.getElementById(id);
if (el(‘chapter-tag’))   el(‘chapter-tag’).textContent   = `${course.code || course.id.toUpperCase()} — Chapter ${_state.chapter + 1}`;
if (el(‘chapter-title’)) el(‘chapter-title’).textContent = ch.title;
const back = el(‘chapter-back-btn’);
if (back) back.onclick = () => navigate(‘course’, true);

const qCount  = window.chapterQuestionCount(ch);
const content = el(‘chapter-detail-content’);
if (!content) return;

const keyPointsHtml = ch.keyPoints && ch.keyPoints.length
? `<div class="summary-section"> <h4>Key Points</h4> <ul class="key-points-list"> ${ch.keyPoints.map(p => `<li>${p}</li>`).join('')} </ul> </div>` : ‘’;

content.innerHTML = `<div class="chapter-detail-header" style="margin-top:1.5rem"> <h3>${ch.title}</h3> <p>${qCount} practice questions available</p> <div class="chapter-cbt-bar"> <button class="btn-action btn-practice" onclick="openChapterCBT('${course.id}',${_state.chapter},'practice')">Practice CBT</button> <button class="btn-action btn-test"     onclick="openChapterCBT('${course.id}',${_state.chapter},'test')">Take Test</button> </div> </div> <div class="summary-section" style="margin-top:1.5rem"> <h4>Chapter Summary</h4> ${(ch.summary || 'Summary coming soon.').split('\n\n').map(p =>`<p>${p.trim()}</p>`).join('')} </div> ${keyPointsHtml}`;
}

// ============================================================
//  CBT CONFIGURATOR MODAL
// ============================================================
function openCBTConfigurator(chapters, sourceName, sourceId, defaultMode) {
let totalQ = 0;
chapters.forEach(ch => { totalQ += (ch.questions || []).length; });
if (totalQ === 0) { showToast(‘No questions available for this selection.’, ‘error’); return; }

const modal = document.getElementById(‘config-modal’);
if (!modal) return;
modal._chapters   = chapters;
modal._sourceName = sourceName;
modal._sourceId   = sourceId;
modal._totalQ     = totalQ;
modal._mode       = defaultMode || ‘practice’;

document.getElementById(‘config-modal-title’).textContent = sourceName;

// Mode tabs
const tabs = document.querySelectorAll(’.mode-tab’);
tabs.forEach(t => {
t.classList.toggle(‘active’, t.dataset.mode === modal._mode);
t.onclick = () => {
modal._mode = t.dataset.mode;
tabs.forEach(x => x.classList.toggle(‘active’, x === t));
updateConfigTime(); updateConfigSummary();
};
});

// Q-count — hard cap at 40, never reveal total bank size
const MAX_Q    = 40;
const capTotal = Math.min(totalQ, MAX_Q);   // never exceeds 40
let selectedQ  = Math.min(20, capTotal);
const presetRow = document.getElementById(‘q-preset-row’);
if (presetRow) {
presetRow.innerHTML =
[10, 20, 30, 40].filter(n => n <= capTotal).map(n =>
`<button class="q-preset${selectedQ === n ? ' active':''}" data-q="${n}" onclick="setQPreset(${n})">${n}</button>`
).join(’’);
}
const qSlider = document.getElementById(‘q-count-slider’);
const qLabel  = document.getElementById(‘q-count-label’);
if (qSlider) {
qSlider.max = capTotal; qSlider.value = selectedQ;
qSlider.oninput = () => {
const v = parseInt(qSlider.value);
if (qLabel) qLabel.textContent = v;
modal._selectedQ = v;
document.querySelectorAll(’.q-preset’).forEach(b => b.classList.toggle(‘active’, parseInt(b.dataset.q) === v));
updateConfigTime(); updateConfigSummary();
};
}
if (qLabel) qLabel.textContent = selectedQ;
modal._selectedQ = selectedQ;
modal._capTotal  = capTotal;   // store capped max for summary

updateConfigTime(); updateConfigSummary();
modal.classList.add(‘active’);
}
window.openCBTConfigurator = openCBTConfigurator;

window.setQPreset = function(n) {
const modal = document.getElementById(‘config-modal’);
modal._selectedQ = n;
const slider = document.getElementById(‘q-count-slider’);
const label  = document.getElementById(‘q-count-label’);
if (slider) slider.value = n;
if (label)  label.textContent = n;
document.querySelectorAll(’.q-preset’).forEach(b => b.classList.toggle(‘active’, parseInt(b.dataset.q) === n));
updateConfigTime(); updateConfigSummary();
};

function updateConfigTime() {
const modal   = document.getElementById(‘config-modal’);
const timeRow = document.getElementById(‘time-config-row’);
if (!modal) return;
const isPractice = modal._mode === ‘practice’;
if (timeRow) timeRow.style.display = isPractice ? ‘none’ : ‘block’;

const q       = modal._selectedQ || 20;
const defMins = window.defaultTime(q);
if (!modal._selectedTime) modal._selectedTime = defMins;
const selected = modal._selectedTime;

const timeRow2 = document.getElementById(‘time-preset-row’);
if (timeRow2) {
timeRow2.innerHTML =
`<button class="time-preset${selected === defMins ? ' active':''}" data-t="${defMins}" onclick="setTimePreset(${defMins})">Default (${defMins} min)</button>` +
[10, 20, 30, 45, 60].filter(t => t !== defMins).map(t =>
`<button class="time-preset${selected === t ? ' active':''}" data-t="${t}" onclick="setTimePreset(${t})">${t} min</button>`
).join(’’);
}
}

window.setTimePreset = function(mins) {
const modal = document.getElementById(‘config-modal’);
if (!modal) return;
modal._selectedTime = mins;
document.querySelectorAll(’.time-preset’).forEach(b => b.classList.toggle(‘active’, parseInt(b.dataset.t) === mins));
updateConfigSummary();
};

function updateConfigSummary() {
const modal = document.getElementById(‘config-modal’);
if (!modal) return;
const q    = modal._selectedQ || 20;
const mode = modal._mode || ‘practice’;
const time = modal._selectedTime || window.defaultTime(q);
const box  = document.getElementById(‘config-summary-box’);
if (!box) return;
box.innerHTML = `<strong>${q}</strong> questions · ${mode === 'practice' ? '<strong>Untimed</strong>' :`<strong>${time} minutes</strong>`} · ${mode === 'practice' ? '<strong>Practice</strong> — instant feedback after each question' : '<strong>Take Test</strong> — review all answers at the end'}`;
}

window.launchCBTFromConfig = function() {
const modal = document.getElementById(‘config-modal’);
if (!modal || !modal._chapters) return;
modal.classList.remove(‘active’);
const mode    = modal._mode || ‘practice’;
const q       = modal._selectedQ || modal._totalQ;
const timeMins = mode === ‘test’ ? (modal._selectedTime || window.defaultTime(q)) : 0;
startCBT(modal._chapters, mode, q, timeMins * 60, modal._sourceName, modal._sourceId);
};

// ============================================================
//  CBT ENGINE
// ============================================================
function startCBT(chapters, mode, qLimit, timeSecs, sourceName, sourceId) {
const questions = window.poolQuestions(chapters, qLimit);
if (!questions.length) { showToast(‘No questions available.’, ‘error’); return; }
_cbt = { questions, current: 0, answers: new Array(questions.length).fill(null),
mode, timeLimit: timeSecs, timerHandle: null, timeLeft: timeSecs, sourceName, sourceId };

// Store chapters on modal for retry
const modal = document.getElementById(‘cbt-modal’);
if (modal) modal._origChapters = chapters;

renderCBTQuestion();
document.getElementById(‘cbt-modal’).classList.add(‘active’);
if (mode === ‘test’ && timeSecs > 0) startTimer();
}

function renderCBTQuestion() {
const body = document.getElementById(‘cbt-body’);
if (!body) return;
const { questions, current, mode, timeLeft, timeLimit } = _cbt;
const q     = questions[current];
const total = questions.length;
const pct   = Math.round((current / total) * 100);
const keys  = [‘A’,‘B’,‘C’,‘D’,‘E’];
const existingAnswer = _cbt.answers[current];

const timerHtml = (mode === ‘test’ && timeLimit > 0)
? `<div class="cbt-timer${timeLeft < 60 ? ' danger':''}" id="cbt-timer-display">⏱ ${formatTime(timeLeft)}</div>` : ‘’;

// ── Normalise question fields — supports both old and new formats ──
const qText    = q.q || q.text || ‘’;
const qOptions = q.options || [];
const qExpl    = q.explanation || ‘’;

// Determine question type:
// 1. Trust explicit type field if present
// 2. If options has exactly 2 entries that are True/False variants → truefalse
// 3. If options is empty → fillin
// 4. Otherwise → mcq
let qType = q.type || ‘’;
if (!qType) {
if (qOptions.length === 0) {
qType = ‘fillin’;
} else if (
qOptions.length === 2 &&
[‘true’,‘false’].includes(String(qOptions[0]).toLowerCase()) &&
[‘true’,‘false’].includes(String(qOptions[1]).toLowerCase())
) {
qType = ‘truefalse’;
} else {
qType = ‘mcq’;
}
}

// Normalise answer — old format uses numeric index (correct:0), new uses index or string
const rawAnswer = q.answer !== undefined ? q.answer : q.correct;

let questionHtml = ‘’;

if (qType === ‘fillin’) {
// Fill-in-the-blank — render a proper visible input box
const savedText = existingAnswer ? (existingAnswer.text || ‘’) : ‘’;
const isAnswered = existingAnswer !== null;
const inputStyle = isAnswered
? (existingAnswer.correct
? ‘border-color:var(–success);background:rgba(76,175,138,.08)’
: ‘border-color:var(–danger);background:rgba(224,92,92,.07)’)
: ‘’;
questionHtml = `<div style="margin-bottom:1rem"> <input type="text" class="cbt-fillin-input" id="fillin-input" placeholder="Type your answer here and press Enter…" value="${savedText.replace(/"/g, '&quot;')}" style="${inputStyle}" ${isAnswered ? 'readonly' : ''} onkeydown="if(event.key==='Enter')submitFillin()" /> ${!isAnswered ?`<button class="btn-action btn-practice"
style="margin-top:.5rem" onclick="submitFillin()">Submit Answer</button>` : ''} </div>`;

} else {
// MCQ or True/False — render option boxes
const opts = qType === ‘truefalse’ ? [‘True’, ‘False’] : qOptions;

```
// Resolve correct index — may be number, letter (A/B/C), or string matching an option
let correctIdx = -1;
if (typeof rawAnswer === 'number') {
  correctIdx = rawAnswer;
} else if (typeof rawAnswer === 'string') {
  // Try letter index first: 'A'→0, 'B'→1 etc.
  const letterIdx = 'ABCDE'.indexOf(rawAnswer.trim().toUpperCase());
  if (letterIdx !== -1) {
    correctIdx = letterIdx;
  } else if (rawAnswer.toLowerCase() === 'true') {
    correctIdx = 0;
  } else if (rawAnswer.toLowerCase() === 'false') {
    correctIdx = 1;
  } else {
    // Match by option text
    correctIdx = opts.findIndex(o =>
      o.trim().toLowerCase() === rawAnswer.trim().toLowerCase()
    );
  }
}

questionHtml = `<div class="cbt-options">` +
  opts.map((opt, i) => {
    let cls = 'cbt-option';
    if (existingAnswer !== null) {
      if (mode === 'practice') {
        if (i === existingAnswer.selected) cls += existingAnswer.correct ? ' correct' : ' wrong';
        if (!existingAnswer.correct && i === correctIdx) cls += ' reveal-correct';
      } else {
        if (i === existingAnswer.selected) cls += ' selected';
      }
    }
    return `<div class="${cls}" onclick="selectOption(${i},${correctIdx})">
      <span class="cbt-option-key">${keys[i] || i}</span>
      <span>${opt}</span>
    </div>`;
  }).join('') + `</div>`;
```

}

let feedbackHtml = ‘’;
if (mode === ‘practice’ && existingAnswer !== null) {
feedbackHtml = `<div class="cbt-feedback visible ${existingAnswer.correct ? 'correct-fb':'wrong-fb'}"> ${existingAnswer.correct ? '✓ Correct!' :`✗ Incorrect. Correct answer: <strong>${existingAnswer.correctAnswer}</strong>`} ${qExpl ? `<br><em>${qExpl}</em>` : ''} </div>`;
}

// ── Question navigator boxes ──────────────────────────────
// In test mode: answered=green, skipped=red, current=gold, not-yet=muted blue
// In practice mode: correct=green, wrong=red, current=gold, not-yet=muted blue
const navBoxes = questions.map((_, i) => {
const ans = _cbt.answers[i];
let cls   = ‘qnav-box’;
if (i === current) {
cls += ’ qnav-current’;
} else if (ans === null) {
cls += ’ qnav-pending’;
} else if (mode === ‘test’) {
cls += ’ qnav-answered’;           // green — answered (don’t reveal right/wrong yet)
} else {
cls += ans.correct ? ’ qnav-correct’ : ’ qnav-wrong’;
}
return `<div class="${cls}" onclick="jumpToQuestion(${i})" title="Q${i+1}">${i+1}</div>`;
}).join(’’);

const nextLabel = current < total - 1 ? ‘Next →’ : (mode === ‘test’ ? ‘Submit Test’ : ‘Finish’);
const canNext   = existingAnswer !== null || qType === ‘fillin’;

body.innerHTML = `<div class="modal-body" style="padding-top:.8rem"> <div class="cbt-progress-bar-wrap"> <div class="cbt-progress-bar" style="width:${pct}%"></div> </div> <div class="cbt-meta-row"> <div class="cbt-question-num">Question ${current + 1} / ${total}</div> ${timerHtml} <div class="cbt-chapter-tag">${q._chapterTitle || ''}</div> </div> <div class="cbt-question-text">${qText}</div> ${questionHtml} ${feedbackHtml} <div class="cbt-nav-row"> ${current > 0 ?`<button class="btn-action btn-read" onclick="prevQuestion()">← Prev</button>`: ''} <button class="btn-cbt-next" id="cbt-next-btn" onclick="nextOrSubmit()" ${!canNext && mode === 'test' ? 'disabled' : ''}>${nextLabel}</button> </div> <div class="qnav-grid" id="qnav-grid">${navBoxes}</div> ${mode === 'test' ?`
<div class="qnav-legend">
<span class="qnav-legend-item"><span class="qnav-box qnav-answered"></span> Answered</span>
<span class="qnav-legend-item"><span class="qnav-box qnav-pending"></span> Not yet</span>
<span class="qnav-legend-item"><span class="qnav-box qnav-current"></span> Current</span>
</div>`:`
<div class="qnav-legend">
<span class="qnav-legend-item"><span class="qnav-box qnav-correct"></span> Correct</span>
<span class="qnav-legend-item"><span class="qnav-box qnav-wrong"></span> Wrong</span>
<span class="qnav-legend-item"><span class="qnav-box qnav-pending"></span> Not yet</span>
<span class="qnav-legend-item"><span class="qnav-box qnav-current"></span> Current</span>
</div>`} </div>`;
}

window.selectOption = function(idx, correctIdx) {
const { questions, current, mode } = _cbt;
// In test mode, allow re-selection before moving on
if (mode !== ‘practice’ && _cbt.answers[current] !== null) return;

const q    = questions[current];
const opts = (q.type === ‘truefalse’ || (!q.type && q.options && q.options.length === 2 &&
[‘true’,‘false’].includes(String(q.options[0]).toLowerCase())))
? [‘True’,‘False’] : (q.options || []);

// correctIdx is passed directly from the rendered onclick — use it
const isCorrect = idx === correctIdx;

_cbt.answers[current] = {
selected:      idx,
correct:       isCorrect,
correctIdx:    correctIdx,
correctAnswer: opts[correctIdx] !== undefined ? opts[correctIdx] : String(q.answer !== undefined ? q.answer : q.correct),
};
renderCBTQuestion();
};

window.submitFillin = function() {
const { questions, current } = _cbt;
const q   = questions[current];
const inp = document.getElementById(‘fillin-input’);
if (!inp || !inp.value.trim()) return;

const rawAnswer   = q.answer !== undefined ? q.answer : q.correct;
const userText    = inp.value.trim().toLowerCase();
const correctText = String(rawAnswer).trim().toLowerCase();
const isCorrect   = userText === correctText;

_cbt.answers[current] = {
text:          inp.value.trim(),
correct:       isCorrect,
correctAnswer: String(rawAnswer),
selected:      0,
correctIdx:    0,
};
renderCBTQuestion();
};

window.nextOrSubmit = function() {
const { questions, current } = _cbt;
const q       = questions[current];
const opts    = q.options || [];
const isFillin = q.type === ‘fillin’ || (!q.type && opts.length === 0);

if (isFillin && _cbt.answers[current] === null) {
submitFillin();
return;
}
if (current < questions.length - 1) { _cbt.current++; renderCBTQuestion(); }
else endCBT();
};

window.prevQuestion = function() {
if (_cbt.current > 0) { _cbt.current–; renderCBTQuestion(); }
};

window.jumpToQuestion = function(idx) {
if (idx >= 0 && idx < _cbt.questions.length) {
_cbt.current = idx;
renderCBTQuestion();
}
};

function startTimer() {
clearInterval(_cbt.timerHandle);
_cbt.timerHandle = setInterval(() => {
_cbt.timeLeft–;
const display = document.getElementById(‘cbt-timer-display’);
if (display) {
display.textContent = `⏱ ${formatTime(_cbt.timeLeft)}`;
display.classList.toggle(‘danger’, _cbt.timeLeft < 60);
}
if (_cbt.timeLeft <= 0) { clearInterval(_cbt.timerHandle); endCBT(); }
}, 1000);
}

function formatTime(secs) {
return `${Math.floor(secs/60).toString().padStart(2,'0')}:${(secs%60).toString().padStart(2,'0')}`;
}

// ============================================================
//  END CBT — save to Realtime Database
// ============================================================
async function endCBT() {
clearInterval(_cbt.timerHandle);
const { questions, answers, mode, sourceId, sourceName, timeLimit, timeLeft } = _cbt;
const total     = questions.length;
const correct   = answers.filter(a => a && a.correct).length;
const score     = Math.round((correct / total) * 100);
const timeTaken = timeLimit > 0 ? timeLimit - timeLeft : 0;

// ── Save to Realtime Database ─────────────────────────────
// Path: attempts/{uid}/{auto-push-key}
// Each user’s attempts are nested under their own UID
// so security rules can easily restrict access.
if (_currentUser && _db && window._fb) {
try {
const attemptData = {
uid:        _currentUser.uid,
name:       _userProfile ? _userProfile.name       : ‘Guest’,
matric:     _userProfile ? _userProfile.matric     : ‘’,
level:      _userProfile ? _userProfile.level      : ‘’,
sourceId,
sourceName,
mode,
score,
correct,
total,
timeTaken,
createdAt:  Date.now(),   // milliseconds — RTDB has no serverTimestamp
};
// push() generates a unique key under attempts/{uid}/
await _fb.push(_fb.ref(_db, `attempts/${_currentUser.uid}`), attemptData);

```
  // Also write a leaderboard entry if it's better than the current best
  // Path: leaderboard/{sourceId}/{uid}  — one entry per user per source
  const lbRef = _fb.ref(_db, `leaderboard/${sourceId}/${_currentUser.uid}`);
  const lbSnap = await _fb.get(lbRef);
  const existing = lbSnap.exists() ? lbSnap.val() : null;
  if (!existing || score > existing.score) {
    await _fb.set(lbRef, {
      uid:       _currentUser.uid,
      name:      _userProfile ? _userProfile.name   : 'Guest',
      matric:    _userProfile ? _userProfile.matric : '',
      score,
      sourceName,
      createdAt: Date.now(),
    });
  }
} catch (e) {
  console.warn('[FUTA] Could not save attempt:', e);
}
```

}

renderCBTResults(correct, total, score, timeTaken, answers, questions, mode);
}

function renderCBTResults(correct, total, score, timeTaken, answers, questions, mode) {
const grade   = getGrade(score);
const ring    = `conic-gradient(var(--gold) ${score * 3.6}deg, var(--navy-3) 0deg)`;
const timeStr = timeTaken > 0 ? formatTime(timeTaken) : ‘—’;

let reviewHtml = ‘’;
if (mode === ‘test’) {
reviewHtml = `<div class="dash-section-title" style="margin-top:1.2rem">Review answers</div> <div class="result-review"> ${questions.map((q, i) => { const a          = answers[i]; const ok         = a && a.correct; const opts       = q.type === 'truefalse' ? ['True','False'] : (q.options || []); const yourAns    = a ? (opts[a.selected] || a.text || '(no answer)') : '(no answer)'; const correctAns = a ? a.correctAnswer : (q.answer !== undefined ? q.answer : q.correct); return`
<div class="review-item ${ok ? 'ri-correct':'ri-wrong'}">
<div class="review-q">${i+1}. ${q.q || q.text}</div>
<div class="review-a">
Your answer: <span class="your-a">${yourAns}</span>
${!ok ? `· Correct: <span class="correct-a">${correctAns}</span>` : ‘’}
</div>
${q.explanation && !ok ? `<div class="review-exp">${q.explanation}</div>` : ‘’}
</div>`; }).join('')} </div>`;
}

document.getElementById(‘cbt-body’).innerHTML = `<div class="modal-body"> <div class="result-hero"> <div class="result-ring" style="background:${ring}"> <span class="result-percent">${score}%</span> </div> <div class="result-grade">${grade.label}</div> <div style="font-size:.82rem;color:var(--text-dim)">${_cbt.sourceName}</div> </div> <div class="result-stats"> <div class="result-stat"><span class="n">${correct}</span><span class="l">Correct</span></div> <div class="result-stat"><span class="n">${total - correct}</span><span class="l">Wrong</span></div> <div class="result-stat"><span class="n">${timeStr}</span><span class="l">Time</span></div> </div> ${!_currentUser ?`<div style="text-align:center;font-size:.8rem;color:var(--text-dim);margin-bottom:1rem">
<a href="#" onclick="openAuthModal();return false" style="color:var(--gold-light)">Sign in</a>
to save your results and appear on the leaderboard
</div>`: ''} <div style="display:flex;gap:.6rem;flex-wrap:wrap;margin-bottom:1rem"> <button class="btn-action btn-practice" onclick="document.getElementById('cbt-modal').classList.remove('active')">Close</button> <button class="btn-action btn-test" onclick="retryLastCBT()">Retry</button> ${_currentUser ?`<button class="btn-action btn-read"
onclick="document.getElementById('cbt-modal').classList.remove('active');navigate('dashboard')">
My Dashboard
</button>` : ''} </div> ${reviewHtml} </div>`;
}

window.retryLastCBT = function() {
const modal = document.getElementById(‘cbt-modal’);
if (!modal || !modal._origChapters) return;
modal.classList.remove(‘active’);
openCBTConfigurator(modal._origChapters, _cbt.sourceName, _cbt.sourceId, _cbt.mode);
};

function getGrade(score) {
if (score >= 90) return { label: ‘Distinction — Excellent!’ };
if (score >= 75) return { label: ‘Credit — Well done!’ };
if (score >= 60) return { label: ‘Pass — Keep it up!’ };
if (score >= 50) return { label: ‘Borderline — Study harder.’ };
return { label: ‘Fail — Review your notes.’ };
}

window.closeCBT = function() {
clearInterval(_cbt.timerHandle);
document.getElementById(‘cbt-modal’).classList.remove(‘active’);
};

// ============================================================
//  AUTH MODAL
// ============================================================
window.openAuthModal = function(tab) {
document.getElementById(‘auth-modal’).classList.add(‘active’);
switchAuthTab(tab || ‘login’);
};
window.closeAuthModal = function() {
document.getElementById(‘auth-modal’).classList.remove(‘active’);
};
window.switchAuthTab = function(tab) {
document.querySelectorAll(’.auth-tab’).forEach(t => t.classList.toggle(‘active’, t.dataset.tab === tab));
document.getElementById(‘auth-login-form’).style.display    = tab === ‘login’    ? ‘block’ : ‘none’;
document.getElementById(‘auth-register-form’).style.display = tab === ‘register’ ? ‘block’ : ‘none’;
};

window.doRegister = async function() {
if (!_auth) { showToast(‘Firebase not configured.’, ‘error’); return; }
const name   = document.getElementById(‘reg-name’).value.trim();
const matric = document.getElementById(‘reg-matric’).value.trim().toUpperCase();
const email  = document.getElementById(‘reg-email’).value.trim();
const level  = document.getElementById(‘reg-level’).value;
const pass   = document.getElementById(‘reg-password’).value;
const errEl  = document.getElementById(‘reg-error’);

if (!name || !matric || !email || !level || !pass) {
errEl.textContent = ‘Please fill in all fields.’; errEl.classList.add(‘visible’); return;
}
if (pass.length < 6) {
errEl.textContent = ‘Password must be at least 6 characters.’; errEl.classList.add(‘visible’); return;
}
errEl.classList.remove(‘visible’);
const btn = document.getElementById(‘reg-btn’);
btn.disabled = true; btn.textContent = ‘Creating account…’;
try {
const { user } = await _fb.createUserWithEmailAndPassword(_auth, email, pass);
// Save profile to Realtime Database at users/{uid}
await _fb.set(_fb.ref(_db, `users/${user.uid}`), {
name, matric, email, level,
isAdmin:   user.uid === window.ADMIN_UID,
createdAt: Date.now(),
});
closeAuthModal();
showToast(`Welcome, ${name}!`, ‘success’);
} catch (e) {
errEl.textContent = friendlyAuthError(e.code); errEl.classList.add(‘visible’);
}
btn.disabled = false; btn.textContent = ‘Create Account’;
};

window.doLogin = async function() {
if (!_auth) { showToast(‘Firebase not configured.’, ‘error’); return; }
const email = document.getElementById(‘login-email’).value.trim();
const pass  = document.getElementById(‘login-password’).value;
const errEl = document.getElementById(‘login-error’);
errEl.classList.remove(‘visible’);
const btn = document.getElementById(‘login-btn’);
btn.disabled = true; btn.textContent = ‘Signing in…’;
try {
await _fb.signInWithEmailAndPassword(_auth, email, pass);
closeAuthModal();
showToast(‘Signed in successfully!’, ‘success’);
} catch (e) {
errEl.textContent = friendlyAuthError(e.code); errEl.classList.add(‘visible’);
}
btn.disabled = false; btn.textContent = ‘Sign In’;
};

window.doLogout = async function() {
if (!_auth) return;
await _fb.signOut(_auth);
_userProfile = null;
closeUserDropdown();
showToast(‘Signed out.’, ‘success’);
};

function friendlyAuthError(code) {
const map = {
‘auth/email-already-in-use’:   ‘This email is already registered.’,
‘auth/invalid-email’:          ‘Please enter a valid email address.’,
‘auth/weak-password’:          ‘Password too weak. Use at least 6 characters.’,
‘auth/user-not-found’:         ‘No account found with this email.’,
‘auth/wrong-password’:         ‘Incorrect password.’,
‘auth/invalid-credential’:     ‘Incorrect email or password.’,
‘auth/too-many-requests’:      ‘Too many attempts. Please wait and try again.’,
‘auth/network-request-failed’: ‘Network error. Check your connection.’,
};
return map[code] || ‘Something went wrong. Please try again.’;
}

// ============================================================
//  NAV AUTH UI
// ============================================================
function renderNavAuth() {
const area = document.getElementById(‘nav-auth-area’);
if (!area) return;

if (_currentUser) {
// User is logged in — hide Sign In / Register completely
// Show name chip (use profile name if loaded, else email prefix)
const name     = _userProfile ? _userProfile.name : (_currentUser.email || ‘’).split(’@’)[0];
const initials = name.split(’ ‘).map(n => n[0]).join(’’).slice(0, 2).toUpperCase();
const shortName = name.split(’ ’)[0];
area.innerHTML = ` <div class="nav-user-chip" onclick="toggleUserDropdown()"> <div class="nav-avatar">${initials}</div> <div class="nav-username">${shortName}</div> <span style="font-size:.65rem;color:var(--text-dim);margin-left:.2rem">▾</span> </div> <button class="nav-btn" style="border-color:rgba(224,92,92,.4);color:var(--danger)" onclick="doLogout()">Log Out</button>`;
} else {
// Not logged in — show Sign In + Register buttons
area.innerHTML = ` <button class="nav-btn" onclick="openAuthModal('login')">Sign In</button> <button class="nav-btn primary" onclick="openAuthModal('register')">Register</button>`;
}

// Re-render home quick-links whenever auth state changes
const homePage = document.getElementById(‘page-home’);
if (homePage && homePage.classList.contains(‘active’)) renderHome();
}

window.toggleUserDropdown = function() {
const dd = document.getElementById(‘user-dropdown’);
if (!dd) return;
const isOpen = dd.classList.contains(‘open’);
dd.classList.toggle(‘open’, !isOpen);
if (!isOpen && _userProfile) {
const isAdmin = _currentUser && _currentUser.uid === window.ADMIN_UID;
dd.innerHTML = `<div class="user-dropdown-header"> <div class="user-dropdown-name">${_userProfile.name}</div> <div class="user-dropdown-matric">${_userProfile.matric} · ${_userProfile.level}</div> </div> <button class="user-dropdown-item" onclick="closeUserDropdown();navigate('dashboard')"> <span class="ico">📊</span> My Dashboard </button> ${isAdmin ?`<button class="user-dropdown-item" onclick="closeUserDropdown();navigate('admin')">
<span class="ico">🛡</span> Admin Panel
</button>` : ''} <button class="user-dropdown-item danger" onclick="doLogout()"> <span class="ico">↩</span> Sign Out </button>`;
}
};
window.closeUserDropdown = function() {
const dd = document.getElementById(‘user-dropdown’);
if (dd) dd.classList.remove(‘open’);
};
document.addEventListener(‘click’, e => {
const dd   = document.getElementById(‘user-dropdown’);
const chip = document.querySelector(’.nav-user-chip’);
if (dd && dd.classList.contains(‘open’) && !dd.contains(e.target) && (!chip || !chip.contains(e.target)))
closeUserDropdown();
});

function bindNav() {
const crest = document.querySelector(’.nav-crest’);
const logo  = document.querySelector(’.nav-logo’);
if (crest) crest.onclick = () => navigate(‘home’);
if (logo)  logo.onclick  = () => navigate(‘home’);
renderNavAuth();
}

// ============================================================
//  STUDENT DASHBOARD — reads from RTDB attempts/{uid}
// ============================================================
async function renderDashboard() {
setBreadcrumb([‘Home’, ‘My Dashboard’]);
const content = document.getElementById(‘dashboard-content’);
if (!content) return;

if (!_currentUser) {
content.innerHTML = ` <div class="empty-state" style="padding-top:3rem"> <div class="icon">🔒</div> <p>Please <a href="#" onclick="openAuthModal('login');return false">sign in</a> to view your dashboard.</p> </div>`;
return;
}

content.innerHTML = `<div style="display:flex;justify-content:center;padding:3rem"><div class="spinner"></div></div>`;

try {
// Read all attempts for this user
const snap     = await _fb.get(_fb.ref(_db, `attempts/${_currentUser.uid}`));
const raw      = snap.exists() ? snap.val() : {};
// Convert object-of-objects to array, sorted newest first
const attempts = Object.values(raw).sort((a, b) => b.createdAt - a.createdAt);
renderDashboardContent(content, attempts);
} catch (e) {
content.innerHTML = `<div class="empty-state"><p>Could not load your data. Check your connection.</p></div>`;
console.error(e);
}
}

function renderDashboardContent(container, attempts) {
if (attempts.length === 0) {
container.innerHTML = ` <div class="empty-state" style="padding-top:3rem"> <div class="icon">📝</div> <p>No CBT attempts yet. Start practising to track your progress!</p> </div>`;
return;
}

const total    = attempts.length;
const avgScore = Math.round(attempts.reduce((s, a) => s + a.score, 0) / total);
const bestScore = Math.max(…attempts.map(a => a.score));

// Weak topics
const sourceAvg = {};
attempts.forEach(a => {
if (!sourceAvg[a.sourceId]) sourceAvg[a.sourceId] = { sum: 0, count: 0, name: a.sourceName };
sourceAvg[a.sourceId].sum   += a.score;
sourceAvg[a.sourceId].count += 1;
});
const weak = Object.values(sourceAvg)
.filter(x => x.sum / x.count < 60)
.sort((a, b) => (a.sum/a.count) - (b.sum/b.count))
.slice(0, 6);

container.innerHTML = `
<div style="padding-top:2rem">
<div class="dash-stats-row">
<div class="dash-stat-card"><div class="dash-stat-n">${total}</div><div class="dash-stat-l">Attempts</div></div>
<div class="dash-stat-card"><div class="dash-stat-n">${avgScore}%</div><div class="dash-stat-l">Avg Score</div></div>
<div class="dash-stat-card"><div class="dash-stat-n">${bestScore}%</div><div class="dash-stat-l">Best Score</div></div>
<div class="dash-stat-card"><div class="dash-stat-n">${_userProfile ? _userProfile.level : ‘’}</div><div class="dash-stat-l">Level</div></div>
</div>

```
  ${weak.length ? `
    <div class="dash-section">
      <div class="dash-section-title">Topics to focus on (below 60%)</div>
      <div>${weak.map(w => `<span class="weak-topic-tag">${w.name} — ${Math.round(w.sum/w.count)}%</span>`).join('')}</div>
    </div>` : ''}

  <div class="dash-section">
    <div class="dash-section-title">Recent attempts</div>
    <div style="overflow-x:auto">
      <table class="attempt-table">
        <thead><tr><th>Source</th><th>Mode</th><th>Score</th><th>Date</th><th>Time</th></tr></thead>
        <tbody>
          ${attempts.slice(0, 15).map(a => {
            const sc   = a.score >= 70 ? 'high' : a.score >= 50 ? 'mid' : 'low';
            const date = a.createdAt ? new Date(a.createdAt).toLocaleDateString('en-GB',{day:'2-digit',month:'short'}) : '—';
            return `<tr>
              <td style="color:var(--text-main)">${a.sourceName}</td>
              <td>${a.mode}</td>
              <td><span class="score-pill ${sc}">${a.score}%</span></td>
              <td>${date}</td>
              <td>${a.timeTaken > 0 ? formatTime(a.timeTaken) : '—'}</td>
            </tr>`;
          }).join('')}
        </tbody>
      </table>
    </div>
  </div>

  <div class="dash-section">
    <div class="dash-section-title">Leaderboard — Top 5</div>
    <div id="leaderboard-container"><div class="spinner"></div></div>
  </div>
</div>`;
```

// Unique sourceIds from this user’s attempts (up to 5 for the leaderboard)
const sourceIds = […new Set(attempts.map(a => a.sourceId))].slice(0, 5);
loadLeaderboard(sourceIds);
}

// ============================================================
//  LEADERBOARD — reads from RTDB leaderboard/{sourceId}
// ============================================================
async function loadLeaderboard(sourceIds) {
const container = document.getElementById(‘leaderboard-container’);
if (!container || !_db) return;
try {
const results = {};
for (const sid of sourceIds) {
const snap = await _fb.get(_fb.ref(_db, `leaderboard/${sid}`));
if (snap.exists()) {
// leaderboard/{sourceId}/{uid} — get all entries, sort by score desc, take top 5
const entries = Object.values(snap.val())
.sort((a, b) => b.score - a.score)
.slice(0, 5);
results[sid] = entries;
}
}
renderLeaderboard(container, results);
} catch (e) {
container.innerHTML = `<p style="font-size:.8rem;color:var(--text-dim)">Could not load leaderboard.</p>`;
}
}

function renderLeaderboard(container, results) {
const rankColors = [‘gold-r’,‘silver-r’,‘bronze-r’,’’,’’];
const rankIcons  = [‘🥇’,‘🥈’,‘🥉’,‘4’,‘5’];
let html = ‘’;
for (const [sid, entries] of Object.entries(results)) {
if (!entries.length) continue;
html += `<div style="margin-bottom:1.5rem"> <div style="font-size:.75rem;color:var(--text-dim);margin-bottom:.5rem">${entries[0].sourceName}</div> <div class="leaderboard-list"> ${entries.map((e, i) => { const initials = e.name ? e.name.split(' ').map(n=>n[0]).join('').slice(0,2).toUpperCase() : '??'; const isYou    = _currentUser && e.uid === _currentUser.uid; const date     = e.createdAt ? new Date(e.createdAt).toLocaleDateString('en-GB',{day:'2-digit',month:'short'}) : ''; return`
<div class="lb-row">
<div class="lb-rank ${rankColors[i]}">${rankIcons[i]}</div>
<div style="display:flex;align-items:center;gap:.5rem;flex:1">
<div class="nav-avatar" style="width:28px;height:28px;font-size:.6rem">${initials}</div>
<div class="lb-name">${e.name} ${isYou ? ‘<span class="lb-you-tag">You</span>’ : ‘’}</div>
</div>
<div class="lb-date">${date}</div>
<div class="lb-score">${e.score}%</div>
</div>`; }).join('')} </div> </div>`;
}
container.innerHTML = html || `<p style="font-size:.8rem;color:var(--text-dim)">No leaderboard data yet.</p>`;
}

// ============================================================
//  LEADERBOARD PAGE (standalone, linked from home)
// ============================================================
async function renderLeaderboardPage() {
setBreadcrumb([‘Home’, ‘Leaderboard’]);
const content = document.getElementById(‘leaderboard-page-content’);
if (!content) return;

if (!_currentUser) {
content.innerHTML = ` <div class="empty-state" style="padding-top:3rem"> <div class="icon">🔒</div> <p>Please <a href="#" onclick="openAuthModal('login');return false">sign in</a> to view the leaderboard.</p> </div>`;
return;
}

content.innerHTML = `<div style="display:flex;justify-content:center;padding:3rem"><div class="spinner"></div></div>`;

try {
const snap = await _fb.get(_fb.ref(_db, ‘leaderboard’));
if (!snap.exists()) {
content.innerHTML = `<div class="empty-state"><div class="icon">🏆</div><p>No leaderboard data yet. Complete a test to appear here!</p></div>`;
return;
}
const allSources = snap.val();
const rankColors = [‘gold-r’,‘silver-r’,‘bronze-r’,’’,’’];
const rankIcons  = [‘🥇’,‘🥈’,‘🥉’,‘4’,‘5’];
let html = ‘<div style="padding-top:2rem">’;
for (const [sid, usersObj] of Object.entries(allSources)) {
const entries = Object.values(usersObj).sort((a,b) => b.score - a.score).slice(0,5);
if (!entries.length) continue;
html += `<div class="dash-section"> <div class="dash-section-title">${entries[0].sourceName}</div> <div class="leaderboard-list"> ${entries.map((e, i) => { const initials = e.name ? e.name.split(' ').map(n=>n[0]).join('').slice(0,2).toUpperCase() : '??'; const isYou    = _currentUser && e.uid === _currentUser.uid; const date     = e.createdAt ? new Date(e.createdAt).toLocaleDateString('en-GB',{day:'2-digit',month:'short'}) : ''; return`
<div class="lb-row">
<div class="lb-rank ${rankColors[i]}">${rankIcons[i]}</div>
<div style="display:flex;align-items:center;gap:.5rem;flex:1">
<div class="nav-avatar" style="width:28px;height:28px;font-size:.6rem">${initials}</div>
<div class="lb-name">${e.name} ${isYou ? ‘<span class="lb-you-tag">You</span>’ : ‘’}</div>
</div>
<div class="lb-date">${date}</div>
<div class="lb-score">${e.score}%</div>
</div>`; }).join('')} </div> </div>`;
}
html += ‘</div>’;
content.innerHTML = html;
} catch(e) {
content.innerHTML = `<div class="empty-state"><p>Could not load leaderboard. Check your connection.</p></div>`;
console.error(e);
}
}

// ============================================================
//  ADMIN PANEL — reads from RTDB users/ and all attempts/
// ============================================================
async function renderAdmin() {
setBreadcrumb([‘Home’, ‘Admin Panel’]);
const content = document.getElementById(‘admin-content’);
if (!content) return;

if (!_currentUser || _currentUser.uid !== window.ADMIN_UID) {
content.innerHTML = `<div class="empty-state"><div class="icon">🛡</div><p>Access denied. Admin only.</p></div>`;
return;
}

content.innerHTML = `<div style="display:flex;justify-content:center;padding:3rem"><div class="spinner"></div></div>`;

try {
const [usersSnap, attSnap] = await Promise.all([
_fb.get(_fb.ref(_db, ‘users’)),
_fb.get(_fb.ref(_db, ‘attempts’)),
]);

```
const users = usersSnap.exists() ? Object.entries(usersSnap.val()).map(([uid, v]) => ({ uid, ...v })) : [];

// attempts is nested: { uid: { pushKey: attemptObj } }
const attempts = [];
if (attSnap.exists()) {
  const raw = attSnap.val();
  for (const uid of Object.keys(raw)) {
    for (const attempt of Object.values(raw[uid])) {
      attempts.push(attempt);
    }
  }
  attempts.sort((a, b) => b.createdAt - a.createdAt);
}

renderAdminContent(content, users, attempts.slice(0, 300));
```

} catch (e) {
content.innerHTML = `<div class="empty-state"><p>Could not load admin data. Check your database rules.</p></div>`;
console.error(e);
}
}

function renderAdminContent(container, users, attempts) {
const avgScore = attempts.length
? Math.round(attempts.reduce((s, a) => s + a.score, 0) / attempts.length) : 0;

container.innerHTML = `
<div style="padding-top:2rem">
<div class="dash-stats-row">
<div class="dash-stat-card"><div class="dash-stat-n">${users.length}</div><div class="dash-stat-l">Students</div></div>
<div class="dash-stat-card"><div class="dash-stat-n">${attempts.length}</div><div class="dash-stat-l">Total Attempts</div></div>
<div class="dash-stat-card"><div class="dash-stat-n">${avgScore}%</div><div class="dash-stat-l">Overall Avg</div></div>
<div class="dash-stat-card"><div class="dash-stat-n">${new Set(attempts.map(a=>a.sourceId)).size}</div><div class="dash-stat-l">Topics Tested</div></div>
</div>

```
  <div class="admin-toolbar">
    <input class="form-input" type="text" id="admin-search"
      placeholder="Search by name, matric or course…" oninput="filterAdminTable()">
    <button class="btn-outline" onclick="exportAdminCSV()">Export CSV</button>
  </div>

  <div class="dash-section">
    <div class="dash-section-title">All attempts (latest ${attempts.length})</div>
    <div style="overflow-x:auto">
      <table class="attempt-table" id="admin-table">
        <thead><tr>
          <th>Student</th><th>Matric</th><th>Level</th>
          <th>Course / Chapter</th><th>Mode</th><th>Score</th><th>Date</th>
        </tr></thead>
        <tbody id="admin-tbody">
          ${attempts.map(a => {
            const sc   = a.score >= 70 ? 'high' : a.score >= 50 ? 'mid' : 'low';
            const date = a.createdAt ? new Date(a.createdAt).toLocaleDateString('en-GB',{day:'2-digit',month:'short',year:'2-digit'}) : '—';
            return `<tr>
              <td style="color:var(--text-main)">${a.name||'—'}</td>
              <td><code style="font-size:.75rem">${a.matric||'—'}</code></td>
              <td>${a.level||'—'}</td>
              <td>${a.sourceName}</td>
              <td>${a.mode}</td>
              <td><span class="score-pill ${sc}">${a.score}%</span></td>
              <td>${date}</td>
            </tr>`;
          }).join('')}
        </tbody>
      </table>
    </div>
  </div>

  <div class="dash-section">
    <div class="dash-section-title">Registered students (${users.length})</div>
    <div style="overflow-x:auto">
      <table class="attempt-table">
        <thead><tr><th>Name</th><th>Matric</th><th>Level</th><th>Email</th></tr></thead>
        <tbody>
          ${users.map(u => `<tr>
            <td style="color:var(--text-main)">${u.name}</td>
            <td><code style="font-size:.75rem">${u.matric}</code></td>
            <td>${u.level}</td>
            <td style="color:var(--text-dim);font-size:.8rem">${u.email}</td>
          </tr>`).join('')}
        </tbody>
      </table>
    </div>
  </div>
</div>`;
```

container._attempts = attempts;
}

window.filterAdminTable = function() {
const q = document.getElementById(‘admin-search’).value.toLowerCase();
document.querySelectorAll(’#admin-tbody tr’).forEach(row => {
row.style.display = row.textContent.toLowerCase().includes(q) ? ‘’ : ‘none’;
});
};

window.exportAdminCSV = function() {
const container = document.getElementById(‘admin-content’);
if (!container || !container._attempts) return;
const rows = [[‘Name’,‘Matric’,‘Level’,‘Source’,‘Mode’,‘Score’,‘Date’]];
container.*attempts.forEach(a => {
const date = a.createdAt ? new Date(a.createdAt).toLocaleDateString(‘en-GB’) : ‘’;
rows.push([a.name||’’,a.matric||’’,a.level||’’,a.sourceName,a.mode,a.score+’%’,date]);
});
const csv = rows.map(r => r.map(c => `"${c}"`).join(’,’)).join(’\n’);
const link = document.createElement(‘a’);
link.href     = ‘data:text/csv;charset=utf-8,’ + encodeURIComponent(csv);
link.download = ’futa_attempts*’ + new Date().toISOString().slice(0,10) + ‘.csv’;
link.click();
};

// ============================================================
//  TOAST
// ============================================================
let _toastTimer;
function showToast(msg, type) {
let toast = document.getElementById(‘portal-toast’);
if (!toast) {
toast = document.createElement(‘div’);
toast.id = ‘portal-toast’;
toast.className = ‘toast’;
document.body.appendChild(toast);
}
toast.textContent = msg;
toast.className   = `toast${type ? ' ' + type : ''}`;
clearTimeout(_toastTimer);
setTimeout(() => toast.classList.add(‘show’), 10);
_toastTimer = setTimeout(() => toast.classList.remove(‘show’), 3200);
}
window.showToast = showToast;
