import React from "react";
import { useRef } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Skills from "./components/Skills";

export default function App() {
  const pastWorkRef = useRef(null);
  const skillsRef = useRef(null);
  const homeRef = useRef(null);

  return (
    <main className="text-gray-400 bg-gray-900 body-font relative">
      <Navbar
        homeRef={homeRef}
        pastWorkRef={pastWorkRef}
        skillsRef={skillsRef}
      />
      <About homeRef={homeRef} />
      <Projects pastWorkRef={pastWorkRef} />
      <Skills skillsRef={skillsRef} />
      <Contact />
      <Resume />
    </main>
  );
}
