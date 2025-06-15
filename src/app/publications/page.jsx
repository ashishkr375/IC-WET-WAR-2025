"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React from "react";

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
					<h1 className="text-2xl md:text-3xl font-semibold text-blue-700 mb-6 text-center">
						Publications
					</h1>
					<h2 className="text-xl font-semibold text-blue-600 mb-3">
						Previous Publications
					</h2>
					<ul className="list-disc pl-6 space-y-2">
						<li>
							<a
								href="https://link.springer.com/book/10.1007/978-3-031-09551-1"
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-700 underline hover:text-blue-900"
							>
								Water Resources and Sustainable Development: Challenges and Opportunities (Springer, 2022)
							</a>
						</li>
						<li>
							<a
								href="https://link.springer.com/book/10.1007/978-3-030-79400-2"
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-700 underline hover:text-blue-900"
							>
								Water and Environment: Recent Advances in Water Management and Environmental Control (Springer, 2021)
							</a>
						</li>
					</ul>
					{/* ...add more publication content here if needed... */}
				</div>
			</div>
			<Footer />
		</>
	);
}
