// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDGYkoDt9awrOZQPYUxTXMIuLGcIU-3zTo",
  authDomain: "facebook-clone-c5887.firebaseapp.com",
  projectId: "facebook-clone-c5887",
  storageBucket: "facebook-clone-c5887.appspot.com",
  messagingSenderId: "99962112685",
  appId: "1:99962112685:web:bfe3ad8280786b91979424",
  measurementId: "G-GW6V6F3PKF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
