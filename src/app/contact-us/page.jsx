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
                  className={`w-7 h-7 transition-transform duration-200 ${navOpen ? 'rotate-90' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  {navOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
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
      <div className="h-115">

      </div>
      <Footer />
    </>
  );
}
