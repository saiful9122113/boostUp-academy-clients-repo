// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCS1EXR90RfkiKPq6h9RVW84n-m-TuhMuE",
  authDomain: "learning-platform-811a5.firebaseapp.com",
  projectId: "learning-platform-811a5",
  storageBucket: "learning-platform-811a5.appspot.com",
  messagingSenderId: "669121516350",
  appId: "1:669121516350:web:c41f519cefc89f1a3ad26f",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;





// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId,
// };