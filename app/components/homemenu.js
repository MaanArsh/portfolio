"use client";

import React, { useState } from "react";

const Intro = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1080px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div className="flex-col">
          <div>
            <h1 className="flex flex-col text-3xl sm:text-5xl md:text-7xl  font-serif font-medium ">
            <img src="https://secdatacom.no/wp-content/uploads/sites/3/2019/10/blank-profile-male.jpg" alt="Profile Photo" className="wt-20 w-1/4 mx-auto"></img>
              <span className="col-span-7">Arshpreet Singh</span>
            </h1>
            <h2 className="flex flex-col text-xl sm:text-2xl md:text-5xl  font-serif font-medium">Student of Software Development at SAIT</h2>
            <p>Age: 20 years</p>
            <p>Contact No: +1 825-522-6622
            <p>Address: 61 Marthas Haven Green NE, T3J-3X5, AB</p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
