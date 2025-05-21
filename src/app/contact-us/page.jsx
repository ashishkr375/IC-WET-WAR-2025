"use client";
import React, { useState } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/author", label: "Author Section" },
  { href: "/people", label: "Key People" },
  { href: "/register", label: "Registration" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/contact-us", label: "Contact Us" },
];

export default function Page() {
  const [navOpen, setNavOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // You can add actual submission logic here
  };

  return (
    <>
      <Navbar/>
      <div className="h-115">

      </div>
      <Footer />
    </>
  );
}
