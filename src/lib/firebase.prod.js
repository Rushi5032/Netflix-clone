import Firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBVelF-AEB6BnbPGyTWIOBqMuHZE9XJk-Q",
  authDomain: "netflix-3e58a.firebaseapp.com",
  databaseURL: "https://netflix-3e58a.firebaseio.com",
  projectId: "netflix-3e58a",
  storageBucket: "netflix-3e58a.appspot.com",
  messagingSenderId: "618103615629",
  appId: "1:618103615629:web:f078e8e2eb86e109d5f2c4",
  measurementId: "G-JX7EQJ7KC7",
};

const firebase = Firebase.initializeApp(config);


export { firebase };
