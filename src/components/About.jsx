"use client"
import React, { useState } from 'react';

const images = [
  "https://i.postimg.cc/0jDVqSGQ/Image-1-00001.jpg",
  "https://i.postimg.cc/fyY06783/nit-patna-005.jpg",
  "https://www.nitp.ac.in/homepage/MainEntrance.jpg",
  "https://i.postimg.cc/HLP55kJL/nit-patna-006.jpg",
];

const About = () => {
  const [current, setCurrent] = useState(0);

  // Custom auto-slide timing
  React.useEffect(() => {
    let timeout;
    if (current === 0) {
      timeout = setTimeout(() => setCurrent(1), 10000); // 10 seconds for first image
    } else {
      timeout = setTimeout(() => setCurrent((prev) => (prev + 1) % images.length), 3000); // 3 seconds for others
    }
    return () => clearTimeout(timeout);
  }, [current]);

  const prevSlide = () => setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextSlide = () => setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <section className="min-h-[80vh] flex flex-col bg-gradient-to-br from-[#e3f2fd] to-[#b3e0fc] py-10 px-4 font-sans">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-black mb-8 tracking-wider uppercase text-center z-2 font-['Oswald',_Montserrat,_Bebas_Neue,_cursive] drop-shadow-[0_2px_12px_#38bdf8] underline underline-offset-8">
        About Us
      </h1>
      <div className="flex flex-col lg:flex-row gap-10 items-center justify-center w-full max-w-6xl mx-auto">
        {/* Left: About Text */}
        <div className="flex-1 min-w-[220px] max-w-xl text-left z-2">
          <p className="text-base sm:text-lg text-black mb-6 leading-relaxed font-serif">
           National Institute of Technology Patna was formerly known as Bihar College of Engineering Patna, a constituent engineering College under Patna University. It was rechristened NIT Patna on 28<sup>th</sup> January 2004 as an Autonomous Institute under the Ministry of Education, Government of India. The Institute imparts high-level education, training, research, and development in Science, Engineering, Architecture and Planning, Humanities & Social Sciences and Technology.
          </p>
          <p className="text-base text-black mb-6 leading-relaxed font-serif">
            The conference will feature keynote speeches, technical sessions, and networking opportunities, fostering collaboration and knowledge sharing in the field of environmental science and engineering.
          </p>
          <div className="flex flex-wrap justify-start gap-8 mt-8 font-mono">
            <div>
              <h3 className="ml-19 text-black font-semibold text-base sm:text-lg font-sans">Location</h3>
              <p className="text-[#38bdf8] bg-white text-lg sm:text-xl font-extrabold font-['Montserrat',_Bebas_Neue,_cursive] rounded-lg px-4 py-2 mt-1 shadow tracking-wider uppercase text-center">
                NIT Patna, India
              </p>
            </div>
            <div>
              <h3 className=" ml-26 text-black font-semibold text-base sm:text-lg font-sans">Dates</h3>
              <p className="text-[#38bdf8] bg-white text-xl sm:text-xl font-extrabold font-['Montserrat',_Bebas_Neue,_cursive] rounded-lg px-4 py-2 mt-1 shadow tracking-wider uppercase text-center">
                29-31 December 2025
              </p>
            </div>
          </div>
        </div>
        {/* Right: Image hero */}
        <div className="flex-1 min-w-[220px] max-w-lg flex items-center justify-center">
          <div className="relative w-full max-w-md aspect-video rounded-2xl overflow-hidden shadow-lg border-2 border-white/30 bg-white/10 flex items-center justify-center">
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 text-[#38bdf8] rounded-full w-8 h-8 flex items-center justify-center z-10 hover:bg-[#38bdf8] hover:text-white transition"
              aria-label="Previous"
            >
              &#8592;
            </button>
            <img
              src={images[current]}
              alt={`About hero ${current + 1}`}
              className="w-full h-full object-cover rounded-2xl"
            />
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 text-[#38bdf8] rounded-full w-8 h-8 flex items-center justify-center z-10 hover:bg-[#38bdf8] hover:text-white transition"
              aria-label="Next"
            >
              &#8594;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
