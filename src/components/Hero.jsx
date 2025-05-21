"use client"
import Image from 'next/image';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/author', label: 'Author Section' },
  { href: '/people', label: 'Key People' },
  { href: '/pay', label: 'Registration' },
  { href: '/sponsors', label: 'Sponsors' },
  { href: '/contact', label: 'Contact Us' },
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
          <span className="text-lg sm:text-2xl font-bold text-blue-100 tracking-widest drop-shadow uppercase font-sans">
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
          style={{
            color: '#1a237e',
            fontSize: '3.5rem',
            fontWeight: 700,
            textShadow: '0 6px 32px rgba(21,101,192,0.18), 0 2px 8px #fff',
            pointerEvents: 'auto',
            textAlign: 'center',
            lineHeight: 1.2,
            width: '100%',
            maxWidth: 1100,
            padding: '0',
            borderRadius: '0',
            boxShadow: 'none',
            background: 'none',
          }}
        >
          <div
            style={{
              fontSize: 'clamp(1.3rem, 6vw, 3.5rem)',
              fontWeight: 800,
              letterSpacing: '4px',
              marginBottom: '1.2rem',
              background: 'linear-gradient(90deg, #1976d2 30%, #64b5f6 70%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textTransform: 'uppercase',
              WebkitTextStroke: '2px #1976d2',
              textStroke: '2px #1976d2',
            }}
          >
            International Conference On
          </div>
          <div
            style={{
              fontSize: 'clamp(1rem, 4vw, 2.2rem)',
              fontWeight: 600,
              marginBottom: '1rem',
              color: '#fff',
              letterSpacing: '2px',
              textShadow: '0 2px 12px #1976d2, 0 1px 2px #fff',
            }}
          >
            Wetland and Water System for Sustainable Development
          </div>
          <div
            style={{
              fontSize: 'clamp(1.2rem, 5vw, 2.8rem)',
              fontWeight: 800,
              letterSpacing: '6px',
              marginBottom: '1rem',
              background: 'linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textTransform: 'uppercase',
              WebkitTextStroke: '2px #1976d2',
              textStroke: '2px #1976d2',
            }}
          >
            WET-WAR 2025
          </div>
          <div
            style={{
              fontSize: 'clamp(0.9rem, 3vw, 1.7rem)',
              fontWeight: 500,
              color: '#e3f2fd',
              letterSpacing: '2px',
              textShadow: '0 1px 8px #1976d2',
            }}
          >
            (29-31 December 2025)
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;