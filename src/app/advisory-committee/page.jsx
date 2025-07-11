"use client";
import React from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const page = [
  // National (ordered as requested)
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
    image: "https://up.yimg.com/ib/th?id=OIP.srNFFzORAaERcWvhwgPzVAHaHa&pid=Api&rs=1&c=1&qlt=95&w=120&h=120"
  },
  {
    name: "Sri S. Chandrasekhar, IFS",
    detail: "Member Secretary, BSWA DoEFCC Bihar",
    type: "National",
    image: "https://i.postimg.cc/Z5B1xDz2/image.png"
  },
  {
    name: "Prof. V. R. Desai",
    detail: "Director, IIT Dharwar",
    type: "National",
    image: "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=zLm5b2AAAAAJ&citpid=2"
  },
  {
    name: "Prof. M. M. Ghangrekar",
    detail: "Director, IIT Puducherry",
    type: "National",
    image: "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=yh3JJX0AAAAJ&citpid=2"
  },
  {
    name: "Dr. M. K. Goel",
    detail: "Director, NIH Roorkee",
    type: "National",
    image: "https://up.yimg.com/ib/th?id=OIP.srNFFzORAaERcWvhwgPzVAHaHa&pid=Api&rs=1&c=1&qlt=95&w=120&h=120"
  },
  {
    name: "Prof. Vivekanad Singh",
    detail: "V.C., Purnea University, Bihar",
    type: "National",
    image: "https://i.postimg.cc/SsZNBt1q/image.png"
  },
  {
    name: "Prof. P. Mahanta",
    detail: "Director, NIT Meghalaya",
    type: "National",
    image: "https://nitap.ac.in/assets/director/Prof.%20Pinakeswar%20Mahanta.jpg"
  },
  {
    name: "Prof. (Dr.) Rommel Mehta",
    detail: "Retired Prof., Landscape Arch., SPA New Delhi",
    type: "National",
    image: "https://i.postimg.cc/vByQxwkG/image.png"
  },
  {
    name: "Prof. C.S.P. Ojha",
    detail: "IIT Roorkee",
    type: "National",
    image: "https://channeli.in/media/kernel/display_pictures/a06ac076-6795-498e-a174-bde674312491.jpg"
  },
  {
    name: "Prof. M.K. Verma",
    detail: "Professor, NIT Raipur",
    type: "National",
    image: "https://up.yimg.com/ib/th?id=OIP.srNFFzORAaERcWvhwgPzVAHaHa&pid=Api&rs=1&c=1&qlt=95&w=120&h=120"
  },
  {
    name: "Prof. Deepak Khare",
    detail: "Professor, IIT Roorkee",
    type: "National",
    image: "https://up.yimg.com/ib/th?id=OIP.srNFFzORAaERcWvhwgPzVAHaHa&pid=Api&rs=1&c=1&qlt=95&w=120&h=120"
  },
  {
    name: "Prof. (Dr.) S.K. Jain",
    detail: "Professor, IIT Roorkee",
    type: "National",
    image: "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=WrUrbdIAAAAJ&citpid=6"
  },
  {
    name: "Prof. (Dr.) Rama Umesh Pandey",
    detail: "Prof., DoEP, SPA Bhopal",
    type: "National",
    image: "https://up.yimg.com/ib/th?id=OIP.srNFFzORAaERcWvhwgPzVAHaHa&pid=Api&rs=1&c=1&qlt=95&w=120&h=120"
  },

  {
    name: "Dr. Y. R. S. Rao",
    detail: "Scientist-G, NIH Roorkee",
    type: "National",
    image: "https://up.yimg.com/ib/th?id=OIP.srNFFzORAaERcWvhwgPzVAHaHa&pid=Api&rs=1&c=1&qlt=95&w=120&h=120"
  },
  // International
  {
    name: "Prof. V.P. Singh",
    detail: "USA",
    type: "International",
    image: "https://up.yimg.com/ib/th?id=OIP.srNFFzORAaERcWvhwgPzVAHaHa&pid=Api&rs=1&c=1&qlt=95&w=120&h=120"
  },
  {
    name: "Prof. R. S. Govindraju",
    detail: "USA",
    type: "International",
    image: "https://up.yimg.com/ib/th?id=OIP.srNFFzORAaERcWvhwgPzVAHaHa&pid=Api&rs=1&c=1&qlt=95&w=120&h=120"
  },
  {
    name: "Prof. C. Ray",
    detail: "USA",
    type: "International",
    image: "https://up.yimg.com/ib/th?id=OIP.srNFFzORAaERcWvhwgPzVAHaHa&pid=Api&rs=1&c=1&qlt=95&w=120&h=120"
  },
  {
    name: "Prof. Venkatraman Laxmi",
    detail: "USA",
    type: "International",
    image: "https://up.yimg.com/ib/th?id=OIP.srNFFzORAaERcWvhwgPzVAHaHa&pid=Api&rs=1&c=1&qlt=95&w=120&h=120"
  },
  {
    name: "Prof. M. Menenti",
    detail: "The Netherlands",
    type: "International",
    image: "https://up.yimg.com/ib/th?id=OIP.srNFFzORAaERcWvhwgPzVAHaHa&pid=Api&rs=1&c=1&qlt=95&w=120&h=120"
  },
  {
    name: "Prof. Soontak Lee",
    detail: "South Korea",
    type: "International",
    image: "https://up.yimg.com/ib/th?id=OIP.srNFFzORAaERcWvhwgPzVAHaHa&pid=Api&rs=1&c=1&qlt=95&w=120&h=120"
  },
  {
    name: "Prof. Ashish Sharma",
    detail: "Australia",
    type: "International",
    image: "https://up.yimg.com/ib/th?id=OIP.srNFFzORAaERcWvhwgPzVAHaHa&pid=Api&rs=1&c=1&qlt=95&w=120&h=120"
  },
  {
    name: "Prof. Ronny Berndtsson",
    detail: "Lund University, Sweden",
    type: "International",
    image: "https://up.yimg.com/ib/th?id=OIP.srNFFzORAaERcWvhwgPzVAHaHa&pid=Api&rs=1&c=1&qlt=95&w=120&h=120"
  },
  {
    name: "Prof. Abolfazl MOSAEDI",
    detail: "Iran",
    type: "International",
    image: "https://up.yimg.com/ib/th?id=OIP.srNFFzORAaERcWvhwgPzVAHaHa&pid=Api&rs=1&c=1&qlt=95&w=120&h=120"
  }
];

