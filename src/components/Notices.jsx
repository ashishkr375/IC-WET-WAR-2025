import React from 'react';

// Data for each column
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

const columnStyle = {
  flex: 1,
  background: '#fff',
  borderRadius: '0.75rem',
  padding: '1.5rem 1rem',
  boxShadow: '0 2px 8px rgba(21,101,192,0.07)',
  margin: '0 0.5rem',
  minWidth: 220,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start'
};

const Notices = () => (
  <section
    style={{
      width: '100%',
      maxWidth: 1200,
      margin: '2rem auto',
      padding: '1.5rem',
      background: 'rgba(227,242,253,0.7)',
      borderRadius: '1rem',
      boxShadow: '0 4px 16px rgba(30,136,229,0.08)'
    }}
  >
    <h2 style={{ color: '#1565c0', fontWeight: 700, fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>
    Notification
    </h2>
    <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
      {/* Notices Column */}
      <div style={columnStyle}>
        <div style={{ fontWeight: 700, color: '#1976d2', fontSize: '1.2rem', marginBottom: '1rem' }}>Notices</div>
        {data.notices.map((item, idx) => (
          <div key={idx} style={{ marginBottom: '1rem' }}>
            <div style={{ fontWeight: 600, fontSize: '1rem' }}>{item.title}</div>
            <div style={{ fontSize: '0.98rem', color: '#444' }}>{item.detail}</div>
          </div>
        ))}
      </div>
      {/* Important Dates Column */}
      <div style={columnStyle}>
        <div style={{ fontWeight: 700, color: '#1976d2', fontSize: '1.2rem', marginBottom: '1rem' }}>Important Dates</div>
        {data.importantDates.map((item, idx) => (
          <div key={idx} style={{ marginBottom: '1rem' }}>
            <div style={{ fontWeight: 600, fontSize: '1rem' }}>{item.title}</div>
            <div style={{ fontSize: '0.98rem', color: '#444' }}>{item.detail}</div>
          </div>
        ))}
      </div>
      {/* Conference Column */}
      <div style={columnStyle}>
        <div style={{ fontWeight: 700, color: '#1976d2', fontSize: '1.2rem', marginBottom: '1rem' }}>Conference</div>
        {data.conference.map((item, idx) => (
          <div key={idx} style={{ marginBottom: '1rem' }}>
            <div style={{ fontWeight: 600, fontSize: '1rem' }}>{item.title}</div>
            <div style={{ fontSize: '0.98rem', color: '#444' }}>{item.detail}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Notices;
