import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cases from "./pages/CaseStudies";
import Mibunker from "./pages/Mibunker";
import UCMaximus from "./pages/UCMaximus";
import Starmaker from "./pages/Starmaker";

function App() {
  return (
    <div className="app-container">
      <Nav />
      <div className="content-container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cases" element={<Cases />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mibunker" element={<Mibunker />} />
            <Route path="/ucmaximus" element={<UCMaximus />} />
            <Route path="/starmaker" element={<Starmaker />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
