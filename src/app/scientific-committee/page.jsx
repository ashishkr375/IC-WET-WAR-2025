"use client";
import React from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const people = [
  {
    name: "Prof. (Dr.) Ramakar Jha",
    detail: "CED, NIT Patna",
    image: "https://www.nitp.ac.in/_next/image?url=https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fauthuser%3D0%26sz%3Dw320%26id%3D1YAYImlpH6LjznLRaKSJkOIrYR4nABMgz&w=384&q=75",
  },
  {
    name: "Prof. (Dr.) Rommel Mehta",
    detail: "Retired Prof., Landscape Arch., SPA New Delhi",
    image: "https://i.postimg.cc/vByQxwkG/image.png",
  },
  {
    name: "Dr. Saroja Kumar Barik",
    detail: "Wetland Expert, Bihar State Wetland Authority, DoEF CC, Bihar",
    image: "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=YqQtbdcAAAAJ&citpid=11",
  },
];

export default function ScientificCommitteePage() {
  return (
    <>
      <Navbar />
      <div
        className="min-h-screen py-8 pt-24"
        style={{
          background: "linear-gradient(135deg, #e3f2fd 0%, #b3e0fc 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto bg-white/10 rounded-2xl px-2 py-8 shadow-2xl border border-black/20">
          <h1 className="text-4xl sm:text-5xl font-bold text-center text-black tracking-wider drop-shadow-[0_2px_12px_#38bdf8] mb-8 underline underline-offset-8">
            Scientific Committee
          </h1>
          <div className="flex flex-wrap justify-center">
            {people.map((person, idx) => (
              <div key={idx} className="w-[260px] h-[320px] mx-3 my-4">
                <div className="relative flex flex-col items-center bg-gradient-to-br from-[#e3f2fd]/60 to-[#b3e0fc]/80 border border-black/20 rounded-2xl shadow-xl h-full transition-transform duration-300 hover:scale-105 hover:shadow-2xl group">
                  <div className="relative mt-6 mb-4 flex items-center justify-center">
                    <div className="absolute w-[90px] h-[90px] rounded-full border-4 border-white transition-all duration-300 group-hover:w-[110px] group-hover:h-[110px] group-hover:border-[#38bdf8] z-0"></div>
                    <Image
                      src={person.image || "/faculty.jpeg"}
                      alt={person.name}
                      width={90}
                      height={90}
                      className="w-[90px] h-[90px] object-cover rounded-full border-4 border-transparent shadow-lg z-10 transition-all duration-300 group-hover:w-[110px] group-hover:h-[110px]"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-center justify-center px-4">
                    <h3 className="text-lg text-black font-bold mb-1 drop-shadow text-center">
                      {person.name}
                    </h3>
                    <h4 className="text-[15px] text-black/80 capitalize text-center">
                      {person.detail}
                    </h4>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#38bdf8]/60 via-[#b3e0fc]/40 to-[#e3f2fd]/0 rounded-b-2xl"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
