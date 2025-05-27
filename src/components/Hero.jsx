"use client"
import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import Navbar from './Navbar';
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import { Inter, Montserrat, Poppins } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], weight: ['400', '700', '900'] });
const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '700', '900'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700', '900'] });

const RainParticles = () => {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: undefined,
          image: "linear-gradient(135deg, #e3f2fd 0%, #b3e0fc 100%)",
        },
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
      <section className={`relative bg-gradient-to-br from-[#e3f2fd] to-[#b3e0fc] text-black min-h-screen h-screen flex items-center overflow-hidden ${inter.className}`}>
        <RainParticles />
        <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 md:px-8 z-10 flex flex-col items-center">
          <div className="w-full flex justify-center">
            <h2 className={`text-base xs:text-lg sm:text-[2.2rem] md:text-[2.8rem] lg:text-[3.2rem] font-extrabold leading-tight mb-2 text-center whitespace-nowrap ${montserrat.className} tracking-[0.12em] drop-shadow-[0_2px_16px_#38bdf8]`}>
              International Conference On
            </h2>
          </div>
          <div className={`text-xs xs:text-base sm:text-[1.3rem] md:text-[1.7rem] lg:text-[2rem] uppercase mb-0 text-center font-bold whitespace-nowrap text-black ${poppins.className} tracking-[0.12em] drop-shadow-[0_2px_16px_#38bdf8]`}>
            Wetland and Water Resource
          </div>
          <div className={`text-xs xs:text-base sm:text-[1.3rem] md:text-[1.7rem] lg:text-[2rem] uppercase mb-2 text-center font-bold whitespace-nowrap text-black ${poppins.className} tracking-[0.12em] drop-shadow-[0_2px_16px_#38bdf8]`}>
            For Sustainable Development
          </div>
          <div
            className={`text-xs xs:text-base sm:text-lg md:text-xl font-extrabold mb-2 text-center ${inter.className} tracking-[0.12em] drop-shadow-[0_2px_16px_#38bdf8]`}
            style={{
              color: "#FFD600", // matches the attached yellow color
              fontSize: "1.3rem",
              fontWeight: 900,
            
            }}
          >
            WET-WAR 2025 (International)
          </div>
          <div className={`text-xs xs:text-base sm:text-lg font-bold mb-4 text-center text-black ${inter.className} tracking-[0.12em] drop-shadow-[0_2px_16px_#38bdf8]`}>
            (29–31 December 2025)
          </div>
          {/* NIT Patna Logo and Name */}
          <div className="flex flex-col items-center mb-4">
            <img
              src="https://www.nitp.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.00e5159e.png&w=256&q=75"
              alt="NIT Patna Logo"
              width={120}
              height={120}
              className="rounded-[12px] shadow p-2 mb-2 w-[60px] h-[60px] xs:w-[80px] xs:h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px]"
            />
            <span className={`font-bold text-xs xs:text-sm sm:text-base rounded px-2 xs:px-3 py-1 text-black bg-[rgba(255,255,255,0.12)] ${inter.className} tracking-[1px] drop-shadow-[0_2px_8px_#38bdf8]`}>
              National Institute of Technology, Patna
            </span>
          </div>
          <div className={`font-bold text-xs xs:text-sm sm:text-base mb-2 text-center text-black ${inter.className} tracking-[1px] drop-shadow-[0_2px_8px_#38bdf8]`}>
            In Technical Collaboration with
          </div>
          {/* Collaboration Logos */}
          <div className="flex flex-col gap-2 w-full">
            {/* Responsive: stack logos/text on mobile, inline on md+ */}
            <div className="flex flex-col xs:flex-row items-center justify-center gap-4 w-full">
              <img
                src="/bitmlogo.png"
                alt="BIT Mesra Logo"
                width={48}
                height={48}
                className="rounded-[10px] shadow p-1 w-[36px] h-[36px] xs:w-[44px] xs:h-[44px] sm:w-[48px] sm:h-[48px] md:w-[56px] md:h-[56px]"
              />
              <span className={`font-bold text-xs xs:text-sm sm:text-lg md:text-xl whitespace-nowrap text-black ${inter.className} tracking-[1px] drop-shadow-[0_2px_8px_#38bdf8]`}>
                Birla Institute of Technology, Mesra
              </span>
              <span className="hidden md:inline-block w-4"></span>
              <div className="flex flex-col items-center md:flex-row md:items-center">
                <img
                  src="/BSWA.png"
                  alt="Bihar State Wetland Authority Logo"
                  width={48}
                  height={48}
                  className="rounded-[10px] shadow p-1 w-[36px] h-[36px] xs:w-[44px] xs:h-[44px] sm:w-[48px] sm:h-[48px] md:w-[56px] md:h-[56px]"
                />
                <span className={`font-bold text-xs xs:text-sm sm:text-lg md:text-xl whitespace-nowrap text-black ${inter.className} tracking-[1px] drop-shadow-[0_2px_8px_#38bdf8] md:ml-2`}>
                  <span className="block md:inline">Bihar State Wetland Authority</span>
                </span>
              </div>
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
    background:rgb(211, 222, 245);
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