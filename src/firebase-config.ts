// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth/cordova";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvAcKd8tEGY4PVef-4w_gqALM3uvsziCQ",
  authDomain: "docs-clone-tutorial-85dec.firebaseapp.com",
  projectId: "docs-clone-tutorial-85dec",
  storageBucket: "docs-clone-tutorial-85dec.firebasestorage.app",
  messagingSenderId: "158295411504",
  appId: "1:158295411504:web:3b5284492363c0d0c396f5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
