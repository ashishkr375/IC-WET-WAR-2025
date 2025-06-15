"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React from "react";
import Image from "next/image";

export default function PublicationsPage() {
	return (
		<>
			<Navbar />
			<div
				className="min-h-screen py-8 pt-24"
				style={{
					background: "linear-gradient(135deg, #e3f2fd 0%, #b3e0fc 100%)",
				}}
			>
				<div className="max-w-3xl mx-auto bg-white/10 rounded-2xl px-4 py-8 shadow-2xl border border-black/20">
					<h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-8 text-center tracking-wide">
						Publications
					</h1>
					<div className="flex flex-col md:flex-row items-center md:items-start mb-6 gap-6">
						<div className="flex-1">
							<h2 className="text-xl font-semibold text-blue-600 mb-3">
								Previous Publications
							</h2>
							<ul className="list-disc pl-6 space-y-2">
								<li>
									<a
										href="https://link.springer.com/book/10.1007/978-3-031-09551-1"
										target="_blank"
										rel="noopener noreferrer"
										className="text-blue-800 underline hover:text-blue-900 transition"
									>
										Water Resources and Sustainable Development: Challenges and Opportunities (Springer, 2022)
									</a>
								</li>
								<li>
									<a
										href="https://link.springer.com/book/10.1007/978-3-030-79400-2"
										target="_blank"
										rel="noopener noreferrer"
										className="text-blue-800 underline hover:text-blue-900 transition"
									>
										Water and Environment: Recent Advances in Water Management and Environmental Control (Springer, 2021)
									</a>
								</li>
							</ul>
						</div>
						<div className="flex-shrink-0 w-full md:w-[220px]">
							<Image
								src="/Publication.png"
								alt="Publications"
								width={220}
								height={320}
								className="rounded-xl shadow w-full h-auto object-contain"
							/>
						</div>
					</div>
					{/* ...add more publication content here if needed... */}
				</div>
			</div>
			<Footer />
		</>
	);
}
