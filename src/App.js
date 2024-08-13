import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Home />
      <About />
      <Work />
    </div>
  );
}

export default App;
