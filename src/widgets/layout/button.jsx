import React from "react";
import { FaSignInAlt } from "react-icons/fa";


export function Button({text, icon, action}) {
  return (
    <div className="flex flex-row gap-4 justify-center items-center bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl focus:outline-none focus:shadow-outline">
      {icon}
      <button className="" onClick={action}>{text}</button>
    </div>
  );
}

export default Button;
