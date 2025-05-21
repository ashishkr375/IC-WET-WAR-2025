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
      background: 'linear-gradient(135deg, #0a192f 0%, #1565c0 100%)',
      padding: '4rem 1rem',
    }}
    className="w-full"
  >
    <h2 className="text-[#64b5f6] font-bold text-3xl mb-8 text-center tracking-widest uppercase drop-shadow-[0_2px_12px_#1976d2]">
      Notification
    </h2>
    <div className="flex flex-wrap gap-6 justify-center w-full max-w-screen-xl">
      {/* Notices Column */}
      <div className="flex-1 min-w-[280px] max-w-sm bg-[#0a192f] border border-[#1976d2] rounded-lg p-6 shadow-md">
        <div className="font-bold text-[#90caf9] text-xl mb-4 tracking-wide">Notices</div>
        {data.notices.map((item, idx) => (
          <div key={idx} className="mb-4">
            <div className="font-semibold text-[#e3f2fd] text-base">{item.title}</div>
            <div className="text-sm text-[#b3c7e6]">{item.detail}</div>
          </div>
        ))}
      </div>
      {/* Important Dates Column */}
      <div className="flex-1 min-w-[280px] max-w-sm bg-[#0a192f] border border-[#1976d2] rounded-lg p-6 shadow-md">
        <div className="font-bold text-[#90caf9] text-xl mb-4 tracking-wide">Important Dates</div>
        {data.importantDates.map((item, idx) => (
          <div key={idx} className="mb-4">
            <div className="font-semibold text-[#e3f2fd] text-base">{item.title}</div>
            <div className="text-sm text-[#b3c7e6]">{item.detail}</div>
          </div>
        ))}
      </div>
      {/* Conference Column */}
      <div className="flex-1 min-w-[280px] max-w-sm bg-[#0a192f] border border-[#1976d2] rounded-lg p-6 shadow-md">
        <div className="font-bold text-[#90caf9] text-xl mb-4 tracking-wide">Conference</div>
        {data.conference.map((item, idx) => (
          <div key={idx} className="mb-4">
            <div className="font-semibold text-[#e3f2fd] text-base">{item.title}</div>
            <div className="text-sm text-[#b3c7e6]">{item.detail}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Notices;
