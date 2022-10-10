import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyA8Ho2Gu5cux5u35nbN3vem9DMl6ZU-QYg",
  authDomain: "fliperamaawards.firebaseapp.com",
  projectId: "fliperamaawards",
  storageBucket: "fliperamaawards.appspot.com",
  messagingSenderId: "724651387661",
  appId: "1:724651387661:web:dcab1bf118bd82a848de44",
  measurementId: "G-SXEJFFWH9F",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
