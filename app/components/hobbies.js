"use client";

import React, { useState } from "react";

const Hobbies = () => {
    return (
        <div id="hobbies" className="w-full md:h-screen p-2 flex items-center py-16">
           <div className="h-screen text-center max-w-[1080px] w-full mx-auto m-auto md:grid p-2 flex justify-center">
            <div className="md:block pt-10 w-screen justify-between mx-auto">
            <p className="text-3xl sm:text-5xl md:text-6xl font-serif font-medium text-[#e5fc91] p-2 tracking-wides">
              Hobbies
            </p>
            <div className="flex my-4 items-center mx-auto justify-center w-full sm:w-[80%] ">
                <ul className="sm:text-xl md:text-2xl  font-serif font-light p-2">
                    <li>1. Playing Volleyball</li>
                    <li>2. Gaining more knowledge about Astronomy</li>
                    <li>3. Contributing to Open Source</li>
                    <li>4. Problem-Solving Challenges</li>
                    <li>5. AI and Machine Learning Projects</li>
                    <li>6. Learning New Technologies</li>
                    <li>7. Reading Books</li>
                    <li>8. Travelling and Discovering new Adventures</li>
                </ul>
        </div>
        </div>
        </div>
    </div>

    );
};

export default Hobbies;