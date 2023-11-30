// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCUnfcKaKBUeloBU5q53aNfCMipMq2gDrk",
  authDomain: "muni-solve-v2.firebaseapp.com",
  projectId: "muni-solve-v2",
  storageBucket: "muni-solve-v2.appspot.com",
  messagingSenderId: "776177944098",
  appId: "1:776177944098:web:818254d2c0be8adfbeac7b",
  measurementId: "G-8YWJHD6JT0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const db = getFirestore(app);
export {auth , db};