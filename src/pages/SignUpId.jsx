import React from "react";
import { useContext } from "react";
import { SignUpContext } from "../contexts/SignUpContext";

const SignUpId = ({ handleSubmitEmail, emailRegex, errorEmail }) => {
  const { userSignUp, setUserSignUp } = useContext(SignUpContext);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserSignUp({
      ...userSignUp,
      [name]: value,
    });
    console.log(userSignUp);
  };

  return (
    <div className="flex flex-col gap-8 items-center justify-center">
      <h1 className="text-white font-bold text-2xl">Enter your email</h1>
      <form
        onSubmit={handleSubmitEmail}
        noValidate
        className="flex flex-col gap-6 items-center"
      >
        <input
          type="email"
          name="email"
          value={userSignUp.email}
          onChange={handleInputChange}
          required
          pattern={emailRegex}
          placeholder="Email"
          className={`py-1 rounded-lg px-1 outline-none bg-black focus:border-gray-500 border-[1.6px]  placeholder-white text-white`}
        />

        <button
          className=" bg-white rounded-lg text-black px-4 py-1 font-bold"
          type="submit"
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default SignUpId;
