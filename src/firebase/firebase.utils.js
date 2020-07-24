import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyB8gaguN5PiNM2sdHVk50TM8_u2oOxA5Io",
  authDomain: "crwn-db-a0c8f.firebaseapp.com",
  databaseURL: "https://crwn-db-a0c8f.firebaseio.com",
  projectId: "crwn-db-a0c8f",
  storageBucket: "crwn-db-a0c8f.appspot.com",
  messagingSenderId: "373542351034",
  appId: "1:373542351034:web:45b45940617f91f0371283",
  measurementId: "G-ERGGRQ8KDB"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;