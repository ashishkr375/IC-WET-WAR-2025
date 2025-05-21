"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Footer from '@/components/Footer';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/author', label: 'Author Section' },
  { href: '/people', label: 'Key People' },
  { href: '/register', label: 'Registration' },
  { href: '/sponsors', label: 'Sponsors' },
  { href: '/contact-us', label: 'Contact Us' },
];

const sponsors = [
  { label: 'Bronze', value: '₹25,000' },
  { label: 'Silver', value: '₹50,000' },
  { label: 'Gold', value: '₹1,00,000' },
  { label: 'Diamond', value: '₹2,00,000 and above' }
];

export default function Page() {
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
      <div className="relative min-h-screen w-full bg-gradient-to-br from-[#0a192f] to-[#1565c0] text-[#e3f2fd] pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto bg-[#102744]/80 rounded-3xl shadow-2xl p-10 border border-white/10">
          <h1 className="text-4xl font-bold text-[#64b5f6] mb-10 text-center">Our Sponsors</h1>
          <section className="mb-10">
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {sponsors.map((s, idx) => (
                <div
                  key={idx}
                  className={`rounded-lg px-4 py-6 flex flex-col items-center shadow-md border
                    ${s.label === 'Diamond' ? 'bg-gradient-to-br from-[#b9f6ca] to-[#1976d2]/60 border-[#00e676]' :
                      s.label === 'Gold' ? 'bg-gradient-to-br from-[#fff9c4] to-[#1976d2]/40 border-[#ffd600]' :
                      s.label === 'Silver' ? 'bg-gradient-to-br from-[#e3f2fd] to-[#1976d2]/30 border-[#90caf9]' :
                      'bg-gradient-to-br from-[#ffe0b2] to-[#1976d2]/20 border-[#ffb300]'}` 
                  }
                >
                  <span className="font-bold text-xl mb-2 text-[#1976d2]">{s.label}</span>
                  <span className="text-[#0a192f] font-semibold text-lg">{s.value}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}