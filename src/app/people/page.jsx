"use client";
import React from "react";

const people = [
  {
    role: "Chief Patron",
    name: "Prof. (Dr.) Pradip Kumar Jain",
    detail: "Director, NIT Patna"
  },
  {
    role: "Patron",
    name: "Prof Fulena Rajak",
    detail: "Head (ARP), NIT Patna"
  },
  {
    role: "Patron",
    name: "Prof. Anshuman Singh",
    detail: "Head (CED), NIT Patna"
  },
  {
    role: "Chairman",
    name: "Prof. (Dr) Ramakar Jha",
    detail: "CED, NIT Patna"
  },
  {
    role: "Co-Chairman",
    name: "Prof (Dr) Satyaki Sarkar",
    detail: "Head (ARP), BITM, Ranchi"
  },
  {
    role: "Secretary",
    name: "Dr. Anjali Sharma",
    detail: "ARP, NIT Patna"
  },
  {
    role: "Secretary",
    name: "Ar. Anushri Barman",
    detail: "ARP, NIT Patna"
  },
  {
    role: "Secretary",
    name: "Dr. Roshni T.",
    detail: "CED, NIT Patna"
  },
  {
    role: "Secretary",
    name: "Dr. Bhabani Shankar Das",
    detail: "CED, NIT Patna"
  },
  {
    role: "Secretary",
    name: "Dr. Joseph Tripura",
    detail: "CED, NIT Patna"
  },
  {
    role: "Secretary",
    name: "Ar. Ashutosh Kumar",
    detail: "ARP, BITM, Ranchi"
  }
];

export default function PeoplePage() {
  return (
    <div style={{ background: "#d4f3fa", minHeight: "100vh", padding: "2rem 0" }}>
      <div style={{ maxWidth: 700, margin: "0 auto", background: "#d4f3fa", borderRadius: "1.2rem", padding: "2.5rem 2rem" }}>
        <h1 style={{ color: "#294a8d", fontWeight: 700, fontSize: "2.1rem", marginBottom: "2rem", textAlign: "center" }}>
          Organising Committee
        </h1>
        <div>
          {people.map((person, idx) => (
            <div key={idx} style={{ marginBottom: "1.1rem", display: "flex", flexWrap: "wrap" }}>
              <span style={{ minWidth: 120, fontWeight: 600, color: "#294a8d" }}>
                {person.role}:
              </span>
              <span style={{
                fontWeight: person.role === "Chief Patron" || person.role === "Chairman" ? 700 : 500,
                color: person.role === "Chief Patron" || person.role === "Chairman" ? "#294a8d" : "#234",
                marginLeft: 8
              }}>
                {person.name}
              </span>
              <span style={{ marginLeft: 8, color: "#234" }}>{person.detail}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Technical Committee */}
      <div style={{ maxWidth: 700, margin: "2.5rem auto 0 auto", background: "#e3f2fd", borderRadius: "1.2rem", padding: "2.5rem 2rem" }}>
        <h2 style={{ color: "#294a8d", fontWeight: 700, fontSize: "1.7rem", marginBottom: "1.5rem", textAlign: "center" }}>
          Technical Committee
        </h2>
        <div style={{ marginBottom: "1.2rem", color: "#1565c0", fontWeight: 600, fontSize: "1.1rem" }}>National</div>
        <ul style={{ color: "#234", marginBottom: "2rem", paddingLeft: "1.2rem", fontSize: "1.05rem" }}>
          <li>Prof. C.S.P. Ojha, IIT Roorkee</li>
          <li>Prof. V. R. Desai, Director, IIT Dharwar</li>
          <li>Prof. M. M. Ghangrekar, Director, IIT, Puducherry</li>
          <li>Dr. S.K. Jain, Professor, IIT Roorkee</li>
          <li>Dr. M. K. Goel, Director, NIH, Roorkee</li>
          <li>Prof. P. Mahanta, Director, NIT Meghalaya</li>
          <li>Prof. M.K. Verma, Professor, NIT Raipur</li>
          <li>Prof. Vivekanad Singh, VC, Purnea University</li>
          <li>Prof. Deepak Khare, Professor, IIT Roorkee</li>
          <li>Dr. Y. R. S. Rao, Scientist-G, NIH Roorkee</li>
          <li>Prof. (Dr.) Pradip Kumar Jain, Director, NIT Patna</li>
          <li>Prof(Dr) V.K. Paul, Director, SPA Delhi</li>
          <li>Sri S. Chandrasekhar, IFS, Member Secretary, BSWA DoEFCC Bihar</li>
          <li>Dr Kirti Abhishek, CED, BIT Mesra</li>
          <li>Prof(Dr) Rama Umesh Pandey, DoEP, SPA Bhopal</li>
        </ul>
        <div style={{ marginBottom: "1.2rem", color: "#1565c0", fontWeight: 600, fontSize: "1.1rem" }}>International</div>
        <ul style={{ color: "#234", paddingLeft: "1.2rem", fontSize: "1.05rem" }}>
          <li>Prof. V.P. Singh, USA</li>
          <li>Prof. R. S. Govindraju, USA</li>
          <li>Prof. C. Ray, USA</li>
          <li>Prof. Venkatraman Laxmi, USA</li>
          <li>Prof. M. Menenti, The Netherlands</li>
          <li>Prof. Soontak Lee, South Korea</li>
          <li>Prof. Ashish Sharma, Australia</li>
          <li>Prof. Ronny Berndtsson, Lund University, Sweden</li>
          <li>Prof. Abolfazl MOSAEDI, Iran</li>
        </ul>
      </div>
    </div>
  );
}
