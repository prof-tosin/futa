// registry.js — must be the VERY FIRST script loaded
"use strict";

const _COURSE_REGISTRY = {};

function PORTAL_INJECT(courseCode, chapters) {
  _COURSE_REGISTRY[courseCode] = chapters;
}
