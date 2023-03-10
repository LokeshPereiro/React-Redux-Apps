import React, { useEffect, useState } from "react";
import { AuthContext } from "./";
import { FirebaseAuth } from "../../firebase/config";
import {
  loginWithEmailAndPassword,
  logOutFirebase,
  registerUserWithEmailAndPassword,
  singInWithGoogle,
} from "../../firebase/fireProvider";
import { onAuthStateChanged } from "firebase/auth";

export const AuthProvider = ({ children }) => {
  const [loggedUser, setLoggedUser] = useState();

  const loginProvider = async ({ email, password }) => {
    await loginWithEmailAndPassword({ email, password });
  };

  const registerProvider = async ({ email, password, displayName }) => {
    await registerUserWithEmailAndPassword({
      email,
      password,
      displayName,
    });
  };

  const registerWithGoogle = async () => {
    await singInWithGoogle();
  };

  const logOut = async () => {
    await logOutFirebase(FirebaseAuth);
  };

  useEffect(() => {
    const authState = onAuthStateChanged(FirebaseAuth, (fireUser) => {
      setLoggedUser(fireUser);
    });
    return () => authState(authState);
  }, []);
  console.log(loggedUser);
  return (
    <AuthContext.Provider
      value={{
        loginProvider,
        registerProvider,
        loggedUser,
        registerWithGoogle,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
