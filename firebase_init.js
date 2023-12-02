// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6K-es1_izsicbOEp08SGBZIhcFwFvD9U",
  authDomain: "assignment-12-e4284.firebaseapp.com",
  projectId: "assignment-12-e4284",
  storageBucket: "assignment-12-e4284.appspot.com",
  messagingSenderId: "318152568232",
  appId: "1:318152568232:web:29838810a94aaa480f019d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth