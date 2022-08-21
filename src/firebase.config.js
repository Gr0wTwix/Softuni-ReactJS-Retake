// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCq-gv1tvWvKtngE3EzqkcOUjZf9X0ZtQY", //AIzaSyCq-gv1tvWvKtngE3EzqkcOUjZf9X0ZtQY
  authDomain: "softunimarketplace.firebaseapp.com",
  projectId: "softunimarketplace",
  storageBucket: "softunimarketplace.appspot.com",
  messagingSenderId: "550057197663",
  appId: "1:550057197663:web:53562b9015c8bc5dcb9bea",
  measurementId: "G-C69NFMW6P3"
};

// Initialize Firebase
initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore();