"use client";

import React, { useState } from "react";

const CarrerGoals = () => {
    return (
        <div id="carrerGoals" className="w-full md:h-screen p-2 flex items-center py-16">
           <div className="h-screen text-center max-w-[1080px] w-full m-auto md:grid mx-auto p-2 flex justify-center">
        <div className="col-span-2">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-medium text-[#e5fc91] p-2">
            Carrer Goals
          </h1>

          <p className=" sm:text-xl md:text-2xl  font-serif font-light">
          As a software development student, I have a wide array of career goals to consider that can shape my future in the tech industry. I might aim to master multiple programming languages and technologies to enhance my versatility and employability. Focusing on becoming proficient in both front-end and back-end development could position me as a full-stack developer, making me highly valuable in building complete web applications. Alternatively, specializing in a niche area such as artificial intelligence, cybersecurity, or mobile app development could differentiate me in a competitive job market. Leadership and management skills are also crucial if my goal is to advance to positions like software architect or engineering manager. Furthermore, continuous learning and adapting to new technologies will be essential to keep up with the rapidly evolving field, ensuring that I remain at the forefront of software development trends.</p>
        </div>
        </div>
    </div>

    );
};

export default CarrerGoals;