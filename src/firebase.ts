
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAt_ZfqvYohjtPeBQEMBUyesV4zckKCYG4",
  authDomain: "twitter-reloaded-b2139.firebaseapp.com",
  projectId: "twitter-reloaded-b2139",
  storageBucket: "twitter-reloaded-b2139.appspot.com",
  messagingSenderId: "638828341136",
  appId: "1:638828341136:web:f3c5250a08762c4320b515",
  measurementId: "G-VDSV6N8QQG"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);