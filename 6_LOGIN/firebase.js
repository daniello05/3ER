// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKUDX8JX24ttX_N6daiFao1qeY_WMFzMc",
  authDomain: "daniell05.firebaseapp.com",
  projectId: "daniell05",
  storageBucket: "daniell05.appspot.com",
  messagingSenderId: "886286435653",
  appId: "1:886286435653:web:06f86ae29d69df7fe72a2c",
  measurementId: "G-HF5H6NJSNW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);