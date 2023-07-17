// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKbGwnSm-WBgwGkCd6ZXFvrwCSpPc3Bto",
  authDomain: "img-gallery-c6a2f.firebaseapp.com",
  projectId: "img-gallery-c6a2f",
  storageBucket: "img-gallery-c6a2f.appspot.com",
  messagingSenderId: "287673194616",
  appId: "1:287673194616:web:09e879a2bb1ed47081b58d",
  measurementId: "G-YGLR04J64W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);