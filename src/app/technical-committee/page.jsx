"use client";
import React from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const technicalCommittee = [
  // National
  {
    name: "Prof. C.S.P. Ojha",
    detail: "IIT Roorkee",
    type: "National",
    image: "/faculty.jpeg"
  },
  {
    name: "Prof. V. R. Desai",
    detail: "Director, IIT Dharwar",
    type: "National",
    image: "/faculty.jpeg"
  },
  {
    name: "Prof. M. M. Ghangrekar",
    detail: "Director, IIT Puducherry",
    type: "National",
    image: "/faculty.jpeg"
  },
  {
    name: "Dr. S.K. Jain",
    detail: "Professor, IIT Roorkee",
    type: "National",
    image: "/faculty.jpeg"
  },
  {
    name: "Dr. M. K. Goel",
    detail: "Director, NIH Roorkee",
    type: "National",
    image: "/faculty.jpeg"
  },
  {
    name: "Prof. P. Mahanta",
    detail: "Director, NIT Meghalaya",
    type: "National",
    image: "/faculty.jpeg"
  },
  {
    name: "Prof. M.K. Verma",
    detail: "Professor, NIT Raipur",
    type: "National",
    image: "/faculty.jpeg"
  },
  {
    name: "Prof. Vivekanad Singh",
    detail: "VC, Purnea University",
    type: "National",
    image: "/faculty.jpeg"
  },
  {
    name: "Prof. Deepak Khare",
    detail: "Professor, IIT Roorkee",
    type: "National",
    image: "/faculty.jpeg"
  },
  {
    name: "Dr. Y. R. S. Rao",
    detail: "Scientist-G, NIH Roorkee",
    type: "National",
    image: "/faculty.jpeg"
  },
  {
    name: "Prof. (Dr.) Pradip Kumar Jain",
    detail: "Director, NIT Patna",
    type: "National",
    image: "https://i.postimg.cc/6pWBW8Dg/PKJ-Desk-Photo-1.jpg"
  },
  {
    name: "Prof. (Dr.) V.K. Paul",
    detail: "Director, SPA Delhi",
    type: "National",
    image: "/faculty.jpeg"
  },
  {
    name: "Sri S. Chandrasekhar, IFS",
    detail: "Member Secretary, BSWA DoEFCC Bihar",
    type: "National",
    image: "/faculty.jpeg"
  },
  {
    name: "Dr. Kirti Abhishek",
    detail: "CED, BIT Mesra",
    type: "National",
    image: "/faculty.jpeg"
  },
  {
    name: "Prof. (Dr.) Rama Umesh Pandey",
    detail: "DoEP, SPA Bhopal",
    type: "National",
    image: "/faculty.jpeg"
  },
  // International
  {
    name: "Prof. V.P. Singh",
    detail: "USA",
    type: "International",
    image: "/faculty.jpeg"
  },
  {
    name: "Prof. R. S. Govindraju",
    detail: "USA",
    type: "International",
    image: "/faculty.jpeg"
  },
  {
    name: "Prof. C. Ray",
    detail: "USA",
    type: "International",
    image: "/faculty.jpeg"
  },
  {
    name: "Prof. Venkatraman Laxmi",
    detail: "USA",
    type: "International",
    image: "/faculty.jpeg"
  },
  {
    name: "Prof. M. Menenti",
    detail: "The Netherlands",
    type: "International",
    image: "/faculty.jpeg"
  },
  {
    name: "Prof. Soontak Lee",
    detail: "South Korea",
    type: "International",
    image: "/faculty.jpeg"
  },
  {
    name: "Prof. Ashish Sharma",
    detail: "Australia",
    type: "International",
    image: "/faculty.jpeg"
  },
  {
    name: "Prof. Ronny Berndtsson",
    detail: "Lund University, Sweden",
    type: "International",
    image: "/faculty.jpeg"
  },
  {
    name: "Prof. Abolfazl MOSAEDI",
    detail: "Iran",
    type: "International",
    image: "/faculty.jpeg"
  }
];

export default function TechnicalCommitteePage() {
  return (
    <>
      <Navbar />
      <div
        className="min-h-screen py-8 pt-24"
        style={{
          background: "linear-gradient(135deg, #b3e0fc 0%, #5ac8fa 100%)"
        }}
      >
        <div className="max-w-5xl mx-auto bg-white/40 rounded-2xl px-2 py-8 shadow-2xl">
          <h1 className="text-[#0288d1] font-bold text-3xl mb-8 text-center drop-shadow">
            Technical Committee
          </h1>
          <h2 className="text-[#0288d1] font-semibold text-2xl mb-4 mt-8 text-center">National</h2>
          <div className="flex flex-wrap justify-center">
            {technicalCommittee.filter(m => m.type === "National").map((person, idx) => (
              <div key={idx} className="w-[300px] h-[300px] mx-4 my-4">
                <div className="py-8 pb-8 mb-8 bg-gradient-to-br from-[#e3f2fd] to-[#b3e0fc] text-center overflow-hidden relative rounded-[20px] group h-full border border-[#4fc3f7] shadow-lg">
                  <div className="inline-block h-[110px] w-[110px] mb-8 z-[1] relative">
                    <div className="absolute w-full h-0 rounded-full bg-[#4fc3f7] bottom-[135%] right-0 left-0 opacity-80 scale-[3] transition-all duration-300 group-hover:h-full"></div>
                    <div className="absolute w-full h-full rounded-full bg-[#b3e0fc] top-0 left-0 -z-[1]"></div>
                    <Image
                      src={person.image || "/faculty.jpeg"}
                      alt={person.name}
                      width={110}
                      height={110}
                      className="w-[110px] h-[110px] object-cover rounded-full transform scale-100 transition-all duration-900 ease-in-out group-hover:shadow-[0_0_0_14px_#b3e0fc] group-hover:scale-[0.7]"
                    />
                  </div>
                  <div className="px-4">
                    <h3 className="text-md text-[#0277bd] font-bold">{person.name}</h3>
                    <h4 className="block text-[15px] text-[#174366] capitalize">{person.detail}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <h2 className="text-[#0288d1] font-semibold text-2xl mb-4 mt-8 text-center">International</h2>
          <div className="flex flex-wrap justify-center">
            {technicalCommittee.filter(m => m.type === "International").map((person, idx) => (
              <div key={idx} className="w-[300px] h-[300px] mx-4 my-4">
                <div className="py-8 pb-8 mb-8 bg-gradient-to-br from-[#e3f2fd] to-[#b3e0fc] text-center overflow-hidden relative rounded-[20px] group h-full border border-[#4fc3f7] shadow-lg">
                  <div className="inline-block h-[110px] w-[110px] mb-8 z-[1] relative">
                    <div className="absolute w-full h-0 rounded-full bg-[#4fc3f7] bottom-[135%] right-0 left-0 opacity-80 scale-[3] transition-all duration-300 group-hover:h-full"></div>
                    <div className="absolute w-full h-full rounded-full bg-[#b3e0fc] top-0 left-0 -z-[1]"></div>
                    <Image
                      src={person.image || "/faculty.jpeg"}
                      alt={person.name}
                      width={110}
                      height={110}
                      className="w-[110px] h-[110px] object-cover rounded-full transform scale-100 transition-all duration-900 ease-in-out group-hover:shadow-[0_0_0_14px_#b3e0fc] group-hover:scale-[0.7]"
                    />
                  </div>
                  <div className="px-4">
                    <h3 className="text-md text-[#0277bd] font-bold">{person.name}</h3>
                    <h4 className="block text-[15px] text-[#174366] capitalize">{person.detail}</h4>
                  </div>
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
