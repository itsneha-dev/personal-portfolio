import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Themes";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Router } from "react-router-dom";
import Hero from "./components/Hero";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Navbar />
        <Hero />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
