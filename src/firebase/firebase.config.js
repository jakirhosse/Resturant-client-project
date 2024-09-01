import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_DB_apiKey,
  authDomain: process.env.NEXT_PUBLIC_DB_authDomain,
  projectId: process.env.NEXT_PUBLIC_DB_projectId,
  storageBucket: process.env.NEXT_PUBLIC_DB_storageBucket,
  messagingSenderId: process.env.NEXT_PUBLIC_DB_messagingSenderId,
  appId: process.env.NEXT_PUBLIC_DB_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
