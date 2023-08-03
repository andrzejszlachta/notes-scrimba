import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDlqffRd_VgP57K-ne1tNRUPaN_RDQh08k",
  authDomain: "react-notes-scrimba-75ad8.firebaseapp.com",
  projectId: "react-notes-scrimba-75ad8",
  storageBucket: "react-notes-scrimba-75ad8.appspot.com",
  messagingSenderId: "1077409261361",
  appId: "1:1077409261361:web:01b1821424409132e9f210"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");