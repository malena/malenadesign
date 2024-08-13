import "./Header.css";
import favicon from "./../images/favicon.svg";

function Header() {
  return (
    <header className="header">
      <section className="home-icon">
        <img src={favicon} alt="logo" />
      </section>
      <section className="header-menu">
        <ul>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Work</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </section>
    </header>
  );
}

export default Header;
