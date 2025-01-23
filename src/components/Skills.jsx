import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrochip } from "@fortawesome/free-solid-svg-icons";
import { skills } from "../data";
import { BadgeCheckIcon } from "@heroicons/react/solid";

const Skills = () => {
  return (
    <section id="skills">
      <div className="h-[800px] ">
        <div className="h-[150px]  flex flex-col items-center justify-center w-full">
          {/* <CodeIcon className="mx-auto inline-block w-10 mb-4 text-gray-900" /> */}
          <FontAwesomeIcon icon={faMicrochip} className="h-8 mt-8 mb-5" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Skills and Technologies
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
            fuga dolore.
          </p>
        </div>

        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 mt-10 ">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full " >
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
