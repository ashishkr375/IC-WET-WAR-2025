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
  <section className="w-full min-h-[80vh] flex flex-col items-center justify-center bg-[#19aaff] py-16 px-4">
    <h2 className="text-white font-bold text-3xl sm:text-4xl mb-8 text-center tracking-widest uppercase drop-shadow-[0_2px_12px_#fff]">
      Notification
    </h2>
    <div className="flex flex-wrap gap-6 justify-center w-full max-w-screen-xl">
      {/* Notices Column */}
      <div className="relative bg-white/80 border border-white rounded-xl p-6 shadow-lg min-w-[260px] max-w-xs flex-1 flex flex-col items-start">
        <div className="w-full flex justify-center mb-4">
          <span className="font-bold text-[#19aaff] text-lg tracking-wide uppercase bg-white/80 px-4 py-1 rounded shadow drop-shadow-[0_2px_8px_#19aaff]">
            Notices
          </span>
        </div>
        {data.notices.map((item, idx) => (
          <div
            key={idx}
            className="mb-4 rounded-lg transition-shadow hover:shadow-[0_4px_24px_0_rgba(25,170,255,0.25)] p-2"
          >
            <div className="font-semibold text-[#174366] text-base">{item.title}</div>
            <div className="text-sm text-[#0d223a] text-justify">{item.detail}</div>
          </div>
        ))}
        {/* Box shadow below text */}
        <div className="absolute left-4 right-4 bottom-2 h-4 rounded-xl shadow-[0_8px_24px_0_rgba(25,170,255,0.18)] -z-10"></div>
      </div>
      {/* Gap Box */}
      <div className="hidden lg:block w-8"></div>
      {/* Important Dates Column */}
      <div className="relative bg-white/80 border border-white rounded-xl p-6 shadow-lg min-w-[260px] max-w-xs flex-1 flex flex-col items-start">
        <div className="w-full flex justify-center mb-4">
          <span className="font-bold text-[#19aaff] text-lg tracking-wide uppercase bg-white/80 px-4 py-1 rounded shadow drop-shadow-[0_2px_8px_#19aaff]">
            Important Dates
          </span>
        </div>
        {data.importantDates.map((item, idx) => (
          <div
            key={idx}
            className="mb-4 rounded-lg transition-shadow hover:shadow-[0_4px_24px_0_rgba(25,170,255,0.25)] p-2"
          >
            <div className="font-semibold text-[#174366] text-base">{item.title}</div>
            <div className="text-sm text-[#0d223a] text-justify">{item.detail}</div>
          </div>
        ))}
        {/* Box shadow below text */}
        <div className="absolute left-4 right-4 bottom-2 h-4 rounded-xl shadow-[0_8px_24px_0_rgba(25,170,255,0.18)] -z-10"></div>
      </div>
      {/* Gap Box */}
      <div className="hidden lg:block w-8"></div>
      {/* Conference Column */}
      <div className="relative bg-white/80 border border-white rounded-xl p-6 shadow-lg min-w-[260px] max-w-xs flex-1 flex flex-col items-start">
        <div className="w-full flex justify-center mb-4">
          <span className="font-bold text-[#19aaff] text-lg tracking-wide uppercase bg-white/80 px-4 py-1 rounded shadow drop-shadow-[0_2px_8px_#19aaff]">
            Conference
          </span>
        </div>
        {data.conference.map((item, idx) => (
          <div
            key={idx}
            className="mb-4 rounded-lg transition-shadow hover:shadow-[0_4px_24px_0_rgba(25,170,255,0.25)] p-2"
          >
            <div className="font-semibold text-[#174366] text-base">{item.title}</div>
            <div className="text-sm text-[#0d223a] text-justify">{item.detail}</div>
          </div>
        ))}
        {/* Box shadow below text */}
        <div className="absolute left-4 right-4 bottom-2 h-4 rounded-xl shadow-[0_8px_24px_0_rgba(25,170,255,0.18)] -z-10"></div>
      </div>
    </div>
  </section>
);

export default Notices;
