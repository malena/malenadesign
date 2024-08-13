import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Home />
      <About />
    </div>
  );
}

export default App;
