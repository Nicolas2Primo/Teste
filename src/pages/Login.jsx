import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { firebase, auth } from "../services/firebase";

const Login = () => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const [inputValidateStyle, setInputValidateStyle] = useState();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleLoginEmailAndPassword = (event) => {
    event.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(formState.email, formState.password)
      .then(() => {
        //Login successful
      })
      .catch((error) => {
        if (error.code == "auth/wrong-password") {
          setError(
            "The password is invalid or the user does not have a password"
          );
        } else if (error.code == "auth/user-not-found") {
          setError(
            "There is no user record corresponding to this email adress"
          );
        } else if (error.code == "auth/invalid-email") {
          setError("The email address is badly formatted");
        } else setError(null);
        console.log(error.message);
      });
  };

  // Define a regular expression to match a valid email address
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  // Define a regular expression to match a password with at least 8 characters,
  // presence of numbers and at least 1 special symbol
  const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;

  return (
    <div className="bg-black w-full h-screen z-0 flex flex-col justify-center items-center gap-8 ">
      <h1 className="text-white font-bold text-3xl">Welcome Back</h1>

      <form
        noValidate
        onSubmit={handleLoginEmailAndPassword}
        className="flex flex-col gap-6 items-center"
      >
        <input
          type="email"
          name="email"
          onChange={handleInputChange}
          value={formState.email}
          required
          pattern={emailRegex}
          placeholder="Email"
          className={`py-1 rounded-lg px-1 outline-none bg-black focus:border-gray-500 border-[1.6px]  placeholder-white text-white`}
        />

        <input
          type="password"
          name="password"
          value={formState.password}
          required
          onChange={handleInputChange}
          pattern={passwordRegex}
          placeholder="Password"
          className="py-1 rounded-lg px-1 outline-none bg-black focus:border-gray-500 border-[1.6px] placeholder-white text-white "
        />

        {!!error ? <span className="text-white">{error}</span> : null}

        <button
          className=" bg-white rounded-lg text-black px-4 py-1 font-bold"
          type="submit"
        >
          Login
        </button>
      </form>
      <span className="text-white text-sm">
        Don't have an account?{" "}
        <Link to="/signup" className="font-semibold">
          Sign Up
        </Link>{" "}
      </span>
      <button className="text-white text-sm">Login with google</button>
    </div>
  );
};

export default Login;
