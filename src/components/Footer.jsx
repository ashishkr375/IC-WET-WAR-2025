import React from "react";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-sky-100 text-sky-800 w-full px-6 py-14 relative z-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* About */}
        <div className="font-sans">
          <h3 className="text-2xl font-semibold text-sky-900 mb-4">WET-WAR 2025</h3>
          <p className="text-sm leading-relaxed text-sky-700">
            WET-WAR 2025 is the first international conference focused on wetland ecosystems for sustainable development. It aims to address global challenges such as habitat loss and water scarcity by fostering collaboration among researchers, experts, and communities.
          </p>
        </div>

        {/* Navigation */}
        <div className="grid grid-cols-2 gap-8 text-sm">
          <div className="font-serif">
            <h4 className="font-medium text-sky-900 mb-3">Call for Papers</h4>
            <ul className="space-y-1">
              <li><a href="/author#themes" className="hover:text-sky-600 transition">Tracks & Themes</a></li>
              <li><a href="/author#dates" className="hover:text-sky-600 transition">Important Dates</a></li>
              <li><a href="/author#submission" className="hover:text-sky-600 transition">Submission</a></li>
            </ul>

            <h4 className="font-medium text-sky-900 mt-5 mb-3">Registration</h4>
            <ul className="space-y-1">
              <li><a href="/register#fees" className="hover:text-sky-600 transition">Fee Details</a></li>
              <li><a href="/register#submission" className="hover:text-sky-600 transition">Submission</a></li>
            </ul>
          </div>

          <div className="font-mono">
            <h4 className="font-medium text-sky-900 mb-3">Sponsors</h4>
            <ul className="space-y-1">
              <li><a href="/call-for-sponsor" className="hover:text-sky-600 transition">Call For Sponsorships</a></li>
              <li><a href="/sponsors" className="hover:text-sky-600 transition">Past Sponsors</a></li>
            </ul>

            <h4 className="font-medium text-sky-900 mt-5 mb-3">Committee</h4>
            <ul className="space-y-1">
              <li><a href="/organizing-committee" className="hover:text-sky-600 transition">Organizing Committee</a></li>
              <li><a href="/technical-committee" className="hover:text-sky-600 transition">Program Committee</a></li>
              <li><a href="/advisory-committee" className="hover:text-sky-600 transition">Advisory Committee</a></li>
            </ul>
          </div>
        </div>

        {/* Contact */}
        <div className="font-sans">
          <h3 className="text-2xl font-semibold text-sky-900 mb-4 ml-10">Contact</h3>
          <ul className="space-y-2 text-sm ml-10">
            <li>
              <a href="mailto:icwwrsd2025@nitp.ac.in" className="hover:text-sky-600 transition">
                icwwrsd2025@nitp.ac.in
              </a>
            </li>
            <li><a href="/contact-us" className="hover:text-sky-600 transition">Contact Us</a></li>
            <li><a href="/" className="hover:text-sky-600 transition">Home</a></li>
          </ul>

          <div className="flex items-center gap-5 mt-6 text-xl text-sky-700 ml-10">
            <a href="#" aria-label="Twitter" className="hover:text-sky-600 transition">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-sky-600 transition">
              <FaFacebook />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-sky-600 transition">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="border-t border-sky-200 mt-12 pt-6 text-xs text-center text-sky-600 font-light">
        © {currentYear} <span className="font-medium text-sky-800">WET-WAR 2025, NIT Patna</span>. All rights reserved.
      </div>

      {/* Hide any image right after footer */}
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
