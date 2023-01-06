import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export function BackButton() {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate("/")}>
      {<AiOutlineArrowLeft className="w-6 h-6 text-white" />}
    </button>
  );
}

export default BackButton;
