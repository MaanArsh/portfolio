"use client";

import React, { useState } from "react";
import Link from 'next/link';

const Project = () => {
    return (
        <div id="project" className="w-full md:h-screen p-2 flex items-center py-16">
           <div className="h-screen text-center max-w-[1080px] w-full mx-auto m-auto md:grid p-2 flex justify-center">
            <div className="md:block pt-10 w-screen justify-between mx-auto">
            <p className="text-3xl sm:text-5xl md:text-6xl font-serif font-medium text-[#e5fc91] p-2 tracking-wides">
              Project
            </p>
            <div className=" text-left mt-10 mx-auto  w-full sm:w-[80%] ">
                <p className="text-[#ffffff] underline">Portfolio Project</p>
                    <ul>
                    <li>This Project is made by me in React, Next.js and Tailwind CSS in the Third Semester</li>
                    <li>Following is Git Hub repository link for my project <Link href="https://github.com/MaanArsh/portfolio.git" className="text-[#4272da] hover:underline">Portfolio</Link></li>
                    </ul>
                <p className="text-[#ffffff] underline mt-10">Expense Tracker App</p>
                    <ul>
                        <li>This Project "Dime Dart" is made by me and my team members in React native in our Third Semester</li>
                        <li>Following is Git Hub repository link for my project <Link href="https://github.com/MaanArsh/Expense-Tracker-App.git" className="text-[#4272da] hover:underline">DimeDart</Link></li>
                    </ul>
                <p className="text-[#ffffff] underline mt-10">Accounting App</p>
                    <ul>
                        <li>This Project of "Ace Accounting" is made by me and my team members in React native in our Third Semester</li>
                        <li>Following is Git Hub repository link for my project <Link href="https://github.com/MaanArsh/AceAccountant.git" className="text-[#4272da] hover:underline">AceAccountant</Link></li>
                    </ul>
        </div>
        </div>
        </div>
    </div>

    );
};

export default Project;