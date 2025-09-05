import React from "react";
import { AcademicCapIcon } from "@heroicons/react/solid";

const FutureGoals = () => {
  return (
    <section id="future-goals" className="bg-gray-900 text-gray-400 body-font">
      <div className="container px-5 py-16 mx-auto max-w-4xl text-center">
        {/* Header */}
        <div className="flex flex-col items-center mb-8">
          <AcademicCapIcon className="w-12 h-12 text-teal-500 mb-3" />
          <h1 className="text-4xl font-medium title-font text-white">
            My Future Goals
          </h1>
        </div>

        {/* Future Plans */}
        <p className="leading-relaxed text-lg mb-6">
          My immediate goal is to master the{" "}
          <span className="text-teal-500 font-bold">MERN stack</span> and build
          scalable, high-quality web applications. I aim to enhance my skills in
          backend and frontend development, database management, and API design
          to deliver robust and efficient solutions.
        </p>

        <p className="leading-relaxed text-lg mb-6">
          In the long term, I aspire to specialize in{" "}
          <span className="text-teal-500 font-bold">
            Artificial Intelligence and Machine Learning
          </span>
          , developing intelligent systems and data-driven applications that
          solve real-world problems. I plan to leverage my full-stack
          development expertise alongside AI knowledge to create innovative,
          impactful solutions.
        </p>

        <p className="leading-relaxed text-lg">
          I am committed to continuous learning, staying updated with emerging
          technologies, and applying my skills to projects that combine
          creativity, efficiency, and social impact.
        </p>
      </div>
    </section>
  );
};

export default FutureGoals;
