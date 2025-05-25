"use client";
import React from 'react';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

// Example sponsor data with logo and name
const sponsors = [
  {
    label: 'Diamond',
    value: '₹2,00,000 and above',
    name: 'Zebronics',
    logo: '/sponsor1.png'
  },
  {
    label: 'Gold',
    value: '₹1,00,000',
    name: 'IBM',
    logo: '/sponsor2.png'
  },
  {
    label: 'Silver',
    value: '₹50,000',
    name: 'Taskade',
    logo: '/sponsor3.png'
  },
  {
    label: 'Bronze',
    value: '₹25,000',
    name: 'L&T',
    logo: '/sponsor4.png'
  },{
    label: 'Bronze',
    value: '₹25,000',
    name: 'Vercel',
    logo: '/sponsor5.png'
  },{
    label: 'Bronze',
    value: '₹25,000',
    name: 'Gitlab',
    logo: '/sponsor6.png'
  },{
    label: 'Bronze',
    value: '₹25,000',
    name: 'TATA',
    logo: '/sponsor7.png'
  },{
    label: 'Bronze',
    value: '₹25,000',
    name: 'CWC',
    logo: '/sponsor8.png'
  }
];

export default function Page() {
  return (
    <>
      <Navbar/>
      {/* Main Content */}
      <div className="relative min-h-screen w-full bg-gradient-to-br from-[#e3f2fd] to-[#b3e0fc] text-[#174366] pt-24 pb-16 px-4">
       
          <h1 className="text-4xl font-bold text-sky-700 mb-4 text-center">Thank You to Our Previous Sponsors</h1>
          <p className="text-lg text-center mb-10 text-sky-800 text-justify">
            We gratefully acknowledge the generous support of our sponsors whose contributions have made our conference possible.
          </p>
          <section className="mb-10">
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {sponsors.map((s, idx) => (
                <div
                  key={idx}
                  className="rounded-xl px-4 py-6 flex flex-col items-center justify-center shadow-md border bg-gradient-to-br from-[#e3f2fd] to-[#b3e0fc] border-sky-200 text-center"
                >
                  <div className="mb-3 flex justify-center w-full">
                    <Image
                      src={s.logo}
                      alt={s.name}
                      width={80}
                      height={80}
                      className="object-contain rounded-lg bg-white shadow mx-auto"
                    />
                  </div>
                  <span className="font-bold text-lg text-sky-700 mb-1 w-full text-center">{s.name}</span>
                  <span className="text-sky-600 text-sm mb-1 w-full text-center">{s.label} Sponsor</span>
                  <span className="text-xs text-sky-500 w-full text-center">{s.value}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      
      <Footer />
    </>
  );
}