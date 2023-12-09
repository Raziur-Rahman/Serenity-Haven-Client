// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAL8lQyKbmo3L-PX_FNqTgwKXvbiA03zao",
  authDomain: "b8a11-serenity-haven.firebaseapp.com",
  projectId: "b8a11-serenity-haven",
  storageBucket: "b8a11-serenity-haven.appspot.com",
  messagingSenderId: "968721740579",
  appId: "1:968721740579:web:fc908a19990d7059961296"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;