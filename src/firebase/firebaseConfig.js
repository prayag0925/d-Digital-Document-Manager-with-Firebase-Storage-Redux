// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnLU7E2UzRymTUMZl3A7SaAIP2axDAHPg",
  authDomain: "ddmreact.firebaseapp.com",
  databaseURL: "https://ddmreact-default-rtdb.firebaseio.com",
  projectId: "ddmreact",
  storageBucket: "ddmreact.firebasestorage.app",
  messagingSenderId: "689147872432",
  appId: "1:689147872432:web:04da0e58f9e3a5cc20a775",
  measurementId: "G-VWL2VFVKDF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);