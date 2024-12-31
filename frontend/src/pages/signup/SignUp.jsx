import React from "react";
import Anchor from "../../components/form/Anchor";
import TextInput from "../../components/form/TextInput";
import SubmitBtn from "../../components/sidebar/SubmitBtn";
import GenderCheck from "../../components/form/GenderCheck";
import { useState } from "react";
import useSignup from "../../hooks/useSignup.js";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevents refreshing the page when clicking submit
    await signup(inputs);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div
        className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding 
          backdrop-filter backdrop-blur-lg bg-opacity-0"
      >
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign up
        </h1>
        <form onSubmit={handleSubmit}>
          <Anchor text="Already have an account?" endpoint="/login" />
          <TextInput
            label="Full Name"
            onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
            value={inputs.fullName}
          />
          <GenderCheck
            onChange={(gen) => setInputs({ ...inputs, gender: gen })}
            selectedGender={inputs.gender}
          />
          <TextInput
            label="Username"
            onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
            value={inputs.username}
          />
          <TextInput
            type="password"
            label="Password"
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
            value={inputs.password}
          />
          <TextInput
            type="password"
            label="Confirm Password"
            onChange={(e) =>
              setInputs({ ...inputs, confirmPassword: e.target.value })
            }
            value={inputs.confirmPassword}
            placeholder="Re-enter password"
          />
          <button
            className="btn btn-block btn-sm mt-2 btn-primary"
            disabled={loading}
          >
            {loading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              "Sign up"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
