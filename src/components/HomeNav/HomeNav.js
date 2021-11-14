import React, { useState, useEffect } from "react";
import hamburgerNav from "../../images/hamburger-menu.svg";

import "./HomeNav.css";

export const HomeNav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <div className="nav-container">
      <div className="brand-container">
        <h1 className="brand-name">TimeBase</h1>
        <img
          src={hamburgerNav}
          alt="navigation"
          className="nav-btn"
          onClick={toggleNav}
        />
      </div>
      <nav>
        {(toggleMenu || screenWidth > 600) && (
          <ul className="list">
            <li className="items">
              <a href="/login">Log In</a>
            </li>
            <li className="items">
              <a href="/login">Sign up</a>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
};
