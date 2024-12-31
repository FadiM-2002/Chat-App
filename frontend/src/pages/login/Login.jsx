import React, { useState } from "react";
import TextInput from "../../components/form/TextInput";
import Anchor from "../../components/form/Anchor";
import SubmitBtn from "../../components/sidebar/SubmitBtn";
import { useSearchParams } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loading, login } = useLogin();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto mb-28">
      <div
        className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding 
      backdrop-filter backdrop-blur-lg bg-opacity-0"
      >
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Log in
        </h1>
        <form onSubmit={handleSubmit}>
          <Anchor text="Don't have an account?" endpoint="/signup" />
          <TextInput
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextInput
            type="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="btn btn-block btn-sm mt-2 btn-primary"
            disabled={loading}
          >
            {loading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              "Login"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
