"use client";
import React from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const nationalCommittee = [
    { name: "Prof. C.S.P. Ojha", detail: "IIT Roorkee", type: "National", image: "https://iitg.ac.in/aiwc/sites/default/files/file_upload/cspojha.png" },
    { name: "Prof. V. R. Desai", detail: "Director, IIT Dharwad", type: "National", image: "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=zLm5b2AAAAAJ&citpid=3" },
    { name: "Prof. V.K. Paul", detail: "Director, SPA New Delhi", type: "National", image: "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=AFpBSXIAAAAJ&citpid=11" },
    { name: "Dr M.K. Goel", detail: "Director, NIH Roorkee", type: "National", image: "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=Djj0MhIAAAAJ&citpid=2" },
    { name: "Dr Dr. Y. R. Satyaji Rao", detail: "NIH Roorkee", type: "National", image: "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=3V7hoXkAAAAJ&citpid=1" },
    { name: "Sri S. Chandrasekhar", detail: "IFS, Member Secretary, BSWA Do", type: "National", image: "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=CQwUhj8AAAAJ&citpid=26" },
    { name: "Dr Vijay Kumar", detail: "Scientist, Ministry of Earth Sciences, GO", type: "National" },
    { name: "Shri Baleshwar Thakur", detail: "Director General, NWDA, New Dr", type: "National", image: "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=VD6JYh8AAAAJ&citpid=2" },
    { name: "Prof. Prem Lal Patel", detail: "Director, VNIT Nagpur", type: "National" },
    { name: "Prof. A. K. Gosain", detail: "Emeritus Professor, IIT Delhi", type: "National", image: "" },
    { name: "Prof. Vivekanand Singh", detail: "VC, Purnea University", type: "National", image: "" },
    { name: "Prof. M. M. Ghangrekar", detail: "Director, NIT, Puducherry", type: "National", image: "" },
    { name: "Prof. P. Mahanta", detail: "Director, NIT Meghalaya", type: "National", image: "" },
    { name: "Prof. M.K. Verma", detail: "Professor, NIT Raipur", type: "National", image: "" },
    { name: "Prof. Rommel Mehta", detail: "SPA New Delhi", type: "National", image: "" },
    { name: "Prof. M. L. Kansal", detail: "IIT Roorkee", type: "National", image: "" },
    { name: "Prof. Deepak Khare", detail: "IIT Roorkee", type: "National", image: "" },
    { name: "Prof. S. K. Jain", detail: "IIT Roorkee", type: "National", image: "" },
    { name: "Prof. P.K.S. Dikshit", detail: "IIT BHU, Varanasi", type: "National", image: "" },
    { name: "Prof. K. K. Pandey", detail: "IIT BHU, Varanasi", type: "National", image: "" },
    { name: "Dr. Subashisa Dutta", detail: "IIT Guwahati", type: "National", image: "" },
    { name: "Dr. K.P. Sudheer", detail: "DST, Govt of Kerela", type: "National", image: "" },
    { name: "Dr. Manoj P. Samuel", detail: "CWRDM, Govt of Kerela", type: "National", image: "" },
];

const internationalCommittee = [
    { name: "Prof. V.P. Singh", detail: "USA", type: "International", image: "" },
    { name: "Prof. R. S. Govindraju", detail: "USA", type: "International", image: "" },
    { name: "Prof. C. Ray", detail: "USA", type: "International", image: "" },
    { name: "Prof. Venkatraman Laxmi", detail: "USA", type: "International", image: "" },
    { name: "Prof. Soontak Lee", detail: "South Korea", type: "International", image: "" },
    { name: "Prof. Ashish Sharma", detail: "Australia", type: "International", image: "" },
    { name: "Prof. Ronny Berndtsson", detail: "Lund University, Sweden", type: "International", image: "" },
    { name: "Prof. Abolfazael Losaedi", detail: "Iran", type: "International", image: "" },
];

const page = [...nationalCommittee, ...internationalCommittee];

export default function ResourcePersonList() {
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
            </div>

        </div>
         <Footer />
    </>
        
    );
}