import React from "react";
import { Link } from "react-router-dom";

const Anchor = ({ text, endpoint }) => {
  return (
    <Link
      to={endpoint}
      className="text-orange-500 underline hover:text-yellow-400 mt-2 inline-block ml-20"
    >
      {text}
    </Link>
  );
};

export default Anchor;
