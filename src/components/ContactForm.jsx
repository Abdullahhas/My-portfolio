import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // To display submission status

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/send-email", formData);
      setStatus("Your message has been sent successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" }); // Reset form
    } catch (error) {
      console.error("Error submitting the form:", error);
      setStatus("Failed to send your message. Please try again later.");
    }
  };

  return (
    <div className="h-[700px] w-[50%] rounded-md m-4 px-4 bg-gray-900">
      <div>
        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-3 text-white">
          Hire Me
        </h1>
        <p className="leading-relaxed text-base text-gray-400">
          Please fill out the form below to get in touch with me. I look forward
          to working with you!
        </p>
      </div>

      <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
        <div className="relative w-full">
          <label htmlFor="name" className="leading-7 text-sm text-gray-400">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-teal-500 focus:bg-transparent focus:ring-0 text-base outline-none text-gray-100 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>

        <div className="relative w-full">
          <label htmlFor="email" className="leading-7 text-sm text-gray-400">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-teal-500 focus:bg-transparent focus:ring-0 text-base outline-none text-gray-100 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>

        <div className="relative w-full">
          <label htmlFor="phone" className="leading-7 text-sm text-gray-400">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-teal-500 focus:bg-transparent focus:ring-0 text-base outline-none text-gray-100 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>

        <div className="relative w-full">
          <label htmlFor="message" className="leading-7 text-sm text-gray-400">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleInputChange}
            rows="4"
            className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-teal-500 focus:bg-transparent focus:ring-0 text-base outline-none text-gray-100 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>

        <button
          type="submit"
          className="bg-teal-500 text-white px-6 py-2 rounded-md text-lg hover:bg-teal-600 transition duration-200"
        >
          Submit
        </button>
      </form>
      {status && <p className="mt-4 text-teal-400">{status}</p>}
    </div>
  );
};

export default ContactForm;
