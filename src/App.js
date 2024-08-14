import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="app-container">
      <div className="container">
        <Header />
        <Home />
        <About />
        <Work />
        <Contact />
      </div>
    </div>
  );
}

export default App;
