import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrochip } from "@fortawesome/free-solid-svg-icons";
import { skills } from "../data";
import { BadgeCheckIcon } from "@heroicons/react/solid";

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-gray-900">
      {/* Header */}
      <div className="flex flex-col items-center justify-center w-full mb-12">
        <FontAwesomeIcon icon={faMicrochip} className="h-8 mt-8 mb-5 text-green-400" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
          Skills and Technologies
        </h1>
        <p className="lg:w-2/3 text-center leading-relaxed text-base text-gray-300">
          These are the technologies and tools I have experience with in Web Development and Machine Learning.
        </p>
      </div>

      {/* Languages Section */}
      <div className="lg:w-4/5 mx-auto mb-12">
        <h2 className="text-xl font-semibold text-white mb-4">Languages</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.languages.map((skill) => (
            <div key={skill} className="bg-gray-800 rounded flex p-4 items-center hover:bg-gray-700 transition">
              <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
              <span className="title-font font-medium text-white">{skill}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Frameworks & Libraries Section */}
      <div className="lg:w-4/5 mx-auto mb-12">
        <h2 className="text-xl font-semibold text-white mb-4">Frameworks & Libraries</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.frameworksAndLibraries.map((skill) => (
            <div key={skill} className="bg-gray-800 rounded flex p-4 items-center hover:bg-gray-700 transition">
              <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
              <span className="title-font font-medium text-white">{skill}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tools Section */}
      <div className="lg:w-4/5 mx-auto">
        <h2 className="text-xl font-semibold text-white mb-4">Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.tools.map((skill) => (
            <div key={skill} className="bg-gray-800 rounded flex p-4 items-center hover:bg-gray-700 transition">
              <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
              <span className="title-font font-medium text-white">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
