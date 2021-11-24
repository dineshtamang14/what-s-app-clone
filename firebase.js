import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAZJ0M-Qd_P165_uyEBX-wV9wr3a_y3840",
  authDomain: "whatsapp-70651.firebaseapp.com",
  projectId: "whatsapp-70651",
  storageBucket: "whatsapp-70651.appspot.com",
  messagingSenderId: "636733999627",
  appId: "1:636733999627:web:5261495f56d33e5898d50e",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
