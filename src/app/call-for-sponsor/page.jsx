import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';

const sponsorships = [
  {
    tier: "🥉 Bronze Sponsor",
    price: "₹50,000",
    delegates: "2 delegates",
  },
  {
    tier: "🥈 Silver Sponsor",
    price: "₹1,00,000",
    delegates: "4 delegates",
  },
  {
    tier: "🥇 Gold Sponsor",
    price: "₹2,00,000",
    delegates: "8 delegates",
  },
  {
    tier: "💎 Diamond Sponsor",
    price: "₹2,50,000+",
    delegates: "10 delegates",
  },
  {
    tier: "🏆 Title Sponsor",
    price: "₹5,00,000",
    delegates: "15 delegates + exclusive title branding rights",
  },
];

const gridBenefits = [
  "Title Naming Rights",
  "Keynote Address Slot",
  "Plenary Speaker Slot",
  "Panel Discussion Slot",
  "Naming on Selected Awards",
  "Naming Rights for Conference Venues (coffee break, lunch, dinner etc.)",
  "Sponsored Track Sessions/Panel Discussions/Workshops/Networking Arena",
  "Exhibit Booth",
  "Branding on Giveaways",
  "Pre-Conference Communication",
  "Free Attendee Registrations",
  "Logo on Conference Website and Banner",
  "Logo on Event Materials",
  "Social Media Recognition",
  "Verbal Recognition at Opening",
];

const gridData = [
  // Title, Diamond, Gold, Silver, Bronze
  ["✓", "✕", "✕", "✕", "✕"], 
  ["✓", "✕", "✕", "✕", "✕"], 
  ["✕", "✓", "✓", "✕", "✕"], // Plenary Speaker Slot
  ["✕", "✕", "✕", "✓", "✕"],
  ["✓", "✓", "✓", "✕", "✕"], // Naming on Selected Awards
  ["✕", "✓", "✕", "✕", "✕"], // Naming Rights for Conference Venues
  ["✓", "✓", "✕", "✕", "✕"], // Sponsored Track Sessions/...
  ["✓ (Premium)", "✓ (Premium)", "✓ (Premium)", "✓ (Regular)", "✕"], // Exhibit Booth
  ["✓", "✓", "✓", "✓", "✕"], // Branding on Giveaways
  ["✓", "✓", "✓", "✓", "✓"], // Pre-Conference Communication
  ["✓", "✓", "✓", "✓", "✓"], // Free Attendee Registrations
  ["✓", "✓", "✓", "✓", "✓"], // Logo on Conference Website and Banner
  ["✓", "✓", "✓", "✕", "✕"], // Logo on Event Materials
  ["✓", "✓", "✓", "✓", "✓"], // Social Media Recognition
  ["✓", "✓", "✓", "✓", "✓"], // Verbal Recognition at Opening
];

const standaloneSponsorships = [
  {
    name: "Delegate Food Branding",
    price: "₹2,00,000",
    benefit: "Branding on Delegate Food",
  },
  {
    name: "Logistics Branding",
    price: "₹1,50,000",
    benefit: "Branding on transportation, signage, registration desks, volunteer T-shirts, etc.",
  },
  {
    name: "Naming on Awards",
    price: "₹1,20,000",
    benefit: "Get your name showcased on selected awards",
  },
  {
    name: "Delegate Kits Branding",
    price: "₹1,00,000",
    benefit: "Branding on delegate kits",
  },
  {
    name: "Stationery Branding",
    price: "₹1,00,000",
    benefit: "Branding on stationery",
  },
  {
    name: "Lanyards Branding",
    price: "₹50,000",
    benefit: "Branding on lanyards",
  },
];

const logisticsDetails = [
  "Transportation: Branding on buses, shuttles, or other transportation provided for attendees.",
  "Signage and Directional Boards: Branding on signs, maps, and boards used to guide attendees around the venue.",
  "Registration Desks: Branding at the registration and check-in areas.",
  "Badges and Name Tags: Branding on the badges and name tags worn by attendees.",
  "Volunteer T-Shirts: Branding on the t-shirts worn by event staff and volunteers.",
];

