// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8Ho2Gu5cux5u35nbN3vem9DMl6ZU-QYg",
  authDomain: "fliperamaawards.firebaseapp.com",
  projectId: "fliperamaawards",
  storageBucket: "fliperamaawards.appspot.com",
  messagingSenderId: "724651387661",
  appId: "1:724651387661:web:dcab1bf118bd82a848de44",
  measurementId: "G-SXEJFFWH9F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)