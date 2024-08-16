// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXeWg7XkaEaX-hq1nnfQCkmFr42Wu-p68",
  authDomain: "netflix-53f99.firebaseapp.com",
  projectId: "netflix-53f99",
  storageBucket: "netflix-53f99.appspot.com",
  messagingSenderId: "441652338621",
  appId: "1:441652338621:web:f180f59b3696111a583cd4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const firestore = getFirestore();

export { app, auth, firestore };
