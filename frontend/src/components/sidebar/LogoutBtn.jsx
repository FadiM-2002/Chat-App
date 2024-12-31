import React from "react";
import { CiLogout } from "react-icons/ci";
import useLogout from "../../hooks/useLogout.js";

const LogoutBtn = () => {
  const { loading, logout } = useLogout();
  return (
    <button className="mt-2 ml-2 btn btn-circle" disabled={loading}>
      {!loading ? (
        <CiLogout className="size-8" onClick={logout} />
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </button>
  );
};

export default LogoutBtn;
