"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaHotel, FaBed, FaMapMarkerAlt } from "react-icons/fa";

export default function AccommodationPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-2 sm:px-6 flex flex-col">
        <div className="max-w-6xl w-full mx-auto space-y-10 mt-10">
          <h1 className="text-4xl font-bold text-center text-blue-900 mb-4 drop-shadow">
            Accommodation Details
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white shadow-lg rounded-xl p-6 space-y-4 border border-blue-100 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-blue-900">
                  🏠 Shared Hostel Accommodation (Domestic & International Students)
                </h2>
                <p className="text-gray-800 text-justify">
                  Limited shared hostel accommodation (separate for boys and girls) is available on a first-come, first-served basis for a nominal fee. Please fill out the Expression of Interest for Accommodation to avail this facility.
                </p>
              </div>
              <a
                href="https://forms.gle/your-shared-hostel-form-link"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-blue-100 text-blue-900 font-semibold px-5 py-2 rounded-lg border border-blue-200 hover:bg-blue-200 transition text-center"
              >
                Fill the Form
              </a>
            </div>
            <div className="bg-white shadow-lg rounded-xl p-6 space-y-4 border border-blue-100 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-blue-900">
                  🏡 Guest House Accommodation (Academicians & Industry Participants)
                </h2>
                <p className="text-gray-800 text-justify">
                  Limited accommodation is available at NIT Patna Guest House and BIT Guest House near Patna Airport. First-come, first-served basis with nominal fees. Interested participants must fill the Expression of Interest form.
                </p>
              </div>
              <a
                href="https://forms.gle/your-guest-house-form-link"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-blue-100 text-blue-900 font-semibold px-5 py-2 rounded-lg border border-blue-200 hover:bg-blue-200 transition text-center"
              >
                Fill the Form
              </a>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6 border border-blue-100">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">
              🏨 Nearby Hotels (For Reference)
            </h2>

            <div className="space-y-6">
              <section>
                <h3 className="text-xl font-bold text-blue-700 mb-2">Premium Hotels (3 to 5-star)</h3>
                <ul className="space-y-3">
                  <li className="border border-blue-100 p-4 rounded-lg shadow-sm hover:shadow-md transition bg-blue-50/40">
                    <p className="font-semibold text-blue-900">Hotel Maurya Patna</p>
                    <p className="text-sm text-gray-800 text-justify">
                      📍 Fraser Road (~2.5 km from NIT) — 5-star luxury stay.
                      <br /> 🌐 <a href="https://hotelmaurya.com" target="_blank" className="text-blue-600 underline">hotelmaurya.com</a>
                    </p>
                  </li>
                  <li className="border border-blue-100 p-4 rounded-lg shadow-sm hover:shadow-md transition bg-blue-50/40">
                    <p className="font-semibold text-blue-900">Lemon Tree Premier Patna</p>
                    <p className="text-sm text-gray-800 text-justify">
                      📍 Exhibition Road (~3 km from NIT) — 4-star modern business hotel.
                      <br /> 🌐 <a href="https://www.lemontreehotels.com" target="_blank" className="text-blue-600 underline">lemontreehotels.com</a>
                    </p>
                  </li>
                  <li className="border border-blue-100 p-4 rounded-lg shadow-sm hover:shadow-md transition bg-blue-50/40">
                    <p className="font-semibold text-blue-900">Hotel Gargee Grand</p>
                    <p className="text-sm text-gray-800 text-justify">
                      📍 Gandhi Maidan (~2 km from NIT) — 4-star hotel with fine dining.
                      <br /> 🌐 <a href="https://www.gargeehotels.com" target="_blank" className="text-blue-600 underline">gargeehotels.com</a>
                    </p>
                  </li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-bold text-blue-700 mb-2">Mid-Range & Budget Hotels</h3>
                <ul className="space-y-3">
                  {[
                    ["Hotel Patliputra Nirvana", "Fraser Road (~3 km)", ""],
                    ["Hotel Chanakya", "Bir Chand Patel Path (~4.5 km)", ""],
                    ["Hotel Republic", "Exhibition Road (~3 km)", ""],
                    ["Hotel Samrat International", "Fraser Road (~3 km)", ""],
                    ["Hotel Amalfi Grand", "Near R Block (~4.5 km)", ""],
                  ].map(([name, location], idx) => (
                    <li
                      key={idx}
                      className="border border-blue-100 p-4 rounded-lg shadow-sm hover:shadow-md transition bg-blue-50/40"
                    >
                      <p className="font-semibold text-blue-900">{name}</p>
                      <p className="text-sm text-gray-800 text-justify">📍 {location}</p>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-bold text-blue-700 mb-2">Budget & Guesthouses</h3>
                <ul className="space-y-3">
                  <li className="border border-blue-100 p-4 rounded-lg shadow-sm hover:shadow-md transition bg-blue-50/40">
                    <p className="font-semibold text-blue-900">Hotel City Centre</p>
                    <p className="text-sm text-gray-800 text-justify">📍 Patna Junction Area (~3 km)</p>
                  </li>
                  <li className="border border-blue-100 p-4 rounded-lg shadow-sm hover:shadow-md transition bg-blue-50/40">
                    <p className="font-semibold text-blue-900">OYO Rooms & FabHotels</p>
                    <p className="text-sm text-gray-800 text-justify">
                      📍 Various locations near Ashok Rajpath, Gandhi Maidan, and Exhibition Road.
                      <br /> Online booking recommended.
                    </p>
                  </li>
                </ul>
              </section>
            </div>

            <div className="mt-6 text-sm text-blue-900 border-t pt-4 text-justify">
              <strong>Note:</strong> The organisers or NIT Patna will not be responsible for any hotel bookings or stay-related concerns. Participants must verify suitability and availability themselves.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}