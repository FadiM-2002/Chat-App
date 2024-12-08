import React from "react";
import Anchor from "../../components/form/Anchor";
import TextInput from "../../components/form/TextInput";
import SubmitBtn from "../../components/sidebar/SubmitBtn";
import GenderCheck from "../../components/form/GenderCheck";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div
        className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding 
          backdrop-filter backdrop-blur-lg bg-opacity-0"
      >
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign up
        </h1>
        <form>
          <Anchor text="Already have an account?" />
          <TextInput label="Name" />
          <GenderCheck />
          <TextInput label="Username" />
          <TextInput label="Password" />
          <TextInput label="Confirm Password" placeholder="Re-enter password" />
          <SubmitBtn label="Sign up" />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
