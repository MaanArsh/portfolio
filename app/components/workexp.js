"use client";

import React, { useState } from "react";

const WorkExperience = () => {
    return (
        <div id="workExp" className="w-full md:h-screen p-2 flex items-center py-16">
           <div className="h-screen text-center max-w-[1080px] w-full mx-auto m-auto md:grid p-2 flex justify-center">
            <div className="md:block pt-10 w-screen justify-between mx-auto">
            <p className="text-3xl sm:text-5xl md:text-6xl font-serif font-medium text-[#e5fc91] p-2 tracking-wides">
              Work Experience
            </p>
            <div className=" text-left mt-10 mx-auto  w-full sm:w-[80%] ">
                <p className="text-[#ffffff] underline">Customer Service Reprentative (Tim Hortons) [January 2023 - October 2023]</p>
                    <ul>
                        <li>1. Technical Support: Provide assistance to students and faculty with software, hardware, and networking issues. </li>
                        <li>2. Monitoring Lab Usage: Keep track of who uses the lab and ensure that all users adhere to lab rules.</li>
                        <li>3. Setting Up Equipment: Set up and configure hardware and software setups as needed for special classes or presentations held in the lab.</li>
                        <li>4. Documentation: Keep detailed records of lab incidents, user issues, equipment status, and any breaches of lab policy. </li>
                    </ul>
                <p className="text-[#ffffff] underline mt-10">Computer Lab Assistant [April 2022 - December 2022]</p>
                    <ul>
                        <li>1. Handling Payments: Process payments using cash registers and point-of-sale (POS) systems, ensuring transactions are handled securely and accurately. </li>
                        <li>2. Resolving Customer Issues: Address any customer complaints or concerns with patience and professionalism, aiming to resolve issues to the customer’s satisfaction.</li>
                        <li>3. Promoting Sales: Inform customers about new menu items, current promotions, and loyalty programs, encouraging them to try new offerings or participate in special deals.</li>
                        <li>4. Ensuring Food Safety: Adhere to food safety regulations and restaurant policies to ensure all food served is safe and of high quality. </li>
                    </ul>
        </div>
        </div>
        </div>
    </div>

    );
};

export default WorkExperience;