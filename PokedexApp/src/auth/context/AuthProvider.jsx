import { useEffect, useState } from "react";
import { AuthContext } from "./";

import { FirebaseAuth } from "../../firebase/config";
import { onAuthStateChanged } from "firebase/auth";

import {
  loginWithEmailAndPassword,
  logOutFirebase,
  registerUserWithEmailAndPassword,
  singInWithGoogle,
} from "../../firebase/fireProvider";

export const AuthProvider = ({ children }) => {
  const [loggedUser, setLoggedUser] = useState();
  const [loading, setLoading] = useState(false);

  // Register user
  const registerProvider = async ({ email, password, displayName }) => {
    setLoading(true);
    await registerUserWithEmailAndPassword({
      email,
      password,
      displayName,
    });
  };

  // Register/login user with google
  const registerWithGoogle = async () => {
    setLoading(true);
    await singInWithGoogle();
  };

  // Login with credentials
  const loginProvider = async ({ email, password }) => {
    setLoading(true);
    await loginWithEmailAndPassword({ email, password });
  };

  // logout
  const logOut = async () => {
    // Need to make it false otherwise it will be showing loader
    setLoading(false);
    await logOutFirebase(FirebaseAuth);
  };

  // To persist logged user
  useEffect(() => {
    // We need out firebase credential to logout
    const authState = onAuthStateChanged(FirebaseAuth, (fireUser) => {
      setLoggedUser(fireUser);
    });
    // cleanUp
    return () => authState(authState);
  }, []);

  // console.log(loggedUser);
  return (
    <AuthContext.Provider
      value={{
        loginProvider,
        registerProvider,
        loggedUser,
        registerWithGoogle,
        logOut,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
