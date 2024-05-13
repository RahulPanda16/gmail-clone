// import firebase from "firebase"
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDaG4xAYSy1_TOw1pB9HDO-vsfo63_alq8",
    authDomain: "clone-bee9a.firebaseapp.com",
    projectId: "clone-bee9a",
    storageBucket: "clone-bee9a.appspot.com",
    messagingSenderId: "399420788585",
    appId: "1:399420788585:web:ecc194673ee8b8b2f2f7f8",
    measurementId: "G-SZMKW9F1JX"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebaseApp.auth()
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db, auth, provider}