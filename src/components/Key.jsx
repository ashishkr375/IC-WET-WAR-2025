"use client";
import React, { useEffect, useState } from "react";

const objectives = [
	{
		title: "Promote Sustainable Conservation",
		desc: "Encourage the protection, restoration, and sustainable use of wetlands and water resources to address global challenges like climate change, habitat loss, and water scarcity.",
	},
	{
		title: "Facilitate Knowledge Sharing and Collaboration",
		desc: "Create a platform for researchers, policymakers, and communities to exchange ideas, research, and best practices for effective wetland management.",
	},
	{
		title: "Strengthen Policy and Community Engagement",
		desc: "Support development of policies and empower local communities to participate actively in wetland conservation and governance.",
	},
	{
		title: "Advance Innovation and Global Partnerships",
		desc: "Showcase innovative solutions and foster international cooperation to enhance resilience and contribute to sustainable development goals.",
	},
];

const bgImages = ["/hero1.jpg", "/hero2.jpg", "/hero3.jpg", "/hero4.jpg"];

export default function KeyObjectives() {
	const [bgIdx, setBgIdx] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setBgIdx((prev) => (prev + 1) % bgImages.length);
		}, 5000);
		return () => clearInterval(interval);
	}, []);

	return (
		<section className="w-full py-20 px-4 sm:px-8 relative overflow-hidden bg-[#19aaff]">
			<div className="relative z-10">
				<h2 className="text-center text-3xl sm:text-4xl font-extrabold tracking-wide text-white mb-14">
					KEY OBJECTIVES
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
					{objectives.map((obj, idx) => (
						<div
							key={idx}
							className="backdrop-blur-lg bg-white/10 border border-white shadow-xl rounded-2xl p-6 flex flex-col justify-between transition-transform hover:scale-105 hover:shadow-white/50 duration-300"
						>
							<h3 className="text-lg font-semibold text-white mb-4 text-center">
								{obj.title}
							</h3>
							<p className="text-sm text-white leading-relaxed text-center">
								{obj.desc}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
