import React, { useState, useEffect } from "react";
import hamburgerNav from "../../images/hamburger-menu.svg";
import { RiHome2Line } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { HiOutlineLogout } from "react-icons/hi";
import { Link } from "react-router-dom";

import "./MainNav.css";

export const MainNav = () => {
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

  //still needs profile and logout routing maybe use link tags?
  return (
    <div className="main-nav-container">
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
              <Link to="/employee/home">
                <RiHome2Line />
              </Link>
            </li>
            <li className="items">
              <Link to="/employee/profile">
                <CgProfile />
              </Link>
            </li>
            <li className="items">
              <Link to="/login">
                <HiOutlineLogout />
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
};
