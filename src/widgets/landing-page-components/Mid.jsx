import React from "react";
import imcslogo from "/img/imcs.png";
import Card from "@/widgets/cards/card";
import { Link } from "react-router-dom";
import { GiTeacher } from "react-icons/gi";
import { FaUserGraduate,FaUserCog } from "react-icons/fa";

export function Mid() {
  return (
    <div className="drop-shadow-2xl bg-transparent flex flex-col items-center justify-center gap-4 mx-auto my-4 max-w-xs  p-4 rounded-2xl md:flex-row md:gap-8  md:max-w-xl md:my-16 md:p-12 md:bg-slate-900 ">
      <div>
        <img className="w-32 md:w-60 rounded-2xl" src={imcslogo} alt=""></img>
      </div>

      <div>
        <div className=" bg-transparent rounded-lg p-1 w-40 m-2 text-center text-base ">
          <span className="text-cente text-black underline md:text-white font-semibold">
            Login As
          </span>
        </div>
        <div className="flex flex-col md:gap-2 ">
          <Link to="auth/teacher">
            <Card icon={<GiTeacher />} color="red" text="Teacher"></Card>
          </Link>
          <Link to="auth/student">
            <Card
              icon={<FaUserGraduate />}
              color="yellow"
              text="Student"
            ></Card>
          </Link>
          <Link to="auth/admin">
            <Card icon={<FaUserCog />} color="yellow" text="Admin"></Card>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Mid;
