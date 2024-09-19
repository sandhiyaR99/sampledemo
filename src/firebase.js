// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBYllJaBEeFXrgDDQ77dj6qYuccaRbUwXQ",
  authDomain: "project1-dd50e.firebaseapp.com",
  projectId: "project1-dd50e",
  storageBucket: "project1-dd50e.appspot.com",
  messagingSenderId: "792316861973",
  appId: "1:792316861973:web:78425f046e49c4bc37781c",
  measurementId: "G-JNSNPSZ17Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth