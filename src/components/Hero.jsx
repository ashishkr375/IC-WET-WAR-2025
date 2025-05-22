"use client"
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Navbar from './Navbar';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/author', label: 'Author Section' },
  { href: '/people', label: 'Key People' },
  { href: '/register', label: 'Registration' },
  { href: '/sponsors', label: 'Sponsors' },
  { href: '/contact-us', label: 'Contac Us' },
];

const sliderImages = [
  "/hero1.jpg",
  "/hero2.jpg",
  "/hero3.jpg",
  "/hero4.jpg",

];

const Hero = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % sliderImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
      }}
      className="min-h-screen w-full"
    >
      {/* Responsive Navbar */}
      <Navbar/>
      {/* Image Slider */}
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          zIndex: 0,
        }}
      >
        {sliderImages.map((img, idx) => (
          <Image
            key={img}
            src={img}
            alt={`Hero Slide ${idx + 1}`}
            fill
            style={{
              objectFit: 'cover',
              transition: 'opacity 0.8s ease',
              opacity: idx === currentImage ? 1 : 0,
              position: 'absolute',
              top: 0,
              left: 0,
            }}
            priority={idx === 0}
            sizes="100vw"
          />
        ))}
      </div>
      {/* Bluish blur overlay over the whole photo */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, rgba(90,200,250,0.45) 0%, rgba(10, 19, 47, 0.45) 100%)',
          backdropFilter: 'blur(3px)',
          WebkitBackdropFilter: 'blur(6px)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />
      {/* Centered text over the blurred area */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      >
        <div
          className="w-full max-w-[1100px] text-center pointer-events-auto px-2 sm:px-4"
        >
          <div
            className="font-extrabold uppercase"
            style={{
              fontSize: 'clamp(1.1rem, 4vw, 2.2rem)',
              marginBottom: '0.7rem',
              color: '#fff',
              letterSpacing: '2px',
              textShadow: '0 2px 12px #1976d2, 0 1px 2px #fff',
            }}
          >
            International Conference On
          </div>
          <div className="relative flex items-center justify-center w-full">
            {/* Left blur */}
            <span
              className="hidden sm:block"
              style={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                filter: 'blur(18px)',
                background: 'rgba(0,157,255,0.35)',
                marginRight: 12,
                display: 'inline-block',
              }}
            />
            <div
              className="font-extrabold uppercase"
              style={{
                fontSize: 'clamp(1.2rem, 7vw, 3.2rem)',
                letterSpacing: '3px',
                marginBottom: '0.2rem',
                background: 'linear-gradient(90deg,rgb(0, 157, 255) 0%,rgb(156, 193, 238) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                WebkitTextStroke: '2px #1976d2',
                textStroke: '2px #1976d2',
                zIndex: 1,
              }}
            >
              Wetland and Water  Resource  For Sustainable Development
            </div>
            {/* Right blur */}
            <span
              className="hidden sm:block"
              style={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                filter: 'blur(18px)',
                background: 'rgba(0,157,255,0.35)',
                marginLeft: 12,
                display: 'inline-block',
              }}
            />
          </div>
          <div
            className="font-semibold"
            style={{
              fontSize: 'clamp(1rem, 4vw, 2.2rem)',
              marginBottom: '0.7rem',
              color: '#fff',
              letterSpacing: '2px',
              textShadow: '0 2px 12px #1976d2, 0 1px 2px #fff',
            }}
          >
            WET-WAR 2025(International)
          </div>
          <div
            className="font-medium"
            style={{
              fontSize: 'clamp(0.95rem, 3vw, 1.7rem)',
              color: '#e3f2fd',
              letterSpacing: '2px',
              textShadow: '0 1px 8px #1976d2',
            }}
          >
            (29-31 December 2025)
          </div>
          {/* Logos and collaboration text below the date */}
          <div className="flex flex-col items-center gap-2 mt-4 sm:mt-6">
            {/* NITP logo and name */}
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 justify-center mb-2">
              <Image
                src="https://www.nitp.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.00e5159e.png&w=256&q=75"
                alt="NIT Patna Logo"
                width={70}
                height={70}
                className="rounded-md shadow p-2"
                style={{ borderRadius: "12px" }}
              />
              <span
                style={{
                  fontWeight: 700,
                  color: "#fff",
                  fontSize: "1.1rem",
                  letterSpacing: "1px",
                  textShadow: "0 1px 8px #1976d2",
                  background: "rgba(30,137,238,0.15)",
                  borderRadius: "8px",
                  padding: "0.4rem 0.8rem"
                }}
                className="mt-2 sm:mt-0"
              >
                National Institute of Technology, Patna
              </span>
            </div>
            {/* Collaboration text and logos */}
            <div className="flex flex-col items-center gap-2">
              <span
                style={{
                  fontWeight: 600,
                  color: "#fff",
                  fontSize: "0.95rem",
                  letterSpacing: "1px",
                  textShadow: "0 1px 8px #1976d2",
                  background: "rgba(30,137,238,0.10)",
                  borderRadius: "8px",
                  padding: "0.3rem 0.7rem"
                }}
              >
                In Technical Collaboration with
              </span>
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 justify-center mt-1">
                {/* BIT Mesra */}
                <div className="flex items-center gap-2 mb-2 sm:mb-0">
                  <Image
                    src="/bitmlogo.png"
                    alt="BIT Mesra Logo"
                    width={38}
                    height={38}
                    className="rounded-md shadow p-1"
                    style={{ borderRadius: "10px" }}
                  />
                  <span
                    style={{
                      fontWeight: 600,
                      color: "#fff",
                      fontSize: "0.95rem",
                      letterSpacing: "0.5px",
                      textShadow: "0 1px 8px #1976d2",
                    }}
                  >
                    Birla Institute of Technology, Mesra
                  </span>
                </div>
                {/* Bihar State Wetland Authority */}
                <div className="flex items-center gap-2">
                  <Image
                    src="/BSWA.png"
                    alt="Bihar State Wetland Authority Logo"
                    width={38}
                    height={38}
                    className="rounded-md shadow p-1"
                    style={{ borderRadius: "10px" }}
                  />
                  <span
                    style={{
                      fontWeight: 600,
                      color: "#fff",
                      fontSize: "0.95rem",
                      letterSpacing: "0.5px",
                      textShadow: "0 1px 8px #1976d2",
                    }}
                  >
                    Bihar State Wetland Authority
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;