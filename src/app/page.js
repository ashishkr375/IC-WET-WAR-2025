import Hero from "@/components/Hero";
import About from "@/components/About";
import Image from "next/image";
import Notices from "@/components/Notices";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
   <Hero/>
   <About/>
   <Notices/>
   <Footer/>
   </>
  );
}