const Page = () => {
  return (
    <>
    <Navbar/>
    <div className="bg-gradient-to-br from-[#e3f2fd] via-[#b3e0fc] to-[#e1f5fe] w-full  py-12 px-2 sm:px-6">
      <div className="w-full mx-auto bg-sky-50/80 rounded-2xl shadow-2xl p-6 sm:p-10">
        <h1 className="text-2xl md:text-3xl font-semibold flex items-center border-l-4 border-blue-300 text-blue-400 mb-4 pl-2">
          <span className="bg-blue-100/60 px-2 py-1 rounded-md inline-block">CALL FOR SPONSORS</span>
        </h1>
        <p className="text-lg text-sky-900 mb-6 text-center font-serif">
          National Institute of Technology Patna (NIT Patna) is proud to announce the International Conference on Wetlands and Water Resources for Sustainable Development, scheduled to be held from <span className="font-bold text-sky-700">29th to 31st December 2025</span> at the NIT Patna campus.
        </p>
        <p className="text-base text-sky-800 mb-4 text-center">
          This landmark event is being jointly organized by the Department of Civil Engineering and the Department of Architecture and Planning. The conference aims to bring together researchers, policymakers, industry leaders, and environmental advocates to discuss innovative strategies and collaborative solutions for conserving wetland ecosystems and managing water resources sustainably.
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold flex items-center border-l-4 border-blue-300 text-blue-400 mt-8 mb-3 pl-2">
          <span className="bg-blue-100/60 px-2 py-1 rounded-md inline-block">SPONSORSHIP OPPORTUNITIES</span>
        </h2>
        <p className="text-base text-sky-800 mb-6">
          We warmly invite organizations and institutions to support this high-impact conference. Your sponsorship will contribute meaningfully to advancing the global sustainable development and wetlands conservation.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {sponsorships.map((s, idx) => (
            <div key={idx} className="bg-sky-50 border border-sky-200 rounded-xl shadow p-5 flex flex-col items-center">
              <div className="text-2xl font-bold mb-2 text-sky-700">{s.tier}</div>
              <div className="text-lg font-semibold text-sky-800 mb-1">{s.price}</div>
              <div className="text-sm text-sky-700">{s.delegates}</div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl md:text-3xl font-semibold flex items-center border-l-4 border-blue-300 text-blue-400 mt-10 mb-4 pl-2">
          <span className="bg-blue-100/60 px-2 py-1 rounded-md inline-block">Sponsorship Opportunities Grid</span>
        </h2>
        <div className="overflow-x-auto rounded-lg border border-sky-200 bg-white shadow mb-10">
          <table className="min-w-[700px] w-full text-sm text-sky-900">
            <thead>
              <tr className="bg-sky-100 text-sky-800">
                <th className="py-2 px-3 font-bold">Sponsorship Option</th>
                <th className="py-2 px-3 font-bold">Title Sponsor</th>
                <th className="py-2 px-3 font-bold">Diamond Sponsor</th>
                <th className="py-2 px-3 font-bold">Gold Sponsor</th>
                <th className="py-2 px-3 font-bold">Silver Sponsor</th>
                <th className="py-2 px-3 font-bold">Bronze Sponsor</th>
              </tr>
            </thead>
            <tbody>
              {/* Price Row */}
              <tr className="bg-sky-50">
                <td className="py-2 px-3 font-semibold">Price (in Rupees Lakhs)</td>
                <td className="py-2 px-18">5.00</td>
                <td className="py-2 px-18">2.50</td>
                <td className="py-2 px-18">2.00</td>
                <td className="py-2 px-18">1.00</td>
                <td className="py-2 px-18">0.50</td>
              </tr>
              {/* Benefits */}
              {gridBenefits.map((benefit, i) => (
                <tr key={benefit} className={i % 2 === 0 ? "bg-white" : "bg-sky-50"}>
                  <td className="py-2 px-3">{benefit}</td>
                  {gridData[i].map((cell, j) => (
                    <td key={j} className="py-2 px-3 text-center">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl md:text-3xl font-semibold flex items-center border-l-4 border-blue-300 text-blue-400 mt-10 mb-4 pl-2">
          <span className="bg-blue-100/60 px-2 py-1 rounded-md inline-block">Standalone Sponsorship Opportunities</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          {standaloneSponsorships.map((item, idx) => (
            <div key={idx} className="bg-white border border-sky-200 rounded-xl shadow p-5">
              <div className="text-lg font-bold text-sky-700 mb-1">{item.name}</div>
              <div className="text-base font-semibold text-sky-800 mb-1">{item.price}</div>
              <div className="text-sm text-sky-700">{item.benefit}</div>
            </div>
          ))}
        </div>
        <div className="mb-8">
          <h3 className="text-xl md:text-2xl font-semibold flex items-center border-l-4 border-blue-300 text-blue-400 mb-2 pl-2">
            <span className="bg-blue-100/60 px-2 py-1 rounded-md inline-block">What is Logistics Branding?</span>
          </h3>
          <ul className="list-disc ml-6 text-sky-800 space-y-1">
            {logisticsDetails.map((d, idx) => (
              <li key={idx}>{d}</li>
            ))}
          </ul>
          <p className="text-xs text-sky-600 mt-2">All benefits inherently include visibility on conference website.</p>
        </div>
        <div className="text-center mt-10">
          <p className="text-base text-sky-800 mb-2">
            For more information on sponsorship opportunities and to become a part of this prestigious event, please <a href="/contact-us" className="text-sky-700 underline hover:text-sky-900">contact our team here</a>.
          </p>
          <p className="text-base text-sky-800 font-semibold">
            We look forward to partnering with you to make this international conference on sustainable development and wetlands conservation a remarkable success.
          </p>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
  
};

export default Page;