import React from "react";
import TextInput from "../../components/form/TextInput";
import Anchor from "../../components/form/Anchor";
import SubmitBtn from "../../components/sidebar/SubmitBtn";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto mb-28">
      <div
        className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding 
      backdrop-filter backdrop-blur-lg bg-opacity-0"
      >
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Log in
        </h1>
        <form>
          <Anchor text="Don't have an account?" />
          <TextInput label="Username" />
          <TextInput label="Password" />
          <SubmitBtn label="Login" />
        </form>
      </div>
    </div>
  );
};

export default Login;
