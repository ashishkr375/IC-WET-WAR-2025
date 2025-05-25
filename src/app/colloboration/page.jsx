import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function CollaborationPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-[#e3f2fd] via-[#b3e0fc] to-[#e1f5fe] py-12 px-2 sm:px-6 flex flex-col">
        <div className="max-w-4xl w-full mx-auto bg-sky-50/80 rounded-2xl shadow-2xl p-6 sm:p-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-sky-800 mb-8 text-center tracking-tight">
            Technical Collaboration
          </h1>
          {/* BIT Mesra Section */}
          <section className="mb-8 flex flex-col sm:flex-row items-start gap-5">
            <div className="flex-shrink-0 flex items-center justify-center mb-4 sm:mb-0">
              <Image
                src="/bitmlogo.png"
                alt="BIT Mesra Logo"
                width={70}
                height={70}
                className="rounded-lg shadow border border-sky-200 bg-white p-2"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-sky-700 mb-2">
                Department of Architecture and Planning, BIT Mesra
              </h2>
              <p className="text-sky-900 mb-2 text-justify">
                BIT Mesra is one of the oldest Institute of Technology in
                independent India, founded in 1955 by the visionary industrialist
                and philanthropist Mr. B.M. Birla. In more than six decades of
                its glorious existence, it has emerged as one of the topmost
                private Engineering Institution oriented toward modern innovations
                and applications.
              </p>
              <p className="text-sky-900 mb-2 text-justify">
                Department of Architecture & Planning, BIT Mesra, a leading center
                for research and teaching in architecture, urban design, and
                sustainable design, is one of the top-ranking Architecture and
                Planning Department in the country. The department is noted for
                its meticulous teaching leading to fundamental, applied research
                and collaboration with leading experts from practice and industry.
                Since its inception in 1993, the Department has made a substantial
                contribution in the national and international arena by rendering
                academic and professional services.
              </p>
            </div>
          </section>
          {/* Bihar State Wetland Authority Section */}
          <section className="mb-8 flex flex-col sm:flex-row items-start gap-5">
            <div className="flex-shrink-0 flex items-center justify-center mb-4 sm:mb-0">
              <Image
                src="/BSWA.png"
                alt="Bihar State Wetland Authority Logo"
                width={70}
                height={70}
                className="rounded-lg shadow border border-sky-200 bg-white p-2"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-sky-700 mb-2">
                Bihar State Wetland Authority, DOEF CC, Bihar
              </h2>
              <p className="text-sky-900 mb-2 text-justify">
                Ministry of Environment, Forest & Climate Change (MoEFCC), has
                issued the Wetlands (Conservation and Management) Rules 2017 for
                the integrated management of wetlands. The Government of Bihar has
                constituted the Bihar Wetland Development Authority (BWDA) with
                Environment, Forest and climate change, Minister as the Chairman,
                Development commissioner to Government as the Vice Chair Person
                and Chief Conservator of Forest (Wetland & Climate Change) as the
                Member Secretary.
              </p>
              <h3 className="text-lg font-semibold text-sky-800 mt-4 mb-2">
                The following works will be performed by the State Wetland
                Authority:
              </h3>
              <ul className="list-disc ml-6 text-sky-900 space-y-1">
                <li>
                  To formulate policy for the conservation and sustainable
                  management of wetlands of the State and to advise the State
                  Government for this purpose.
                </li>
                <li>
                  To identify the wetlands of the state and recommend them to be
                  identified as wetlands of international importance (Ramsar site),
                  wetlands of international importance (under the National
                  Aquatic Ecosystem Conservation Programme).
                </li>
                <li>
                  To perform the functions assigned to the authority under the
                  Wetlands (Conservation and Management) Rules, 2010 or the rules
                  relating to wetlands that replace these rules.
                </li>
                <li>
                  Reviewing and recommending the documents submitted for
                  identification and classification of wetlands within the
                  jurisdiction of various departments in accordance with the
                  criteria specified by the State Government.
                </li>
                <li>
                  Resolving disputes regarding the boundary of wetlands and
                  multilateral rights to the catchment area.
                </li>
                <li>
                  Cooperation with other state, national and international
                  organizations for the conservation and sustainable management of
                  wetlands.
                </li>
                <li>
                  Other works provided under the Wetland (Conservation and
                  Management) Rules, 2017.
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
