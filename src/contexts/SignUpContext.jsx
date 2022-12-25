import React, { createContext, useState, useEffect } from "react";

export const SignUpContext = createContext();

const SignUpContextProvider = (props) => {
  const [userSignUp, setUserSignUp] = useState({
    username: "",
    email: "",
    password: "",
  });

  return (
    <SignUpContext.Provider value={{ userSignUp, setUserSignUp }}>
      {props.children}
    </SignUpContext.Provider>
  );
};

export default SignUpContextProvider;
