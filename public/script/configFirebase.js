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
  apiKey: "AIzaSyDbefwIUf8-K9A-752b5uo_qmdPudL_AZk",
  authDomain: "chatsistemasdistribuidos-7acdc.firebaseapp.com",
  databaseURL: "https://chatsistemasdistribuidos-7acdc-default-rtdb.firebaseio.com",
  projectId: "chatsistemasdistribuidos-7acdc",
  storageBucket: "chatsistemasdistribuidos-7acdc.appspot.com",
  messagingSenderId: "248713836909",
  appId: "1:248713836909:web:c41b2bca754b478c04c264",
  measurementId: "G-DS3E5WMXDP"
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
