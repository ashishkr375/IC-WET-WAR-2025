import Hero from "@/components/Hero";
import About from "@/components/About";
import Image from "next/image";
import Notices from "@/components/Notices";
import Footer from "@/components/Footer";
import Key from "../components/Key"

export default function Home() {
  return (
    <>
   <Hero/>
   <About/>
   <Key/>
   <Notices/>
   <Footer/>
   </>
  );
}
