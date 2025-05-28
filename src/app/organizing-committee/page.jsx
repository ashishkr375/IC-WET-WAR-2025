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
		image: "https://i.postimg.cc/6pWBW8Dg/PKJ-Desk-Photo-1.jpg",
	},
	{
		role: "Patron",
		name: "Prof. (Dr.) Fulena Rajak",
		detail: "Head (ARP), NIT Patna",
		image:
			"https://www.nitp.ac.in/_next/image?url=https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fauthuser%3D0%26sz%3Dw320%26id%3D1CKQd0i9upET-06HtxIX8OekY7pWh26Zy&w=640&q=75",
	},
	{
		role: "Patron",
		name: "Prof. (Dr.) Anshuman Singh",
		detail: "Head (CED), NIT Patna",
		image:
			"https://www.nitp.ac.in/_next/image?url=https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fauthuser%3D0%26sz%3Dw320%26id%3D1rzRmDOfcCAqXuBJArVw0p4AxLi42MXhZ&w=384&q=75",
	},
	{
		role: "Chairman",
		name: "Prof. (Dr) Ramakar Jha",
		detail: "CED, NIT Patna",
		image:
			"https://i.postimg.cc/zBrHxh27/ramakar-sir.jpg",
	},
	{
		role: "Co-Chairman",
		name: "Prof (Dr) Satyaki Sarkar",
		detail: "Head (ARP), BITM, Ranchi",
		image:
			"https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=yw-HnzUAAAAJ&citpid=6",
	},
	{
		role: "Editorial Chairman",
		name: "Dr. Saroja Kumar Barik",
		detail:
			"Wetland Expert, Bihar State Wetland Authority, DoEF CC, Bihar",
		image:
			"https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=YqQtbdcAAAAJ&citpid=11",
	},
	{
		role: "Secretary",
		name: "Dr. Anjali Sharma",
		detail: "ARP, NIT Patna",
		image:
			"https://www.nitp.ac.in/_next/image?url=https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fauthuser%3D0%26sz%3Dw320%26id%3D1u9vCIy4VCrJm6qtVteGFm9mxlJIFTvJH&w=384&q=75",
	},
	{
		role: "Secretary",
		name: "Dr. Anushri Barman",
		detail: "ARP, NIT Patna",
		image:
			"https://www.nitp.ac.in/_next/image?url=https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fauthuser%3D0%26sz%3Dw320%26id%3D16TEs6OgHH79BNm94VGG8sdLA2MvB4_Gd&w=384&q=75",
	},
	{
		role: "Secretary",
		name: "Ar. Ashutosh Kumar",
		detail: "ARP, BITM, Ranchi",
		image: "https://i.postimg.cc/xjHqt0xt/image.png",
	},
	{
		role: "Secretary",
		name: "Dr. Roshni T.",
		detail: "CED, NIT Patna",
		image:
			"https://www.nitp.ac.in/_next/image?url=https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fauthuser%3D0%26sz%3Dw320%26id%3D1CSwMnMlxaXNijAUXwf7hDBqsh9xMJaAA&w=384&q=75",
	},
	{
		role: "Secretary",
		name: "Dr. Bhabani Shankar Das",
		detail: "CED, NIT Patna",
		image:
			"https://www.nitp.ac.in/_next/image?url=https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fauthuser%3D0%26sz%3Dw320%26id%3D16SWM2xg9hcoKyqzMhMOpMEb4tOcmIi14&w=384&q=75",
	},
	{
		role: "Secretary",
		name: "Dr. Joseph Tripura",
		detail: "CED, NIT Patna",
		image:
			"https://www.nitp.ac.in/_next/image?url=https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fauthuser%3D0%26sz%3Dw320%26id%3D1REtbvDeRL1-sz-sfoAmfzvYiZf8Apad_&w=384&q=75",
	},
];

export default function OrganizingCommitteePage() {
	return (
		<>
			<Navbar />
			<div
				className="min-h-screen py-8 pt-24"
				style={{
					background: "linear-gradient(135deg, #e3f2fd 0%, #b3e0fc 100%)",
				}}
			>
				<div className="max-w-5xl mx-auto bg-white/10 rounded-2xl px-2 py-8 shadow-2xl border border-black/20">
					<h1 className="text-4xl sm:text-5xl font-bold text-center text-black tracking-wider drop-shadow-[0_2px_12px_#38bdf8] mb-8 underline underline-offset-8">
						Organising Committee
					</h1>
					<div className="flex flex-wrap justify-center">
						{people.map((person, idx) => (
							<div key={idx} className="w-[290px] h-[340px] mx-3 my-4">
								<div className="relative flex flex-col items-center bg-gradient-to-br from-[#e3f2fd]/60 to-[#b3e0fc]/80 border border-black/20 rounded-2xl shadow-xl h-full transition-transform duration-300 hover:scale-105 hover:shadow-2xl group">
									<div className="relative mt-6 mb-4 flex items-center justify-center">
										{/* White circle border with sky blue on hover */}
										<div className="absolute w-[110px] h-[110px] rounded-full border-4 border-white transition-all duration-300 group-hover:w-[130px] group-hover:h-[130px] group-hover:border-[#38bdf8] z-0"></div>
										<Image
											src={person.image || "/faculty.jpeg"}
											alt={person.name}
											width={110}
											height={110}
											className="w-[110px] h-[110px] object-cover rounded-full border-4 border-transparent shadow-lg z-10 transition-all duration-300 group-hover:w-[130px] group-hover:h-[130px]"
										/>
									</div>
									<div className="flex-1 flex flex-col items-center justify-center px-4">
										<h3 className="text-lg text-black font-bold mb-1 drop-shadow">
											{person.name}
										</h3>
										<h4 className="text-base text-white bg-[#1976d2] px-3 py-1 rounded-full font-semibold mb-1 shadow">
											{person.role}
										</h4>
										<h4 className="text-[15px] text-black/80 capitalize">
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
