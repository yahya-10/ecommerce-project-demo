// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDvQ48306zSOD6lVuFMCVUPDtpO1Z3IVV8",
  authDomain: "comunik-crm.firebaseapp.com",
  projectId: "comunik-crm",
  storageBucket: "comunik-crm.appspot.com",
  messagingSenderId: "234365727841",
  appId: "1:234365727841:web:d6a43cb909b72fa7632620",
  measurementId: "G-0M254SW9BC",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
