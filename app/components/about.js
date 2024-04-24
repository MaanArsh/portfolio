import React from "react";


const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1080px] text-center m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-medium text-[#e5fc91] p-2">
            About Me
          </h1>

          <p className=" sm:text-xl md:text-2xl  font-serif font-light p-2">
          As a student of software development at SAIT, I am immersed in a dynamic and evolving field that blends creativity with technical precision. My journey involves mastering programming languages, algorithms, and software engineering principles, all while cultivating problem-solving skills essential for tackling real-world challenges. At SAIT, I am likely engaged in hands-on projects, collaborating with peers, and learning from industry professionals to gain practical insights into the software development lifecycle. My passion for technology drives me to explore emerging trends, whether its AI, cybersecurity, or web development, ensuring I stay ahead in this rapidly changing landscape. With a commitment to continuous learning and a desire to make a meaningful impact, I am shaping a future where innovation thrives and software solutions transform the world.
          </p>
        </div>

        <div className="w-full h-auto m-auto shadow-xl bg-red-900 rounded-xl flex items-center justify-center p-2 hover:scale-105 ease-in duration-500">
          <img
            src="https://images.pexels.com/photos/670720/pexels-photo-670720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="picture"
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