export default function pagePage() {
  return (
    <>
      <Navbar />
      <div
        className="min-h-screen py-8 pt-24"
        style={{
          background: "linear-gradient(135deg, #e3f2fd 0%, #b3e0fc 100%)"
        }}
      >
        <div className="max-w-5xl mx-auto bg-white/10 rounded-2xl px-2 py-8 shadow-2xl border border-black/20">
          <h1 className="text-4xl sm:text-5xl font-bold text-center text-black tracking-wider drop-shadow-[0_2px_12px_#38bdf8] mb-8 underline underline-offset-8">
            Advisory Committee
          </h1>
          <h2 className="text-2xl font-bold text-black text-center mb-4 mt-8 drop-shadow-[0_2px_8px_#38bdf8]">National</h2>
          <div className="flex flex-wrap justify-center">
            {page.filter(m => m.type === "National").map((person, idx) => (
              <div key={idx} className="w-[200px] mx-2 my-3">
                <div className="relative flex flex-col items-center bg-gradient-to-br from-[#e3f2fd]/60 to-[#b3e0fc]/80 border border-black/20 rounded-2xl shadow-xl w-full h-full transition-transform duration-300 hover:scale-105 hover:shadow-2xl group p-2">
                  <div className="relative mt-3 mb-2 flex items-center justify-center">
                    <div className="absolute w-[70px] h-[70px] rounded-full border-4 border-white transition-all duration-300 group-hover:w-[82px] group-hover:h-[82px] group-hover:border-[#38bdf8] z-0"></div>
                    <Image
                      src={person.image || "https://up.yimg.com/ib/th?id=OIP.srNFFzORAaERcWvhwgPzVAHaHa&pid=Api&rs=1&c=1&qlt=95&w=120&h=120"}
                      alt={person.name}
                      width={70}
                      height={70}
                      className="w-[70px] h-[70px] object-cover rounded-full border-4 border-transparent shadow-lg z-10 transition-all duration-300 group-hover:w-[82px] group-hover:h-[82px]"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-center justify-center px-2">
                    <h3 className="text-base text-black font-bold mb-1 drop-shadow text-center">{person.name}</h3>
                    <h4 className="text-[13px] text-black/80 capitalize text-center">{person.detail}</h4>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#38bdf8]/60 via-[#b3e0fc]/40 to-[#e3f2fd]/0 rounded-b-2xl"></div>
                </div>
              </div>
            ))}
          </div>
          <h2 className="text-2xl font-bold text-black text-center mb-4 mt-8 drop-shadow-[0_2px_8px_#38bdf8]">International</h2>
          <div className="flex flex-wrap justify-center">
            {page.filter(m => m.type === "International").map((person, idx) => (
              <div key={idx} className="w-[200px] mx-2 my-3">
                <div className="relative flex flex-col items-center bg-gradient-to-br from-[#e3f2fd]/60 to-[#b3e0fc]/80 border border-black/20 rounded-2xl shadow-xl w-full h-full transition-transform duration-300 hover:scale-105 hover:shadow-2xl group p-2">
                  <div className="relative mt-3 mb-2 flex items-center justify-center">
                    <div className="absolute w-[70px] h-[70px] rounded-full border-4 border-white transition-all duration-300 group-hover:w-[82px] group_hover:h-[82px] group-hover:border-[#38bdf8] z-0"></div>
                    <Image
                      src={person.image || "https://up.yimg.com/ib/th?id=OIP.srNFFzORAaERcWvhwgPzVAHaHa&pid=Api&rs=1&c=1&qlt=95&w=120&h=120"}
                      alt={person.name}
                      width={70}
                      height={70}
                      className="w-[70px] h-[70px] object-cover rounded-full border-4 border-transparent shadow-lg z-10 transition-all duration-300 group-hover:w-[82px] group_hover:h-[82px]"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-center justify-center px-2">
                    <h3 className="text-base text-black font-bold mb-1 drop-shadow text-center">{person.name}</h3>
                    <h4 className="text-[13px] text-black/80 capitalize text-center">{person.detail}</h4>
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
