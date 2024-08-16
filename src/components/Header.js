import "./Header.css";
// import favicon from "./../images/favicon.svg";

function Header() {
  return (
    <header className="header">
      {/*  <section className="home-icon">
        <a href="/">
          <img src={favicon} alt="logo" />
        </a>
      </section> */}
      <section className="header-menu">
        <ul>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Work">Work</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </section>
    </header>
  );
}

export default Header;
