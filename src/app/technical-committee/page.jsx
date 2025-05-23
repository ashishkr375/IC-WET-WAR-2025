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
    image: "https://channeli.in/media/kernel/display_pictures/a06ac076-6795-498e-a174-bde674312491.jpg"
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
    name: "Dr. S.K. Jain",
    detail: "Professor, IIT Roorkee",
    type: "National",
    image: "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=WrUrbdIAAAAJ&citpid=6"
  },
  {
    name: "Dr. M. K. Goel",
    detail: "Director, NIH Roorkee",
    type: "National",
    image: "https://up.yimg.com/ib/th?id=OIP.srNFFzORAaERcWvhwgPzVAHaHa&pid=Api&rs=1&c=1&qlt=95&w=120&h=120"
  },
  {
    name: "Prof. P. Mahanta",
    detail: "Director, NIT Meghalaya",
    type: "National",
    image: "https://nitap.ac.in/assets/director/Prof.%20Pinakeswar%20Mahanta.jpg"
  },
  {
    name: "Prof. M.K. Verma",
    detail: "Professor, NIT Raipur",
    type: "National",
    image: "https://up.yimg.com/ib/th?id=OIP.srNFFzORAaERcWvhwgPzVAHaHa&pid=Api&rs=1&c=1&qlt=95&w=120&h=120"
  },
  {
    name: "Prof. Vivekanad Singh",
    detail: "VC, Purnea University",
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
    name: "Dr. Y. R. S. Rao",
    detail: "Scientist-G, NIH Roorkee",
    type: "National",
    image: "https://up.yimg.com/ib/th?id=OIP.srNFFzORAaERcWvhwgPzVAHaHa&pid=Api&rs=1&c=1&qlt=95&w=120&h=120"
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
    image: "https://up.yimg.com/ib/th?id=OIP.srNFFzORAaERcWvhwgPzVAHaHa&pid=Api&rs=1&c=1&qlt=95&w=120&h=120"
  },
  {
    name: "Sri S. Chandrasekhar, IFS",
    detail: "Member Secretary, BSWA DoEFCC Bihar",
    type: "National",
    image: "https://up.yimg.com/ib/th?id=OIP.srNFFzORAaERcWvhwgPzVAHaHa&pid=Api&rs=1&c=1&qlt=95&w=120&h=120"
  },
  {
    name: "Dr. Kirti Abhishek",
    detail: "CED, BIT Mesra",
    type: "National",
    image: "https://up.yimg.com/ib/th?id=OIP.srNFFzORAaERcWvhwgPzVAHaHa&pid=Api&rs=1&c=1&qlt=95&w=120&h=120"
  },
  {
    name: "Prof. (Dr.) Rama Umesh Pandey",
    detail: "DoEP, SPA Bhopal",
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
            Technical Advisory  Committee
          </h1>
          <h2 className="text-[#0288d1] font-semibold text-2xl mb-4 mt-8 text-center">National</h2>
          <div className="flex flex-wrap justify-center">
            {technicalCommittee.filter(m => m.type === "National").map((person, idx) => (
              <div key={idx} className="w-[290px] h-[340px] mx-3 my-4">
                <div className="relative flex flex-col items-center bg-gradient-to-br from-[#e3f2fd] via-[#b3e0fc] to-[#4fc3f7] border-2 border-[#0288d1] rounded-2xl shadow-xl h-full transition-transform duration-300 hover:scale-105 hover:shadow-2xl group">
                  <div className="relative mt-6 mb-4 flex items-center justify-center">
                    {/* White circle border with sky blue on hover */}
                    <div className="absolute w-[110px] h-[110px] rounded-full border-4 border-white transition-all duration-300 group-hover:w-[130px] group-hover:h-[130px] group-hover:border-[#0288d1] z-0"></div>
                    <Image
                      src={person.image || "https://up.yimg.com/ib/th?id=OIP.srNFFzORAaERcWvhwgPzVAHaHa&pid=Api&rs=1&c=1&qlt=95&w=120&h=120"}
                      alt={person.name}
                      width={110}
                      height={110}
                      className="w-[110px] h-[110px] object-cover rounded-full border-4 border-transparent shadow-lg z-10 transition-all duration-300 group-hover:w-[130px] group-hover:h-[130px]"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-center justify-center px-4">
                    <h3 className="text-lg text-[#0277bd] font-bold mb-1 drop-shadow">{person.name}</h3>
                    <h4 className="text-[15px] text-[#174366] capitalize">{person.detail}</h4>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#0288d1]/60 via-[#4fc3f7]/40 to-[#b3e0fc]/0 rounded-b-2xl"></div>
                </div>
              </div>
            ))}
          </div>
          <h2 className="text-[#0288d1] font-semibold text-2xl mb-4 mt-8 text-center">International</h2>
          <div className="flex flex-wrap justify-center">
            {technicalCommittee.filter(m => m.type === "International").map((person, idx) => (
              <div key={idx} className="w-[290px] h-[340px] mx-3 my-4">
                <div className="relative flex flex-col items-center bg-gradient-to-br from-[#e3f2fd] via-[#b3e0fc] to-[#4fc3f7] border-2 border-[#0288d1] rounded-2xl shadow-xl h-full transition-transform duration-300 hover:scale-105 hover:shadow-2xl group">
                  <div className="relative mt-6 mb-4 flex items-center justify-center">
                    {/* White circle border with sky blue on hover */}
                    <div className="absolute w-[110px] h-[110px] rounded-full border-4 border-white transition-all duration-300 group-hover:w-[130px] group-hover:h-[130px] group-hover:border-[#0288d1] z-0"></div>
                    <Image
                      src={person.image || "https://up.yimg.com/ib/th?id=OIP.srNFFzORAaERcWvhwgPzVAHaHa&pid=Api&rs=1&c=1&qlt=95&w=120&h=120"}
                      alt={person.name}
                      width={110}
                      height={110}
                      className="w-[110px] h-[110px] object-cover rounded-full border-4 border-transparent shadow-lg z-10 transition-all duration-300 group-hover:w-[130px] group-hover:h-[130px]"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-center justify-center px-4">
                    <h3 className="text-lg text-[#0277bd] font-bold mb-1 drop-shadow">{person.name}</h3>
                    <h4 className="text-[15px] text-[#174366] capitalize">{person.detail}</h4>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#0288d1]/60 via-[#4fc3f7]/40 to-[#b3e0fc]/0 rounded-b-2xl"></div>
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
