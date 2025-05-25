"use client"
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const faqs = [
  {
    q: "Who can attend the WET-WAR 2025 conference?",
    a: "Researchers, students, academicians, industry professionals, policymakers, and anyone interested in wetland and water resource sustainability are welcome to attend."
  },
  {
    q: "How do I register for the conference?",
    a: "You can register online via the Registration page. Please complete the form and submit the required payment details."
  },
  {
    q: "Is accommodation provided for participants?",
    a: "Limited hostel and guest house accommodation is available on a first-come, first-served basis. Please fill the Expression of Interest form on the Accommodation page."
  },
  {
    q: "Can I submit more than one paper?",
    a: "Yes, multiple submissions are allowed. Each paper must be registered separately."
  },
  {
    q: "Will my paper be published?",
    a: "All accepted papers will be published in the conference proceedings. Selected high-quality papers may be published in indexed journals after review."
  },
  {
    q: "How do I become a sponsor?",
    a: "Visit the Call for Sponsors page for details on sponsorship categories and benefits, and contact the organizing team for further steps."
  },
  {
    q: "What is the last date for registration?",
    a: "Please refer to the Important Dates section on the Author or Registration page for all deadlines."
  },
];

export default function FAQPage() {
  const [open, setOpen] = useState(null);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-[#e3f2fd] via-[#b3e0fc] to-[#e1f5fe] py-12 px-2 sm:px-6 flex flex-col">
        <div className="max-w-3xl w-full mx-auto bg-sky-50/80 rounded-2xl shadow-2xl p-6 sm:p-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-sky-800 mb-8 text-center tracking-tight">
            Frequently Asked Questions
          </h1>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white/80 border border-sky-200 rounded-xl shadow-sm"
              >
                <button
                  className="w-full flex justify-between items-center px-5 py-4 text-left focus:outline-none transition"
                  onClick={() => setOpen(open === idx ? null : idx)}
                  aria-expanded={open === idx}
                >
                  <span className="font-semibold text-sky-800 text-lg">{faq.q}</span>
                  <span className="ml-4 text-sky-500 text-2xl transition-transform duration-200">
                    {open === idx ? "−" : "+"}
                  </span>
                </button>
                {open === idx && (
                  <div className="px-5 pb-4 text-sky-700 text-base text-justify">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}