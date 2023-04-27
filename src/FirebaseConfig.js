import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   // apiKey: `${process.env.REACT_APP_FIREBASE_KEY}`,
//   // authDomain: `${process.env.REACT_APP_FIREBASE_AUTH_DOMAIN}`,
//   // projectId: `${process.env.REACT_APP_FB_PROJECT_ID}`,
//   // storageBucket: `${process.env.REACT_APP_FB_STORAGE_ID}`,
//   // messagingSenderId: `${process.env.REACT_APP_FB_MS_ID}`,
//   // appId: `${process.env.REACT_APP_FB_APP_ID}`,
//   // measurementId: `${process.env.REACT_APP_FB_MID}`,
//   apiKey: "AIzaSyBKgZQw-h8h9YE0B7wNJewVDi9DRQtgZIM",
//   authDomain: "skillistic-44799.firebaseapp.com",
//   projectId: "skillistic-44799",
//   storageBucket: "skillistic-44799.appspot.com",
//   messagingSenderId: "969539873168",
//   appId: "1:969539873168:web:362c0902fa830ab0676b15",
//   measurementId: "G-TNSD1J47J1",
// };
const firebaseConfig = {
  apiKey: "AIzaSyBKgZQw-h8h9YE0B7wNJewVDi9DRQtgZIM",
  authDomain: "skillistic-44799.firebaseapp.com",
  projectId: "skillistic-44799",
  storageBucket: "skillistic-44799.appspot.com",
  messagingSenderId: "969539873168",
  appId: "1:969539873168:web:362c0902fa830ab0676b15",
  measurementId: "G-TNSD1J47J1",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
