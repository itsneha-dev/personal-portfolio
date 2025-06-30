import React from "react"
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skiils from "./components/Skiils";
import Experience from "./components/Experience";
import Education from "./components/Education";
import StyledStarCanvas from "./components/canvas/star";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
  
    <React.Fragment>
        <Navbar />

    <div className="bg-gray-900 w-full overflow-x-hidden relative min-h-screen scroll-smooth">
      <div className="absolute inset-0 z-0">
        <StyledStarCanvas />
      </div>

      <div>
        <Hero />

        <div
          className="w-full pb-[100px]"
          style={{
      backgroundImage: `
        linear-gradient(39deg, rgba(99,102,241,0.15) 0%, rgba(99,102,241,0) 50%),
        linear-gradient(140deg, rgba(20,184,166,0) 50%, rgba(20,184,166,0.15) 100%)
      `,
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%)',
    }}
        >
          <Skiils />
          <Experience />
        </div>

        <Project />

        <div
          className="w-full pb-[100px]"
        style={{
      backgroundImage: `
        linear-gradient(39deg, rgba(99,102,241,0.15) 0%, rgba(99,102,241,0) 50%),
        linear-gradient(140deg, rgba(20,184,166,0) 50%, rgba(20,184,166,0.15) 100%)
      `,
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%)',
      }}
        >
          <Education />
          <Contact />
        </div>

        <Footer />
      </div>
    </div>
</React.Fragment>
  );
}

export default App;
