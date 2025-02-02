// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBiGwuC5m-2LCE0tdgm0krK6OtAC2QCNsQ",
    authDomain: "taskbuddy-bab34.firebaseapp.com",
    projectId: "taskbuddy-bab34",
    storageBucket: "taskbuddy-bab34.firebasestorage.app",
    messagingSenderId: "1064212972303",
    appId: "1:1064212972303:web:fbb12c604a6da862c0347a",
    measurementId: "G-3FZCLF62DF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export { auth, provider }