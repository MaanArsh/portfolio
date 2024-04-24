"use client";

import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Link from "next/link";

const Contact = () => {
    return (
        <div id="contact" className="w-full mt-20 md:h-screen p-2 flex items-center py-16">
           <div className="h-screen text-center max-w-[1080px] w-full mx-auto m-auto md:grid p-2 flex justify-center">
            <div className="md:block pt-10 w-screen justify-between mx-auto">
            <p className="text-3xl sm:text-5xl md:text-6xl font-serif font-medium text-[#e5fc91] p-2 tracking-wides">
              Contact me:
            </p>
            <div className="flex my-4 items-center mx-auto justify-center w-full sm:w-[80%] ">
            <div className="rounded-full shadow-lg w-fit shadow-black/60 p-3 cursor-pointer hover:scale-105 ease-in duration-100 mx-3">
                <Link href="https://github.com/MaanArsh">
                <FaGithub className="text-xl sm:text-2xl md:text-3xl" />
                </Link>
              </div>
              <div className="rounded-full shadow-lg w-fit shadow-black/60 p-3 cursor-pointer hover:scale-105 ease-in duration-100 mx-3">
                <Link href="mailto:maanarsh5310@gmail.com">
                <AiOutlineMail className="text-xl sm:text-2xl md:text-3xl" />
                </Link>
              </div>
              <div className="rounded-full shadow-lg w-fit shadow-black/60 p-3 cursor-pointer hover:scale-105 ease-in duration-100 mx-3">
                <Link href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQGYPLTy-RAIhgAAAY8KLnWANaXkmX8xnoSiI2AQfxxCeIS8cxRDA67-X7QCaz5HwZMzER5kZ3Isqn8topR0HbNdR789U8bucM0pHyzSKS7n9ixFiQd311wOrUpjJdrr-krZXrs=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Farshpreet-singh-maan-171b07269%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dios_app">
                  <FaLinkedinIn className="text-xl sm:text-2xl md:text-3xl" />
                </Link>
              </div>
            </div>
        </div>
        </div>
    </div>

    );
};

export default Contact;