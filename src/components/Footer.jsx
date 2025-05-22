import React from "react";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

// Five font families to use
const fontFamilies = [
  "font-sans",
  "font-serif",
  "font-mono",
  "font-extrabold",
  "font-light"
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-sky-200 text-sky-800  w-full px-6 py-12 relative z-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* About */}
        <div className={`${fontFamilies[0]}`}>
          <h3 className="text-2xl font-bold text-sky-700 mb-4">WET-WAR 2025</h3>
          <p className="text-sm leading-relaxed text-sky-800 mb-6">
            WET-WAR 2025 is the first international conference focused on wetland ecosystems for sustainable development. It addresses global challenges like habitat loss and water scarcity by connecting experts, researchers, and communities.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-2 gap-6">
          <div className={`${fontFamilies[1]}`}>
            <h4 className="font-semibold text-sky-800 mb-2">Call for Papers</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="/author#themes" className="hover:text-sky-500">Tracks & Themes</a></li>
              <li><a href="/author#dates" className="hover:text-sky-500">Important Dates</a></li>
              <li><a href="/author#submission" className="hover:text-sky-500">Submission</a></li>
            </ul>
            <h4 className="font-semibold text-sky-800 mt-4 mb-2">Registration</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="/register#fees" className="hover:text-sky-200">Fee Details</a></li>
              <li><a href="/register#submission" className="hover:text-sky-500">Submission</a></li>
            </ul>
          </div>

          <div className={`${fontFamilies[2]}`}>
            <h4 className="font-semibold text-sky-800 mb-2">Sponsors</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="/call-for-sponsor" className="hover:text-sky-300">Call For Sponsorships</a></li>
              <li><a href="/sponsors" className="hover:text-sky-500">Past Sponsors</a></li>
            </ul>
            <h4 className="font-semibold text-sky-800 mt-4 mb-2">Committee</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="/organizing-committee" className="hover:text-sky-500">Organizing Committee</a></li>
              <li><a href="/technical-committee" className="hover:text-sky-500">Program Committee</a></li>
              <li><a href="/advisory-committee" className="hover:text-sky-500">Advisory Committee</a></li>
            </ul>
          </div>
        </div>

        {/* Contact + Social */}
        <div className={`${fontFamilies[3]}`}>
          <h3 className="text-2xl font-bold text-sky-700 mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="mailto:icwwrsd2025@nitp.ac.in" className="hover:text-sky-500">
                Email: icwwrsd2025@nitp.ac.in
              </a>
            </li>
            <li>
              <a href="/contact-us" className="hover:text-sky-500">Contact Us</a>
            </li>
            <li>
              <a href="/" className="hover:text-sky-500">Home</a>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-6 text-xl text-sky-700">
            <a href="#" aria-label="Twitter" className="hover:text-sky-500">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-sky-500">
              <FaFacebook />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-sky-500">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className={`border-t border-sky-200 mt-10 pt-6 text-xs text-center text-sky-700 ${fontFamilies[4]}`}>
        © {currentYear} <span className="font-semibold text-sky-600">WET-WAR 2025, NIT Patna</span>. All rights reserved.
      </div>

      {/* Make any image below footer invisible */}
      <style>{`
        footer + img, footer + div > img {
          display: none !important;
          opacity: 0 !important;
          visibility: hidden !important;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
