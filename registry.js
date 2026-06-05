// ============================================================
//  registry.js  —  FUTA Online Class
//  Defines window.PORTAL_INJECT so every course file can
//  register itself with one function call.
//  Load order:  registry.js → course files → data.js → app.js
// ============================================================

window._COURSE_REGISTRY = window._COURSE_REGISTRY || [];

/**
 * PORTAL_INJECT({ id, title, code, level, semester, description,
 *                 defaultTime, chapters: [{title, summary, keyPoints,
 *                 questions:[{type,q,options,answer,explanation}]}] })
 *
 * question types: "mcq" | "truefalse" | "fillin"
 * defaultTime: minutes for Take-Test mode (optional, auto-calculated if omitted)
 */
window.PORTAL_INJECT = function (courseData) {
  if (!courseData || !courseData.id) {
    console.warn('[PORTAL_INJECT] Course skipped — missing id:', courseData);
    return;
  }
  // Prevent duplicate registrations on hot-reload
  const existing = window._COURSE_REGISTRY.findIndex(c => c.id === courseData.id);
  if (existing !== -1) {
    window._COURSE_REGISTRY[existing] = courseData;
  } else {
    window._COURSE_REGISTRY.push(courseData);
  }
};
