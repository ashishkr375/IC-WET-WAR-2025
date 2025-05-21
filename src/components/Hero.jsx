"use client"
import Image from 'next/image';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/author', label: 'Author Section' },
  { href: '/people', label: 'Key People' },
  { href: '/register', label: 'Registration' },
  { href: '/sponsors', label: 'Sponsors' },
  { href: '/contact-us', label: 'Contac Us' },
];

const Hero = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      {/* Responsive Navbar */}
      <div className="absolute top-0 left-0 w-full z-10 flex items-center justify-between px-4 sm:px-8 py-4 backdrop-blur-xl bg-[rgba(10,25,47,0.45)]">
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={40}
            height={40}
            className="rounded-md mr-3 sm:mr-4 "
          />
          <span className="text-lg sm:text-2xl font-bold text-blue-100 tracking-widest drop-shadow upper
          case font-sans">
            ICWW
          </span>
        </div>
        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-4 sm:space-x-8 font-medium">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative hover:text-blue-400 transition after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-blue-300 after:rounded after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden flex items-center text-blue-100 focus:outline-none"
          onClick={() => setNavOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          <svg
            className={`w-7 h-7 transition-transform duration-200 ${navOpen ? 'rotate-90' : ''}`}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {navOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </div>
      {/* Mobile Nav Menu */}
      {navOpen && (
        <div className="absolute top-16 left-0 w-full z-20 bg-[rgba(10,25,47,0.95)] backdrop-blur-xl flex flex-col items-center py-4 md:hidden animate-fade-in-down">
          <ul className="w-full flex flex-col items-center space-y-4 font-medium">
            {navLinks.map((link) => (
              <li key={link.href} className="w-full text-center">
                <a
                  href={link.href}
                  className="block py-2 px-4 w-full hover:text-blue-400 transition relative after:content-[''] after:absolute after:left-1/2 after:transform after:-translate-x-1/2 after:-bottom-1 after:w-2/3 after:h-0.5 after:bg-blue-300 after:rounded after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left"
                  onClick={() => setNavOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
      <Image
        src="https://ugcounselor-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/03/21210920/NIT-Patna.jpg"
        alt="Hero"
        fill
        style={{ objectFit: 'cover' }}
        priority
      />
      {/* Bluish blur overlay over the whole photo */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(10, 19, 47, 0.55)', 
          backdropFilter: 'blur(5px)',
          WebkitBackdropFilter: 'blur(10px)',
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
          className="w-full max-w-[1100px] text-center pointer-events-auto"
        >
          <div
            className="font-extrabold uppercase"
            style={{
              fontSize: 'clamp(1.2rem, 5vw, 2.2rem)', 
              marginBottom: '1rem',
              color: '#fff',
              letterSpacing: '2px',
              textShadow: '0 2px 12px #1976d2, 0 1px 2px #fff',
            }}
          >
            International Conference On
          </div>
          <div
            className="font-semibold"
            style={{
              fontSize: 'clamp(2.4rem, 10vw, 4rem)', 
              letterSpacing: '4px',
              marginBottom: '1.2rem',
              background: 'linear-gradient(90deg,rgb(30, 137, 238) 30%,rgb(114, 181, 236) 70%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              WebkitTextStroke: '2px #1976d2',
              textStroke: '2px #1976d2',
            }}
          >
            Wetland and Water System for Sustainable Development
          </div>
          <div
            className="font-extrabold uppercase"
            style={{
              fontSize: 'clamp(1.5rem, 7vw, 2.8rem)', 
              letterSpacing: '6px',
              marginBottom: '0.2rem',
              background: 'linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              WebkitTextStroke: '2px #1976d2',
              textStroke: '2px #1976d2',
            }}
          >
            WET-WAR 2025
          </div>
          <div
            style={{
              fontSize: 'clamp(1rem, 3vw, 1.3rem)',
              color: '#e3f2fd',
              letterSpacing: '2px',
              textShadow: '0 2px 12px #1976d2, 0 1px 2px #fff',
              marginBottom: '1rem',
              textTransform: 'lowercase',
            }}
          >
            (international)
          </div>
          <div
            className="font-medium"
            style={{
              fontSize: 'clamp(1.1rem, 4vw, 1.7rem)', 
              color: '#e3f2fd',
              letterSpacing: '2px',
              textShadow: '0 1px 8px #1976d2',
            }}
          >
            (29-31 December 2025)
          </div>
          {/* Logos and collaboration text below the date */}
          <div className="flex flex-col items-center gap-2 mt-6">
            {/* NITP logo and name */}
            <div className="flex items-center gap-3 justify-center mb-2">
              <Image
                src="/nitplogo.png"
                alt="NIT Patna Logo"
                width={56}
                height={56}
                className="rounded-md shadow  p-2"
                style={{  borderRadius: "12px" }}
              />
              <span
                style={{
                  fontWeight: 700,
                  color: "#fff",
                  fontSize: "1.15rem",
                  letterSpacing: "1px",
                  textShadow: "0 1px 8px #1976d2",
                  background: "rgba(30,137,238,0.15)",
                  borderRadius: "8px",
                  padding: "0.5rem 1.2rem"
                }}
              >
                National Institute of Technology,Patna
              </span>
            </div>
            {/* Collaboration text and logos */}
            <div className="flex flex-col items-center gap-2">
              <span
                style={{
                  fontWeight: 600,
                  color: "#fff",
                  fontSize: "1.05rem",
                  letterSpacing: "1px",
                  textShadow: "0 1px 8px #1976d2",
                  background: "rgba(30,137,238,0.10)",
                  borderRadius: "8px",
                  padding: "0.35rem 1rem"
                }}
              >
                In Technical Collaboration with
              </span>
              <div className="flex items-center gap-5 justify-center mt-1">
                {/* BIT Mesra */}
                <div className="flex items-center gap-2">
                  <Image
                    src="/bitmlogo.png"
                    alt="BIT Mesra Logo"
                    width={48}
                    height={48}
                    className="rounded-md shadow  p-1"
                    style={{  borderRadius: "10px" }}
                  />
                  <span
                    style={{
                      fontWeight: 600,
                      color: "#fff",
                      fontSize: "1rem",
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
                    width={48}
                    height={48}
                    className="rounded-md shadow  p-1"
                    style={{ borderRadius: "10px" }}
                  />
                  <span
                    style={{
                      fontWeight: 600,
                      color: "#fff",
                      fontSize: "1rem",
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