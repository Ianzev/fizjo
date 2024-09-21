import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Contact from "./pages/Contact.jsx";
import Offers from "./pages/Offers.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/o-nas" element={<AboutUs />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="/oferta" element={<Offers />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
