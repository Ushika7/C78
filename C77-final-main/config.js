import firebase from "firebase";
require("@firebase/firestore");

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuMO24PBAU17uddKAsqZQudVuiSvIZb-I",
  authDomain: "e-library-2a80c.firebaseapp.com",
  projectId: "e-library-2a80c",
  storageBucket: "e-library-2a80c.appspot.com",
  messagingSenderId: "1074534293344",
  appId: "1:1074534293344:web:e6cee95d1d1f38a1f24805"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebase.firestore;