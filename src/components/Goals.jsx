import React from "react";
import { AcademicCapIcon } from "@heroicons/react/solid"; // Example of using Heroicons (adjust as needed)

const FutureGoals = () => {
  return (
    <section id="future-goals" className="bg-gray-900 text-gray-400 body-font">
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-col items-center mb-6">
          {/* Logo Icon */}
          <AcademicCapIcon className="w-12 h-12 text-teal-500 mb-2" />
          {/* Heading */}
          <h1 className="text-4xl font-medium title-font text-white text-center">
            My Future Goals
          </h1>
        </div>
        <p className="leading-relaxed text-lg text-center">
          As a passionate developer, I’m committed to continuous learning and growth in the tech industry. My immediate goal is to master the{" "}
          <span className="text-teal-500 font-bold">MERN stack</span>, enabling me to build scalable, full-stack web applications. 
        </p>
        <p className="leading-relaxed text-lg text-center mt-4">
          In the long term, I aspire to explore the exciting field of{" "}
          <span className="text-teal-500 font-bold">Artificial Intelligence</span>, focusing on developing intelligent systems that can solve real-world problems. 
          I aim to contribute to advancements in AI by working on projects that bridge the gap between technology and human needs.
        </p>
        <p className="leading-relaxed text-lg text-center mt-4">
          With a strong foundation in web development and a growing interest in AI, I’m excited about the opportunities to innovate and create solutions that have a meaningful impact.
        </p>
      </div>
    </section>
  );
};

export default FutureGoals;
