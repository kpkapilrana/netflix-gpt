// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVV89UmRVoYQEbGiGdazhOxUj6dM2KrEE",
  authDomain: "netflixgpt-89daa.firebaseapp.com",
  projectId: "netflixgpt-89daa",
  storageBucket: "netflixgpt-89daa.appspot.com",
  messagingSenderId: "438074548476",
  appId: "1:438074548476:web:2dcce92e6473cbeb383779",
  measurementId: "G-ER44VF47TP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);

export const auth = getAuth();
