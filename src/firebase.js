import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDiZX4gh96OZgikczamM9igmEJZnSq_w0k",
  authDomain: "clone-95df4.firebaseapp.com",
  databaseURL: "https://clone-95df4.firebaseio.com",
  projectId: "clone-95df4",
  storageBucket: "clone-95df4.appspot.com",
  messagingSenderId: "577612381591",
  appId: "1:577612381591:web:867a8fe136db5d551d18d2",
  measurementId: "G-42YQN2CNQJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
