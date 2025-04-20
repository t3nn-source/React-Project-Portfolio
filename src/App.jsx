import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/portfolio";
import Resume from "./pages/Resume";

// App component that sets up the routing for the application
// It uses React Router to define different routes for the application
const App = () => {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100"> 
      <Header />
      <main className="flex-grow-1">
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      </main>
      <Footer />
      </div>
    </Router>
  );
};

export default App;