// ============================================================
//  registry.js  —  FUTA Online Class
//  Accepts BOTH old and new PORTAL_INJECT calling signatures:
//
//  OLD (existing files):
//    PORTAL_INJECT("PHY 102", [ { number, title, questionLimit,
//      timeLimit, summary, keyPoints, questions:
//      [{ text, options, correct, explanation }] } ])
//
//  NEW (future files):
//    PORTAL_INJECT({ id, title, code, level, semester,
//      description, chapters: [{ title, summary, keyPoints,
//      questions: [{ type, q, options, answer, explanation }] }] })
//
//  Both formats are normalised into the new object shape before
//  being stored in _COURSE_REGISTRY.
// ============================================================

window._COURSE_REGISTRY = window._COURSE_REGISTRY || [];

// ── CODE → LEVEL mapping for old-format courses ──────────────
// Derived from course code prefix and number.
// Override by adding level: '...' inside the chapter array as
// a leading meta-object: [{_meta:{level:'300l'}}, {chapter1...}]
const _CODE_LEVEL_MAP = {
  // 100 Level courses
  'MTS 101': '100l', 'MTS 102': '100l', 'MTS 104': '100l',
  'CSC 102': '100l', 'EEE 102': '100l',
  'PHY 102': '100l', 'PHY 108': '100l',
  'CHE 102': '100l', 'CHE 104': '100l',
  'BIO 102': '100l', 'BIO 104': '100l',
  'GNS 102': '100l', 'GNS 106': '100l',
  'MEE 102': '100l',
  // 300 Level
  'ENT 301': '300l',
};

// ── CODE → SEMESTER mapping ───────────────────────────────────
const _CODE_SEM_MAP = {
  'MTS 101': '1', 'MTS 102': '2', 'MTS 104': '2',
  'CSC 102': '2', 'EEE 102': '2',
  'PHY 102': '2', 'PHY 108': '2',
  'CHE 102': '2', 'CHE 104': '2',
  'BIO 102': '2', 'BIO 104': '2',
  'GNS 102': '2', 'GNS 106': '2',
  'MEE 102': '2',
  'ENT 301': '1',
};

// ── Derive a clean id from a course code ─────────────────────
// "PHY 102" → "phy102"
function _codeToId(code) {
  return code.toLowerCase().replace(/\s+/g, '');
}

// ── Normalise a single question from old → new format ─────────
function _normaliseQuestion(q) {
  return {
    type:        q.type || 'mcq',
    q:           q.q    || q.text || '',
    options:     q.options || [],
    answer:      q.answer  !== undefined ? q.answer : q.correct,
    explanation: q.explanation || '',
    // keep original fields too so nothing is lost
    _orig: q,
  };
}

// ── Normalise a chapter from old → new format ─────────────────
function _normaliseChapter(ch) {
  return {
    title:     ch.title     || `Chapter ${ch.number || ''}`,
    summary:   ch.summary   || '',
    keyPoints: ch.keyPoints || [],
    // preserve old timing hints — app.js can use these as defaults
    _questionLimit: ch.questionLimit || null,
    _timeLimit:     ch.timeLimit     || null,
    questions: (ch.questions || []).map(_normaliseQuestion),
  };
}

// ── Main normaliser ───────────────────────────────────────────
function _normalise(arg1, arg2) {
  // ── NEW format: single object argument ──────────────────────
  if (arg2 === undefined && typeof arg1 === 'object' && !Array.isArray(arg1)) {
    const d = arg1;
    if (!d.id) {
      console.warn('[PORTAL_INJECT] Skipped — missing id:', d);
      return null;
    }
    return {
      id:          d.id,
      code:        d.code        || d.id.toUpperCase(),
      title:       d.title       || d.code || d.id,
      level:       d.level       || '100l',
      semester:    d.semester    || '1',
      description: d.description || '',
      chapters:    (d.chapters || []).map(_normaliseChapter),
    };
  }

  // ── OLD format: PORTAL_INJECT("PHY 102", [...chapters]) ─────
  if (typeof arg1 === 'string' && Array.isArray(arg2)) {
    const code     = arg1.trim();
    const id       = _codeToId(code);
    const level    = _CODE_LEVEL_MAP[code]  || '100l';
    const semester = _CODE_SEM_MAP[code]    || '1';

    // Support optional leading meta object in chapters array:
    // [{_meta:{level:'300l', semester:'2'}}, {real chapter...}]
    let chapters = arg2;
    let metaOverride = {};
    if (chapters.length && chapters[0] && chapters[0]._meta) {
      metaOverride = chapters[0]._meta;
      chapters = chapters.slice(1);
    }

    // Build a readable title from the code
    // e.g. "PHY 102" → look up a title map, or just use the code
    const titleMap = {
      'PHY 102': 'Basic Physics II',
      'PHY 108': 'Basic Physics I',
      'MTS 101': 'Elementary Mathematics I',
      'MTS 102': 'Elementary Mathematics II',
      'MTS 104': 'Elementary Mathematics IV',
      'CSC 102': 'Introduction to Computer Science',
      'EEE 102': 'Basic Electrical Engineering',
      'CHE 102': 'General Chemistry II',
      'CHE 104': 'General Chemistry IV',
      'BIO 102': 'General Biology II',
      'BIO 104': 'General Biology IV',
      'GNS 102': 'Use of English II',
      'GNS 106': 'Communication in English II',
      'MEE 102': 'Engineering Drawing II',
      'ENT 301': 'Entrepreneurship',
    };

    return {
      id:          id,
      code:        code,
      title:       titleMap[code] || code,
      level:       metaOverride.level    || level,
      semester:    metaOverride.semester || semester,
      description: metaOverride.description || '',
      chapters:    chapters.map(_normaliseChapter),
    };
  }

  console.warn('[PORTAL_INJECT] Unrecognised call signature:', arg1, arg2);
  return null;
}

// ── Public function ───────────────────────────────────────────
window.PORTAL_INJECT = function (arg1, arg2) {
  const course = _normalise(arg1, arg2);
  if (!course) return;

  const existing = window._COURSE_REGISTRY.findIndex(c => c.id === course.id);
  if (existing !== -1) {
    window._COURSE_REGISTRY[existing] = course;
  } else {
    window._COURSE_REGISTRY.push(course);
  }
};
