import Navbar from "@/components/layout/Navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Services from "@/sections/Services";
import Portfolio from "@/sections/Portfolio";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </main>
    </>
  );
}