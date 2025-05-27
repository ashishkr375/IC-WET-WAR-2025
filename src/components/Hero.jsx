"use client"
import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import Navbar from './Navbar';
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim"; // use tsparticles-slim for custom shapes

const RainParticles = () => {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: "#19aaff" },
        fpsLimit: 60,
        particles: {
          number: { value: 120, density: { enable: true, area: 800 } },
          color: { value: "#fff" }, // white color
          shape: { type: "circle" }, // circle shape
          opacity: { value: 0.7 },
          size: { value: { min: 1, max: 2 } },
          move: {
            enable: true,
            direction: "bottom",
            speed: 3,
            straight: true,
            outModes: { default: "out" }
          }
        },
        detectRetina: true,
        interactivity: {
          events: {
            onHover: { enable: false },
            onClick: { enable: false }
          }
        }
      }}
      className="absolute inset-0 z-0 pointer-events-none"
    />
  );
};

const Hero = () => {
 



  return  (
    <>
      <Navbar />
      <section className="relative bg-[#19aaff] text-white min-h-screen h-screen flex items-center overflow-hidden">
        <RainParticles />
        <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 md:px-8 z-10 flex flex-col items-center">
          <div className="w-full flex justify-center">
            <h2 className="text-base xs:text-lg sm:text-[2.2rem] md:text-[2.8rem] lg:text-[3.2rem] font-extrabold leading-tight mb-2 text-center whitespace-nowrap font-['Montserrat',_Bebas_Neue,_cursive] tracking-[0.12em] drop-shadow-[0_2px_16px_#38bdf8]">
              International Conference On
            </h2>
          </div>
          <div className="text-xs xs:text-sm sm:text-[1.3rem] md:text-[1.7rem] lg:text-[2rem] uppercase mb-0 text-center font-extrabold whitespace-nowrap text-white font-['Montserrat',_Bebas_Neue,_cursive] tracking-[0.12em] drop-shadow-[0_2px_16px_#38bdf8]">
            Wetland and Water Resource
          </div>
          <div className="text-xs xs:text-sm sm:text-[1.3rem] md:text-[1.7rem] lg:text-[2rem] uppercase mb-2 text-center font-extrabold whitespace-nowrap text-white font-['Montserrat',_Bebas_Neue,_cursive] tracking-[0.12em] drop-shadow-[0_2px_16px_#38bdf8]">
            For Sustainable Development
          </div>
          <div className="text-xs xs:text-base sm:text-lg md:text-xl font-extrabold mb-2 text-center text-white font-bebas tracking-[0.12em] drop-shadow-[0_2px_16px_#38bdf8]">
            WET-WAR 2025 (International)
          </div>
          <div className="text-xs xs:text-base sm:text-lg font-bold mb-4 text-center text-white font-bebas tracking-[0.12em] drop-shadow-[0_2px_16px_#38bdf8]">
            (29–31 December 2025)
          </div>
          {/* NIT Patna Logo and Name */}
          <div className="flex flex-col items-center mb-4">
            <img
              src="https://www.nitp.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.00e5159e.png&w=256&q=75"
              alt="NIT Patna Logo"
              width={60}
              height={60}
              className="rounded-[12px] shadow p-2 mb-2 w-[40px] h-[40px] xs:w-[50px] xs:h-[50px] sm:w-[60px] sm:h-[60px] md:w-[70px] md:h-[70px]"
            />
            <span className="font-bold text-xs xs:text-sm sm:text-base rounded px-2 xs:px-3 py-1 text-white bg-[rgba(255,255,255,0.12)] font-bebas tracking-[1px] drop-shadow-[0_2px_8px_#38bdf8]">
              National Institute of Technology, Patna
            </span>
          </div>
          <div className="font-bold text-xs xs:text-sm sm:text-base mb-2 text-center text-white font-bebas tracking-[1px] drop-shadow-[0_2px_8px_#38bdf8]">
            In Technical Collaboration with
          </div>
          {/* Collaboration Logos */}
          <div className="flex flex-col gap-2 w-full">
            <div className="flex flex-row items-center justify-center gap-4 w-full">
              <img
                src="/bitmlogo.png"
                alt="BIT Mesra Logo"
                width={32}
                height={32}
                className="rounded-[10px] shadow p-1 w-[20px] h-[20px] xs:w-[28px] xs:h-[28px] sm:w-[32px] sm:h-[32px] md:w-[38px] md:h-[38px]"
              />
              <span className="font-bold text-[10px] xs:text-xs sm:text-sm md:text-base whitespace-nowrap text-white font-bebas tracking-[1px] drop-shadow-[0_2px_8px_#38bdf8]">
                Birla Institute of Technology, Mesra
              </span>
              <span className="hidden md:inline-block w-4"></span>
              <img
                src="/BSWA.png"
                alt="Bihar State Wetland Authority Logo"
                width={32}
                height={32}
                className="rounded-[10px] shadow p-1 w-[20px] h-[20px] xs:w-[28px] xs:h-[28px] sm:w-[32px] sm:h-[32px] md:w-[38px] md:h-[38px]"
              />
              <span className="font-bold text-[10px] xs:text-xs sm:text-sm md:text-base whitespace-nowrap text-white font-bebas tracking-[1px] drop-shadow-[0_2px_8px_#38bdf8]">
                Bihar State Wetland Authority
              </span>
            </div>
          </div>
        </div>
        <div className="waves bg-gradient-to-br from-[#2f4fff] to-[#4973ff]"></div>
      </section>
      {/* Scoped styles for the wave */}
      <style jsx>{`
  .waves {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100vw;
    min-width: 100%;
    height: 18vw;
    min-height: 90px;
    max-height: 200px;
    bg-[#19aaff]
    overflow: hidden;
    z-index: 0;
    pointer-events: none;
  }

  .waves::before,
  .waves::after {
    content: '';
    position: absolute;
    width: 300vw;
    height: 300vw;
    top: -65vw;
    left: 50%;
    transform: translate(-50%, -75%);
    border-radius: 44%;
  }

  .waves::before {
    background: #19aaff;
    animation: wave1 8s linear infinite;
  }

  .waves::after {
    background: rgba(0, 191, 255, 0.25); /* Lighter sky blue */
    animation: wave2 15s linear infinite;
  }

  @media (max-width: 640px) {
    .waves {
      height: 60px;
      min-height: 40px;
      max-height: 80px;
    }
  }

  @keyframes wave1 {
    0% {
      transform: translate(-50%, -75%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -75%) rotate(360deg);
    }
  }

  @keyframes wave2 {
    0% {
      transform: translate(-50%, -75%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -75%) rotate(360deg);
    }
  }
`}</style>

    </>
  );
};

export default Hero;