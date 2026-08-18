import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Leadership from "./pages/Leadership";
import Contact from "./pages/Contact";
import Cases from "./pages/CaseStudies";
import Projects from "./pages/Projects";
import Mibunker from "./pages/Mibunker";
import UCMaximus from "./pages/UCMaximus";
import Starmaker from "./pages/Starmaker";
import NoMatch from "./components/NoMatch";

function App() {
  return (
    <div className="app-container">
      <HashRouter>
        <ScrollToTop>
          <Nav />
          <div className="content-container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cases" element={<Cases />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/leadership" element={<Leadership />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/mibunker" element={<Mibunker />} />
              <Route path="/ucmaximus" element={<UCMaximus />} />
              <Route path="/starmaker" element={<Starmaker />} />
              <Route path="*" element={<NoMatch />} />
            </Routes>
          </div>
        </ScrollToTop>
      </HashRouter>
      <Footer />
    </div>
  );
}

export default App;
