import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Archiving from "@/components/sections/Archiving";
import Projects from "@/components/sections/Projects";
import Career from "@/components/sections/Career";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Archiving />
        <Projects />
        <Career />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
