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
//  Supported question types:
//    mcq  — multiple choice (default)
//    tf   — true / false   (answer normalised to boolean)
//    fitb — fill in the blank (answer normalised to string array;
//            matching is always case-insensitive)
//
//  Both formats are normalised into the new object shape before
//  being stored in _COURSE_REGISTRY.
// ============================================================

window._COURSE_REGISTRY = window._COURSE_REGISTRY || [];

// ── CODE → LEVEL mapping for old-format courses ──────────────
const _CODE_LEVEL_MAP = {
  'MTS 101': '100l', 'MTS 102': '100l', 'MTS 104': '100l',
  'CSC 102': '100l', 'EEE 102': '100l',
  'PHY 102': '100l', 'PHY 108': '100l',
  'CHE 102': '100l', 'CHE 104': '100l',
  'BIO 102': '100l', 'BIO 104': '100l',
  'GNS 102': '100l', 'GNS 106': '100l',
  'MEE 102': '100l',
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

// ── Normalise a TRUE/FALSE question ──────────────────────────
// answer is always stored as a boolean.
// Matching at quiz-time should be case-insensitive (handled by
// the UI layer — options are always ['True','False']).
function _normaliseTF(q) {
  const raw = q.answer !== undefined ? q.answer : q.correct;
  let answer;
  if (typeof raw === 'boolean') {
    answer = raw;
  } else if (typeof raw === 'string') {
    answer = raw.trim().toLowerCase() === 'true';
  } else {
    answer = false;
    console.warn('[PORTAL_INJECT] tf question has no recognisable answer:', q);
  }
  return {
    type:        'tf',
    q:           q.q || q.text || '',
    options:     ['True', 'False'], // always present so UI can render normally
    answer:      answer,            // boolean
    explanation: q.explanation || '',
    _orig:       q,
  };
}

// ── Normalise a FILL-IN-THE-BLANK question ────────────────────
// answer is always stored as an array of accepted strings.
// caseSensitive is always forced to false (case-insensitive matching).
function _normaliseFITB(q) {
  const raw = q.answer !== undefined ? q.answer : q.correct;
  let answers;
  if (Array.isArray(raw)) {
    answers = raw.map(String);
  } else if (raw !== undefined && raw !== null) {
    answers = [String(raw)];
  } else {
    answers = [];
    console.warn('[PORTAL_INJECT] fitb question has no answer:', q);
  }
  return {
    type:          'fitb',
    q:             q.q || q.text || '',
    options:       [],       // unused but kept for schema consistency
    answer:        answers,  // array of accepted strings
    caseSensitive: false,    // always case-insensitive
    explanation:   q.explanation || '',
    _orig:         q,
  };
}

// ── Helper: check a learner's fitb response ───────────────────
// Always case-insensitive (caseSensitive flag is kept in the
// schema for forward-compatibility but is ignored here).
// Usage: window._checkFITB(normalisedQuestion, userTypedString) → boolean
window._checkFITB = function (question, userInput) {
  if (!userInput) return false;
  const input = userInput.trim().toLowerCase();
  return question.answer.some(accepted => accepted.trim().toLowerCase() === input);
};

// ── Helper: check a learner's tf response ────────────────────
// Accepts boolean or string ('true'/'false') from the UI.
// Always case-insensitive string comparison before converting.
// Usage: window._checkTF(normalisedQuestion, userResponse) → boolean
window._checkTF = function (question, userResponse) {
  let response;
  if (typeof userResponse === 'boolean') {
    response = userResponse;
  } else if (typeof userResponse === 'string') {
    response = userResponse.trim().toLowerCase() === 'true';
  } else {
    return false;
  }
  return response === question.answer;
};

// ── Normalise a single question — routes by type ──────────────
function _normaliseQuestion(q) {
  const type = (q.type || 'mcq').toLowerCase();
  if (type === 'tf')   return _normaliseTF(q);
  if (type === 'fitb') return _normaliseFITB(q);

  // ── MCQ (default) — original logic preserved exactly ─────────
  return {
    type:        'mcq',
    q:           q.q    || q.text || '',
    options:     q.options || [],
    answer:      q.answer  !== undefined ? q.answer : q.correct,
    explanation: q.explanation || '',
    _orig:       q,
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

    const titleMap = {
      'PHY 102': 'Basic Physics II',
      'PHY 108': 'Experimental Physics II',
      'MTS 101': 'Introductory Mathematics I',
      'MTS 102': 'Introductory Mathematics II',
      'MTS 104': 'Applied Mathematics',
      'CSC 102': 'Introduction to Computer Science',
      'EEE 102': 'Basic Electrical Engineering',
      'CHE 102': 'General Chemistry II',
      'CHE 104': 'General Chemistry IV',
      'BIO 102': 'General Biology II',
      'BIO 104': 'General Biology IV',
      'GNS 102': 'Use of English II',
      'GNS 106': 'Logic and Philosophy',
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
