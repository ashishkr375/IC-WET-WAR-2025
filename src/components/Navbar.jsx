import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-3 flex items-center justify-between">
      <div className="flex items-center">
        <Image src="https://www.nitp.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.00e5159e.png&w=256&q=75" alt="Logo" height={40} width={40} className="h-10 w-auto" />
      </div>
      <ul className="flex space-x-6">
        <li>
          <a href="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
        </li>
        <li>
          <a href="/registration" className="text-gray-700 hover:text-blue-600 font-medium">Registration</a>
        </li>
        <li>
          <a href="/submission" className="text-gray-700 hover:text-blue-600 font-medium">Submission</a>
        </li>
        <li>
          <a href="/key-people" className="text-gray-700 hover:text-blue-600 font-medium">Key People</a>
        </li>
        <li>
          <a href="/sponsors" className="text-gray-700 hover:text-blue-600 font-medium">Sponsors</a>
        </li>
        <li>
          <a href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;