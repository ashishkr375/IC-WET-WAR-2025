"use client";
import React from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const people = [
  {
    role: "Chief Patron",
    name: "Prof. (Dr.) Pradip Kumar Jain",
    detail: "Director, NIT Patna",
    image: "https://i.postimg.cc/6pWBW8Dg/PKJ-Desk-Photo-1.jpg"
  },
  {
    role: "Patron",
    name: "Prof. (Dr.) Fulena Rajak",
    detail: "Head (ARP), NIT Patna",
    image: "https://www.nitp.ac.in/_next/image?url=https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fauthuser%3D0%26sz%3Dw320%26id%3D1CKQd0i9upET-06HtxIX8OekY7pWh26Zy&w=640&q=75"
  },
  {
    role: "Patron",
    name: "Prof. (Dr.) Anshuman Singh",
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
    name: "Ar. (Dr.) Anushri Barman",
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
    name: "Ar. (Dr.) Ashutosh Kumar",
    detail: "ARP, BITM, Ranchi",
    image: "https://i.postimg.cc/xjHqt0xt/image.png"
  }
];

export default function OrganizingCommitteePage() {
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
            Organising Committee
          </h1>
          <div className="flex flex-wrap justify-center">
            {people.map((person, idx) => (
              <div key={idx} className="w-[300px] h-[325px] mx-4 my-4">
                <div className="py-8 pb-10 mb-8 bg-gradient-to-br from-[#e3f2fd] to-[#b3e0fc] text-center overflow-hidden relative rounded-[20px] group h-full border border-[#4fc3f7] shadow-lg">
                  <div className="inline-block h-[130px] w-[130px] mb-12 z-[1] relative">
                    <div className="absolute w-full h-0 rounded-full bg-[#4fc3f7] bottom-[135%] right-0 left-0 opacity-80 scale-[3] transition-all duration-300 group-hover:h-full"></div>
                    <div className="absolute w-full h-full rounded-full bg-[#b3e0fc] top-0 left-0 -z-[1]"></div>
                    <Image
                      src={person.image || "/faculty.jpeg"}
                      alt={person.name}
                      width={130}
                      height={130}
                      className="w-[130px] h-[130px] object-cover rounded-full transform scale-100 transition-all duration-900 ease-in-out group-hover:shadow-[0_0_0_14px_#b3e0fc] group-hover:scale-[0.7]"
                    />
                  </div>
                  <div className="px-4">
                    <h3 className="text-md text-[#0277bd] font-bold">{person.name}</h3>
                    <h4 className="block text-[15px] text-[#0288d1] capitalize">{person.role}</h4>
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
