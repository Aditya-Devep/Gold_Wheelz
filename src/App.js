import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/scrolltop";
import Rform from "./Components/Rform";
import Showdetails from "./Components/Showdetails";
const App = () => {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="form" element={<Rform />} />
          <Route path="showdetails" element={<Showdetails />} />
          
        </Routes>
        <Footer />
      </Router>

     
    </>
  );
};

export default App;
