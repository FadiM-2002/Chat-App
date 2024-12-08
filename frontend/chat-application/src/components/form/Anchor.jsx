import React from "react";

const Anchor = ({ text }) => {
  return (
    <a
      href=""
      className="text-orange-500 underline hover:text-yellow-400 mt-2 inline-block ml-20"
    >
      {text}
    </a>
  );
};

export default Anchor;
