import React from 'react'
import {auth} from '../firebase'
import firebase from '../firebase';
import { GoogleAuthProvider } from 'firebase/auth';

function Signin() {
    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider()
        auth.signInWithPopup(provider);
      }
  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
      <p>Do not violate the community guidelines or you will be banned for life!</p>
    </>
  )
}

export default Signin