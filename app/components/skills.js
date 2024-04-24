import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaPython, FaJava, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { DiDotnet } from "react-icons/di";
import { SiCsharp, SiXaml } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

export default function Skills() {
  return (
    <div id="skills" className="w-full lg:h-screen">
      <div className="max-w-[1080px] mx-auto flex flex-col justify-center h-full py-20">
        <p className="text-3xl text-center sm:text-5xl md:text-6xl font-serif font-medium text-[#e5fc91] p-2">
          Skills
        </p>

        <div className="pb-10">
            <ul className="flex flex-row justify-center items-center mt-20">
                <li className="p-4">
            <FaReact size={40}/>
            </li>
            <li className="p-4">
            <FaHtml5 size={40}/>
            </li>
            <li className="p-4">
            <FaCss3Alt size={40} />
            </li>
            <li className="p-4">
            <IoLogoJavascript size={40}/>
            </li>
            <li className="p-4">
            <FaNodeJs size={40}/>
            </li>
            <li className="p-4">
            <TbBrandNextjs size={40}/>
            </li>
            <li className="p-4">
            <FaPython size={40}/>
            </li>
            <li className="p-4">
            <FaJava size={40}/>
            </li>
            <li className="p-4">
            <DiDotnet size={40}/>
            </li>
            <li className="p-4">
            <SiXaml size={40}/>
            </li>
            <li className="p-4">
            <SiCsharp size={40}/>
            </li>
            </ul>
        </div>
      </div>
    </div>
  );
}
