import "./Home.css";
import logo from "./../logo.svg";

function Home() {
  return (
    <section className="home">
      <div className="home-content">
        <img className="home-logo" src={logo} alt="logo" />
        <h1 className="home-title">
          UX &amp; Design Leader &#9679; Strategist &#9679; Team Builder
        </h1>
        <p className="home-description">
          I create visually striking and engaging experiences through innovative
          UI and UX strategy and design.
        </p>
      </div>
    </section>
  );
}

export default Home;
