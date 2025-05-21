"use client"
import Image from 'next/image';
import { useState } from 'react';
import Navbar from './Navbar';

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
     <Navbar/>
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
          background: 'linear-gradient(135deg, rgba(90,200,250,0.45) 0%, rgba(10, 19, 47, 0.45) 100%)',
          backdropFilter: 'blur(5px)',
          WebkitBackdropFilter: 'blur(12px)',
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
            className="font-extrabold uppercase"
            style={{
              fontSize: 'clamp(1.9rem, 9vw, 3.2rem)', 
              letterSpacing: '6px',
              marginBottom: '0.2rem',
              background: 'linear-gradient(90deg,rgb(0, 157, 255) 0%, #0072ff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              WebkitTextStroke: '4px #1976d2',
              textStroke: '4px #1976d2',
            }}
          >
            Wetland and Water  Resource  For Sustainable Development
          </div>
          <div
            className="font-semibold"
            style={{
              fontSize: 'clamp(1.2rem, 5vw, 2.2rem)', 
              marginBottom: '1rem',
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
                src="https://www.nitp.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.00e5159e.png&w=256&q=75"
                alt="NIT Patna Logo"
                width={90}
                height={90}
                className="rounded-md shadow  p-2"
                style={{  borderRadius: "12px" }}
              />
              <span
                style={{
                  fontWeight: 700,
                  color: "#fff",
                  fontSize: "1.3rem",
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