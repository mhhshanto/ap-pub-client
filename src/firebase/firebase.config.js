// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_APIKEY,
//   authDomain: import.meta.env.VITE_AUTHDOMAIN,
//   projectId: import.meta.env.VITE_PROJECTID,
//   storageBucket: import.meta.env.VITE_STORAGEBUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
//   appId: import.meta.env.VITE_APPID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyAkq9NIdklgIpk6qSuPsrIAUNOerIG1hdw",
  authDomain: "book-inventory-2c676.firebaseapp.com",
  projectId: "book-inventory-2c676",
  storageBucket: "book-inventory-2c676.appspot.com",
  messagingSenderId: "273438946324",
  appId: "1:273438946324:web:57a545faca47e6b70ae301"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;