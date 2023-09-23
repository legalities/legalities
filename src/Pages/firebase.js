import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjGzCfy68NgmDYk9_XwPpFj6J28NfGe3E",
  authDomain: "ritequest-7e044.firebaseapp.com",
  projectId: "ritequest-7e044",
  storageBucket: "ritequest-7e044.appspot.com",
  messagingSenderId: "119198092642",
  appId: "1:119198092642:web:f0fe19ef92506cd01b303b",
  measurementId: "G-M77CDTET39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firebaseApp = firebase.initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth};