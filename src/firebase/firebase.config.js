// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJMy_Uo75vgx_fYVZ6WnjCmlMBHdLEWlQ",
  authDomain: "learning-platform-client-aec7d.firebaseapp.com",
  projectId: "learning-platform-client-aec7d",
  storageBucket: "learning-platform-client-aec7d.appspot.com",
  messagingSenderId: "219109502492",
  appId: "1:219109502492:web:7137cfdac7ab346c44f9d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;