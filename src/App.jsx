import React, { useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Goals from "./components/Goals";
import Contact from "./components/Contact";

// Import Locomotive Scroll
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

const App = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        multiplier: 1, // scroll speed
      });
    }
  }, []);

  return (
    // Scroll container for Locomotive Scroll
    <div ref={scrollRef} data-scroll-container>
      <main className="text-gray-400 bg-gray-900 body-font">
        {/* Navbar */}
        <section data-scroll-section>
          <Navbar />
        </section>

        {/* About Section */}
        <section data-scroll-section>
          <About />
        </section>

        {/* Projects Section */}
        <section data-scroll-section>
          <Projects />
        </section>

        {/* Skills Section */}
        <section data-scroll-section>
          <Skills />
        </section>

        {/* Goals Section */}
        <section data-scroll-section>
          <Goals />
        </section>

        {/* Contact Section */}
        <section data-scroll-section>
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default App;
