// Source : http://bodiddlie.github.io/firebase-auth-with-react-router/

import firebase from 'firebase';
import Config from './config';

// Initialize Firebase
const firebaseConfig = {
  apiKey: Config.firebase.apiKey,
  authDomain: Config.firebase.authDomain,
  databaseURL: Config.firebase.databaseURL,
  storageBucket: Config.firebase.storageBucket
};

// the root app just in case we need it
export const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.database(); // the real-time database
export const auth = firebaseApp.auth(); // the firebase auth namespace

export const storageKey = 'KEY_FOR_LOCAL_STORAGE';

export const isAuthenticated = () => !!auth.currentUser || !!localStorage.getItem(storageKey);
