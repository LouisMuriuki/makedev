// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyBXJ_QUrHVsc6YgFkNm1dAbc5Cjrme0SZc",
  authDomain: "makedev-3f45b.firebaseapp.com",
  projectId: "makedev-3f45b",
  storageBucket: "makedev-3f45b.appspot.com",
  messagingSenderId: "348348890031",
  appId: "1:348348890031:web:822e12cc908caddd2ecd5a"
};

// Initialize Firebase
initializeApp(firebaseConfig);
// export const db = getFirestore(app);
export const auth = getAuth()