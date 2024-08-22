import "./Header.css";
import favicon from "./../images/favicon.svg";

function Header() {
  return (
    <header className="header">
      <section className="header-icon">
        <a href="/">
          <img src={favicon} alt="logo" />
        </a>
      </section>
      <section className="header-menu">
        <ul className="header-menu-list">
          <li className="header-menu-list-item">
            <a href="#About">About</a>
          </li>
          <li className="header-menu-list-item">
            <a href="#Work">Work</a>
          </li>
          <li className="header-menu-list-item">
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </section>
    </header>
  );
}

export default Header;
