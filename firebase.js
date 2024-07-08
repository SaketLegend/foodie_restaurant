// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyA4TjhfGmsW9XBwIN0KecG1uCl0S_mCiVk",
  authDomain: "foodie-restaurant-73dbe.firebaseapp.com",
  projectId: "foodie-restaurant-73dbe",
  storageBucket: "foodie-restaurant-73dbe.appspot.com",
  messagingSenderId: "461722830987",
  appId: "1:461722830987:web:bef2242c97d292c1b2ac8e",
  measurementId: "G-EWCKX2RM1E"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); 

const db = getFirestore(app);

export { auth, db, app };
