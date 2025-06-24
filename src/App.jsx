import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Themes";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Router } from "react-router-dom";
import Hero from "./components/Hero";
import Skiils from "./components/Skiils";
import Experience from "./components/Experience";
import Education from "./components/Education";
import StyledStarCanvas from "./components/canvas/star";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
  <BrowserRouter>
    <Navbar />

    <div className="bg-gray-900 w-full overflow-x-hidden relative min-h-screen">
      <div className="absolute inset-0 z-0">
        <StyledStarCanvas />
      </div>
      <div>  
      <Hero />
      <div
        className=" w-full pb-[100px]"
        style={{
          backgroundImage: `
            linear-gradient(39deg, rgba(204, 0, 187, 0.2) 0%, rgba(204, 0, 187, 0) 50%),
            linear-gradient(140deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.2) 100%)
          `,
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%)',
        }}
      >
        <Skiils />
        <Experience />
      </div>
      <Education />
      </div>  
    </div>
  </BrowserRouter>
</ThemeProvider>

  );
}

export default App;
