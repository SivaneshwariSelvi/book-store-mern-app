// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAT3X_CPp-0bucb02kd1uYZssHSBmk_xfI",
  authDomain: "book-store-b2354.firebaseapp.com",
  projectId: "book-store-b2354",
  storageBucket: "book-store-b2354.firebasestorage.app",
  messagingSenderId: "51894740180",
  appId: "1:51894740180:web:ed81e3b14748604a9fc741",
  measurementId: "G-4JFEW0CNCF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =  getAuth(app);