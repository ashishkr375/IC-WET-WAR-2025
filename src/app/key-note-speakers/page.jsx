"use client";
import React from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const speakers = [
	{
		name: "Prof. (Dr.) Pradip Kumar Jain",
		detail: "Director, NIT Patna",
		image: "https://i.postimg.cc/6pWBW8Dg/PKJ-Desk-Photo-1.jpg",
	},
	{
		name: "Prof. (Dr.) Ramakar Jha",
		detail: "CED, NIT Patna",
		image: "https://i.postimg.cc/zBrHxh27/ramakar-sir.jpg",
	},
	// National Speakers
	{ name: "Prof. C.S.P. Ojha, IIT Roorkee" ,image: "https://channeli.in/media/kernel/display_pictures/a06ac076-6795-498e-a174-bde674312491.jpg",},
	{ name: "Prof. V. R. Desai, Director, IIT Dharwad" ,image: "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=zLm5b2AAAAAJ&citpid=3"},
	{ name: "Prof. V.K. Paul, Director, SPA New Delhi",image: "https://spa.ac.in/sites/default/files/inline-images/director01_0.jpg" },
	{ name: "Dr N.K. Goel, Director, NIH Roorkee" ,image: "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=kOjtxGYAAAAJ&citpid=2"},
	{ name: "Dr Dr. Y. R. Satyaji Rao, NIH Roorkee" ,image: "https://up.yimg.com/ib/th?id=OIP.srNFFzORAaERcWvhwgPzVAHaHa&pid=Api&rs=1&c=1&qlt=95&w=115&h=115"},
	{ name: "Sri S. Chandrasekhar, IFS, Member Secretary, BSWA DoEFCC Bihar" ,image: "https://up.yimg.com/ib/th?id=OIP.Mp06qxwis0XRhxITNXxPEwHaEK&pid=Api&rs=1&c=1&qlt=95&w=196&h=110"},
	{ name: "Dr Vijay Kumar, Scientist, Ministry of Earth Sciences, GOI",image: "https://up.yimg.com/ib/th?id=OIP.FRBoRf19oV-befRxr1wQhQHaEK&pid=Api&rs=1&c=1&qlt=95&w=171&h=96" },
	{ name: "Shri Baleshwar Thakur, Director General, NWDA, New Delhi",image: "https://up.yimg.com/ib/th?id=OIP.6xvA89C8nwF4ZS90cGsbJQHaG9&pid=Api&rs=1&c=1&qlt=95&w=130&h=122" },
	{ name: "Prof. Prem Lal Patel, Director, VNIT Nagpur",image: "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=4n4UECMAAAAJ&citpid=3" },
	{ name: "Prof. A. K. Gosain, Emeritus Professor, IIT Delhi.",image: "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=JW9ERowAAAAJ&citpid=2" },
	{ name: "Prof. Vivekanand Singh, VC, Purnea University",image: "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=1o8cigwAAAAJ&citpid=2" },
	{ name: "Prof. M. M. Ghangrekar, Director, NIT, Puducherry" ,image: "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=yh3JJX0AAAAJ&citpid=2"},
	{ name: "Prof. P. Mahanta, Director, NIT Meghalaya",image: "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=t0viKX4AAAAJ&citpid=1" },
	{ name: "Prof. M.K. Verma, Professor, NIT Raipur",image: "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=KdB5UtwAAAAJ&citpid=2" },
	{ name: "Prof. Rommel Mehta, SPA New Delhi",image: "https://brsa.org.in/wp-content/uploads/2017/08/Rommel-mehta.jpg" },
	{ name: "Prof. M. L. Kansal, IIT Roorkee" ,image: "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=dg4NwCEAAAAJ&citpid=1"},
	{ name: "Prof. Deepak Khare, IIT Roorkee" ,image: "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=MjGrfksAAAAJ&citpid=2"},
	{ name: "Prof. S. K. Jain, IIT Roorkee",image: "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=WrUrbdIAAAAJ&citpid=6" },
	{ name: "Prof. P.K.S. Dikshit, IIT BHU, Varanasi" ,image: "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=mDCfhrIAAAAJ&citpid=1"},
	{ name: "Prof. K. K. Pandey, IIT BHU, Varanasi",image: "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=jEOvhLcAAAAJ&citpid=4" },
	{ name: "Dr. Subashisa Dutta, IIT Guwahati" ,image: "https://up.yimg.com/ib/th?id=OIP.srNFFzORAaERcWvhwgPzVAHaHa&pid=Api&rs=1&c=1&qlt=95&w=115&h=115" },
	{ name: "Dr. K.P. Sudheer, DST, Govt of Kerela",image: "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=4Su88eYAAAAJ&citpid=2" },
	{ name: "Dr. Manoj P. Samuel, CWRDM, Govt of Kerela" ,image: "https://cwrdm.kerala.gov.in/sites/default/files/styles/profile_thumb_64x84/public/2024-07/IMG-20240724-WA0091.jpg?itok=-nY85m77"},
	// International Speakers
	{ name: "Prof. V.P. Singh, USA" ,image: "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=L_ssRaoAAAAJ&citpid=1"},
	{ name: "Prof. R. S. Govindraju, USA",image: "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=JWKSZ8gAAAAJ&citpid=2" },
	{ name: "Prof. C. Ray, USA" ,image: "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=u_sthpoAAAAJ&citpid=7"},
	{ name: "Prof. Venkatraman Laxmi, USA",image: "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=vbNdSy0AAAAJ&citpid=2" },
	{ name: "Prof. Soontak Lee, South Korea" ,image: "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=2kY7gNkAAAAJ&citpid=1"},
	{ name: "Prof. Ashish Sharma, Australia" ,image: "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=C_9ndbcAAAAJ&citpid=2"},
	{ name: "Prof. Ronny Berndtsson, Lund University, Sweden" ,image: "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=CzF8Z5IAAAAJ&citpid=2"},
	{ name: "Prof. Abolfazl MOSAEDI, Iran" ,image: "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=pZDiusgAAAAJ&citpid=1"},
];

export default function KeyNoteSpeakersPage() {
	return (
		<>
			<Navbar />
			<div
				className="min-h-screen py-8 pt-24"
				style={{
					background: "linear-gradient(135deg, #e3f2fd 0%, #b3e0fc 100%)",
				}}
			>
				<div className="max-w-8xl mx-auto bg-white/10 rounded-2xl px-2 py-8 shadow-2xl border border-black/20">
					<h1 className="text-2xl md:text-3xl font-semibold pl-4 border-l-4 border-blue-300 text-blue-400 mb-8 text-center flex justify-center">
						<span className="bg-blue-100/60 px-2 py-1 rounded-md inline-block">
							Key Note Speakers
						</span>
					</h1>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-12 justify-items-center">
						{speakers.map((person, idx) => (
							<div key={idx} className="w-[270px] h-[340px]">
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
										{person.detail && (
											<h4 className="text-[15px] text-black/80 capitalize text-center">
												{person.detail}
											</h4>
										)}
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
