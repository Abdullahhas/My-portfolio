import React from "react";
import port2 from "../images/port2.jpeg";

const About = () => {
  return (
   <section id="about" className="py-32 bg-gray-900">
  <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
    
    {/* Text Section */}
    <div className="flex-1 flex flex-col justify-center">
      <h1 className="text-3xl sm:text-4xl font-medium text-white mb-6">
        Hi, I'm Abdullah Hassan.
        <br className="hidden lg:inline-block" />
        Software Engineering Student
      </h1>
      <p className="text-gray-300 leading-relaxed mb-8">
        I am currently in my 6th semester at COMSATS University, Lahore. I enjoy creating web applications using React, Node.js, Express, and MongoDB. I am also learning AI, Machine Learning, Deep Learning, and Neural Networks to build intelligent solutions. My goal is to combine web development and AI skills to create innovative, user-friendly applications that solve real-world problems.
      </p>
      <div className="flex gap-4">
        <a
          href="#contact"
          className="text-white bg-green-500 py-2 px-6 rounded hover:bg-green-600 transition"
        >
          Work With Me
        </a>
        <a
          href="#projects"
          className="text-gray-400 bg-gray-800 py-2 px-6 rounded hover:bg-gray-700 hover:text-white transition"
        >
          See My Past Work
        </a>
      </div>
    </div>

    {/* Image Section */}
    <div className="flex-1 mt-8 lg:mt-0">
      <img
        src={port2}
        alt="hero"
        className="mx-auto rounded-lg object-cover max-h-[400px]"
      />
    </div>

  </div>
</section>

  );
};

export default About;
