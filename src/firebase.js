import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyALgnI6rxSas-He_S7BL5Qf127po1wCuJU",
  authDomain: "discord-clone-a4d1e.firebaseapp.com",
  databaseURL: "https://discord-clone-a4d1e.firebaseio.com",
  projectId: "discord-clone-a4d1e",
  storageBucket: "discord-clone-a4d1e.appspot.com",
  messagingSenderId: "216115153891",
  appId: "1:216115153891:web:42eea72a2fc8042e142ed6",
  measurementId: "G-BCTS5HG20W"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;