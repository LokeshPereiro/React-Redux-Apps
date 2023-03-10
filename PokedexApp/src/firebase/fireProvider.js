import { FirebaseAuth } from "./config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

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
    const userData = result.user;

    // updateProfile es necesario para mostra el nombre!
    await updateProfile(userData, { displayName });

    return userData;
  } catch (error) {
    return {
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
    // console.log(result);
    // Estas propiedades se genera automaticamente por lo que los desestructuro y los mando tambien
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
    // mi config + el proveedor google
    const result = await signInWithPopup(FirebaseAuth, googleProvider);

    const { displayName, photoURL, email, uid } = result.user;
    // console.log(user);

    return {
      ok: true,
      //  UserInfo
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
