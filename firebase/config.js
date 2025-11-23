// firebase/config.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "docclean.firebaseapp.com",
  projectId: "docclean",
  storageBucket: "docclean.firebasestorage.app",
  messagingSenderId: "476609818731",
  appId: "1:476609818731:web:72e61207f8d43b8777c12e"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);