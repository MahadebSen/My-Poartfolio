// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcKqRBD4aapp_cv8SRRd5-gj0uo6ep9ao",
  authDomain: "portfolio-a8fff.firebaseapp.com",
  projectId: "portfolio-a8fff",
  storageBucket: "portfolio-a8fff.appspot.com",
  messagingSenderId: "44915350767",
  appId: "1:44915350767:web:f24c15f18f8e274a118f1a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
