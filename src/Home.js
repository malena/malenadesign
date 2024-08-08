import logo from "./logo.svg";

function Home() {
  return (
    <div className="home">
      <img src={logo} className="home-logo" alt="logo" />
      <h1 className="home-title">
        UX &amp; Design Leader Strategist Team Builder
      </h1>
      <p className="home-description">
        I create create visually striking and engaging experiences through
        innovative UI and UX strategy and design.
      </p>
    </div>
  );
}

export default Home;
