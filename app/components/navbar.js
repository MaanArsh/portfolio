"use client";

import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className=" w-full fixed z-[100] shadow-xl h-20 ">
      <div className="flex justify-between items-center w-full h-full">
        <ul className="hidden md:flex">
          <Link href="#home">
            <li className="ml-5  uppercase hover:border-b">Home</li>
          </Link>
          <Link href="#about">
            <li className="ml-10  uppercase hover:border-b">About</li>
          </Link>
          <Link href="#skills">
            <li className="ml-10  uppercase hover:border-b">Skills</li>
          </Link>
          <Link href="#hobbies">
            <li className="ml-10  uppercase hover:border-b">Hobbies</li>
          </Link>
          <Link href="#carrerGoals">
            <li className="ml-10  uppercase hover:border-b">Carrer Goals</li>
          </Link>
          <Link href="#project">
            <li className="ml-10  uppercase hover:border-b">Project</li>
          </Link>
          <Link href="#workExp">
            <li className="ml-10  uppercase hover:border-b">Work Experience</li>
          </Link>
          <Link href="#contact">
            <li className="ml-10  uppercase hover:border-b">Contact</li>
          </Link>
        </ul>
        <div>
          <AiOutlineMenu
            className="text-3xl md:hidden ml-5 cursor-pointer"
            onClick={handleMenu}
          />
        </div>
      </div>

      <div
        className={
          showMenu
            ? "md:hidden fixed top-0 left-0 w-full h-screen bg-black/60"
            : ""
        }
      >
        <div
          className={
            showMenu
              ? "fixed top-0 left-0 w-[80%] sm:w-[60%] md:w-[45%] h-screen bg-[#6d0a0a] p-10 ease-in duration-500 flex"
              : "fixed top-0 left-[-100%]  p-10 ease-in duration-500 flex"
          }
        >
          <div className=" w-full justify-between">
            <ul className="">
              <Link href="#home">
                <li className="text-white uppercase my-4 hover:border-b">
                  Home
                </li>
              </Link>
              <Link href="#about">
                <li className="text-white uppercase my-4 hover:border-b">
                  About
                </li>
              </Link>
              <Link href="#skills">
                <li className="text-white uppercase my-4 hover:border-b">
                  Skills
                </li>
              </Link>
              <Link href="#hobbies">
                <li className="text-white uppercase my-4 hover:border-b">
                  Hobbies
                </li>
                <Link href="#carrerGoals">
                <li className="text-white uppercase my-4 hover:border-b">
                  Carrer Goals
                </li>
              </Link>
              </Link>
              <Link href="#project">
                <li className="text-white uppercase my-4 hover:border-b">
                  Project
                </li>
              </Link>
              <Link href="#workExp">
                <li className="text-white uppercase my-4 hover:border-b">
                  Work Experience
                </li>
              </Link>
              <Link href="#contact">
                <li className="text-white uppercase my-4 hover:border-b">
                  Contact
                </li>
              </Link>
            </ul>

            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#d6e88e]">
                Contact me:
              </p>
              <div className="flex my-4 items-center justify-between w-full sm:w-[80%] ">
                <div className="rounded-full shadow-lg w-fit shadow-black/60 p-3 cursor-pointer hover:scale-105 ease-in duration-100 mx-3">
                  <FaLinkedinIn className="text-xl" />
                </div>
                <div className="rounded-full shadow-lg w-fit shadow-black/60 p-3 cursor-pointer hover:scale-105 ease-in duration-100 mx-3">
                  <FaGithub className="text-xl" />
                </div>
                <div className="rounded-full shadow-lg w-fit shadow-black/60 p-3 cursor-pointer hover:scale-105 ease-in duration-100 mx-3">
                  <AiOutlineMail className="text-xl" />
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-full shadow-lg h-fit p-3 shadow-black/60 cursor-pointer">
            <AiOutlineClose
              className="text-3xl text-white"
              onClick={handleMenu}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
