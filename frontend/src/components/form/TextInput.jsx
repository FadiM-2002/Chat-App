import React from "react";

const TextInput = ({
  type = "text",
  label,
  value,
  onChange,
  placeholder = "Enter " + label.toLowerCase(),
}) => {
  return (
    <div>
      <label className="label p-2 flex-wrap">
        <span className="text-base label-text text-white">{label}</span>
        <input
          type={type}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          className="w-full input input-bordered h-10"
        />
      </label>
    </div>
  );
};

export default TextInput;
