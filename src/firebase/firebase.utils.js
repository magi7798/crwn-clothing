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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  // console.log(snapShot);
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;