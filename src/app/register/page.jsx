"use client";
import React, { useState } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/author', label: 'Author Section' },
  { href: '/people', label: 'Key People' },
  { href: '/register', label: 'Registration' },
  { href: '/sponsors', label: 'Sponsors' },
  { href: '/contact-us', label: 'Contact Us' },
];

const registrationFees = [
  { label: "Students", value: "Rs. 5000 / USD 100" },
  { label: "Faculties/Officers", value: "Rs. 9000 / USD 200" },
  { label: "Spouse", value: "Rs. 4500 / USD 100" }
];

const sponsors = [
  { label: "Bronze", value: "₹25,000" },
  { label: "Silver", value: "₹50,000" },
  { label: "Gold", value: "₹1,00,000" },
  { label: "Diamond", value: "₹2,00,000 and above" }
];

const accountDetails = [
  { label: "Account Name", value: "NIT Patna CF Account" },
  { label: "Account Number", value: "50433562364" },
  { label: "Bank Name", value: "Indian Bank" },
  { label: "IFSC Code", value: "IDIB000B810" }
];

export default function RegisterPage() {
  const [navOpen, setNavOpen] = useState(false);

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
      {/* Main Content */}
      <div className="relative min-h-screen w-full bg-gradient-to-br from-[#0a192f] to-[#1e3a8a] text-white py-20 px-4">
      <div className="max-w-5xl mx-auto backdrop-blur-2xl bg-white/10 rounded-3xl shadow-2xl p-10 border border-white/10">
        
        {/* Header Section */}
        <section className="text-center mb-12 space-y-6">
  <h1 className="inline-block text-5xl font-extrabold text-white drop-shadow-[2px_2px_0px_#0d47a1]">
    WET-WAR 2025
  </h1>
  <p className="text-sm font-medium text-[#b3c7e6] mt-2">
    Join us at <span className="font-semibold text-[#64b5f6]">NIT Patna</span> <span className="mx-1"></span> <span className="italic">delicious food on the Bank of River Ganga</span>
  </p>
</section>


        {/* Registration Fee Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[#64b5f6] mb-6 flex items-center gap-2">
            <svg className="w-7 h-7 text-[#64b5f6]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 0V4m0 16v-4" />
            </svg>
            Registration Fee <span className="text-xs font-normal text-[#b3c7e6]">(Free fooding + Inclusive GST (18%))</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {registrationFees.map((fee, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-[#13203a] to-[#1976d2]/30 border border-[#1976d2] rounded-xl shadow-lg p-5 flex flex-col items-center justify-center transition-transform hover:scale-105"
              >
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-6 h-6 text-[#64b5f6]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" strokeOpacity="0.3" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l2 2" />
                  </svg>
                  <span className="font-semibold text-[#90caf9] text-lg">{fee.label}</span>
                </div>
                <div className="text-[#e3f2fd] text-xl font-bold">{fee.value}</div>
              </div>
            ))}
          </div>
          <div className="mt-10 font-semibold text-[#e3f2fd] text-xl flex items-center gap-2">
            <svg className="w-6 h-6 text-[#ffd600]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 17.75l-6.16 3.24 1.18-6.88L2 9.76l6.92-1.01L12 2.5l3.08 6.25L22 9.76l-5.02 4.35 1.18 6.88z" />
            </svg>
            Sponsors
          </div>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {sponsors.map((s, idx) => (
              <div
                key={idx}
                className={`rounded-lg px-4 py-3 flex flex-col items-center shadow-md border
                  ${s.label === 'Diamond' ? 'bg-gradient-to-br from-[#b9f6ca] to-[#1976d2]/60 border-[#00e676]' :
                    s.label === 'Gold' ? 'bg-gradient-to-br from-[#fff9c4] to-[#1976d2]/40 border-[#ffd600]' :
                    s.label === 'Silver' ? 'bg-gradient-to-br from-[#e3f2fd] to-[#1976d2]/30 border-[#90caf9]' :
                    'bg-gradient-to-br from-[#ffe0b2] to-[#1976d2]/20 border-[#ffb300]'}` 
                }
              >
                <span className="font-bold text-lg mb-1 text-[#1976d2]">{s.label}</span>
                <span className="text-[#0a192f] font-semibold">{s.value} <span className="text-xs text-[#b3c7e6]">{s.label === 'Diamond' ? 'INR & above' : 'INR'}</span></span>
              </div>
            ))}
          </div>
        </section>

        {/* Account and QR Section */}
        <section className="mb-12">
          <h3 className="text-xl font-bold text-[#80deea] mb-4">Scan & Submit Paper</h3>
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
            <div className="text-[#bbdefb] space-y-2">
              {accountDetails.map((detail, idx) => (
                <p key={idx}>
                  <span className="font-semibold text-white">{detail.label}:</span> {detail.value}
                </p>
              ))}
            </div>
            <img
              src="https://i.postimg.cc/jdxKPKGW/image.png"
              alt="QR Code"
              className="w-36 h-36 rounded-lg border border-[#80deea] shadow-md"
            />
          </div>
        </section>

        {/* Paper Info Section */}
        <section className="bg-white/10 border border-white/10 rounded-2xl p-6 space-y-4 shadow-lg text-[#e3f2fd]">
          <ul className="list-disc list-inside space-y-2 text-sm md:text-base">
            <li>
              All selected Papers will be published in Conference proceedings (Springer/Elsevier/SCOPUS/SCI/SCIE/ESCI).
            </li>
            <li>
              High-quality papers presented in the conference may be published in Indexed Journals after peer review.
            </li>
            <li>
              Best Paper Awards will be given in each theme for Oral and Poster presentations in every session.
            </li>
          </ul>
        </section>
      </div>
    </div>
      <Footer />
    </>
  )
}
