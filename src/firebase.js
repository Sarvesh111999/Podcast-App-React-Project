// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtSO7ALH1M6ikjOrQwmmkoMy5PsZVIEVY",
  authDomain: "podcast-audio-react-project.firebaseapp.com",
  projectId: "podcast-audio-react-project",
  storageBucket: "podcast-audio-react-project.appspot.com",
  messagingSenderId: "481433478722",
  appId: "1:481433478722:web:c0400beedc3a460c31afdb",
  measurementId: "G-MD3VYMR3VK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { auth, db, storage };