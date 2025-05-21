"use client"
import React, { useEffect, useState } from "react";

const objectives = [
  {
    title: "Promote Sustainable Conservation",
    desc: "Encourage the protection, restoration, and sustainable use of wetlands and water resources to address global challenges like climate change, habitat loss, and water scarcity."
  },
  {
    title: "Facilitate Knowledge Sharing and Collaboration",
    desc: "Create a platform for researchers, policymakers, and communities to exchange ideas, research, and best practices for effective wetland management."
  },
  {
    title: "Strengthen Policy and Community Engagement",
    desc: "Support development of policies and empower local communities to participate actively in wetland conservation and governance"
  },
  {
    title: "Advance Innovation and Global Partnerships",
    desc: "Showcase innovative solutions and foster international cooperation to enhance resilience and contribute to sustainable development goals."
  }
];

const bgImages = [
  "/hero1.jpg",
  "/hero2.jpg",
  "/hero3.jpg",
  "/hero4.jpg"
];

export default function KeyObjectives() {
  const [bgIdx, setBgIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIdx((prev) => (prev + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="w-full py-12 px-2 sm:px-6 relative overflow-hidden"
      style={{
        background: "#232323",
      }}
    >
      {/* Fixed background image slider */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 0,
          background: `url('${bgImages[bgIdx]}') center center / cover no-repeat`,
          opacity: 0.13,
          transition: "background-image 1s ease"
        }}
      />
      <div className="relative z-10">
        <h2
          className="text-2xl sm:text-3xl font-extrabold mb-10 text-[#b3e0fc] tracking-wide text-center"
          style={{ letterSpacing: 1 }}
        >
          KEY OBJECTIVES
        </h2>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch">
          {objectives.map((obj, idx) => (
            <div
              key={idx}
              className="flex-1 min-w-[260px] max-w-xs bg-[#e3eaf0] rounded-none shadow-lg border border-[#b3e0fc] flex flex-col"
              style={{
                background: "#b0bec5",
                borderColor: "#90caf9",
                minHeight: 260
              }}
            >
              <div
                className="py-4 px-3 font-bold text-white text-center text-base sm:text-lg"
                style={{
                  background: "#1976a5",
                  borderTopLeftRadius: 0,
                  borderTopRightRadius: 0,
                  letterSpacing: 0.5
                }}
              >
                {obj.title}
              </div>
              <div
                className="flex-1 px-4 py-4 text-[15px] text-[#232323] bg-[#e3eaf0] rounded-b"
                style={{
                  background: "#cfd8dc",
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0
                }}
              >
                {obj.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
