import React, { createContext, useState, useEffect } from "react";
import { auth, firebase } from "../services/firebase";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [user, setUser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        const { uid, displayName, photoURL } = user;
        if (!displayName || !photoURL) {
          throw new Error("O usuário não tem displayname ou photoURL ");
        }
        setUser({
          id: uid,
          avatar: photoURL,
          name: displayName,
        });
      }
    });
  }, []);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
