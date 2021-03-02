import React from "react";
import ReactDOM from "react-dom";
import "./App.scss";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Index from "./Components/ContactForm";
import Domain from "./Components/Domains/Domain";
import About from "./Components/AboutUs/About";
import Bottom from "./Components/Bottom/Bottom";
import Contact from "./Components/ContactForm";
import ScrollElement from "./Components/ScrollLink/ScrollElement";
import Footer from "./Components/Footer";
import { useState } from "react";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="App">
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Contact isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className=" wrapper background">
        <ScrollElement name="home">
          <Home isOpen={isOpen} setIsOpen={setIsOpen} />
        </ScrollElement>
      </div>
      <ScrollElement name="about">
        <About />
      </ScrollElement>
      <ScrollElement name="domains">
        <Domain />
      </ScrollElement>
      <ScrollElement name="footer">
        <Footer />
      </ScrollElement>
    </div>
  );
}

export default App;
