import React from "react";

const GenderCheck = () => {
  return (
    <div>
      <label className="text-white p-2">Gender</label>
      <div className="flex flex-nowrap justify-around">
        <label className="label w-20 cursor-pointer">
          <input
            type="radio"
            name="radio-1"
            className="radio checked:bg-blue-500 border-white"
          />
          <span className="label-text text-white">Male</span>
        </label>
        <label className="label w-24 cursor-pointer">
          <input
            type="radio"
            name="radio-1"
            className="radio checked:bg-blue-500 border-white"
          />
          <span className="label-text text-white">Female</span>
        </label>
      </div>
    </div>
  );
};

export default GenderCheck;
