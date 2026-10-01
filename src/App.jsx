import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import HowItWorks from "./pages/HowItWorks";
import Solutions from "./pages/Solutions";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Demo from "./pages/Demo";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/demo" element={<Demo />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;