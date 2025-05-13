import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import {
  getDatabase,
  set,
  ref,
  push,
  onChildAdded,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCwrOH6KykVBQ0L1nQu48ozOBLj1HGhweI",
    authDomain: "clinica-saude-em-dia-mel.firebaseapp.com",
    projectId: "clinica-saude-em-dia-mel",
    storageBucket: "clinica-saude-em-dia-mel.firebasestorage.app",
    messagingSenderId: "316624205576",
    appId: "1:316624205576:web:fbac533af8827a6d0a9ebd",
    measurementId: "G-CG5MNCBC45"
  };

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

export {
  db,
  set,
  ref,
  push,
  onChildAdded,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  auth,
  signOut,
};
