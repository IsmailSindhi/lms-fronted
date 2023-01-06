import React from "react";

export function InputBox({icon}) {
  return (
    <div className="flex justify-center items-center gap-2 bg-gray-50 border border-gray-300 rounded-lg p-1 ">
      {icon}
      <input
        type="text"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
      ></input>
    </div>
  );
}

export default InputBox;
