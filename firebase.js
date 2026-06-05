// ============================================================
//  firebase.js  —  FUTA Online Class
//  Fill in YOUR firebaseConfig from console.firebase.google.com
//  Then load this file BEFORE app.js in index.html
// ============================================================

// ── 1. YOUR FIREBASE CONFIG ──────────────────────────────────
//  Go to: Firebase Console → Project Settings → Your Apps → Web App
//  Copy the firebaseConfig object and paste it here:
const FIREBASE_CONFIG = {
  apiKey:            "PASTE_YOUR_API_KEY_HERE",
  authDomain:        "PASTE_YOUR_AUTH_DOMAIN_HERE",
  projectId:         "PASTE_YOUR_PROJECT_ID_HERE",
  storageBucket:     "PASTE_YOUR_STORAGE_BUCKET_HERE",
  messagingSenderId: "PASTE_YOUR_MESSAGING_SENDER_ID_HERE",
  appId:             "PASTE_YOUR_APP_ID_HERE"
};

// ── 2. ADMIN UID ─────────────────────────────────────────────
//  After you create your own Firebase account and register on the
//  portal, go to Firebase Console → Authentication → Users,
//  copy your UID, and paste it here.
//  Only users whose UID matches this string will see the Admin panel.
const ADMIN_UID = "PASTE_YOUR_ADMIN_UID_HERE";

// ── 3. FIREBASE SDK (loaded from CDN) ───────────────────────
//  NOTE: The actual SDK scripts are loaded in index.html as
//  module-compatible ESM imports. This file just holds config.
//  Do not add SDK imports here.

window.FIREBASE_CONFIG = FIREBASE_CONFIG;
window.ADMIN_UID       = ADMIN_UID;
