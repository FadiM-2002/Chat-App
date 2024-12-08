import React from "react";

const TextInput = ({ label, placeholder = "Enter " + label.toLowerCase() }) => {
  return (
    <div>
      <label className="label p-2 flex-wrap">
        <span className="text-base label-text text-white">{label}</span>
        <input
          type="text"
          placeholder={placeholder}
          className="w-full input input-bordered h-10"
        />
      </label>
    </div>
  );
};

export default TextInput;
