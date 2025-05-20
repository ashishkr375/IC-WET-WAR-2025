import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Image from "next/image";
import Notices from "@/components/Notices";

export default function Home() {
  return (
    <>
   <Navbar/>
   <Hero/>
   <About/>
   <Notices/>
   </>
  );
}
