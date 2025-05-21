"use client";
import React, { useState } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/author", label: "Author Section" },
  { href: "/people", label: "Key People" },
  { href: "/register", label: "Registration" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/contact-us", label: "Contact Us" },
];

export default function Page() {
  const [navOpen, setNavOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // You can add actual submission logic here
  };

  return (
    <>
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full z-30 flex items-center justify-between px-4 sm:px-8 py-4 backdrop-blur-xl bg-[rgba(10,25,47,0.45)]">
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={40}
            height={40}
            className="rounded-md mr-3 sm:mr-4"
          />
          <span className="text-lg sm:text-2xl font-bold text-blue-100 tracking-widest drop-shadow uppercase font-sans">
            ICWW
          </span>
        </div>
        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-4 sm:space-x-8 font-medium">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative hover:text-blue-400 transition after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-blue-300 after:rounded after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden flex items-center text-blue-100 focus:outline-none"
          onClick={() => setNavOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          <svg
            className={`w-7 h-7 transition-transform duration-200 ${
              navOpen ? "rotate-90" : ""
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {navOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 8h16M4 16h16"
              />
            )}
          </svg>
        </button>
      </div>
      {/* Mobile Nav Menu */}
      {navOpen && (
        <div className="fixed top-16 left-0 w-full z-40 bg-[rgba(10,25,47,0.95)] backdrop-blur-xl flex flex-col items-center py-4 md:hidden animate-fade-in-down">
          <ul className="w-full flex flex-col items-center space-y-4 font-medium">
            {navLinks.map((link) => (
              <li key={link.href} className="w-full text-center">
                <a
                  href={link.href}
                  className="block py-2 px-4 w-full hover:text-blue-400 transition relative after:content-[''] after:absolute after:left-1/2 after:transform after:-translate-x-1/2 after:-bottom-1 after:w-2/3 after:h-0.5 after:bg-blue-300 after:rounded after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left"
                  onClick={() => setNavOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
      {/* Main Content */}
      <div className="relative min-h-screen w-full bg-gradient-to-br from-[#0a192f] to-[#1565c0] text-[#e3f2fd] pt-24 pb-16 px-4">
        <div className="max-w-2xl mx-auto bg-[#102744]/80 rounded-3xl shadow-2xl p-10 border border-white/10">
          <h1 className="text-4xl font-bold text-[#64b5f6] mb-8 text-center">
            Contact Us
          </h1>
          <form
            className="space-y-6"
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            <div>
              <label
                className="block mb-2 text-[#90caf9] font-semibold"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="w-full px-4 py-2 rounded-lg bg-[#13203a] border border-[#1976d2] text-[#e3f2fd] focus:outline-none focus:ring-2 focus:ring-[#64b5f6] transition"
                type="text"
                id="name"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
              />
            </div>
            <div>
              <label
                className="block mb-2 text-[#90caf9] font-semibold"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full px-4 py-2 rounded-lg bg-[#13203a] border border-[#1976d2] text-[#e3f2fd] focus:outline-none focus:ring-2 focus:ring-[#64b5f6] transition"
                type="email"
                id="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label
                className="block mb-2 text-[#90caf9] font-semibold"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="w-full px-4 py-2 rounded-lg bg-[#13203a] border border-[#1976d2] text-[#e3f2fd] focus:outline-none focus:ring-2 focus:ring-[#64b5f6] transition min-h-[120px]"
                id="message"
                name="message"
                required
                value={form.message}
                onChange={handleChange}
                placeholder="Type your message here..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-[#1976d2] to-[#64b5f6] text-white font-bold text-lg shadow-md hover:from-[#1565c0] hover:to-[#90caf9] transition"
            >
              Send Message
            </button>
            {submitted && (
              <div className="text-center text-[#00e676] font-semibold mt-4">
                Thank you for contact-using us! We will get back to you soon.
              </div>
            )}
          </form>
          {/* Contact Info Section */}
          <div className="mt-10 text-center">
  <div className="text-lg font-semibold text-[#1976d2] mb-2">
    GET IN TOUCH :
  </div>
  <div className="text-[#1976d2] text-base font-medium mb-1">
    7978848747, 7903143125, 9868556663, 9661116833
  </div>
  <div className="text-[#1976d2] text-base font-medium mb-1">
    <a href="mailto:icwesd@gmail.com" className="underline hover:text-[#0d47a1]">icwesd@gmail.com</a>
    <span className="mx-2">,</span>
    <a href="https://www.nitp.ac.in" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#0d47a1]">
      https://www.nitp.ac.in
    </a>
  </div>
</div>
        </div>
      </div>
      <Footer />
    </>
  );
}
