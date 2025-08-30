import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ msg: "", type: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
  "https://my-portfolio-production-c923.up.railway.app/api/contact",
  formData
);

      setStatus({ msg: res.data.msg, type: "success" });
      setFormData({ name: "", email: "", message: "" });

      // clear after 4s
      setTimeout(() => setStatus({ msg: "", type: "" }), 4000);
    } catch (err) {
      setStatus({ msg: err.response?.data?.msg || "Failed to send message", type: "error" });

      // clear after 4s
      setTimeout(() => setStatus({ msg: "", type: "" }), 4000);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-full p-6 bg-gray-800 rounded-md"
    >
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
        className="mb-4 p-2 rounded bg-gray-700 text-white focus:outline-none h-32 resize-none"
        required
      />

      <button
        type="submit"
        className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
      >
        Send Message
      </button>

      {status.msg && (
        <p
          className={`mt-3 text-center ${
            status.type === "success" ? "text-green-400" : "text-red-400"
          }`}
        >
          {status.msg}
        </p>
      )}
    </form>
  );
};

export default ContactForm;
