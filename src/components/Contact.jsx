import React from "react";
import { AcademicCapIcon } from "@heroicons/react/solid";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-900 text-gray-400 body-font">
      <div className="px-3 py-10 mx-auto">
        <div className="flex flex-col items-center mb-6">
          <AcademicCapIcon className="w-12 h-12 text-teal-500 mb-2" />
          <h1 className="text-4xl font-medium title-font text-white text-center">
            Contact me
          </h1>
        </div>

        <div className="h-[850px] w-full mt-14 flex justify-between">
          <div className="border-2 h-[500px] w-[50%] relative overflow-hidden rounded-md m-4 my-7">
            {/* Google Map */}
            <iframe
              width="100%"
              height="100%"
              title="map"
              className="absolute inset-0"
              frameBorder="0"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed/v1/place?q=Lahore+Pakistan&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
              allowFullScreen
            ></iframe>

            {/* Compact Address Block */}
            <div className="bg-gray-900 bg-opacity-80 absolute bottom-4 right-16 flex flex-wrap p-2 rounded-md shadow-md w-48">
              <div className="w-full">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1 text-sm">Johar Town, Lahore</p>
              </div>
              <div className="w-full mt-2">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                  EMAIL
                </h2>
                <a className="text-indigo-400 text-sm leading-relaxed">
                  abdullah@312003gmail.com
                </a>
              </div>
              <div className="w-full mt-2">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                  PHONE
                </h2>
                <p className="text-sm leading-relaxed">0307-1411594</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <ContactForm /> 
        </div>
      </div>
    </section>
  );
};

export default Contact;
