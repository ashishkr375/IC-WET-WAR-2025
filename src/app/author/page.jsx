"use client"
import React from 'react';

const registrationFees = [
  { label: 'Students/Reasearch scholars', value: 'Rs. 5000 / USD 100' },
  { label: 'Acaedmician/Industry Professionals', value: 'Rs. 9000 / USD 200' },
  { label: 'Spouse', value: 'Rs. 4500 / USD 100' }
];

const sponsors = [
  { label: 'Bronze', value: '25000' },
  { label: 'Silver', value: '50000' },
  { label: 'Gold', value: '100000' },
  { label: 'Diamond', value: '200000 and above' }
];

const majorThemes = [
  'Wetlands and Sustainable Development',
  'Water resources and sustainable development',
  'Climate change impacts on wetlands and water resources',
  'Water quality monitoring, modelling and pollution remediation techniques',
  'Integrated management plan for wetlands',
  'Modelling of wetlands and water resources using AI, ML, and other soft computing techniques.',
  'Integrated Water Resources Management (IWRM) for Sustainable Development',
  'Wetlands as Nature Based Solutions',
  'Wetlands and water resources in Architecture and Planning'
];

const importantDates = [
  { label: 'Abstract submission:', value: '30th June 2025', highlight: true },
  { label: 'Abstract acceptance:', value: '15th July 2025' },
  { label: 'Full length paper:', value: '30th August 2025' },
  { label: 'Acceptance/Rejection:', value: '15th September 2025', highlight: true },
  { label: 'Final submission:', value: '30th September 2025' },
  { label: 'Early Birds Registration [Avails 10% discount]:', value: '15th October, 2025', highlight: true },
  { label: 'Registration(Full pay):', value: '15th November 2025' }
];

const page = () => {
  return (
    <div style={{ maxWidth: 900, margin: '2rem auto', padding: '2rem', background: '#f7fbff', borderRadius: '1.5rem', boxShadow: '0 4px 24px rgba(21,101,192,0.08)' }}>
      {/* Conference Introduction */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h1 style={{ color: '#1565c0', fontWeight: 700, fontSize: '2rem', marginBottom: '1rem' }}>
          International Conference WET-WAR 2025
        </h1>
        <p style={{ color: '#234', fontSize: '1.1rem', lineHeight: 1.7 }}>
          Wetland ecosystems and water resources are among the most productive and biodiversity-rich environments on Earth. Organizing the first-ever conference on wetland ecosystems for sustainable development is a significant step in addressing both local and global environmental challenges such as habitat loss, climate change, and water scarcity. This conference will provide a unique platform for experts, policymakers, researchers, and local communities to come together and share knowledge, collaborate on conservation strategies, and develop solutions for safeguarding wetlands and water resources.
        </p>
      </section>

      {/* Major Themes */}
      <section>
        <h2 style={{ color: '#b71c1c', fontWeight: 700, fontSize: '1.5rem', marginBottom: '1rem' }}>
          Major Themes
        </h2>
        <ul style={{ color: '#234', fontSize: '1.08rem', lineHeight: 1.7, paddingLeft: '1.2rem' }}>
          {majorThemes.map((theme, idx) => (
            <li key={idx} style={{ marginBottom: '0.5rem' }}>{theme}</li>
          ))}
        </ul>
      </section>

      {/* Important Dates */}
      <section style={{ margin: '2.5rem 0' }}>
        <h2 style={{ color: '#1565c0', fontWeight: 700, fontSize: '2rem', marginBottom: '1.2rem', borderBottom: '3px solid #1565c0', display: 'inline-block', paddingBottom: '0.2rem' }}>
          Important Dates
        </h2>
        <table style={{ width: '100%', fontSize: '1.15rem', marginTop: '1rem', borderCollapse: 'separate', borderSpacing: 0 }}>
          <tbody>
            {importantDates.map((item, idx) => (
              <tr key={idx}>
                <td style={{
                  color: item.highlight ? '#b71c1c' : '#1565c0',
                  fontWeight: item.highlight ? 700 : 500,
                  padding: '0.4rem 0.5rem 0.4rem 0',
                  fontFamily: 'inherit'
                }}>
                  {item.label}
                </td>
                <td style={{
                  color: '#1565c0',
                  fontWeight: 500,
                  padding: '0.4rem 0.5rem',
                  fontFamily: 'inherit'
                }}>
                  {item.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Buttons for submissions */}
      <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginBottom: '2.5rem' }}>
        <button
          style={{
            background: '#1565c0',
            color: '#fff',
            border: 'none',
            borderRadius: '0.5rem',
            padding: '0.75rem 2rem',
            fontSize: '1.1rem',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'background 0.2s'
          }}
          onClick={() => window.open('#', '_blank')}
        >
          Abstract Submission
        </button>
        <button
          style={{
            background: '#b71c1c',
            color: '#fff',
            border: 'none',
            borderRadius: '0.5rem',
            padding: '0.75rem 2rem',
            fontSize: '1.1rem',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'background 0.2s'
          }}
          onClick={() => window.open('#', '_blank')}
        >
          Paper Submission
        </button>
      </div>

      {/* Registration Fee Details */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ color: '#b71c1c', fontWeight: 700, fontSize: '1.5rem', marginBottom: '1rem' }}>
          Registration Fee (Free fooding + Inclusive GST (18%))
        </h2>
        <table style={{ width: '100%', marginBottom: '1rem', borderCollapse: 'collapse' }}>
          <tbody>
            {registrationFees.map((fee, idx) => (
              <tr key={idx}>
                <td style={{ color: '#234', fontWeight: 500, padding: '0.5rem 0' }}>{fee.label}</td>
                <td style={{ color: '#234', textAlign: 'right', padding: '0.5rem 0' }}>{fee.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ fontWeight: 600, color: '#234', marginTop: '1rem', marginBottom: '0.5rem' }}>Sponsors:</div>
        <div style={{ color: '#234', fontSize: '1rem' }}>
          {sponsors.map((s, idx) => (
            <span key={idx}>
              {s.value} ({s.label}){idx < sponsors.length - 1 ? ', ' : ''}
            </span>
          ))}
        </div>
      </section>
      <div style={{ textAlign: 'center', color: '#1565c0', fontSize: '1.08rem', margin: '2rem 0 0 0', fontWeight: 500 }}>
        For any query or issues, please contact at <a href="mailto:icwwrsd2025@nitp.ac.in" style={{ color: '#b71c1c', textDecoration: 'underline' }}>icwwrsd2025@nitp.ac.in</a>
      </div>
    </div>
  );
};

export default page;