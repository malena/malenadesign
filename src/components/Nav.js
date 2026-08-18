import "./Nav.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import favicon from "./../images/logo.svg";
import openIcon from "./../images/hamburger.svg";
import closeIcon from "./../images/hamburger-close.svg";

function Nav() {
  const [isVisible, setIsVisible] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  const handleNavLinkClick = () => {
    if (isVisible) {
      setIsVisible(!isVisible);
    }
  };

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  return (
    <nav className="header header-mobile">
      <section className="header-icon">
        <Link to="/">
          <img src={favicon} alt="logo" />
        </Link>
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
              ? "mobile-container active"
              : "mobile-container not-active"
          }
        >
          <ul className="header-menu-list">
            <li className="header-menu-list-item">
              <Link onClick={handleNavLinkClick} to="/projects">
                Projects
              </Link>
            </li>
            <li className="header-menu-list-item">
              <Link onClick={handleNavLinkClick} to="/about">
                About
              </Link>
            </li>
            <li className="header-menu-list-item">
              <Link onClick={handleNavLinkClick} to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </nav>
  );
}

export default Nav;
