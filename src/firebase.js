import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD9K2qMeG945RYUex1Vnm5Y3Rr6m_RKV5k",
  authDomain: "sdj-2026.firebaseapp.com",
  projectId: "sdj-2026",
  storageBucket: "sdj-2026.firebasestorage.app",
  messagingSenderId: "891908102742",
  appId: "1:891908102742:web:c6c49b1ccff61b2418b9f7",
  measurementId: "G-EWEQTJFG2B",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
