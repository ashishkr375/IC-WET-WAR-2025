"use client";
import React, { useState } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

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
  { label: "Diamond", value: "₹2,00,000 " }
];

const accountDetails = [
  { label: "Account Name", value: "NIT Patna CF Account" },
  { label: "Account Number", value: "50433562364" },
  { label: "Bank Name", value: "Indian Bank" },
  { label: "IFSC Code", value: "IDIB000B810" }
];

const paperInfoPoints = [
  {
    color: "bg-blue-500",
    text: "The conference proceedings as well as selected high quality research papers would be published in SCOPUS/SCIE Journal."
  },
  {
    color: "bg-blue-400",
    text: "The Best paper prize and certificate would be given in each session of the conference."
  },
  {
    color: "bg-blue-300",
    text: "The overall best presentation would be considered for award."
  },
  {
    color: "bg-blue-400",
    text: "The conference breakfast, lunch, dinner, tea and GST (18%) is included in the registration fee of the students, faculties, officers and sponsor."
  },
  {
    color: "bg-blue-300",
    text: "A cultural program with international competition among participants (Students/Officers) is arranged every day prior to the dinner. Therefore, the participants /experts’/ invitees/ sponsors can show their talent in cultural programs and win the attractive prizes."
  },
  {
    color: "bg-blue-200",
    text: "We have limited seats in boys and girl hostels. Therefore, first come first serve basis would be considered. However, there are many budget hotels near NIT Patna."
  },
  {
    color: "bg-blue-400",
    text: "About 500+ participation is expected. It is going to be one of the biggest Water Expert assemblies at NIT Patna. This is an opportunity of interaction and knowledge sharing."
  },
  {
    color: "bg-blue-200",
    text: "About 100 participants are expected from different parts of the globe. All international students/officers/faculties are requested to take prior approval before coming to India."
  },
  {
    color: "bg-blue-500",
    text: "All the selected Papers will be published in Conference proceedings (Springer/Elsevier/other Indexed in SCOPUS/SCI/SCIE/ESCI)."
  },
  {
    color: "bg-blue-400",
    text: "High quality papers presented in the conference would be published in Indexed Journals (SCOPUS/SCI/SCIE/ESCI) after review."
  },
  {
    color: "bg-blue-300",
    text: "Awards would be provided for Best papers in different Themes for Oral and Poster presentation."
  }
];

