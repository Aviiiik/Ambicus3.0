import firebase from "firebase/compat/app";
import { getStorage } from "firebase/storage";
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

import {useAuthState} from 'react-firebase-hooks/auth'
import {useCollectionData} from 'react-firebase-hooks/firestore'
// Your web app's Firebase configuration
const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyBxRITJeITXsCki7-ulDLolLgoyDiReeBE",
    authDomain: "ambicus-de8bc.firebaseapp.com",
    projectId: "ambicus-de8bc",
    storageBucket: "ambicus-de8bc.appspot.com",
    messagingSenderId: "519972124582",
    appId: "1:519972124582:web:8e88c134986bf125b2c167",
    measurementId: "G-LHLWLQPBEM"
});

// Initialize Firebase

export const storage = getStorage(firebaseConfig);
export const auth= firebase.auth(firebaseConfig)
export const firestore= firebase.firestore(firebaseConfig)