import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gradient-to-br from-[#0a192f] to-[#1565c0] text-[#e3f2fd] py-12 px-6 border-t border-[#1976d2] shadow-inner">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold text-[#90caf9] mb-4">Social Media</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="https://twitter.com/nitpatna" target="_blank" rel="noopener noreferrer" className="hover:text-[#64b5f6] transition">
                Twitter: @nitpatna
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/nitpatnaofficial" target="_blank" rel="noopener noreferrer" className="hover:text-[#64b5f6] transition">
                Facebook: /nitpatnaofficial
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/school/national-institute-of-technology-patna/" target="_blank" rel="noopener noreferrer" className="hover:text-[#64b5f6] transition">
                LinkedIn: NIT Patna
              </a>
            </li>
            {/* Add more handles as needed */}
          </ul>
        </div>

        {/* About the Conference */}
        <div>
          <h3 className="text-xl font-semibold text-[#90caf9] mb-4">WET-WAR 2025</h3>
          <p className="text-sm leading-relaxed">
            WET-WAR 2025 is the first international conference focused on wetland ecosystems for sustainable development. It aims to address global issues like habitat loss and water scarcity through collaboration among experts, researchers, and communities.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-[#90caf9] mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-[#64b5f6] transition">Home</a>
            </li>
            <li>
              <a href="/contact-us" className="hover:text-[#64b5f6] transition">contact-us</a>
            </li>
            <li>
              <a href="mailto:icwwrsd2025@nitp.ac.in" className="hover:text-[#64b5f6] transition">Email: icwwrsd2025@nitp.ac.in</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-[#64b5f6]/30 pt-6 text-xs text-center text-[#bbdefb]">
        © {currentYear} <span className="font-semibold text-[#64b5f6]">WET-WAR 2025, NIT Patna</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
