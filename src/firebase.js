import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDBiB67NlNR0bDJF8mukJ3Fy6VPQYkv1pQ",
  authDomain: "arjun-authentication-app.firebaseapp.com",
  projectId: "arjun-authentication-app",
  storageBucket: "arjun-authentication-app.appspot.com",
  messagingSenderId: "510205766673",
  appId: "1:510205766673:web:9be499faba3eee311915b0",
  measurementId: "G-MV6FC9X3KQ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { auth };
export default db;
