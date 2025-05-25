import React from "react";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative  bg-gradient-to-r from-sky-600 via-sky-500 to-sky-700 text-white">
      {/* Horizontal SVG wave (straight, not U-shaped) */}
      <svg
        className="absolute top-0 left-0 w-full h-8 -mt-8 text-sky-500"
        preserveAspectRatio="none"
        viewBox="0 0 1440 40"
      >
        <rect width="1440" height="40" fill="currentColor" />
      </svg>
      <div className="relative px-4 pt-12 mx-auto max-w-7xl md:px-12 lg:px-8">
        <div className="grid gap-10 row-gap-8 mb-8 md:grid-cols-2 lg:grid-cols-5">
          {/* About */}
          <div className="flex flex-col lg:col-span-1.5">
            <span className="text-2xl font-bold tracking-wide text-white uppercase mb-2">
              WET-WAR 2025
            </span>
            <p className="text-sm text-sky-50 text-center">
              WET-WAR 2025 is the first international conference focused on
              wetland ecosystems for sustainable development. It aims to address
              global challenges such as habitat loss and water scarcity by
              fostering collaboration among researchers, experts, and
              communities.
            </p>
          </div>
          {/* Call for Papers */}
          <div>
            <p className="font-semibold tracking-wide text-sky-200 uppercase mb-2">
              Call for Papers
            </p>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="/author#themes"
                  className="transition-colors duration-300 text-sky-50 hover:text-white"
                >
                  Tracks & Themes
                </a>
              </li>
              <li>
                <a
                  href="/author#dates"
                  className="transition-colors duration-300 text-sky-50 hover:text-white"
                >
                  Important Dates
                </a>
              </li>
              <li>
                <a
                  href="/author#submission"
                  className="transition-colors duration-300 text-sky-50 hover:text-white"
                >
                  Submission
                </a>
              </li>
            </ul>
          </div>
          {/* Registration */}
          <div>
            <p className="font-semibold tracking-wide text-sky-200 uppercase mb-2">
              Registration
            </p>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="/register#fees"
                  className="transition-colors duration-300 text-sky-50 hover:text-white"
                >
                  Fee Details
                </a>
              </li>
              <li>
                <a
                  href="/register#submission"
                  className="transition-colors duration-300 text-sky-50 hover:text-white"
                >
                  Submission
                </a>
              </li>
            </ul>
          </div>
          {/* Sponsors */}
          <div>
            <p className="font-semibold tracking-wide text-sky-200 uppercase mb-2">
              Sponsors
            </p>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="/call-for-sponsor"
                  className="transition-colors duration-300 text-sky-50 hover:text-white"
                >
                  Call For Sponsorships
                </a>
              </li>
              <li>
                <a
                  href="/sponsors"
                  className="transition-colors duration-300 text-sky-50 hover:text-white"
                >
                  Past Sponsors
                </a>
              </li>
            </ul>
          </div>
          {/* Committee */}
          <div>
            <p className="font-semibold tracking-wide text-sky-200 uppercase mb-2">
              Committee
            </p>
            <ul className="mt-2 flex flex-col space-y-2">
              <li>
                <a
                  href="/organizing-committee"
                  className="transition-colors duration-300 text-sky-50 hover:text-white"
                >
                  Organizing Committee
                </a>
              </li>
              <li>
                <a
                  href="/technical-committee"
                  className="transition-colors duration-300 text-sky-50 hover:text-white"
                >
                  Program Committee
                </a>
              </li>
              <li>
                <a
                  href="/advisory-committee"
                  className="transition-colors duration-300 text-sky-50 hover:text-white"
                >
                  Advisory Committee
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-between pt-5 pb-10 border-t border-sky-400 sm:flex-row">
          <p className="text-xs text-sky-50 text-center sm:text-left">
            © {currentYear}{" "}
            <span className="font-medium text-white">WET-WAR 2025, NIT Patna</span>
            . All rights reserved.
          </p>
          <div className="flex items-center mt-4 space-x-4 sm:mt-0 text-xl">
            <a
              href="#"
              className="transition-colors duration-300 text-sky-100 hover:text-white"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="transition-colors duration-300 text-sky-100 hover:text-white"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="transition-colors duration-300 text-sky-100 hover:text-white"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
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
