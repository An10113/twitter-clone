// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCOMUWLM2PUcNsFnMMXuczLKQLYvcWnvk",
  authDomain: "twitter-clone-58eab.firebaseapp.com",
  projectId: "twitter-clone-58eab",
  storageBucket: "twitter-clone-58eab.appspot.com",
  messagingSenderId: "266580078078",
  appId: "1:266580078078:web:955ddbb4216be34903e4af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const db = getFirestore(app)
const auth = getAuth(app)

export {auth}