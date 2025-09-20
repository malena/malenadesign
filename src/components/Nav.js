import "./Nav.css";
import React, { useState } from "react";
import favicon from "./../images/logo.svg";
import openIcon from "./../images/hamburger.svg";
import closeIcon from "./../images/hamburger-close.svg";

function Nav() {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <nav className="header header-mobile">
      <section className="header-icon">
        <a href="/">
          <img src={favicon} alt="logo" />
        </a>
      </section>
      <section className="header-menu">
        <button className="hamburger-menu" onClick={handleClick}>
          {isVisible ? (
            <img src={closeIcon} alt="logo" />
          ) : (
            <img src={openIcon} alt="logo" />
          )}
        </button>
        <div
          className={
            isVisible
              ? "header-menu-container active"
              : "header-menu-container not-active"
          }
        >
          <ul className="header-menu-list">
            <li className="header-menu-list-item">
              <a className="case-link" href="./cases">
                Case Studies
                <ul className="header-dropdown-menu">
                  <li>
                    <a href="./mibunker">miBunker</a>
                  </li>
                  <li>
                    <a href="./ucmaximus">UC Maximus</a>
                  </li>
                  <li>
                    <a href="./starmaker">Starmaker</a>
                  </li>
                </ul>
              </a>
            </li>
            <li className="header-menu-list-item">
              <a href="./about">About</a>
            </li>
            <li className="header-menu-list-item">
              <a href="./contact">Contact</a>
            </li>
          </ul>
        </div>
      </section>
    </nav>
  );
}

export default Nav;
