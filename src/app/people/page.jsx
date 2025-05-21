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

const people = [
  {
    role: "Chief Patron",
    name: "Prof. (Dr.) Pradip Kumar Jain",
    detail: "Director, NIT Patna",
    image: "https://i.postimg.cc/6pWBW8Dg/PKJ-Desk-Photo-1.jpg"
  },
  {
    role: "Patron",
    name: "Prof Fulena Rajak",
    detail: "Head (ARP), NIT Patna",
    image: "https://www.nitp.ac.in/_next/image?url=https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fauthuser%3D0%26sz%3Dw320%26id%3D1CKQd0i9upET-06HtxIX8OekY7pWh26Zy&w=640&q=75"
  },
  {
    role: "Patron",
    name: "Prof. Anshuman Singh",
    detail: "Head (CED), NIT Patna",
    image: "https://www.nitp.ac.in/_next/image?url=https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fauthuser%3D0%26sz%3Dw320%26id%3D1rzRmDOfcCAqXuBJArVw0p4AxLi42MXhZ&w=384&q=75"
  },
  {
    role: "Chairman",
    name: "Prof. (Dr) Ramakar Jha",
    detail: "CED, NIT Patna",
    image: "https://www.nitp.ac.in/_next/image?url=https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fauthuser%3D0%26sz%3Dw320%26id%3D1YAYImlpH6LjznLRaKSJkOIrYR4nABMgz&w=384&q=75"
  },
  {
    role: "Co-Chairman",
    name: "Prof (Dr) Satyaki Sarkar",
    detail: "Head (ARP), BITM, Ranchi",
    image: "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=yw-HnzUAAAAJ&citpid=6"
  },
  {
    role: "Secretary",
    name: "Dr. Anjali Sharma",
    detail: "ARP, NIT Patna",
    image: "https://www.nitp.ac.in/_next/image?url=https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fauthuser%3D0%26sz%3Dw320%26id%3D1u9vCIy4VCrJm6qtVteGFm9mxlJIFTvJH&w=384&q=75"
  },
  {
    role: "Secretary",
    name: "Ar. Anushri Barman",
    detail: "ARP, NIT Patna",
    image: "https://www.nitp.ac.in/_next/image?url=https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fauthuser%3D0%26sz%3Dw320%26id%3D16TEs6OgHH79BNm94VGG8sdLA2MvB4_Gd&w=384&q=75"
  },
  {
    role: "Secretary",
    name: "Dr. Roshni T.",
    detail: "CED, NIT Patna",
    image: "https://www.nitp.ac.in/_next/image?url=https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fauthuser%3D0%26sz%3Dw320%26id%3D1CSwMnMlxaXNijAUXwf7hDBqsh9xMJaAA&w=384&q=75"
  },
  {
    role: "Secretary",
    name: "Dr. Bhabani Shankar Das",
    detail: "CED, NIT Patna",
    image: "https://www.nitp.ac.in/_next/image?url=https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fauthuser%3D0%26sz%3Dw320%26id%3D16SWM2xg9hcoKyqzMhMOpMEb4tOcmIi14&w=384&q=75"
  },
  {
    role: "Secretary",
    name: "Dr. Joseph Tripura",
    detail: "CED, NIT Patna",
    image: "https://www.nitp.ac.in/_next/image?url=https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fauthuser%3D0%26sz%3Dw320%26id%3D1REtbvDeRL1-sz-sfoAmfzvYiZf8Apad_&w=384&q=75"
  },
  {
    role: "Secretary",
    name: "Ar. Ashutosh Kumar",
    detail: "ARP, BITM, Ranchi",
    image: "https://i.postimg.cc/xjHqt0xt/image.png"
  }
];

