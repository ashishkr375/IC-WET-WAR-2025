"use client"
import React from "react";

const Conference = () => (
  <section className="relative z-10 min-h-[70vh] flex flex-col bg-[#19aaff] py-12 px-4 font-sans">
    <h2 className="w-full text-3xl sm:text-4xl font-bold text-white mb-10 tracking-wider uppercase text-center z-30 drop-shadow-[0_2px_12px_#38bdf8]">
      About Conference
    </h2>
    <div className="flex flex-col lg:flex-row items-center justify-center w-full h-full">
      {/* Left: Video */}
      <div className="flex-1 max-w-xl w-full flex items-center justify-center mb-10 lg:mb-0 z-20">
        <div className="w-full max-w-[420px] aspect-square rounded-2xl overflow-hidden shadow-xl border-2 border-white bg-white/20 flex items-center justify-center">
          <video
            src="/wetwar.mp4"
            controls
            className="w-full h-full object-cover rounded-2xl bg-black"
            poster="/hero1.jpg"
          />
        </div>
      </div>
      {/* Right: Map */}
      <div className="flex-1 max-w-xl w-full flex items-center justify-center z-20">
        <div className="w-full max-w-md aspect-video rounded-2xl overflow-hidden shadow-xl border-2 border-white bg-white/20 flex items-center justify-center h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.5246824353003!2d85.17206600000002!3d25.620706199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58dce6732867%3A0x4059f39a1ac82f06!2sNational%20Institute%20of%20Technology%2C%20Patna!5e0!3m2!1sen!2sin!4v1747894009342!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="NIT Patna Location"
            className="w-full h-full rounded-2xl"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
);

export default Conference;
