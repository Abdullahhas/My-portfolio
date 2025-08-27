import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/contact", formData);
      setStatus(res.data.msg);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus(err.response?.data?.msg || "Failed to send message");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-[50%] p-6 bg-gray-800 rounded-md m-4">
      <label className="mb-2 text-white">Name</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="mb-4 p-2 rounded bg-gray-700 text-white focus:outline-none"
        required
      />

      <label className="mb-2 text-white">Email</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="mb-4 p-2 rounded bg-gray-700 text-white focus:outline-none"
        required
      />

      <label className="mb-2 text-white">Message</label>
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        className="mb-4 p-2 rounded bg-gray-700 text-white focus:outline-none"
        required
      />

      <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition">
        Send Message
      </button>

      {status && <p className="mt-3 text-center text-teal-400">{status}</p>}
    </form>
  );
};

export default ContactForm;
