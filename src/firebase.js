// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhghRB8zQw3n7NFuNnBQ7XhRyJIr97hb4",
  authDomain: "todo-app-yt-f2d0e.firebaseapp.com",
  projectId: "todo-app-yt-f2d0e",
  storageBucket: "todo-app-yt-f2d0e.appspot.com",
  messagingSenderId: "988783745208",
  appId: "1:988783745208:web:7772ca6f8dc69e9b317c4d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);