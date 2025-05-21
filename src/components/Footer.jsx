import React from "react";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "linear-gradient(135deg, #b3e0fc 0%, #5ac8fa 100%)",
        color: "#0d223a",
        borderTop: "1.5px solid #4fc3f7",
        boxShadow: "0 -2px 16px #b3e0fc44",
      }}
      className="w-full py-12 px-6"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Social Media */}
        <div>
          <h3 style={{ color: "#0277bd" }} className="text-xl font-semibold mb-4">
            Social Media
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="https://twitter.com/nitpatna"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0288d1] transition flex items-center gap-2"
                style={{ color: "#0d223a" }}
              >
                <FaTwitter className="inline-block text-lg" style={{ color: "#0288d1" }} />
                @nitpatna
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/nitpatnaofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0288d1] transition flex items-center gap-2"
                style={{ color: "#0d223a" }}
              >
                <FaFacebook className="inline-block text-lg" style={{ color: "#0288d1" }} />
                /nitpatnaofficial
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/school/national-institute-of-technology-patna/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0288d1] transition flex items-center gap-2"
                style={{ color: "#0d223a" }}
              >
                <FaLinkedin className="inline-block text-lg" style={{ color: "#0288d1" }} />
                NIT Patna
              </a>
            </li>
          </ul>
        </div>

        {/* About the Conference */}
        <div>
          <h3 style={{ color: "#0277bd" }} className="text-xl font-semibold mb-4">
            WET-WAR 2025
          </h3>
          <p style={{ color: "#174366" }} className="text-sm leading-relaxed">
            WET-WAR 2025 is the first international conference focused on wetland ecosystems for sustainable development. It aims to address global issues like habitat loss and water scarcity through collaboration among experts, researchers, and communities.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 style={{ color: "#0277bd" }} className="text-xl font-semibold mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-[#0288d1] transition" style={{ color: "#0d223a" }}>
                Home
              </a>
            </li>
            <li>
              <a href="/contact-us" className="hover:text-[#0288d1] transition" style={{ color: "#0d223a" }}>
                contact-us
              </a>
            </li>
            <li>
              <a href="mailto:icwwrsd2025@nitp.ac.in" className="hover:text-[#0288d1] transition" style={{ color: "#0d223a" }}>
                Email: icwwrsd2025@nitp.ac.in
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          borderTop: "1px solid #4fc3f7",
          color: "#174366",
        }}
        className="mt-10 pt-6 text-xs text-center"
      >
        © {currentYear}{" "}
        <span style={{ color: "#0288d1", fontWeight: 600 }}>
          WET-WAR 2025, NIT Patna
        </span>
        . All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
