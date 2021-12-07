import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDdgl7uJQZHqSQcVJNz2gZmV5QVcJ1Ch9w",
  authDomain: "cooking-recepi-site.firebaseapp.com",
  projectId: "cooking-recepi-site",
  storageBucket: "cooking-recepi-site.appspot.com",
  messagingSenderId: "306820233013",
  appId: "1:306820233013:web:a56d0a7f5c20a14ecbbe7c",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();

export { projectFirestore };
