// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpPmjlu10M-sSsdrYdzfrtA6Ior78V8y8",
  authDomain: "sinaly.firebaseapp.com",
  projectId: "sinaly",
  storageBucket: "sinaly.appspot.com",
  messagingSenderId: "884327398776",
  appId: "1:884327398776:web:28544060f554540f6a1c8d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app) ;
const db = getFirestore(app);
export {auth , db};
