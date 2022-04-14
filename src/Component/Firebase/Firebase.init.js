// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGYF9e9w3edio_-NaFzvBCPsUxY5I0P1I",
  authDomain: "car-service-app-1f2e4.firebaseapp.com",
  projectId: "car-service-app-1f2e4",
  storageBucket: "car-service-app-1f2e4.appspot.com",
  messagingSenderId: "139568292851",
  appId: "1:139568292851:web:911ddbcb0b576317b7a886"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;