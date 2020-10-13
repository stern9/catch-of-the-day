import Rebase from "re-base";
import firebase from "firebase/app";
import "firebase/database"; // If using Firebase database
import "firebase/storage"; // If using Firebase storage
import "firebase/auth"; // for authentication

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAj2GdMDEpC1oyOWue8gBJcsemZRSfb-Io",
  authDomain: "catch-of-the-day-stern9.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-stern9.firebaseio.com",
  projectId: "catch-of-the-day-stern9",
  storageBucket: "catch-of-the-day-stern9.appspot.com",
  messagingSenderId: "94105528237",
  appId: "1:94105528237:web:1b98f5942e9b4d8adc2324",
  measurementId: "G-1DCSVG8CFZ",
});

const base = Rebase.createClass(firebaseApp.database());

// this is a named export
export { firebaseApp };

// this is a default export
export default base;
