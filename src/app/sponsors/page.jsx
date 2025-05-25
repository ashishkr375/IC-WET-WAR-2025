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
    name: 'Lorem Ipsum',
    logo: 'https://tse2.mm.bing.net/th?id=OIP.OyH7D4tqb5GdF_J7HjgLUQHaHQ&pid=Api&P=0&h=180'
  },
  {
    label: 'Gold',
    value: '₹1,00,000',
    name: 'Lorem Ipsum',
    logo: 'https://tse2.mm.bing.net/th?id=OIP.OyH7D4tqb5GdF_J7HjgLUQHaHQ&pid=Api&P=0&h=180'
  },
  {
    label: 'Silver',
    value: '₹50,000',
    name: 'Lorem Ipsum',
    logo: 'https://tse2.mm.bing.net/th?id=OIP.OyH7D4tqb5GdF_J7HjgLUQHaHQ&pid=Api&P=0&h=180'
  },
  {
    label: 'Bronze',
    value: '₹25,000',
    name: 'Lorem Ipsum',
    logo: 'https://tse2.mm.bing.net/th?id=OIP.OyH7D4tqb5GdF_J7HjgLUQHaHQ&pid=Api&P=0&h=180'
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
                  className={`rounded-xl px-4 py-6 flex flex-col items-center shadow-md border bg-gradient-to-br from-[#e3f2fd] to-[#b3e0fc] border-sky-200`}
                >
                  <div className="mb-3">
                    <Image
                      src={s.logo}
                      alt={s.name}
                      width={80}
                      height={80}
                      className="object-contain rounded-lg bg-white shadow"
                    />
                  </div>
                  <span className="font-bold text-lg text-sky-700 mb-1">{s.name}</span>
                  <span className="text-sky-600 text-sm mb-1">{s.label} Sponsor</span>
                  <span className="text-xs text-sky-500">{s.value}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      
      <Footer />
    </>
  );
}