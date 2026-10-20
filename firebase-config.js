// Firebase config for the AGM voting site.
// This config is safe to make public: the security rules in firestore.rules are what protect the data.
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBgAdo2ccjpk3clmw6Z07ksjAu24By249M",
  authDomain: "agm-voting-2026.firebaseapp.com",
  projectId: "agm-voting-2026",
  storageBucket: "agm-voting-2026.firebasestorage.app",
  messagingSenderId: "142375637474",
  appId: "1:142375637474:web:4fa488736c66227b80e9bb"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
