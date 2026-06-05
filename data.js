// ============================================================
//  data.js  —  FUTA Online Class
//  Reads _COURSE_REGISTRY (populated by course files) and
//  builds the LEVELS and COURSES lookup objects used by app.js
//  Load order:  registry.js → course files → data.js → app.js
// ============================================================

// ── LEVEL DEFINITIONS ────────────────────────────────────────
//  id          : used in URL hash and Firestore paths
//  label       : short display name
//  fullName    : card heading
//  desc        : card subheading
//  allowCombine: if true, the level page shows "Combine Courses" CBT
//  color       : theme accent for the level card (css class suffix)
window.LEVELS = [
  {
    id:           'predegree',
    label:        'Pre-Degree',
    fullName:     'Pre-Degree Programme',
    desc:         'Foundation year bridging course',
    allowCombine: true,
    color:        'purple'
  },
  {
    id:           'uabs',
    label:        'UABS',
    fullName:     'UABS (Unified Degree Programme)',
    desc:         'Unified Admissions — bridging to 100 Level',
    allowCombine: true,
    color:        'blue'
  },
  {
    id:           '100l',
    label:        '100 Level',
    fullName:     'Undergraduate (100 Level)',
    desc:         'First year — all departments',
    allowCombine: false,
    color:        'teal'
  },
  {
    id:           '200l',
    label:        '200 Level',
    fullName:     'Undergraduate (200 Level)',
    desc:         'Second year courses',
    allowCombine: false,
    color:        'amber'
  },
  {
    id:           '300l',
    label:        '300 Level',
    fullName:     'Undergraduate (300 Level)',
    desc:         'Third year courses',
    allowCombine: false,
    color:        'coral'
  },
  {
    id:           '400l',
    label:        '400 Level',
    fullName:     'Undergraduate (400 Level)',
    desc:         'Fourth year courses',
    allowCombine: false,
    color:        'pink'
  },
  {
    id:           '500l',
    label:        '500 Level',
    fullName:     'Undergraduate (500 Level)',
    desc:         'Fifth year courses',
    allowCombine: false,
    color:        'purple'
  }
];

// ── SEMESTER LABELS ───────────────────────────────────────────
window.SEMESTER_LABELS = {
  '1': 'First Semester',
  '2': 'Second Semester',
  'both': 'Both Semesters'
};

// ── BUILD LOOKUP MAPS ─────────────────────────────────────────
//  window.COURSES  : { courseId → courseData }
//  window.BY_LEVEL : { levelId → [courseData, …] }

(function buildCourseIndex() {
  const registry = window._COURSE_REGISTRY || [];
  const courses  = {};
  const byLevel  = {};

  for (const level of window.LEVELS) {
    byLevel[level.id] = [];
  }

  for (const course of registry) {
    courses[course.id] = course;
    const lvl = course.level || 'uabs';
    if (!byLevel[lvl]) byLevel[lvl] = [];
    byLevel[lvl].push(course);
  }

  window.COURSES  = courses;
  window.BY_LEVEL = byLevel;
})();

// ── HELPERS ───────────────────────────────────────────────────

/** Total question count across all chapters of a course */
window.courseQuestionCount = function (course) {
  return (course.chapters || []).reduce(
    (sum, ch) => sum + (ch.questions || []).length, 0
  );
};

/** Total question count for a single chapter */
window.chapterQuestionCount = function (chapter) {
  return (chapter.questions || []).length;
};

/**
 * Pool and shuffle questions from an array of chapter objects.
 * Returns at most `limit` questions (or all if limit is 0/undefined).
 */
window.poolQuestions = function (chapters, limit) {
  let all = [];
  for (const ch of chapters) {
    for (const q of (ch.questions || [])) {
      all.push({ ...q, _chapterTitle: ch.title });
    }
  }
  // Fisher-Yates shuffle
  for (let i = all.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [all[i], all[j]] = [all[j], all[i]];
  }
  if (limit && limit > 0 && limit < all.length) {
    all = all.slice(0, limit);
  }
  return all;
};

/**
 * Auto-calculate default time (minutes) for Take-Test mode.
 * Formula: 1.5 min per question, min 10, max 120.
 */
window.defaultTime = function (questionCount) {
  const raw = Math.round(questionCount * 1.5);
  return Math.min(120, Math.max(10, raw));
};
