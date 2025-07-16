"use client";
import React from 'react';
import Image from 'next/image';

const sponsors = [
  {
    label: 'Media Partner',
    value: 'Supporting Our Event',
    name: 'Conference Alerts',
    logo: '/sponsor1.jpg',
    website: 'https://conferencealerts.co.in/',
  },
];

export default function Media() {
  return (
    <div className="relative w-full bg-gradient-to-br from-[#e3f2fd] to-[#b3e0fc] text-[#174366] pt-24 pb-16 px-4 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-sky-700 mb-4 text-center">Media Partners</h1>
      <p className="text-lg text-center mb-10 text-sky-800 max-w-2xl">
        We gratefully acknowledge our media partner whose support is vital to our conference.
      </p>
      <section className="mb-10 w-full flex justify-center">
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
          {sponsors.map((s, idx) => (
            <div key={idx} className="rounded-2xl px-8 py-10 flex flex-col items-center justify-center shadow-lg border bg-gradient-to-br from-[#e3f2fd] to-[#b3e0fc] border-sky-200 text-center min-h-[320px] min-w-[260px]" >
              <div className="mb-5 flex justify-center w-full">
                <a href={s.website} target="_blank" rel="noopener noreferrer">
                  <Image src={s.logo} alt={s.name} width={280} height={280} className="object-contain rounded-lg bg-white shadow mx-auto" />
                </a>
              </div>
              <a href={s.website} target="_blank" rel="noopener noreferrer" className="font-bold text-xl text-sky-700 mb-2 w-full text-center hover:underline">
                {s.name}
              </a>
              <span className="text-sky-600 text-base mb-2 w-full text-center">{s.label}</span>
              <span className="text-sm text-sky-500 w-full text-center">{s.value}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
