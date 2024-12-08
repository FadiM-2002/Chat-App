import React from "react";
import { CiLogout } from "react-icons/ci";

const LogoutBtn = () => {
  return (
    <button className="mt-2 ml-2 btn btn-circle">
      <CiLogout className="size-8" />
    </button>
  );
};

export default LogoutBtn;
