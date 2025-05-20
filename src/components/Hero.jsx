import Image from 'next/image';

const Hero = () => (
  <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
    <Image
      src="https://ugcounselor-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/03/21210920/NIT-Patna.jpg"
      alt="Hero"
      fill
      style={{ objectFit: 'cover' }}
      priority
    />
    {/* Blurred overlay at the bottom */}
    <div
      style={{
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: '100%',
        height: '30vh',
        background: 'rgba(255,255,255,0.1)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        pointerEvents: 'none',
      }}
    >
      {/* Text over the blurred area */}
      <div
        style={{
          color: '#1a237e',
          fontSize: '2.2rem',
          fontWeight: 600,
          marginBottom: '2rem',
          textShadow: '0 4px 16px rgba(255,255,255,0.95), 0 1px 2px #fff',
          pointerEvents: 'auto',
          textAlign: 'center',
          lineHeight: 1.3,
          width: '100%',
          maxWidth: 900,
          padding: '2rem',
          background: 'rgba(255,255,255,0.55)',
          borderRadius: '1.5rem 1.5rem 0 0',
          boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
        }}
      >
        <div style={{ fontSize: '2.5rem', fontWeight: 700, letterSpacing: '1px', marginBottom: '0.5rem' }}>
          International Conference On
        </div>
        <div style={{ fontSize: '1.5rem', fontWeight: 500, marginBottom: '0.5rem' }}>
          Wetland and Water System for Sustainable Development
        </div>
        <div style={{ fontSize: '2rem', fontWeight: 700, color: '#1565c0', marginBottom: '0.5rem', letterSpacing: '2px' }}>
          WET-WAR 2025
        </div>
        <div style={{ fontSize: '1.2rem', fontWeight: 400, color: '#333' }}>
          (29-31 December 2025)
        </div>
      </div>
    </div>
  </div>
);

export default Hero;