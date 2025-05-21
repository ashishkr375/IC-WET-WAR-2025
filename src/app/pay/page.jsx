"use client";
import React from "react";

const registrationFees = [
  { label: "Students", value: "Rs. 5000 / USD 100" },
  { label: "Faculties/Officers", value: "Rs. 9000 / USD 200" },
  { label: "Spouse", value: "Rs. 4500 / USD 100" }
];

const sponsors = [
  { label: "Bronze", value: "25000" },
  { label: "Silver", value: "50000" },
  { label: "Gold", value: "100000" },
  { label: "Diamond", value: "200000 and above" }
];

const accountDetails = [
  { label: "Account Name", value: "NIT Patna CF Account" },
  { label: "Account Number", value: "50433562364" },
  { label: "Bank Name", value: "Indian Bank" },
  { label: "IFSC Code", value: "IDIB000B810" }
];

export default function PayPage() {
  return (
    <div style={{ maxWidth: 900, margin: "2rem auto", padding: "2rem", background: "#fff", borderRadius: "1.5rem", boxShadow: "0 4px 24px rgba(21,101,192,0.08)" }}>
      {/* Highlighted Welcome Section */}
      <section style={{ marginBottom: "2.5rem" }}>
        <div style={{ background: "#b2ebf2", borderRadius: "1rem", padding: "2rem 1rem", textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ background: "#4dd0e1", color: "#b71c1c", fontWeight: 700, fontSize: "2.2rem", display: "inline-block", padding: "0.5rem 2.5rem", borderRadius: "0.5rem", marginBottom: "1.5rem" }}>
            WET-WAR 2025
          </div>
          <div style={{ marginTop: "1.5rem", fontSize: "1.5rem", color: "#294a8d", fontWeight: 600 }}>
            Please Join us at <span style={{ color: "#00bcd4", fontWeight: 700 }}>NIT Patna</span>
          </div>
          <div style={{ fontSize: "1.25rem", color: "#294a8d", fontWeight: 500, margin: "0.5rem 0" }}>
            and experience North India, with
          </div>
          <div style={{ fontSize: "1.35rem", color: "#ffb300", fontWeight: 700 }}>
            delicious food
          </div>
          <div style={{ fontSize: "1.35rem", color: "#b71c1c", fontWeight: 700 }}>
            on the Bank of River Ganga
          </div>
        </div>
      </section>
      {/* Registration Fee Details */}
      <section style={{ marginBottom: "2.5rem" }}>
        <h2 style={{ color: "#b71c1c", fontWeight: 700, fontSize: "2rem", marginBottom: "1rem" }}>
          Registration Fee (Free fooding) + GST (18%)
        </h2>
        <table style={{ width: "100%", marginBottom: "1rem", borderCollapse: "collapse" }}>
          <tbody>
            {registrationFees.map((fee, idx) => (
              <tr key={idx}>
                <td style={{ color: "#234", fontWeight: 500, padding: "0.5rem 0" }}>{fee.label}</td>
                <td style={{ color: "#234", textAlign: "right", padding: "0.5rem 0" }}>{fee.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ fontWeight: 600, color: "#234", marginTop: "1rem", marginBottom: "0.5rem" }}>Sponsors:</div>
        <div style={{ color: "#234", fontSize: "1rem", marginBottom: "1.5rem" }}>
          {sponsors.map((s, idx) => (
            <span key={idx}>
              {s.value} ({s.label}){idx < sponsors.length - 1 ? ", " : ""}
            </span>
          ))}
        </div>
        <div style={{ color: "#b71c1c", fontWeight: 700, fontSize: "1.3rem", margin: "1.5rem 0 0.5rem 0" }}>
          Scan and submit Paper
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "2rem", flexWrap: "wrap" }}>
          <div>
            <div style={{ fontWeight: 600, color: "#234", marginBottom: "0.5rem" }}>Account details:</div>
            <div style={{ color: "#234", fontSize: "1rem" }}>
              {accountDetails.map((item, idx) => (
                <div key={idx}><b>{item.label}:</b> {item.value}</div>
              ))}
            </div>
          </div>
          <img
            src="https://i.imgur.com/4ZQZ4bT.png"
            alt="QR Code"
            width={120}
            height={120}
            style={{ borderRadius: "0.5rem", border: "1px solid #eee" }}
          />
        </div>
      </section>

      {/* Highlighted Text Section */}
      <section style={{ background: "#1565c0", color: "#fff", borderRadius: "1rem", padding: "2rem", marginTop: "2rem" }}>
        <ul style={{ fontSize: "1.15rem", lineHeight: 1.7, margin: 0, paddingLeft: "1.2rem" }}>
          <li>
            All the selected Papers will be published in Conference proceedings (Springer/Elsevier/other Indexed in SCOPUS/SCI/SCIE/ESCI).
          </li>
          <li>
            High quality papers presented in the conference would be published in Indexed Journals (SCOPUS/SCI/SCIE/ESCI) after review.
          </li>
          <li>
            Awards would be provided for Best papers in different Themes for Oral and Poster presentations individually shall be awarded in every sessions
          </li>
        </ul>
      </section>
    </div>
  );
}