export default function PeoplePage() {
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
      <div className="bg-gradient-to-br from-[#0a192f] to-[#1565c0] min-h-screen py-8 pt-24">
        <div className="max-w-5xl mx-auto bg-[#102744]/80 rounded-2xl px-2 py-8 shadow-2xl">
          <h1 className="text-[#90caf9] font-bold text-3xl mb-8 text-center drop-shadow">
            Organising Committee
          </h1>
          <div className="flex flex-wrap justify-center">
            {people.map((person, idx) => (
              <div key={idx} className="w-[300px] h-[325px] mx-4 my-4">
                <div className="py-8 pb-10 mb-8 bg-gradient-to-br from-[#13203a] to-[#1976d2]/40 text-center overflow-hidden relative rounded-[20px] group h-full border border-[#1976d2] shadow-lg">
                  <div className="inline-block h-[130px] w-[130px] mb-12 z-[1] relative">
                    <div className="absolute w-full h-0 rounded-full bg-[#1976d2] bottom-[135%] right-0 left-0 opacity-80 scale-[3] transition-all duration-300 group-hover:h-full"></div>
                    <div className="absolute w-full h-full rounded-full bg-[#1976d2] top-0 left-0 -z-[1]"></div>
                    <Image
                      src={person.image || "/faculty.jpeg"}
                      alt={person.name}
                      width={130}
                      height={130}
                      className="w-[130px] h-[130px] object-cover rounded-full transform scale-100 transition-all duration-900 ease-in-out group-hover:shadow-[0_0_0_14px_#102744] group-hover:scale-[0.7]"
                    />
                  </div>
                  <div className="px-4">
                    <h3 className="text-md text-[#e3f2fd] font-bold">{person.name}</h3>
                    <h4 className="block text-[15px] text-[#90caf9] capitalize">{person.role}</h4>
                    <h4 className="block text-[15px] text-[#b3c7e6] capitalize">{person.detail}</h4>
                  </div>
                  {/* contact-us/Profile links can be added here if available */}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Technical Committee */}
        <div className="max-w-4xl mx-auto mt-16 bg-gradient-to-br from-[#0f1c2e] to-[#102744] rounded-3xl px-8 py-10 shadow-2xl ring-1 ring-[#1976d2]/30 backdrop-blur-md">
          <h2 className="text-[#90caf9] font-extrabold text-3xl md:text-4xl mb-10 text-center tracking-wide drop-shadow">
            Technical Committee
          </h2>
          {/* National Committee */}
          <div className="mb-6">
            <h3 className="text-[#64b5f6] font-semibold text-xl md:text-2xl mb-4 border-l-4 border-[#64b5f6] pl-3">
              National
            </h3>
            <ul className="text-[#e3f2fd] text-base md:text-lg space-y-2 list-disc list-inside leading-relaxed">
              <li>Prof. C.S.P. Ojha, IIT Roorkee</li>
              <li>Prof. V. R. Desai, Director, IIT Dharwar</li>
              <li>Prof. M. M. Ghangrekar, Director, IIT Puducherry</li>
              <li>Dr. S.K. Jain, Professor, IIT Roorkee</li>
              <li>Dr. M. K. Goel, Director, NIH Roorkee</li>
              <li>Prof. P. Mahanta, Director, NIT Meghalaya</li>
              <li>Prof. M.K. Verma, Professor, NIT Raipur</li>
              <li>Prof. Vivekanad Singh, VC, Purnea University</li>
              <li>Prof. Deepak Khare, Professor, IIT Roorkee</li>
              <li>Dr. Y. R. S. Rao, Scientist-G, NIH Roorkee</li>
              <li>Prof. (Dr.) Pradip Kumar Jain, Director, NIT Patna</li>
              <li>Prof. (Dr.) V.K. Paul, Director, SPA Delhi</li>
              <li>Sri S. Chandrasekhar, IFS, Member Secretary, BSWA DoEFCC Bihar</li>
              <li>Dr. Kirti Abhishek, CED, BIT Mesra</li>
              <li>Prof. (Dr.) Rama Umesh Pandey, DoEP, SPA Bhopal</li>
            </ul>
          </div>
          {/* International Committee */}
          <div>
            <h3 className="text-[#64b5f6] font-semibold text-xl md:text-2xl mb-4 border-l-4 border-[#64b5f6] pl-3">
              International
            </h3>
            <ul className="text-[#e3f2fd] text-base md:text-lg space-y-2 list-disc list-inside leading-relaxed">
              <li>Prof. V.P. Singh, USA</li>
              <li>Prof. R. S. Govindraju, USA</li>
              <li>Prof. C. Ray, USA</li>
              <li>Prof. Venkatraman Laxmi, USA</li>
              <li>Prof. M. Menenti, The Netherlands</li>
              <li>Prof. Soontak Lee, South Korea</li>
              <li>Prof. Ashish Sharma, Australia</li>
              <li>Prof. Ronny Berndtsson, Lund University, Sweden</li>
              <li>Prof. Abolfazl MOSAEDI, Iran</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
