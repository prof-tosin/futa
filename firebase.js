// ============================================================
//  firebase.js  —  FUTA Online Class
//  Fill in YOUR firebaseConfig from console.firebase.google.com
//  Then load this file BEFORE app.js in index.html
// ============================================================

// ── 1. YOUR FIREBASE CONFIG ──────────────────────────────────
//  Go to: Firebase Console → Project Settings → Your Apps → Web App
//  Copy the firebaseConfig object and paste it here:
const firebaseConfig = {
  apiKey: "AIzaSyBYseL1Ihm0X6-HYmS71kAZryQeNFAZQJc",
  authDomain: "futa-online-class.firebaseapp.com",
  projectId: "futa-online-class",
  storageBucket: "futa-online-class.firebasestorage.app",
  messagingSenderId: "446592599827",
  appId: "1:446592599827:web:c75fa6533499364f263ce6",
  databseURL: "https://futa-online-class-default-rtdb.firebaseio.com"
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
