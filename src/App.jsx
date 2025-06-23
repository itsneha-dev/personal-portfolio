import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Themes";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Router } from "react-router-dom";
import Hero from "./components/Hero";
import Skiils from "./components/Skiils";
import Experience from "./components/Experience";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Navbar />
        <Hero />
        <Skiils />
        <Experience />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
