import React from "react";

const SubmitBtn = ({ label }) => {
  return (
    <div>
      <button className="btn btn-block btn-sm mt-2 btn-primary">{label}</button>
    </div>
  );
};

export default SubmitBtn;
