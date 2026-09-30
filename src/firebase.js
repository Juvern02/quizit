// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-v2q1mp7NeTXmUXfR9dH3mrtYrACmFcY",
  authDomain: "quizit-2f163.firebaseapp.com",
  projectId: "quizit-2f163",
  storageBucket: "quizit-2f163.firebasestorage.app",
  messagingSenderId: "80624489591",
  appId: "1:80624489591:web:161fb489c5dcc1c94b2272",
  measurementId: "G-RGZDQ7XX99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);