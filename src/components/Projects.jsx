import React from "react";
import { projects } from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Projects = () => {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <hr className="bg-red-600 mt-5 m-7" />

      {/* Section Header */}
      <div className="text-center mb-12">
        <FontAwesomeIcon icon={faCode} className="h-10 text-green-400 mb-5" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white">
          Apps I've Built
        </h1>
        <p className="mt-3 text-base text-gray-400">
          Here are some of the projects I’ve built using different technologies.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="container px-5 mx-auto max-w-5xl grid gap-8 sm:grid-cols-1 md:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative group bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col border border-gray-700 hover:border-green-400"
          >
            {/* Project Image */}
            <a
              href={project.github || project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </a>

            {/* Project Content */}
            <div className="p-5 flex flex-col flex-grow">
              <h2 className="text-green-400 text-sm tracking-widest font-medium mb-2">
                {project.subtitle}
              </h2>
              <h1 className="text-xl font-semibold text-white mb-3">
                {project.title}
              </h1>
              <p className="leading-relaxed text-gray-300 mb-4 flex-grow">
                {project.description}
              </p>

              {/* Action Links pinned at bottom */}
              <div className="flex items-center gap-6 mt-auto">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-400 hover:underline flex items-center gap-2"
                  >
                    <FontAwesomeIcon icon={faExternalLinkAlt} /> Live Demo
                  </a>
                ) : (
                  <span className="text-sm text-gray-500 flex items-center gap-2">
                    <FontAwesomeIcon icon={faExternalLinkAlt} /> No Demo
                  </span>
                )}

                <a
                  href={project.github || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-300 hover:text-white flex items-center gap-2"
                >
                  <FontAwesomeIcon icon={faGithub} /> GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
