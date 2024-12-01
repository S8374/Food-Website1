/* eslint-disable react-refresh/only-export-components */
import * as React from "react";
import auth from "../Firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

export const AuthContext = React.createContext();

export const AuthProviders = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const provider = new GoogleAuthProvider(); // Google provider instance

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    return signInWithPopup(auth, provider);
  };

  const logOut = () => {
    return signOut(auth);
  };

  React.useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      ("current User", currentUser);
      setUser(currentUser);
    });
    return () => unSubscribe();
  }, []);

  const authInfo = {
    createUser,
    logIn,
    googleSignIn, // Include Google Sign-In method
    user,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