export default function RegisterPage() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <Navbar/>
      {/* Main Content */}
      <div
        style={{
          background: "#b3e0fc",
          color: "#0d223a",
        }}
        className="relative min-h-screen w-full py-20 px-4"
      >
        <div
          style={{
            background: "#b3e0fc",
            border: "1.5px solidrgb(139, 208, 240)",
            color: "#0d223a",
          }}
          className=" w-full mx-auto backdrop-blur-2xl rounded-3xl p-10"
        >
          {/* Header Section */}
          <section className="text-center mb-12 space-y-6">
            <h1
              style={{
                color: "#0288d1",
                textShadow: "2px 2px 0px #b3e0fc",
              }}
              className="inline-block text-5xl font-extrabold"
            >
              WET-WAR 2025
            </h1>
            <p className="text-sm font-medium" style={{ color: "#174366" }}>
              Join us at <span style={{ color: "#0288d1", fontWeight: 600 }}>NIT Patna</span>
              <span className="mx-1"></span>
              <span className="italic" style={{ color: "#0277bd" }}>delicious food on the Bank of River Ganga</span>
            </p>
          </section>

          {/* Registration Fee Section */}
          <section className="mb-10">
            <h2
              style={{ color: "#0288d1" }}
              className="text-2xl font-semibold mb-6 flex items-center gap-2"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" style={{ color: "#0288d1" }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 0V4m0 16v-4" />
              </svg>
              Registration Fee <span className="text-xs font-normal" style={{ color: "#174366" }}>(Free fooding + Inclusive GST (18%))</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {registrationFees.map((fee, idx) => (
                <div
                  key={idx}
                  style={{
                    background: "rgba(90,200,250,0.18)",
                    border: "1.5px solid #4fc3f7",
                    color: "#0d223a",
                  }}
                  className="rounded-xl shadow-lg p-5 flex flex-col items-center justify-center transition-transform hover:scale-105"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" style={{ color: "#0288d1" }}>
                      <circle cx="12" cy="12" r="10" strokeOpacity="0.3" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l2 2" />
                    </svg>
                    <span className="font-semibold text-lg" style={{ color: "#0277bd" }}>{fee.label}</span>
                  </div>
                  <div className="text-xl font-bold" style={{ color: "#174366" }}>{fee.value}</div>
                </div>
              ))}
            </div>
            <div className="mt-10 font-semibold text-xl flex items-center gap-2" style={{ color: "#0d223a" }}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" style={{ color: "#ffd600" }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 17.75l-6.16 3.24 1.18-6.88L2 9.76l6.92-1.01L12 2.5l3.08 6.25L22 9.76l-5.02 4.35 1.18 6.88z" />
              </svg>
              Sponsors
            </div>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {sponsors.map((s, idx) => (
                <div
                  key={idx}
                  className={`rounded-lg px-4 py-3 flex flex-col items-center shadow-md border
                    ${s.label === 'Diamond' ? 'bg-gradient-to-br from-[#b9f6ca] to-[#4fc3f7]/60 border-[#00e676]' :
                      s.label === 'Gold' ? 'bg-gradient-to-br from-[#fff9c4] to-[#4fc3f7]/40 border-[#ffd600]' :
                      s.label === 'Silver' ? 'bg-gradient-to-br from-[#e3f2fd] to-[#4fc3f7]/30 border-[#90caf9]' :
                      'bg-gradient-to-br from-[#ffe0b2] to-[#4fc3f7]/20 border-[#ffb300]'}`}
                  style={{ color: "#0d223a" }}
                >
                  <span className="font-bold text-lg mb-1" style={{ color: "#0288d1" }}>{s.label}</span>
                  <span className="font-semibold">{s.value} <span className="text-xs" style={{ color: "#174366" }}>{s.label === 'Diamond' ? 'INR & above' : 'INR'}</span></span>
                </div>
              ))}
            </div>
          </section>

          {/* Account and QR Section */}
          <section className="mb-12">
            <h3 className="text-xl font-bold mb-4" style={{ color: "#0288d1" }}>Scan & Submit Paper</h3>
            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
              <div className="space-y-2" style={{ color: "#174366" }}>
                {accountDetails.map((detail, idx) => (
                  <p key={idx}>
                    <span className="font-semibold" style={{ color: "#0288d1" }}>{detail.label}:</span> {detail.value}
                  </p>
                ))}
              </div>
              <img
                src="https://i.postimg.cc/jdxKPKGW/image.png"
                alt="QR Code"
                className="w-36 h-36 rounded-lg border"
                style={{ borderColor: "#0288d1", boxShadow: "0 2px 12px #b3e0fc" }}
              />
              {/* SCAN & REGISTER Note on right side */}
              <div className="mt-0 md:mt-0 md:ml-4 bg-blue-50/80 border border-blue-200 rounded-xl p-4 shadow text-blue-900 min-w-[220px] max-w-xs">
                <h4 className="text-lg font-bold mb-2 tracking-wide">SCAN & REGISTER</h4>
                <p className="text-sm font-medium">
                  <span className="font-semibold">Note:</span> Registration Fee payment transaction Number required and Upload payment PDF
                </p>
              </div>
            </div>
          </section>

          {/* Paper Info Section */}
          <ul className="space-y-4">
            {paperInfoPoints.map((point, idx) => (
              <li className="flex" key={idx}>
                <div className={`w-1 ${point.color} rounded-l-full`} />
                <div
                  className="shadow-md px-4 py-2 rounded-r-xl flex-1"
                  style={{
                    background:"#4682B4",
                  }}
                >
                  <p className="text-sm md:text-base text-white">
                    {point.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>

        </div>
      </div>
      <Footer />
    </>
  )
}
