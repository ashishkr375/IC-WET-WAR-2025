import React from 'react';

const data = {
  notices: [
    { title: 'Website Launched', detail: 'Conference website is live now.' },
    { title: 'Call for Papers', detail: 'Submit your research papers by the deadline.' },
    { title: 'Travel Grants', detail: 'Limited travel grants available for students.' }
  ],
  importantDates: [
    { title: 'Abstract Submission', detail: '15 September 2025' },
    { title: 'Notification of Acceptance', detail: '30 September 2025' },
    { title: 'Registration Deadline', detail: '15 October 2025' }
  ],
  conference: [
    { title: 'Venue', detail: 'NIT Patna, India' },
    { title: 'Conference Dates', detail: '29-31 December 2025' },
    { title: 'Workshops', detail: 'Pre-conference workshops on 28 December 2025' }
  ]
};

const Notices = () => (
  <section
    style={{
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg,#5ac8fa  0%, #b3e0fc 100%)',
      padding: '4rem 1rem',
    }}
    className="w-full"
  >
    <h2
      style={{
        color: '#01579b',
        fontWeight: 'bold',
        fontSize: '2.25rem',
        marginBottom: '2rem',
        textAlign: 'center',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        textShadow: '0 2px 12px #4fc3f7',
      }}
    >
      Notification
    </h2>
    <div className="flex flex-wrap gap-6 justify-center w-full max-w-screen-xl">
      {/* Notices Column */}
      <div
        style={{
          background: 'rgba(90, 200, 250, 0.93)',
          border: '1.5px solid #4fc3f7',
          borderRadius: '1rem',
          padding: '1.5rem',
          boxShadow: '0 8px 32px rgba(90, 200, 250, 0.12)',
          minWidth: 280,
          maxWidth: 400,
          flex: 1,
        }}
      >
        <div style={{ fontWeight: 700, color: '#0277bd', fontSize: '1.25rem', marginBottom: '1rem', letterSpacing: '0.05em' }}>
          Notices
        </div>
        {data.notices.map((item, idx) => (
          <div key={idx} style={{ marginBottom: '1rem' }}>
            <div style={{ fontWeight: 600, color: '#0d223a', fontSize: '1rem' }}>{item.title}</div>
            <div style={{ fontSize: '0.95rem', color: '#174366' }}>{item.detail}</div>
          </div>
        ))}
      </div>
      {/* Important Dates Column */}
      <div
        style={{
          background: 'rgba(90, 200, 250, 0.93)',
          border: '1.5px solid #4fc3f7',
          borderRadius: '1rem',
          padding: '1.5rem',
          boxShadow: '0 8px 32px rgba(90, 200, 250, 0.12)',
          minWidth: 280,
          maxWidth: 400,
          flex: 1,
        }}
      >
        <div style={{ fontWeight: 700, color: '#0277bd', fontSize: '1.25rem', marginBottom: '1rem', letterSpacing: '0.05em' }}>
          Important Dates
        </div>
        {data.importantDates.map((item, idx) => (
          <div key={idx} style={{ marginBottom: '1rem' }}>
            <div style={{ fontWeight: 600, color: '#0d223a', fontSize: '1rem' }}>{item.title}</div>
            <div style={{ fontSize: '0.95rem', color: '#174366' }}>{item.detail}</div>
          </div>
        ))}
      </div>
      {/* Conference Column */}
      <div
        style={{
          background: 'rgba(90, 200, 250, 0.93)',
          border: '1.5px solid #4fc3f7',
          borderRadius: '1rem',
          padding: '1.5rem',
          boxShadow: '0 8px 32px rgba(90, 200, 250, 0.12)',
          minWidth: 280,
          maxWidth: 400,
          flex: 1,
        }}
      >
        <div style={{ fontWeight: 700, color: '#0277bd', fontSize: '1.25rem', marginBottom: '1rem', letterSpacing: '0.05em' }}>
          Conference
        </div>
        {data.conference.map((item, idx) => (
          <div key={idx} style={{ marginBottom: '1rem' }}>
            <div style={{ fontWeight: 600, color: '#0d223a', fontSize: '1rem' }}>{item.title}</div>
            <div style={{ fontSize: '0.95rem', color: '#174366' }}>{item.detail}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Notices;
