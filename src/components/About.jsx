import React from 'react';

const About = () => (
  <section
    style={{
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg,#5ac8fa  0%, #b3e0fc 100%)',
      padding: '4rem 1rem',
      fontFamily: 'sans-serif'
    }}
  >
    <div
      style={{
        background: 'rgba(153, 217, 247, 0.93)',
        borderRadius: '1.5rem',
        boxShadow: '0 8px 32px rgba(90, 200, 250, 0.18)',
        maxWidth: 1100,
        width: '100%',
        padding: '3rem 2rem',
        border: '1.5px solid #4fc3f7',
        fontFamily: 'sans-serif',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2.5rem',
        width: '100%',
        alignItems: 'stretch',
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
          width: '100%',
          alignItems: 'stretch',
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            width: '100%',
            alignItems: 'stretch',
            justifyContent: 'center',
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '2.5rem',
              alignItems: 'flex-start',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              {/* Left: About Us Content */}
              <div style={{
                flex: 1,
                minWidth: 280,
                maxWidth: 520,
                textAlign: 'left'
              }}>
                <h1 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#01579b', marginBottom: '1rem', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: 'sans-serif' }}>
                  About Us
                </h1>
                <p style={{ fontSize: '1.2rem', color: '#0d223a', marginBottom: '1.5rem', lineHeight: 1.7, fontFamily: 'serif' }}>
                  Welcome to the International Conference on Wetland and Water System for Sustainable Development (WET-WAR 2025), hosted by NIT Patna. Our mission is to bring together researchers, practitioners, and policymakers to discuss innovative solutions for wetland and water system sustainability.
                </p>
                <p style={{ fontSize: '1.1rem', color: '#174366', marginBottom: '1.5rem', lineHeight: 1.6, fontFamily: 'serif' }}>
                  The conference will feature keynote speeches, technical sessions, and networking opportunities, fostering collaboration and knowledge sharing in the field of environmental science and engineering.
                </p>
                <div style={{ display: 'flex', justifyContent: 'flex-start', gap: '2rem', marginTop: '2rem', flexWrap: 'wrap', fontFamily: 'monospace' }}>
                  <div>
                    <h3 style={{ color: '#0277bd', fontWeight: 600, fontSize: '1.1rem', fontFamily: 'sans-serif' }}>Location</h3>
                    <p style={{
                      color: '#fff',
                      background: 'linear-gradient(90deg,rgb(147, 211, 243) 0%, #5ac8fa 100%)',
                      fontSize: '1.08rem',
                      fontFamily: 'monospace',
                      fontWeight: 700,
                      borderRadius: '0.5rem',
                      padding: '0.4rem 1.1rem',
                      marginTop: '0.3rem',
                      boxShadow: '0 2px 8px #b3e0fc'
                    }}>
                      NIT Patna, India
                    </p>
                  </div>
                  <div>
                    <h3 style={{ color: '#0277bd', fontWeight: 600, fontSize: '1.1rem', fontFamily: 'sans-serif' }}>Dates</h3>
                    <p style={{
                      color: '#fff',
                      background: 'linear-gradient(90deg,rgb(147, 211, 243) 0%, #5ac8fa 100%)',
                      fontSize: '1.08rem',
                      fontFamily: 'monospace',
                      fontWeight: 700,
                      borderRadius: '0.5rem',
                      padding: '0.4rem 1.1rem',
                      marginTop: '0.3rem',
                      boxShadow: '0 2px 8px #b3e0fc'
                    }}>
                      29-31 December 2025
                    </p>
                  </div>
                </div>
              </div>
              {/* Right: Video */}
              <div style={{
                flex: 1,
                minWidth: 280,
                maxWidth: 480,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <div
                  style={{
                    width: '100%',
                    maxWidth: 420,
                    aspectRatio: '16/9',
                    borderRadius: '1.2rem',
                    overflow: 'hidden',
                    boxShadow: '0 6px 32px 0 rgba(33,150,243,0.18), 0 1.5px 8px 0 rgba(33,150,243,0.13)',
                    border: '3px solid #38bdf8',
                    background: 'linear-gradient(135deg, #e3f2fd 0%, #b3e0fc 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  className="transition-transform hover:scale-105 duration-300"
                >
                  <video
                    width="100%"
                    height="100%"
                    src="/WET-WAR.mp4"
                    title="Wetland and Water Conference"
                    controls
                    style={{
                      width: '100%',
                      height: '100%',
                      border: 'none',
                      borderRadius: '1.1rem',
                      background: '#000',
                      objectFit: 'cover'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
