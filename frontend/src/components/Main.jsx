import React from "react";
import Register from "./register/Register";
import Navbar from "./navbar/Navbar";
import Admin from "./admin/Admin";
import About from "./about/About";
import Resources from "./resources/Resources";
import Contact from "./contact/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Main() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<About />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/resources" element={<Resources />} />
        <Route exact path="/admin" element={<Admin />} />
        <Route exact path="/contact" element={<Contact />} />

        {/* <Register />
        <Resources />
        <Admin />
        <Contact /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
