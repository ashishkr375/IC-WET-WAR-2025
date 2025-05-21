"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

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
      <Navbar/>
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