import React from 'react';

const About = () => (
  <section
    style={{
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #e3f2fd 0%, #fff 100%)',
      padding: '4rem 1rem',
    }}
  >
    <div
      style={{
        background: 'rgba(255,255,255,0.85)',
        borderRadius: '1.5rem',
        boxShadow: '0 8px 32px rgba(30, 136, 229, 0.10)',
        maxWidth: 800,
        width: '100%',
        padding: '3rem 2rem',
        textAlign: 'center',
      }}
    >
      <h1 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#1565c0', marginBottom: '1rem' }}>
        About Us
      </h1>
      <p style={{ fontSize: '1.2rem', color: '#333', marginBottom: '1.5rem', lineHeight: 1.7 }}>
        Welcome to the International Conference on Wetland and Water System for Sustainable Development (WET-WAR 2025), hosted by NIT Patna. Our mission is to bring together researchers, practitioners, and policymakers to discuss innovative solutions for wetland and water system sustainability.
      </p>
      <p style={{ fontSize: '1.1rem', color: '#444', marginBottom: '1.5rem', lineHeight: 1.6 }}>
        The conference will feature keynote speeches, technical sessions, and networking opportunities, fostering collaboration and knowledge sharing in the field of environmental science and engineering.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '2rem', flexWrap: 'wrap' }}>
        <div>
          <h3 style={{ color: '#1976d2', fontWeight: 600, fontSize: '1.1rem' }}>Location</h3>
          <p style={{ color: '#333', fontSize: '1rem' }}>NIT Patna, India</p>
        </div>
        <div>
          <h3 style={{ color: '#1976d2', fontWeight: 600, fontSize: '1.1rem' }}>Dates</h3>
          <p style={{ color: '#333', fontSize: '1rem' }}>29-31 December 2025</p>
        </div>
      </div>
    </div>
  </section>
);

export default About;
