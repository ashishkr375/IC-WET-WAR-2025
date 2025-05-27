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
    // Open mail client with prefilled details
    const subject = encodeURIComponent("Contact/Query from WET-WAR 2025 Website");
    const body = encodeURIComponent(
      `Name: ${form.name}\nOrganization: ${form.org}\nEmail: ${form.email}\nContact: ${form.contact}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:wetwar2025@nitp.ac.in?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <Navbar />
      <div
        className="min-h-screen py-16 px-4 sm:px-8 lg:px-16"
        style={{
          background: "linear-gradient(135deg, #e0f7fa 0%, #b3e5fc 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 bg-white/70 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-sky-200">
          {/* Left: Contact Form */}
          <div className="flex flex-col justify-center">
            <h2
              className="text-3xl sm:text-4xl font-extrabold mb-3"
              style={{
                color: "#0288d1",
                textShadow: "0 2px 8px #81d4fa",
              }}
            >
              Let’s Connect
            </h2>
            <p className="text-blue-900 text-base sm:text-lg mb-8 font-medium text-justify">
              We'd love to hear from you! Fill out the form below to get in touch.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-blue-900 font-semibold mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full bg-white border border-sky-300 focus:border-sky-500 focus:ring focus:ring-sky-200 rounded-lg py-2 px-4 shadow-sm text-black"
                  />
                </div>
                <div>
                  <label className="block text-blue-900 font-semibold mb-1">
                    Organization Name
                  </label>
                  <input
                    type="text"
                    name="org"
                    value={form.org}
                    onChange={handleChange}
                    className="w-full bg-white border border-sky-300 focus:border-sky-500 focus:ring focus:ring-sky-200 rounded-lg py-2 px-4 shadow-sm text-black"
                  />
                </div>
                <div>
                  <label className="block text-blue-900 font-semibold mb-1">
                    Email ID <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full bg-white border border-sky-300 focus:border-sky-500 focus:ring focus:ring-sky-200 rounded-lg py-2 px-4 shadow-sm text-black"
                  />
                </div>
                <div>
                  <label className="block text-blue-900 font-semibold mb-1">
                    Contact No. <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="contact"
                    required
                    value={form.contact}
                    onChange={handleChange}
                    className="w-full bg-white border border-sky-300 focus:border-sky-500 focus:ring focus:ring-sky-200 rounded-lg py-2 px-4 shadow-sm text-black"
                  />
                </div>
              </div>

              <div>
                <label className="block text-blue-900 font-semibold mb-1">
                  Your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-white border border-sky-300 focus:border-sky-500 focus:ring focus:ring-sky-200 rounded-lg py-2 px-4 shadow-sm resize-none text-black"
                />
              </div>

              <button
                type="submit"
                className={`w-full sm:w-auto px-8 py-2 rounded-full text-white font-semibold shadow-lg transition duration-300 ease-in-out ${
                  submitted
                    ? "bg-green-400 cursor-not-allowed"
                    : "bg-sky-600 hover:bg-sky-500"
                }`}
                disabled={submitted}
              >
                {submitted ? "Submitted!" : "Submit"}
              </button>
            </form>
          </div>

          {/* Right: Address and Map Embed */}
          <div className="flex flex-col gap-6">
            {/* College Address & RSVP */}
            <div className="bg-sky-50/90 border border-sky-200 rounded-2xl p-6 shadow text-blue-900 mb-2">
              <h3
                className="text-xl font-bold mb-2"
                style={{
                  color: "#0288d1",
                  textShadow: "0 2px 8px #81d4fa",
                }}
              >
                College Address
              </h3>
              <p className="mb-2">
                Ashok Rajpath, Mahendru,<br />
                Patna, Bihar 800005<br />
                <span className="font-semibold">Website:</span>{" "}
                <a
                  href="https://www.nitp.ac.in/"
                  className="text-sky-700 underline hover:text-sky-900 transition font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecorationThickness: "2px",
                    textUnderlineOffset: "3px",
                  }}
                >
                  https://www.nitp.ac.in/
                </a>
              </p>
              <p className="mb-2">
                <span className="font-semibold">Conference Email:</span>{" "}
                <a
                  href="mailto:wetwar2025@nitp.ac.in"
                  className="text-sky-700 underline hover:text-sky-900 transition font-semibold"
                  style={{
                    textDecorationThickness: "2px",
                    textUnderlineOffset: "3px",
                  }}
                >
                  wetwar2025@nitp.ac.in
                </a>
              </p>
              <div className="mb-2">
                <span className="font-semibold">RSVP:</span>
                <ul className="ml-4 mt-1 text-sm">
                  <li>
                    <span className="font-semibold">Email(s):</span>
                    <ul className="ml-2">
                      <li>
                        <a
                          href="mailto:wetwar2025@nitp.ac.in"
                          className="text-sky-700 underline hover:text-sky-900 transition font-semibold"
                          style={{
                            textDecorationThickness: "2px",
                            textUnderlineOffset: "3px",
                          }}
                        >
                          wetwar2025@nitp.ac.in
                        </a>
                      </li>
                      <li>
                        <a
                          href="mailto:anushri.civil@nitp.ac.in"
                          className="text-sky-700 underline hover:text-sky-900 transition font-semibold"
                          style={{
                            textDecorationThickness: "2px",
                            textUnderlineOffset: "3px",
                          }}
                        >
                          anushri.civil@nitp.ac.in
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="mt-2">
                    <span className="font-semibold">Phone Numbers:</span>
                    <ul className="ml-2">
                      <li>
                        Dr. Ashutosh Kumar –{" "}<span className="font-semibold">986855663</span>
                      </li>
                      <li>
                        Dr. Anushri Barman –{" "}
                        <span className="font-semibold">7903143125</span>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            {/* Map Embed */}
            <div className="rounded-2xl overflow-hidden shadow-lg h-96 border border-sky-200">
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
      </div>
      <Footer />
    </>
  );
}
