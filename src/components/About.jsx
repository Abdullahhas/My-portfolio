import React from "react";

const About = () => {
  return (
    <section id="about">
      <div className="h-[500px] ">
        <div className="w-full h-[350px] mt-8 flex justify-between items-center">
          <div className="  w-[50%] h-[300px] flex justify-center items-center flex-col ">
            <h1 className="title-font sm:text-4xl text-3xl mr-10    font-medium text-white">
              Hi, I'm Abdullah.
              <br className="hidden lg:inline-block" />I love to build amazing
              apps.
            </h1>
            <p className="mx-16 mt-4 leading-relaxed   ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic nam
              nulla harum nihil modi quaerat repellat voluptate praesentium ea
              eum, tempore iusto saepe nobis ipsa exercitationem quibusdam
              nesciunt. Sed, reiciendis.
            </p>
          </div>
          <div className="w-[50%] h-[300px]">
            <div className="mt-16">
              <img
                className="mx-auto object-cover object-center rounded-lg"
                alt="hero"
                src="port2.jpeg"
              />
            </div>
          </div>
        </div>

        <div className=" w-[50%] flex justify-start mt-[-40px] ml-16">
          <a
            href="#contact"
            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
          >
            Work With Me
          </a>
          <a
            href="#projects"
            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
          >
            See My Past Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
