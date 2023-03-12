import { FirebaseAuth } from "./config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

/* 
- Created this file so that we don't have to call trycatch statement in our contextProvider again and again. 
- Import these methods in our AuthContext ask for same args defined here and expose/display to its children
*/

// Google signup instance
const googleProvider = new GoogleAuthProvider();

export const registerUserWithEmailAndPassword = async ({
  email,
  password,
  displayName,
}) => {
  try {
    const result = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    // info available in (result.user)
    const userData = result.user;

    // updateProfile is need iif you want to display current user name, otherwise it will be null!
    await updateProfile(userData, { displayName });

    return userData;
  } catch (error) {
    return {
      // Did it this way so that we could access easily errorMessage & response type
      ok: false,
      errorMessage: error.message,
    };
  }
};

export const loginWithEmailAndPassword = async ({ email, password }) => {
  try {
    const result = await signInWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    //  Can also send data this way
    const { photoURL, uid, displayName } = result.user;
    return {
      ok: true,
      uid,
      photoURL,
      displayName,
    };
  } catch (error) {
    return {
      ok: false,
      errorMessage: error.message,
    };
  }
};

export const singInWithGoogle = async () => {
  try {
    // Need firebase credential + google instance
    const result = await signInWithPopup(FirebaseAuth, googleProvider);

    const { displayName, photoURL, email, uid } = result.user;

    return {
      ok: true,
      displayName,
      photoURL,
      email,
      uid,
    };
  } catch (error) {
    const errorMessage = error.message;
    return {
      ok: false,
      errorMessage,
    };
  }
};

export const logOutFirebase = async () => {
  try {
    return await FirebaseAuth.signOut();
  } catch (error) {
    return {
      ok: false,
      errorMessage: error.message,
    };
  }
};
