import React from "react";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { SignUpContext } from "../contexts/SignUpContext";
import SignUpId from "./SignUpId";
import SignUpPass from "./SignUpPass";

const SignUp = () => {
  const { userSignUp, setUserSignUp } = useContext(SignUpContext);
  const [state, setState] = useState("signUpEmail");
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorPass, setErrorPass] = useState(null);
  console.log(userSignUp);

  // Define a regular expression to match a valid email address
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  // Define a regular expression to match a password with at least 8 characters,
  // presence of numbers and at least 1 special symbol
  const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;

  // Handle form submission
  const handleSubmitPassword = (event) => {
    event.preventDefault();

    // Validate the form input values using the regular expressions
    if (passwordRegex.test(userSignUp.password)) {
      // Form is valid, submit the form
      console.log("Form is valid, submit the form");
      setErrorPass(null);
    } else {
      // Form is invalid, display an error message

      setErrorPass(
        "The password must have at least 8 elements, 1 number and 1 special symbol"
      );
    }
  };

  // Handle form Email submission
  const handleSubmitEmail = (event) => {
    event.preventDefault();

    // Validate the form input values using the regular expressions
    if (emailRegex.test(userSignUp.email)) {
      // Form is valid, submit the form
      console.log("Form is valid, submit the form");
      setState("signUpPassword");
    } else {
      // Form is invalid, display an error message
      console.log("Form is invalid, display an error message");
    }
  };

  return (
    <div className="bg-black w-full h-screen z-0 flex flex-col justify-center items-center gap-8 ">
      {state == "signUpEmail" ? (
        <SignUpId
          handleSubmitEmail={handleSubmitEmail}
          emailRegex={emailRegex}
          errorEmail={errorEmail}
        ></SignUpId>
      ) : state == "signUpPassword" ? (
        <SignUpPass
          handleSubmitPassword={handleSubmitPassword}
          passwordRegex={passwordRegex}
          errorPass={errorPass}
        ></SignUpPass>
      ) : state == "signUpUsername" ? (
        ""
      ) : (
        ""
      )}
    </div>
  );
};

export default SignUp;
