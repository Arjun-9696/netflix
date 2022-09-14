import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBnH_74Q0wis4g8JDGn8sBNL1ztqKYEMgM',
  authDomain: 'netflix-clone-95b31.firebaseapp.com',
  projectId: 'netflix-clone-95b31',
  storageBucket: 'netflix-clone-95b31.appspot.com',
  messagingSenderId: '262903093733',
  appId: '1:262903093733:web:8b47f5494027aae3b4b70c',
  measurementId: 'G-YWXPK1E1MY',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { auth };
export default db;
