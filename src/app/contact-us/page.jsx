"use client";
import React, { useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Page() {
  const [form, setForm] = useState({
    name: "",
    org: "",
    email: "",
    contact: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Add actual submission logic here
  };

  return (
    <>
      <Navbar />
<div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-16 px-4 sm:px-8 lg:px-16">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl">
    
    {/* Left: Contact Form */}
    <div className="flex flex-col justify-center">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-400 mb-3">
        Let’s Connect
      </h2>
      <p className="text-gray-700 text-base sm:text-lg mb-8 font-medium text-justify">
        We'd love to hear from you! Fill out the form below to get in touch.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-800 font-semibold mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full bg-white border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 rounded-lg py-2 px-4 shadow-sm"
            />
          </div>
          <div>
            <label className="block text-gray-800 font-semibold mb-1">
              Organization Name
            </label>
            <input
              type="text"
              name="org"
              value={form.org}
              onChange={handleChange}
              className="w-full bg-white border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 rounded-lg py-2 px-4 shadow-sm"
            />
          </div>
          <div>
            <label className="block text-gray-800 font-semibold mb-1">
              Email ID <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full bg-white border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 rounded-lg py-2 px-4 shadow-sm"
            />
          </div>
          <div>
            <label className="block text-gray-800 font-semibold mb-1">
              Contact No. <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="contact"
              required
              value={form.contact}
              onChange={handleChange}
              className="w-full bg-white border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 rounded-lg py-2 px-4 shadow-sm"
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-800 font-semibold mb-1">
            Your Message <span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            required
            value={form.message}
            onChange={handleChange}
            rows={5}
            className="w-full bg-white border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 rounded-lg py-2 px-4 shadow-sm resize-none"
          />
        </div>

        <button
          type="submit"
          className={`w-full sm:w-auto px-8 py-2 rounded-full text-white font-semibold shadow-lg transition duration-300 ease-in-out ${
            submitted ? "bg-green-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-500"
          }`}
          disabled={submitted}
        >
          {submitted ? "Submitted!" : "Submit"}
        </button>
      </form>
    </div>

    {/* Right: Map Embed */}
    <div className="rounded-2xl overflow-hidden shadow-lg h-96">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.5246824353003!2d85.17206600000002!3d25.620706199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58dce6732867%3A0x4059f39a1ac82f06!2sNational%20Institute%20of%20Technology%2C%20Patna!5e0!3m2!1sen!2sin!4v1747894009342!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="NIT Patna Location"
      ></iframe>
    </div>
  </div>
</div>

      <Footer />
    </>
  );
}
