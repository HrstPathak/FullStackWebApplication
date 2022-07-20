import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0iRGABv3KCVaFwjTgtQsyM8jTgHURrqA",
  authDomain: "e-comm-7f747.firebaseapp.com",
  projectId: "e-comm-7f747",
  storageBucket: "e-comm-7f747.appspot.com",
  messagingSenderId: "888110081022",
  appId: "1:888110081022:web:a143c1fa10f50f294496af",
  measurementId: "G-ZGJ79R13PE",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
